import { getLandingContent, type Locale } from "@/data/landing-page";

export function About({ locale }: { locale: Locale }) {
  const { networkStats } = getLandingContent(locale);
  return (
    <section className="about-section" id="network">
      <div className="network-visual" aria-hidden="true"><span>VN</span><strong>230+</strong><small>FACTORIES<br />ONE NETWORK</small></div>
      <div className="about-copy">
        <p className="eyebrow">{locale === "vi" ? "Vì sao là Việt Nam, vì sao là Minsen" : "Why Vietnam, why Minsen"}</p>
        <h2>{locale === "vi" ? <>Một mạng lưới.<br /><em>Nhiều chắc chắn hơn.</em></> : <>One network.<br /><em>More certainty.</em></>}</h2>
        <p>{locale === "vi" ? "Chúng tôi giúp buyer tiếp cận năng lực sản xuất của Việt Nam dễ dàng hơn. Thay vì tìm kiếm từng nhà máy, buyer làm việc với một đội ngũ am hiểu sản phẩm, sản xuất và yêu cầu xuất khẩu." : "We make Vietnam&apos;s manufacturing strength easier to access. Instead of searching factory by factory, buyers work with one experienced team that understands products, production and export requirements."}</p>
        <a className="text-link" href={locale === "vi" ? "/vi/process" : "/process"}>{locale === "vi" ? "Xem quy trình sourcing" : "See how sourcing works"} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="stats-grid">
        {networkStats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
    </section>
  );
}
