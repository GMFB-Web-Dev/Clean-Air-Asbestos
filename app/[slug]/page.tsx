import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AreasSection, ProcessSection } from "../_components/sections";
import { Hero } from "../_components/hero";
import { Reveal } from "../_components/reveal";
import { ButtonLink, Eyebrow } from "../_components/ui";
import { services } from "../_data/site";

export const instant = false;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return { title: service.title, description: service.heroText };
}

const classA = ["Friable asbestos materials", "Higher-risk asbestos removal", "Containment and controlled work areas", "Strict safety procedures", "WorkSafe notification where required", "Independent assessor guidance where needed"];
const classB = ["Non-friable asbestos materials", "Asbestos in building products", "Residential and commercial sites", "Industrial and wider project works", "Safe removal and disposal", "WorkSafe notification where required"];

function CoverList({ items, cubeIcons = false }: { items: readonly string[]; cubeIcons?: boolean }) {
  return <ul className="cover-list">{items.map((item) => <li key={item}>{cubeIcons ? <span className="cover-cube"><Image src="/assets/live/Cube.svg" alt="" width={30} height={30} /></span> : <i>✓</i>}{item}</li>)}</ul>;
}

export default async function ServicePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const heroTitle = slug === "contaminated-soil"
    ? <><span className="hero-title-line">ASBESTOS</span><span className="hero-title-line">CONTAMINATED SOIL</span><span className="hero-title-line">SUPPORT SERVICES<em>.</em></span></>
    : service.heroTitle;

  const isMould = slug === "mould-remediation";
  const isMeth = slug === "methamphetamine-decontamination";
  const isLightDemolition = slug === "light-demolition";
  const isOversight = slug === "oversight-management";
  const usesSplitDetail = isMeth || isLightDemolition || isOversight;
  const accreditationSection = isMould ? <section className="section mould-accreditation"><Reveal className="section-shell mould-accreditation-grid"><h2>IMPORTANT<br />ACCREDITATION<br />NOTE</h2><p>Clear Air mainly works across the Wellington region, while also supporting nearby areas for asbestos removal, contaminated soil, and wider hazardous material services.</p></Reveal></section> : null;
  const detailSection = isMould
    ? <section className="section service-detail mould-detail"><Reveal className="section-shell"><Eyebrow>{service.detailEyebrow}</Eyebrow><div className="mould-detail-grid"><div className="mould-detail-copy">{service.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><h2>{service.detailTitle}</h2></div></Reveal></section>
    : usesSplitDetail
      ? <section className="section service-detail split-service-detail"><Reveal className="section-shell"><Eyebrow>{service.detailEyebrow}</Eyebrow><div className="split-service-detail-grid"><h2>{service.detailTitle}</h2><div className="split-service-detail-copy">{service.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></Reveal></section>
    : <section className="section service-detail"><Reveal className="section-shell"><Eyebrow>{service.detailEyebrow}</Eyebrow><h2>{service.detailTitle}</h2>{service.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{slug !== "contaminated-soil" && <ButtonLink href="/contact-us">CONTACT US</ButtonLink>}</Reveal></section>;

  return <main id="content" className={`service-page service-page-${slug}`}>
    <Hero eyebrow={service.heroEyebrow} title={heroTitle} text={service.heroText} image={service.heroImage} punctuation={slug !== "contaminated-soil"} />
    <section className="section service-intro"><Reveal className="section-shell"><Eyebrow>{service.introEyebrow}</Eyebrow><h2>{service.introTitle}</h2>{service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ButtonLink href="/contact-us">CONTACT US</ButtonLink></Reveal></section>
    {accreditationSection}
    {(slug === "contaminated-soil" || isMould || usesSplitDetail) && detailSection}
    {slug === "class-a-b-removal" ? <section className="section class-section"><div className="section-shell"><Reveal><Eyebrow>LICENSED ASBESTOS REMOVAL</Eyebrow><h2>CLASS A & CLASS B SUPPORT</h2></Reveal><div className="class-grid"><Reveal className="class-card"><h3>CLASS A & B ASBESTOS REMOVAL</h3><p>Class A asbestos removal is for higher-risk friable asbestos materials that can release fibres more easily. This work needs careful planning, strict controls, and the right licensed team to manage the removal safely.</p><h4>COVERS</h4><CoverList items={classA} /></Reveal><Reveal className="class-card"><h3>CLASS B ASBESTOS REMOVAL</h3><p>Class B asbestos removal is for non-friable asbestos materials that are often found in building products and site materials. These materials still need to be handled carefully and removed by a trained, licensed team.</p><h4>COVERS</h4><CoverList items={classB} /></Reveal></div></div></section> : <section className="section covers-section"><Reveal className="section-shell"><Eyebrow>{service.coversTitle}</Eyebrow><h2>WHAT THIS SERVICE COVERS</h2><CoverList items={service.covers} cubeIcons /><ButtonLink href="/contact-us">CONTACT US</ButtonLink></Reveal></section>}
    {slug !== "contaminated-soil" && !isMould && !usesSplitDetail && detailSection}
    <ProcessSection /><AreasSection />
  </main>;
}
