function value(form: FormData, key: string) {
  const result = form.get(key);
  return typeof result === "string" ? result.trim() : "";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = value(form, "name");
  const email = value(form, "email");
  const message = value(form, "message");
  const consent = value(form, "consent");

  if (name.length < 2 || message.length < 10 || !/^\S+@\S+\.\S+$/.test(email) || !consent) {
    return Response.json({ message: "Please complete every required field with valid details." }, { status: 400 });
  }

  return Response.json({ message: "Your message is ready, but email delivery has not been configured. Please call 027 775 5005 or email info@clearair.co.nz." }, { status: 503 });
}
