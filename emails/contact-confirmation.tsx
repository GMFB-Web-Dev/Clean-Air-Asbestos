import { Button, Heading, Link, Section, Text } from "react-email";

import { ClearAirEmailShell } from "./components/clear-air-email-shell";

export interface ContactConfirmationEmailProps {
  message: string;
  name: string;
}

function firstName(name: string) {
  return name.split(/\s+/)[0] || name;
}

export function ContactConfirmationEmail({ message, name }: ContactConfirmationEmailProps) {
  return (
    <ClearAirEmailShell
      heading={`Thanks, ${firstName(name)}.`}
      preview="We’ve received your message and the Clear Air team will be in touch."
    >
      <Text className="m-0 mb-4 text-[16px] leading-[25px] text-brand-body">
        We’ve received your enquiry. A member of the Clear Air team will review it and get in touch using the details you provided.
      </Text>
      <Text className="m-0 mb-7 text-[16px] leading-[25px] text-brand-body">
        If your enquiry is urgent, call us directly on{" "}
        <Link className="font-semibold text-brand-ink underline" href="tel:+64277755005">
          027 775 5005
        </Link>
        .
      </Text>

      <Heading as="h2" className="m-0 mb-3 text-[18px] font-bold leading-[24px] text-brand-ink">
        Your message
      </Heading>
      <Section className="border-none border-l-4 border-solid border-l-brand-red bg-brand-soft px-5 py-4">
        <Text className="m-0 whitespace-pre-wrap break-words text-[15px] leading-[24px] text-brand-body">
          {message}
        </Text>
      </Section>

      <Button
        href="https://clearair.co.nz/"
        className="mt-7 box-border inline-block border border-solid border-brand-red bg-white px-6 py-3 text-center text-[15px] font-bold text-brand-ink no-underline"
      >
        Visit the Clear Air website
      </Button>

      <Text className="m-0 mt-7 text-[13px] leading-[21px] text-brand-muted">
        This acknowledgement was sent because your email address was entered in the Clear Air website contact form.
      </Text>
    </ClearAirEmailShell>
  );
}

ContactConfirmationEmail.PreviewProps = {
  message: "I would like to arrange an asbestos assessment for a residential property in Wellington.",
  name: "Alex Morgan",
} satisfies ContactConfirmationEmailProps;

export default ContactConfirmationEmail;
