import Link from "next/link";
import type { ReactNode } from "react";
import { NAV } from "@/lib/nav";
import Reveal from "./Reveal";

export function Tib({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`tib ${className}`} lang="bo">{children}</span>;
}

export function PageHeader({ title, tib, lead, eyebrow }: { title: string; tib?: string; lead?: string; eyebrow?: string }) {
  return (
    <header className="page-header container">
      {eyebrow && <div className="eyebrow fade-up">{eyebrow}</div>}
      {tib && <div className="fade-up d1"><Tib>{tib}</Tib></div>}
      <h1 className="fade-up d1">{title}</h1>
      {lead && <p className="lead fade-up d2">{lead}</p>}
      <div className="divider fade-up d3" />
    </header>
  );
}

export function Verse({ tib, translit, he, src }: { tib?: ReactNode; translit?: string; he: ReactNode; src?: ReactNode }) {
  return (
    <Reveal className="verse">
      {tib && <span className="tib" lang="bo">{tib}</span>}
      {translit && <span className="translit">{translit}</span>}
      <span className="he">{he}</span>
      {src && <span className="src">— {src}</span>}
    </Reveal>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return <Reveal className="callout">{children}</Reveal>;
}

export function PageNav({ current }: { current: string }) {
  const i = NAV.findIndex((n) => n.href === current);
  const prev = i > 0 ? NAV[i - 1] : null;
  const next = i >= 0 && i < NAV.length - 1 ? NAV[i + 1] : null;
  return (
    <nav className="page-nav" aria-label="ניווט בין עמודים">
      {prev ? <Link href={prev.href}><small>→ הקודם</small>{prev.label}</Link> : <span />}
      {next ? <Link href={next.href} className="next"><small>הבא ←</small>{next.label}</Link> : <span />}
    </nav>
  );
}
