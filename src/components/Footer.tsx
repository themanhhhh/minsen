import { company, getLandingContent, type Locale } from "@/data/landing-page";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer({ locale }: { locale: Locale }) {
  const { navigation, products } = getLandingContent(locale);
  return (
    <footer className="site-footer">
      <div className="footer-cta-row">
        <div className="footer-cta-copy">
          <p className="eyebrow eyebrow-light">{locale === "vi" ? "Bắt đầu tìm nguồn cung" : "Start your sourcing journey"}</p>
          <h2>{locale === "vi" ? <>Nguồn cung tốt hơn.<br /><em>Đơn hàng chắc chắn hơn.</em></> : <>Better sourcing.<br /><em>More certainty.</em></>}</h2>
        </div>
        <a className="button button-light footer-cta-button" href={locale === "vi" ? "/vi#contact" : "/#contact"}>{locale === "vi" ? "Gửi yêu cầu" : "Send an inquiry"}<span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-main">
        <div className="footer-brand-block"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">V</span><span>{company.name}</span></a><p>{locale === "vi" ? "Kết nối nguồn cung gỗ Việt Nam với buyer quốc tế." : "Connecting Vietnam wood supply with international buyers."}</p><small>{company.location}</small></div>
        <div className="footer-column"><strong>{locale === "vi" ? "Khám phá" : "Explore"}</strong>{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
        <div className="footer-column"><strong>{locale === "vi" ? "Sản phẩm" : "Products"}</strong>{products.map((product) => <a href={locale === "vi" ? "/vi/products#products" : "/products#products"} key={product.name}>{product.name}</a>)}</div>
        <div className="footer-column footer-contact"><strong>{locale === "vi" ? "Liên hệ" : "Contact"}</strong><a href={`mailto:${company.email}`}>{company.email}</a><a href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}>WhatsApp: {company.whatsapp}</a><a href="#contact">{locale === "vi" ? "Gửi yêu cầu" : "Send your inquiry"} <span aria-hidden="true">↗</span></a></div>
      </div>
      <div className="footer-bottom"><p>© 2025 {company.name}. {locale === "vi" ? "Bảo lưu mọi quyền." : "All rights reserved."}</p><div className="footer-legal"><a href="#top">{locale === "vi" ? "Về đầu trang" : "Back to top"}</a><span aria-hidden="true">·</span><LanguageSwitcher locale={locale} /></div></div>
    </footer>
  );
}
