import { Resend } from "resend";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { ContactEnquiryEmail } from "@/emails/contact-enquiry";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL_TO ?? "info@clearair.co.nz";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Clear Air Website <website@weblaunch.co.nz>";
const CONTROL_CHARACTERS = /[\r\n\0]/;

function value(form: FormData, key: string) {
  const result = form.get(key);
  return typeof result === "string" ? result.trim() : "";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ message: "This form can only be submitted from the Clear Air website." }, { status: 403 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ message: "The form submission could not be read." }, { status: 400 });
  }

  const name = value(form, "name");
  const email = value(form, "email");
  const message = value(form, "message");
  const consent = value(form, "consent");
  const company = value(form, "company");
  const providedSubmissionId = value(form, "submissionId");

  if (company) {
    return Response.json({ message: "Thanks — your message has been sent to the Clear Air team." });
  }

  const validName = name.length >= 2 && name.length <= 120 && !CONTROL_CHARACTERS.test(name);
  const validEmail = email.length <= 254 && /^\S+@\S+\.\S+$/.test(email) && !CONTROL_CHARACTERS.test(email);
  const validMessage = message.length >= 10 && message.length <= 5000 && !message.includes("\0");

  if (!validName || !validEmail || !validMessage || consent !== "on") {
    return Response.json({ message: "Please complete every required field with valid details." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form email delivery is unavailable because RESEND_API_KEY is not configured.");
    return Response.json(
      { message: "Email delivery is temporarily unavailable. Please call 027 775 5005 or email info@clearair.co.nz." },
      { status: 503 },
    );
  }

  const submissionId = /^[0-9a-f-]{36}$/i.test(providedSubmissionId)
    ? providedSubmissionId
    : crypto.randomUUID();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.batch.send(
      [
        {
          from: FROM_EMAIL,
          to: CONTACT_EMAIL,
          replyTo: email,
          subject: `New website enquiry from ${name}`,
          react: ContactEnquiryEmail({ email, message, name }),
          tags: [
            { name: "source", value: "website" },
            { name: "type", value: "contact_notification" },
          ],
        },
        {
          from: FROM_EMAIL,
          to: email,
          replyTo: CONTACT_EMAIL,
          subject: "We’ve received your message | Clear Air",
          react: ContactConfirmationEmail({ message, name }),
          tags: [
            { name: "source", value: "website" },
            { name: "type", value: "contact_confirmation" },
          ],
        },
      ],
      { idempotencyKey: `clear-air-contact-${submissionId}`, batchValidation: "strict" },
    );

    if (error) {
      console.error("Contact form email delivery failed.", {
        errorName: error.name,
        statusCode: error.statusCode,
      });
      return Response.json(
        { message: "We couldn’t send your message right now. Please call 027 775 5005 or email info@clearair.co.nz." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form email delivery failed unexpectedly.", error instanceof Error ? error.message : "Unknown error");
    return Response.json(
      { message: "We couldn’t send your message right now. Please call 027 775 5005 or email info@clearair.co.nz." },
      { status: 502 },
    );
  }

  return Response.json({
    message: "Thanks — your message has been sent. We’ve emailed you a confirmation and the Clear Air team will be in touch.",
  });
}
