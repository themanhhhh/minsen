"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleDirection() {
  const pathname = usePathname();

  useEffect(() => {
    const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");
    const locale = isArabic ? "ar" : pathname.startsWith("/vi") ? "vi" : "en";
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
    document.documentElement.dataset.locale = locale;
  }, [pathname]);

  return null;
}
