import type { Metadata } from "next";
import Image from "next/image";
import { Certifications, ProcessSection, ValuesSection } from "../_components/sections";
import { Hero } from "../_components/hero";
import { Reveal } from "../_components/reveal";
import { ButtonLink, Eyebrow } from "../_components/ui";
import { team } from "../_data/site";

export const metadata: Metadata = { title: "About Clear Air", description: "Meet the family-led Clear Air team and learn about more than 25 years of asbestos and hazardous materials experience." };

export default function AboutPage() {
  return <main id="content"><Hero eyebrow="Start With Clear Guidance" title="BUILT ON EXPERIENCE, TRUST & FAMILY VALUES" text="Clear Air is built on over 25 years of experience, strong family values, and a practical approach to safe, responsible site work." image="/assets/live/attachment-6.png" />
    <section className="section story-section"><Reveal className="section-shell"><Eyebrow>ABOUT US</Eyebrow><h2>BUILT ON EXPERIENCE, TRUST & FAMILY VALUES</h2><p>Clear Air has been part of the Wellington region for over 25 years, helping clients manage asbestos, contaminated soil, hazardous materials, and wider site work safely.</p><p>The company is led by Jason Nicol, who was born and raised in Lower Hutt and started his career as a carpenter. After joining Clear Air as a logistics manager, Jason worked through the business as project manager, general manager, and now owner.</p><p>That hands-on journey has shaped the way Clear Air operates today, practical, people-focused, and built around clear communication, integrity, respect, and doing the job properly.</p><ButtonLink href="/contact-us">CONTACT US</ButtonLink></Reveal></section>
    <section className="section team-section"><div className="section-shell"><Reveal><Eyebrow>MEET US</Eyebrow><h2>OUR TEAM</h2><p>Behind every project is a practical, experienced team that understands the importance of safety, communication, and doing things properly. Led by Jason Nicol, Clear Air’s management and senior site team help guide each job from planning through to completion, giving clients clear support at every stage.</p></Reveal><div className="team-grid">{team.map(([name, role], i) => <Reveal className="team-card" key={name}><Image src={`/assets/team/team-${i}.jpg`} alt={name} width={1237} height={1542} /><h3>{name}</h3><p>{role}</p></Reveal>)}</div></div></section>
    <ValuesSection /><Certifications /><ProcessSection /></main>;
}
