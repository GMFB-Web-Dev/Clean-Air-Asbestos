"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { serviceCards } from "../_data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Clear Air home">
          <Image src="/assets/live/77d6fce3da5a12e3e90dd822f2062a717969d3e2.png" alt="Clear Air Asbestos Management Ltd" width={391} height={204} loading="eager" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={pathname === "/about-us" ? "active" : ""} href="/about-us">ABOUT</Link>
          <div className="services-menu">
            <Link className={`services-link ${pathname === "/services" || serviceCards.some(([slug]) => pathname === `/${slug}`) ? "active" : ""}`} href="/services">
              <span>SERVICES</span><span className="services-arrow" aria-hidden="true" />
            </Link>
            <div className="dropdown">
              {serviceCards.map(([slug, title]) => <Link href={`/${slug}`} key={slug}>{title}</Link>)}
            </div>
          </div>
          <Link className={pathname === "/contact-us" ? "active" : ""} href="/contact-us">CONTACT</Link>
          <a className="phone-button" href="tel:0277755005">027 775 5005</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label="Menu Toggle" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
        <Link href="/about-us" onClick={() => setOpen(false)}>ABOUT</Link>
        <Link href="/services" onClick={() => setOpen(false)}>SERVICES</Link>
        {serviceCards.map(([slug, title]) => <Link className="mobile-service" href={`/${slug}`} key={slug} onClick={() => setOpen(false)}>{title}</Link>)}
        <Link href="/contact-us" onClick={() => setOpen(false)}>CONTACT</Link>
        <a href="tel:0277755005" onClick={() => setOpen(false)}>027 775 5005</a>
      </div>
    </header>
  );
}
