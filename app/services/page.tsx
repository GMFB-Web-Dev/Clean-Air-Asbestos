import type { Metadata } from "next";
import { ContactSection, ProcessSection, ServicesGrid } from "../_components/sections";
import { Hero } from "../_components/hero";
import { Reveal } from "../_components/reveal";
import { Eyebrow } from "../_components/ui";

export const metadata: Metadata = { title: "Services", description: "Specialist asbestos removal, contaminated soil, mould remediation and site support services across Wellington." };

export default function ServicesPage() {
  return <main id="content"><Hero eyebrow="Start With Clear Guidance" title="SPECIALIST SERVICES FOR COMPLEX WORK" text="Clear Air provides practical support for asbestos removal, contaminated soil, hazardous materials, and wider site works, helping clients manage complex projects safely and clearly from start to finish." image="/assets/live/attachment-7.png" primaryHref="/contact-us" primaryLabel="CONTACT US" /><section className="section services-page"><div className="section-shell"><Reveal><Eyebrow>OUR SERVICES</Eyebrow><h2>HELPING YOU MANAGE RISK THE RIGHT WAY</h2></Reveal><ServicesGrid /></div></section><ProcessSection /><ContactSection /></main>;
}
