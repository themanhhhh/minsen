"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/landing-page";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const englishPath = pathname.startsWith("/vi") ? pathname.slice(3) || "/" : pathname;
  const vietnamesePath = pathname.startsWith("/vi") ? pathname : `/vi${pathname === "/" ? "" : pathname}`;
  const currentLabel = locale === "vi" ? "VIE" : "ENG";

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return <div className="language-menu" ref={containerRef}><button className="language-trigger" type="button" aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen((value) => !value)}>{currentLabel}<span className={`language-chevron${open ? " is-open" : ""}`} aria-hidden="true" /></button>{open && <div className="language-options" role="listbox" aria-label="Language selection"><a className={locale === "en" ? "selected" : ""} href={englishPath} role="option" aria-selected={locale === "en"} onClick={() => setOpen(false)}><span className="language-check" aria-hidden="true">{locale === "en" ? "✓" : ""}</span>ENG</a><a className={locale === "vi" ? "selected" : ""} href={vietnamesePath} role="option" aria-selected={locale === "vi"} onClick={() => setOpen(false)}><span className="language-check" aria-hidden="true">{locale === "vi" ? "✓" : ""}</span>VIE</a></div>}</div>;
}
