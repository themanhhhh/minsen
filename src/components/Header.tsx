import { company, getLandingContent, type Locale } from "@/data/landing-page";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Link from "next/link";

export function Header({ locale }: { locale: Locale }) {
  const { navigation } = getLandingContent(locale);
  return (
    <header className="site-header">
      <Link
        className="brand"
        href={locale === "vi" ? "/vi" : "/"}
        aria-label={`${company.name}, home`}
      >
        <span className="brand-mark" aria-hidden="true">
          V
        </span>
        <span>{company.name}</span>
      </Link>
      <nav className="desktop-nav" aria-label="Điều hướng chính">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher locale={locale} />
        <Link
          className="header-contact"
          href={locale === "vi" ? "/vi/contact" : "/contact"}
        >
          {locale === "vi" ? "Liên hệ" : "Contact"}
        </Link>
        <a className="header-cta" href={locale === "vi" ? "/vi/rfq" : "/rfq"}>
          {locale === "vi" ? "Gửi RFQ" : "Submit RFQ"}{" "}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
