import Image from "next/image";
import { Certifications, ContactSection, ProcessSection, ServicesGrid, ValuesSection } from "./_components/sections";
import { Hero } from "./_components/hero";
import { Reveal } from "./_components/reveal";
import { ButtonLink, Eyebrow } from "./_components/ui";

export default function HomePage() {
  return (
    <main id="content">
      <Hero home eyebrow="WELLINGTON’S TRUSTED EXPERTS" title="ASBESTOS REMOVAL SERVICES" text="Affordable and reliable Class A and B asbestos removalists" image="/assets/live/d4ee61d9023242a4980669ce804cb7d9b82a583c.png" />
      <section className="section about-home"><Reveal className="section-shell"><Eyebrow>ABOUT US</Eyebrow><h2>A FAMILY BUSINESS FOCUSED ON PEOPLE</h2><p>Clear Air has been helping clients across Wellington and the wider region manage asbestos and hazardous materials safely for over 25 years. As a family-orientated team, we focus on clear communication, careful planning, and making the process easier for clients to understand from the first enquiry through to completion. With practical experience across residential, commercial, and regulated site work, Clear Air is trusted to get the job done properly, safely, and responsibly.</p><div className="experience-grid"><div><span className="experience-icon"><Image src="/assets/live/Cube.svg" alt="" width={30} height={30} /></span><h3>25 + YEARS OF EXPERIENCE</h3><p>Practical knowledge built across residential, commercial, and regulated site work.</p></div><div><span className="experience-icon"><Image src="/assets/live/Cube.svg" alt="" width={30} height={30} /></span><h3>A TEAM BUILT ON TRUST</h3><p>Led by Jason Nicol, Clear Air values communication, integrity, respect, and responsibility in every job.</p></div></div><ButtonLink href="/about-us">ABOUT US</ButtonLink></Reveal></section>
      <section className="section services-home"><div className="section-shell"><Reveal><Eyebrow>OUR SERVICES</Eyebrow><h2>HELPING YOU MANAGE RISK THE RIGHT WAY</h2></Reveal><ServicesGrid homeSummary /><ButtonLink href="/services">VIEW ALL SERVICES</ButtonLink></div></section>
      <ValuesSection /><Certifications /><ProcessSection /><ContactSection />
    </main>
  );
}
