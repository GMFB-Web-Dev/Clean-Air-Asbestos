import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../_components/contact-form";
import { Hero } from "../_components/hero";
import { Reveal } from "../_components/reveal";
import { Eyebrow } from "../_components/ui";

export const metadata: Metadata = { title: "Contact Clear Air", description: "Contact Clear Air for practical asbestos removal and hazardous-material guidance across Wellington." };

export default function ContactPage() {
  return <main id="content"><Hero eyebrow="Start With Clear Guidance" title="PLAN YOUR NEXT STEP WITH CONFIDENCE" text="Get in touch with the Clear Air team to discuss your site, ask questions, or arrange the next step. We’ll help you understand what may be required and guide you through the process with clear, practical advice." image="/assets/live/attachment-5.png" />
    <section className="section contact-page"><Reveal className="section-shell contact-page-content"><Eyebrow>CONTACT US</Eyebrow><h2>SAFE GUIDANCE STARTS HERE</h2><div className="contact-details"><div><span className="contact-detail-icon"><Image src="/assets/live/Email.svg" alt="" width={35} height={35} /></span><b>Email</b><a href="mailto:info@clearair.co.nz">info@clearair.co.nz</a></div><div><span className="contact-detail-icon"><Image src="/assets/live/Phone.svg" alt="" width={35} height={35} /></span><b>Phone</b><a href="tel:0277755005">027 775 5005</a></div><div><span className="contact-detail-icon"><Image src="/assets/live/Pin.svg" alt="" width={35} height={35} /></span><b>AREA</b><span>Wellington Region</span></div></div><ContactForm /></Reveal></section>
    <section className="contact-map-section"><Reveal className="section-shell contact-map-wide"><iframe loading="lazy" src="https://maps.google.com/maps?q=Wellington&t=m&z=11&output=embed&iwloc=near" title="Wellington" aria-label="Wellington" /></Reveal></section></main>;
}
