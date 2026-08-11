import { getLandingContent, type Locale } from "@/data/landing-page";

export function Process({ locale }: { locale: Locale }) {
  const { sourcingSteps } = getLandingContent(locale);
  return <section className="section process-section" id="process"><div className="section-heading"><p className="eyebrow">{locale === "vi" ? "Quy trình sourcing" : "Our sourcing process"}</p><h2>{locale === "vi" ? <>Từ yêu cầu đầu tiên<br /><em>đến lô hàng xuất khẩu.</em></> : <>From first inquiry<br /><em>to final shipment.</em></>}</h2></div><div className="process-grid">{sourcingSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>;
}
