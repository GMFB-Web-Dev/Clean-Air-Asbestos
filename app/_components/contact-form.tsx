"use client";

import { useRef, useState, type FormEvent } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const submissionId = useRef<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("loading");
    setMessage("");
    submissionId.current ??= crypto.randomUUID();

    const body = new FormData(form);
    body.set("submissionId", submissionId.current);

    try {
      const response = await fetch("/api/contact", { method: "POST", body });
      const payload = await response.json().catch(() => ({ message: "Unable to submit the form." }));
      setMessage(payload.message);
      setState(response.ok ? "success" : "error");
      if (response.ok) {
        form.reset();
        submissionId.current = null;
      }
    } catch {
      setMessage("Unable to submit the form. Please check your connection and try again.");
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>NAME<input name="name" placeholder="Name" required minLength={2} maxLength={120} autoComplete="name" /></label>
      <label>EMAIL<input name="email" type="email" placeholder="Enter your email" required maxLength={254} autoComplete="email" /></label>
      <label>MESSAGE<textarea name="message" placeholder="Type your message here..." required minLength={10} maxLength={5000} /></label>
      <div className="contact-form-trap" aria-hidden="true">
        <label>COMPANY<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="consent"><input name="consent" type="checkbox" required /> I AGREE TO THE TERMS AND CONDITIONS</label>
      <button className="button-link outline" type="submit" disabled={state === "loading"}>{state === "loading" ? "SENDING..." : "SUBMIT"}</button>
      {message && <p className={`form-message ${state}`} role="status" aria-live="polite">{message}</p>}
    </form>
  );
}
