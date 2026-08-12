"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/data/landing-page";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const englishPath = pathname.startsWith("/vi") ? pathname.slice(3) || "/" : pathname;
  const vietnamesePath = pathname.startsWith("/vi") ? pathname : `/vi${pathname === "/" ? "" : pathname}`;
  return <label className="language-select"><span className="sr-only">Language</span><select value={locale} onChange={(event) => { window.location.href = event.target.value === "vi" ? vietnamesePath : englishPath; }}><option value="en">English</option><option value="vi">Tiếng Việt</option></select></label>;
}
