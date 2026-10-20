import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://clearair.co.nz"),
  title: {
    default: "Clear Air | Wellington Asbestos Removal Specialists",
    template: "%s | Clear Air Wellington",
  },
  description:
    "Clear Air provides asbestos removal and hazardous material services across Wellington, including Class A and B asbestos removal, contaminated soil, mould remediation, methamphetamine decontamination and site support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
