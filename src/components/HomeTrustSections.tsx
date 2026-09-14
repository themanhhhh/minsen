import Link from "next/link";
import { ClipboardList, ShieldCheck, UsersRound } from "lucide-react";
import { aboutPageContent, getLocalizedPath, type Locale } from "@/data/landing-page";

export function HomeTrustSections({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const ar = locale === "ar";
  const content = aboutPageContent[locale];

  return (
    <>
      <section className="about-network home-network-section" id="network">
        <div className="network-copy">
           <p className="eyebrow">{vi ? "Mạng lưới phía sau chúng tôi" : ar ? "الشبكة التي تقف خلفنا" : "The network behind us"}</p>
          <h2>{content.networkTitle}</h2>
          <p>{content.networkText}</p>
        </div>
        <div className="network-numbers">
          <div>
            <UsersRound size={28} strokeWidth={1.7} aria-hidden="true" />
            <strong>01</strong>
             <span>{vi ? "đầu mối chịu trách nhiệm" : ar ? "شريك مسؤول" : "accountable partner"}</span>
             <small>{vi ? "MISO JAPAN là đầu mối duy nhất của bạn" : ar ? "MISO JAPAN نقطة الاتصال الوحيدة لك" : "MISO JAPAN as your single point of contact"}</small>
          </div>
          <div>
            <ClipboardList size={28} strokeWidth={1.7} aria-hidden="true" />
            <strong>05</strong>
             <span>{vi ? "giai đoạn dành cho buyer" : ar ? "مراحل مخصصة للمشتري" : "buyer-facing phases"}</span>
             <small>{vi ? "Từ yêu cầu đến giao hàng với đầy đủ thông tin" : ar ? "من المتطلبات إلى التسليم برؤية كاملة" : "From requirement to delivery with full visibility"}</small>
          </div>
          <div>
            <ShieldCheck size={28} strokeWidth={1.7} aria-hidden="true" />
            <strong>12</strong>
             <span>{vi ? "control gate dự kiến" : ar ? "نقاط تحكم مخططة" : "control gates planned"}</span>
             <small>{vi ? "Kiểm tra tích hợp để giảm rủi ro từng bước" : ar ? "فحوصات مدمجة لتقليل المخاطر في كل خطوة" : "Built-in checks to reduce risk at every step"}</small>
          </div>
        </div>
      </section>
      <section className="about-values home-values-section">
        <div className="about-values-heading">
          <p className="eyebrow">{content.valuesEyebrow}</p>
          <h2>
            {vi ? (
              <>Làm việc với <em>chủ đích.</em></>
            ) : ar ? (
              <>مبني على <em>العمل الجيد.</em></>
            ) : (
              <>Built on <em>good work.</em></>
            )}
          </h2>
        </div>
        <div className="about-values-grid">
          {content.values.map((value, index) => (
            <article key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-page-cta home-trust-cta">
        <p className="eyebrow eyebrow-light">
          {vi ? "Cùng bắt đầu" : ar ? "لنعمل معًا" : "LET'S WORK TOGETHER"}
        </p>
        <h2>{content.ctaTitle}</h2>
        <p>{content.ctaText}</p>
        <Link className="button button-light" href={getLocalizedPath(locale, "/rfq")}>
          {content.cta} <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
