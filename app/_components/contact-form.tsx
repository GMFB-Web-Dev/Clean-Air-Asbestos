"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("loading");
    setMessage("");
    const response = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
    const payload = await response.json().catch(() => ({ message: "Unable to submit the form." }));
    setMessage(payload.message);
    setState(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>NAME<input name="name" placeholder="Name" required minLength={2} /></label>
      <label>EMAIL<input name="email" type="email" placeholder="Enter your email" required /></label>
      <label>MESSAGE<textarea name="message" placeholder="Type your message here..." required minLength={10} /></label>
      <label className="consent"><input name="consent" type="checkbox" required /> I AGREE TO THE TERMS AND CONDITIONS</label>
      <button className="button-link outline" type="submit" disabled={state === "loading"}>{state === "loading" ? "SENDING..." : "SUBMIT"}</button>
      {message && <p className={`form-message ${state}`} role="status">{message}</p>}
    </form>
  );
}
