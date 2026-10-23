import { ButtonLink, Eyebrow } from "./ui";

type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
  home?: boolean;
  primaryHref?: string;
  primaryLabel?: string;
};

export function Hero({ eyebrow, title, text, image, home = false, primaryHref = "/services", primaryLabel = "SERVICES" }: HeroProps) {
  return (
    <section className={`hero ${home ? "hero-home" : "hero-inner"}`} style={{ "--hero-image": `url(${image})` } as React.CSSProperties}>
      <div className="hero-shade" />
      <div className="hero-content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}<em>.</em></h1>
        <p>{text}</p>
        <div className="hero-actions">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          <ButtonLink href={home ? "/contact-us" : "/about-us"}>{home ? "CONTACT US" : "ABOUT US"}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
