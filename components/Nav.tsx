"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DzogchenSymbol from "./DzogchenSymbol";
import { NAV } from "@/lib/nav";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

  return (
    <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="ניווט ראשי">
        <Link href="/" className="brand">
          <span className="brand-mark"><DzogchenSymbol animated={false} /></span>
          <span>דזוגצ'ן</span>
        </Link>
        <button className="menu-btn" aria-label="תפריט" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? "✕" : "☰"}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={norm(pathname) === n.href ? "active" : ""}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
