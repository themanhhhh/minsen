"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocalizedPath, type Locale } from "@/data/landing-page";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const basePath = pathname.replace(/^\/(vi|ar)(?=\/|$)/, "") || "/";
  const currentLabel = locale === "vi" ? "VIE" : locale === "ar" ? "ARA" : "ENG";
  const options: { locale: Locale; label: string }[] = [
    { locale: "en", label: "ENG" },
    { locale: "vi", label: "VIE" },
    { locale: "ar", label: "ARA" },
  ];

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <div className="language-menu" ref={containerRef}>
      <button
        className="language-trigger"
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        {currentLabel}
        <span
          className={`language-chevron${open ? " is-open" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          className="language-options"
          role="listbox"
          aria-label={locale === "ar" ? "اختيار اللغة" : "Language selection"}
        >
          {options.map((option) => (
            <a
              className={locale === option.locale ? "selected" : ""}
              href={getLocalizedPath(option.locale, basePath)}
              key={option.locale}
              role="option"
              aria-selected={locale === option.locale}
              onClick={() => setOpen(false)}
            >
              <span className="language-check" aria-hidden="true">
                {locale === option.locale ? "✓" : ""}
              </span>
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
