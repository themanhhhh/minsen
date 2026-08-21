import { aboutPageContent, type Locale } from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

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
