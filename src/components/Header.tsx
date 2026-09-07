"use client";

import { company, getLandingContent, type Locale } from "@/data/landing-page";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header({ locale }: { locale: Locale }) {
  const { navigation } = getLandingContent(locale);
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/^\/vi(?=\/|$)/, "") || "/";

  const isActive = (href: string) =>
    normalizedPath === href ||
    (href !== "/" && normalizedPath.startsWith(`${href}/`));

  return (
    <header className="site-header">
      <Link
        className="brand"
        href={locale === "vi" ? "/vi" : "/"}
        aria-label={`${company.name}, home`}
      >
        <span className="brand-logo">
          <Image
            src="/images/logo/577e0a8a-c480-40d7-b31b-28c602ad95e1.png"
            alt=""
            fill
            preload
            sizes="(max-width: 560px) 160px, 190px"
          />
        </span>
      </Link>
      <Link className="header-home" href={locale === "vi" ? "/vi" : "/"}>
        {locale === "vi" ? "Trang chủ" : "Home"}
      </Link>
      <nav className="desktop-nav" aria-label="Điều hướng chính">
        {navigation.map((item) => (
          <Link
            href={locale === "vi" && !item.href.startsWith("/vi") ? `/vi${item.href}` : item.href}
            key={item.href}
            className={isActive(item.href.replace(/^\/vi(?=\/|$)/, "") || "/") ? "is-active" : undefined}
            aria-current={isActive(item.href.replace(/^\/vi(?=\/|$)/, "") || "/") ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        
      </nav>
      <div className="header-actions">
        <LanguageSwitcher locale={locale} />
        <a className="header-cta" href={locale === "vi" ? "/vi/rfq" : "/rfq"}>
          {locale === "vi" ? "Gửi RFQ" : "Submit RFQ"}
        </a>
      </div>
    </header>
  );
}
