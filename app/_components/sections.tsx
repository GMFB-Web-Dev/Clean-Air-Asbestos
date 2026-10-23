import Image from "next/image";
import Link from "next/link";
import { areas, processSteps, serviceCards, values } from "../_data/site";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { ActionArrow, ButtonLink, Eyebrow } from "./ui";

export function ServicesGrid({ limit }: { limit?: number }) {
  return (
    <div className="service-grid">
      {serviceCards.slice(0, limit).map(([slug, title, text]) => (
        <Reveal className="service-card" key={slug}>
          <h3>{title}</h3><p>{text}</p>
          <Link href={`/${slug}`}><span className="action-label">LEARN MORE</span><ActionArrow /></Link>
        </Reveal>
      ))}
    </div>
  );
}

export function ValuesSection({ includeIntro = true }: { includeIntro?: boolean }) {
  return (
    <section className="section values-section">
      <Reveal className="section-shell">
        <div className="split-heading">
          <div><Eyebrow>WHY CHOOSE US</Eyebrow><h2>WHAT CLEAR AIR<br />STANDS FOR</h2></div>
          {includeIntro && <p>Clear Air’s values reflect the way the team works on every project, with clear communication, genuine care, and a strong focus on doing the job safely and properly.</p>}
        </div>
        <div className="values-grid">
          {values.map(([title, text, icon]) => <div className="value" key={title}><Image src={icon} alt="" width={62} height={55} /><h3>{title}</h3><p>{text}</p></div>)}
        </div>
        <ButtonLink href="/contact-us">CONTACT</ButtonLink>
      </Reveal>
    </section>
  );
}

export function Certifications() {
  const logos = [
    ["/assets/live/6fa32d81a385ddb246cfabbc5abf20ac6476bae5-scaled.png", "Tōtika"],
    ["/assets/live/d9b1fcc242ed9d1d1c9a15d5c4a11fbb06bc9763.jpg", "Site Safe"],
    ["/assets/live/b451ef3e85283c527f97018708f3af0a25581f0a.png", "NZDAA"],
    ["/assets/live/af3fc14472542ec1921c5db471be91e457c06f39.png", "SiteWise"],
    ["/assets/live/33ec1f055799b4d5a8bf2907e0a16f801b4e6945.png", "FAMANZ"],
  ] as const;
  return (
    <section className="section certifications"><Reveal className="section-shell"><Eyebrow>OUR CERTIFICATIONS</Eyebrow><h2>CERTIFIED TO DELIVER</h2><div className="cert-grid">{logos.map(([src, alt]) => <Image key={alt} src={src} alt={alt} width={280} height={130} />)}</div></Reveal></section>
  );
}

export function ProcessSection() {
  return (
    <section className="section process-section"><Reveal className="section-shell process-layout"><div><Eyebrow>OUR PROCESS</Eyebrow><h2>HOW WE GUIDE THE<br />PROCESS</h2></div><div className="process-grid">{processSteps.map(([title, text], index) => <div className="process-step" key={title}><strong>{index + 1}</strong><h3>{title}</h3><p>{text}</p></div>)}</div></Reveal></section>
  );
}

export function ContactSection() {
  return (
    <section className="section contact-section"><div className="section-shell contact-layout"><Reveal><Eyebrow>CONTACT US</Eyebrow><h2>GET CLEAR ADVICE FOR<br />YOUR SITE</h2><ContactForm /></Reveal><Reveal className="map-wrap"><iframe loading="lazy" src="https://maps.google.com/maps?q=Wellington&t=m&z=12&output=embed&iwloc=near" title="Wellington" aria-label="Wellington" /></Reveal></div></section>
  );
}

export function AreasSection() {
  return (
    <section className="section areas-section"><Reveal className="section-shell areas-layout"><div className="area-list">{areas.map((area) => <span key={area}><Image src="/assets/live/Pin.svg" alt="" width={28} height={28} />{area}</span>)}</div><div><Eyebrow>LOCAL SUPPORT FOR SAFER SITES</Eyebrow><h2>AREAS WE SERVICE</h2><p>Clear Air mainly works across the Wellington region, while also supporting nearby areas for asbestos removal, contaminated soil, and wider hazardous material services.</p></div></Reveal></section>
  );
}
