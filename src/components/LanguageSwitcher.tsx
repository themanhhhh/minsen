"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/landing-page";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const englishPath = pathname.startsWith("/vi") ? pathname.slice(3) || "/" : pathname;
  const vietnamesePath = pathname.startsWith("/vi") ? pathname : `/vi${pathname === "/" ? "" : pathname}`;
  return <div className="language-switcher" aria-label="Language selection"><Link className={locale === "en" ? "active" : ""} href={englishPath}>EN</Link><span>/</span><Link className={locale === "vi" ? "active" : ""} href={vietnamesePath}>VI</Link></div>;
}
