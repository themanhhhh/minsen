import { getLandingContent, type Locale } from "@/data/landing-page";
import { Factory, Globe2, ShieldCheck, UsersRound, type LucideIcon } from "lucide-react";
import Image from "next/image";

type NetworkFeature = { icon: LucideIcon; title: string; description: string };

export function About({ locale }: { locale: Locale }) {
  const { networkStats } = getLandingContent(locale);
  const features: NetworkFeature[] =
    locale === "vi"
      ? [
          { icon: Factory, title: "Mạng lưới nhà máy rộng", description: "Tiếp cận hơn 230 nhà sản xuất plywood tại Việt Nam" },
          { icon: ShieldCheck, title: "Kiểm soát rủi ro chặt chẽ", description: "12 control gate trong hệ thống sourcing" },
          { icon: UsersRound, title: "Một đầu mối liên hệ", description: "Tiết kiệm thời gian và giảm chi phí trao đổi" },
          { icon: Globe2, title: "Hỗ trợ xuất khẩu tập trung", description: "Tập trung vào thị trường Ấn Độ và Trung Đông" },
        ]
      : [
          { icon: Factory, title: "Wide factory network", description: "Access to 230+ plywood manufacturers in Vietnam" },
          { icon: ShieldCheck, title: "Stricter risk control", description: "12 control gates in our sourcing system" },
          { icon: UsersRound, title: "One point of contact", description: "Save time and reduce communication costs" },
          { icon: Globe2, title: "Focused export support", description: "Main focus on India and Middle East markets" },
        ];

  return (
    <section className="about-section" id="network">
      <div className="about-main">
        <div className="network-visual" aria-hidden="true">
          <Image
            src="/images/products/product-commercial-plywood.jpg"
            alt=""
            fill
            sizes="(max-width: 820px) 80vw, 320px"
          />
          <span>MISO JAPAN</span>
          <strong>01</strong>
          <small>
            ACCOUNTABLE
            <br />
            PARTNER
          </small>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            {locale === "vi"
              ? "Vì sao là Việt Nam, vì sao là MISO JAPAN"
              : "Why Vietnam, why MISO JAPAN"}
          </p>
          <h2 className="about-heading">
            {locale === "vi" ? (
              <>
                <span className="about-heading-line">
                  <span>Một</span>
                  <span>mạng</span>
                  <span>lưới.</span>
                </span>
                <span className="about-heading-line">
                  <em>Nhiều</em>
                  <em>chắc chắn</em>
                  <em>hơn.</em>
                </span>
              </>
            ) : (
              <>
                <span className="about-heading-line">
                  <span>One</span>
                  <span>network.</span>
                </span>
                <span className="about-heading-line">
                  <em>More</em>
                  <em>certainty.</em>
                </span>
              </>
            )}
          </h2>
          <p>
            {locale === "vi"
              ? "Việt Nam có nền tảng sản xuất plywood đa dạng và mạnh. MISO JAPAN giúp bạn tiếp cận các nhà sản xuất phù hợp qua một đội ngũ am hiểu sản phẩm, sản xuất và yêu cầu xuất khẩu."
              : "Vietnam offers a strong and diversified manufacturing base for plywood. MISO JAPAN gives you direct access to qualified manufacturers through one experienced team that understands products, production and export requirements. You get more options, lower risk and a smoother sourcing process."}
          </p>
          <a
            className="text-link"
            href={locale === "vi" ? "/vi/process" : "/process"}
          >
            {locale === "vi"
              ? "Xem quy trình sourcing"
              : "See how sourcing works"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="network-features">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title}>
            <span className="network-feature-icon" aria-hidden="true">
              <Icon size={30} strokeWidth={1.8} />
            </span>
            <div>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="stats-grid">
        {networkStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <small>{stat.detail}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
