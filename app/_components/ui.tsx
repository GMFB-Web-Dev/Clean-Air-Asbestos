import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}<span /></div>;
}

export function ButtonLink({ href, children, variant = "outline" }: { href: string; children: ReactNode; variant?: "outline" | "plain" }) {
  return <Link className={`button-link ${variant}`} href={href}>{children}</Link>;
}
