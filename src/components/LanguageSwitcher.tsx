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
  const currentLabel = locale === "vi" ? "Tiếng Việt" : "English";

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return <div className="language-menu" ref={containerRef}><button className="language-trigger" type="button" aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen((value) => !value)}>{currentLabel}<span aria-hidden="true">⌄</span></button>{open && <div className="language-options" role="listbox" aria-label="Language selection"><a className={locale === "en" ? "selected" : ""} href={englishPath} role="option" aria-selected={locale === "en"} onClick={() => setOpen(false)}>English {locale === "en" && <span aria-hidden="true">✓</span>}</a><a className={locale === "vi" ? "selected" : ""} href={vietnamesePath} role="option" aria-selected={locale === "vi"} onClick={() => setOpen(false)}>Tiếng Việt {locale === "vi" && <span aria-hidden="true">✓</span>}</a></div>}</div>;
}
