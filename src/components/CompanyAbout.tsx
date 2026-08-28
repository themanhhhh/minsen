import { aboutPageContent, type Locale } from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { ScrollCue } from "@/components/ScrollCue";

export function CompanyAbout({ locale }: { locale: Locale }) {
  const content = aboutPageContent[locale];
  return (
    <>
      <Header locale={locale} />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="eyebrow eyebrow-light">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            <a className="button button-light" href="#mission">
              {locale === "vi" ? "Tìm hiểu thêm" : "Learn more"}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="about-hero-mark" aria-hidden="true">
            <Image
              src="/images/team/minsen-sourcing-team.jpg"
              alt=""
              fill
              sizes="300px"
            />
            <span>MISO JAPAN</span>
            <strong>01</strong>
            <small>
              ACCOUNTABLE
              <br />
              PARTNER
            </small>
          </div>
          <ScrollCue targetId="mission" label={locale === "vi" ? "Cuộn để tìm hiểu thêm" : "Scroll to learn more"} />
        </section>
        <section className="about-story" id="mission">
          <div className="about-story-label">
            <span>01</span>
            <p>{locale === "vi" ? "Sứ mệnh của chúng tôi" : "Our mission"}</p>
          </div>
          <div>
            <h2>{content.missionTitle}</h2>
            <p>{content.missionText}</p>
            <Link className="text-link" href="/#contact">
              {locale === "vi" ? "Trao đổi với đội ngũ" : "Talk to our team"}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section className="about-positioning">
          <p className="eyebrow">
            {locale === "vi" ? "Định vị của MISO JAPAN" : "Our positioning"}
          </p>
          <blockquote>{content.positioningTitle}</blockquote>
          <p>{content.positioningText}</p>
        </section>
        <section className="about-network">
          <div className="network-copy">
            <p className="eyebrow">
              {locale === "vi" ? "Năng lực kết nối" : "The network behind us"}
            </p>
            <h2>{content.networkTitle}</h2>
            <p>{content.networkText}</p>
          </div>
          <div className="network-numbers">
            <div>
              <strong>01</strong>
              <span>
                {locale === "vi"
                  ? "đầu mối chịu trách nhiệm"
                  : "accountable partner"}
              </span>
            </div>
            <div>
              <strong>05</strong>
              <span>
                {locale === "vi"
                  ? "giai đoạn dành cho buyer"
                  : "buyer-facing phases"}
              </span>
            </div>
            <div>
              <strong>12</strong>
              <span>
                {locale === "vi"
                  ? "control gate dự kiến"
                  : "control gates planned"}
              </span>
            </div>
          </div>
        </section>
        <section className="about-local">
          <div>
            <p className="eyebrow">{locale === "vi" ? "Đối tác thực thi tại Việt Nam" : "Your local execution partner in Vietnam"}</p>
            <h2>{content.localTitle}</h2>
            <p>{content.localText}</p>
            <blockquote>{locale === "vi" ? "Một đội ngũ địa phương ở gần nhà máy hơn, trong khi buyer vẫn giữ quyền kiểm soát các quyết định thương mại." : "A local team closer to the factory, while the buyer remains in control of commercial decisions."}</blockquote>
          </div>
          <div className="about-local-support">
            <h3>{locale === "vi" ? "Các hỗ trợ có thể bao gồm" : "Local support may include"}</h3>
            <ul>
              {content.localSupport.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>
        <section className="factory-intelligence">
          <div>
            <p className="eyebrow">{locale === "vi" ? "Dữ liệu nhà máy plywood Việt Nam" : "Vietnam factory intelligence"}</p>
            <strong>230</strong>
            <span>{locale === "vi" ? "hồ sơ nhà máy đã được lập bản đồ dữ liệu" : "mapped factory records"}</span>
          </div>
          <p>{content.factoryIntelligence}</p>
        </section>
        <section className="about-values">
          <div className="about-values-heading">
            <p className="eyebrow">{content.valuesEyebrow}</p>
            <h2>
              {locale === "vi" ? (
                <>
                  Làm việc với <em>chủ đích.</em>
                </>
              ) : (
                <>
                  Built on <em>good work.</em>
                </>
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
        <section className="about-why">
          <div>
            <p className="eyebrow">{locale === "vi" ? "Tại sao chọn MISO JAPAN" : "Why MISO JAPAN"}</p>
            <h2>{content.whyTitle}</h2>
          </div>
          <div className="about-why-grid">
            {content.whyItems.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="founder-message">
          <p className="eyebrow">{locale === "vi" ? "Thông điệp từ nhà sáng lập" : "Founder message"}</p>
          <blockquote>“{content.founderMessage}”</blockquote>
          <p>Founder &amp; Managing Director<br />MISO JAPAN</p>
        </section>
        <section className="core-message">
          <div>
            <p className="eyebrow">{locale === "vi" ? "Thông điệp cốt lõi" : "Core message"}</p>
            <h2>{content.coreTitle}</h2>
            <p>{content.coreText}</p>
          </div>
          <div className="commercial-logic">
            <p className="eyebrow">{locale === "vi" ? "Logic thương mại của MISO JAPAN" : "Our commercial logic"}</p>
            {content.commercialLogic.map((item, index) => (
              <span key={item}><strong>0{index + 1}</strong>{item}</span>
            ))}
          </div>
        </section>
        <section className="about-page-cta">
          <p className="eyebrow eyebrow-light">
            {locale === "vi" ? "Cùng bắt đầu" : "Let's work together"}
          </p>
          <h2>{content.ctaTitle}</h2>
          <p>{content.ctaText}</p>
          <Link className="button button-light" href="/#contact">
            {content.cta}
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
