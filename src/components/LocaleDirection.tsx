"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleDirection() {
  const pathname = usePathname();

  useEffect(() => {
    const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");
    const isVietnamese = pathname.startsWith("/vi") || pathname === "/factory-registration";
    const locale = isArabic ? "ar" : isVietnamese ? "vi" : "en";
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
    document.documentElement.dataset.locale = locale;
  }, [pathname]);

  return null;
}
