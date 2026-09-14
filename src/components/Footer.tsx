import { company, getLandingContent, getLocalizedPath, socialLinks, type Locale } from "@/data/landing-page";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const socialIcons = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
};

export function Footer({ locale }: { locale: Locale }) {
  const { navigation, products } = getLandingContent(locale);
  const ar = locale === "ar";
  return (
    <footer className="site-footer">
      <div className="footer-cta-row">
        <div className="footer-cta-copy">
          <p className="eyebrow eyebrow-light">
            {locale === "vi" ? "Bắt đầu tìm nguồn cung" : ar ? "ابدأ رحلة التوريد" : "Start your sourcing journey"}
          </p>
          <h2>
            {locale === "vi" ? (
              <>
                Nguồn cung tốt hơn.
                <br />
                <em>Đơn hàng chắc chắn hơn.</em>
              </>
            ) : ar ? (
              <>توريد أفضل.<br /><em>مزيد من اليقين.</em></>
            ) : (
              <>
                Better sourcing.
                <br />
                <em>More certainty.</em>
              </>
            )}
          </h2>
          <p className="footer-cta-description">
            {locale === "vi" ? "MISO JAPAN kết nối yêu cầu của bạn với các nhà sản xuất Việt Nam phù hợp và hỗ trợ xác minh nhà máy, kiểm soát chất lượng và điều phối vận chuyển thông qua quy trình sourcing bài bản." : ar ? "تطابق MISO JAPAN متطلباتك مع المصنعين الفيتناميين المناسبين وتدعم التحقق من المصنع ومراقبة الجودة وتنسيق الشحن من خلال عملية توريد منظمة." : "MISO JAPAN matches your requirements with suitable Vietnamese manufacturers and supports factory verification, quality control and shipment coordination through a structured sourcing process."}
          </p>
        </div>
        <a
          className="button button-light footer-cta-button"
          href={getLocalizedPath(locale, "/rfq")}
        >
          {locale === "vi" ? "Gửi RFQ" : ar ? "إرسال طلب عرض سعر" : "Submit RFQ"}
          <span aria-hidden="true">↗</span>
        </a>
        </div>
        <div className="footer-main">
          <div className="footer-brand-block">
          <a className="footer-brand-logo" href="#top" aria-label={`${company.name}, home`}>
            <span>
              <Image
                src="/images/logo/577e0a8a-c480-40d7-b31b-28c602ad95e1.png"
                alt=""
                fill
                sizes="220px"
              />
            </span>
          </a>
          <p>
            {locale === "vi" ? "Đối tác sourcing plywood Việt Nam, phát triển nhà cung cấp và quản trị rủi ro cho Buyer." : ar ? "شريك توريد الخشب الرقائقي من فيتنام وتطوير الموردين وإدارة مخاطر المشتري." : "Vietnam plywood sourcing, supplier development and buyer risk management partner."}
          </p>
            <small>{locale === "vi" ? "Tên công ty" : ar ? "اسم الشركة" : "Company name"}: {company.legalName}</small>
            <small>{locale === "vi" ? "Địa chỉ" : ar ? "العنوان" : "Address"}: {company.location}</small>
          <div className="footer-socials">
            <strong>{locale === "vi" ? "Theo dõi chúng tôi" : ar ? "تابعنا" : "Follow us"}</strong>
            <div>
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}><Icon size={16} aria-hidden="true" /></a>;
              })}
            </div>
          </div>
        </div>
        <div className="footer-column">
          <strong>{locale === "vi" ? "Khám phá" : ar ? "استكشف" : "Explore"}</strong>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-column">
          <strong>{locale === "vi" ? "Sản phẩm" : ar ? "المنتجات" : "Products"}</strong>
          {products.map((product) => (
            <a
              href={
                `${getLocalizedPath(locale, "/products")}#products`
              }
              key={product.name}
            >
              {product.name}
            </a>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <strong>{locale === "vi" ? "Liên hệ" : ar ? "اتصل بنا" : "Contact"}</strong>
           <a href={`mailto:${locale === "vi" ? company.emailVi : company.email}`}>
             {locale === "vi" ? company.emailVi : company.email}
           </a>
           <a href={`tel:${(locale === "vi" ? company.whatsappVi : company.whatsapp).replace(/\s/g, "")}`}>
             {locale === "vi" ? company.whatsappVi : company.whatsapp}
           </a>
           <a href={getLocalizedPath(locale, "/contact")}>
             {locale === "vi" ? "Mở contact form" : ar ? "فتح نموذج التواصل" : "Open contact form"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 {company.name}.{" "}
           {locale === "vi" ? "Bảo lưu mọi quyền." : ar ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </p>
        <div className="footer-legal">
           <a href="#top">{locale === "vi" ? "Về đầu trang" : ar ? "العودة إلى الأعلى" : "Back to top"}</a>
          <span aria-hidden="true">·</span>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </footer>
  );
}
