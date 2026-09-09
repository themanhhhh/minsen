"use client";

import { company, getLandingContent, type Locale } from "@/data/landing-page";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header({ locale }: { locale: Locale }) {
  const { navigation } = getLandingContent(locale);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const normalizedPath = pathname.replace(/^\/vi(?=\/|$)/, "") || "/";
  const homeHref = locale === "vi" ? "/vi" : "/";
  const rfqHref = locale === "vi" ? "/vi/rfq" : "/rfq";
  const openMenuLabel = locale === "vi" ? "Mở menu" : "Open menu";
  const closeMenuLabel = locale === "vi" ? "Đóng menu" : "Close menu";

  const isActive = (href: string) =>
    normalizedPath === href ||
    (href !== "/" && normalizedPath.startsWith(`${href}/`));

  const getNavigationHref = (href: string) =>
    locale === "vi" && !href.startsWith("/vi") ? `/vi${href}` : href;

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const closeOnDesktopResize = () => {
      if (window.innerWidth > 820) setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktopResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktopResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <Link
          className="brand"
          href={homeHref}
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
        <Link className="header-home" href={homeHref}>
          {locale === "vi" ? "Trang chủ" : "Home"}
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => {
            const itemPath = item.href.replace(/^\/vi(?=\/|$)/, "") || "/";
            return (
              <Link
                href={getNavigationHref(item.href)}
                key={item.href}
                className={isActive(itemPath) ? "is-active" : undefined}
                aria-current={isActive(itemPath) ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <Link className="header-cta" href={rfqHref}>
            {locale === "vi" ? "Gửi RFQ" : "Submit RFQ"}
          </Link>
        </div>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-controls="mobile-sidebar"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? closeMenuLabel : openMenuLabel}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.8} aria-hidden="true" />}
          <span className="sr-only">{isMenuOpen ? closeMenuLabel : openMenuLabel}</span>
        </button>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu-layer">
          <button
            className="mobile-sidebar-backdrop"
            type="button"
            aria-label={closeMenuLabel}
            onClick={closeMenu}
          />
          <aside
            className="mobile-sidebar"
            id="mobile-sidebar"
            aria-label={locale === "vi" ? "Điều hướng chính" : "Main navigation"}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-sidebar-header">
              <span>Menu</span>
              <button
                className="mobile-sidebar-close"
                type="button"
                aria-label={closeMenuLabel}
                onClick={closeMenu}
              >
                <X size={21} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
            <nav className="mobile-nav" aria-label={locale === "vi" ? "Điều hướng chính" : "Main navigation"}>
              <Link className={isActive("/") ? "is-active" : undefined} href={homeHref} onClick={closeMenu}>
                {locale === "vi" ? "Trang chủ" : "Home"}
              </Link>
              {navigation.map((item) => {
                const itemPath = item.href.replace(/^\/vi(?=\/|$)/, "") || "/";
                return (
                  <Link
                    href={getNavigationHref(item.href)}
                    key={item.href}
                    className={isActive(itemPath) ? "is-active" : undefined}
                    aria-current={isActive(itemPath) ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mobile-sidebar-actions">
              <LanguageSwitcher locale={locale} />
              <Link className="header-cta" href={rfqHref} onClick={closeMenu}>
                {locale === "vi" ? "Gửi RFQ" : "Submit RFQ"}
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
