import Image from "next/image";
import Link from "next/link";

const logos = [
  ["/assets/live/6fa32d81a385ddb246cfabbc5abf20ac6476bae5-scaled.png", "Tōtika"],
  ["/assets/live/d9b1fcc242ed9d1d1c9a15d5c4a11fbb06bc9763.jpg", "Site Safe"],
  ["/assets/live/b451ef3e85283c527f97018708f3af0a25581f0a.png", "NZDAA"],
  ["/assets/live/af3fc14472542ec1921c5db471be91e457c06f39.png", "SiteWise"],
  ["/assets/live/33ec1f055799b4d5a8bf2907e0a16f801b4e6945.png", "FAMANZ"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-brand" href="/">
          <Image src="/assets/live/77d6fce3da5a12e3e90dd822f2062a717969d3e2.png" alt="Clear Air Asbestos Management Ltd" width={391} height={204} />
        </Link>
        <nav aria-label="Footer navigation">
          <Link href="/">HOME</Link><Link href="/about-us">ABOUT</Link><Link href="/services">SERVICES</Link><Link href="/contact-us">CONTACT</Link>
        </nav>
      </div>
      <div className="footer-logos">
        {logos.map(([src, alt]) => <Image key={alt} src={src} alt={alt} width={220} height={90} />)}
      </div>
      <div className="footer-bottom">
        <a href="https://www.gmfb.co.nz/" target="_blank" rel="noreferrer">2026 Developed by GMFB Ltd. All right reserved.</a>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  );
}
