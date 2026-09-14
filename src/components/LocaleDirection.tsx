"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleDirection() {
  const pathname = usePathname();

  useEffect(() => {
    const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");
    document.documentElement.lang = isArabic ? "ar" : pathname.startsWith("/vi") ? "vi" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
