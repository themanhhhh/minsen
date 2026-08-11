import { getLandingContent, type Locale } from "@/data/landing-page";
import Image from "next/image";

export function BuyerProtection({ locale }: { locale: Locale }) {
  const { protectionLayers } = getLandingContent(locale);
  return (
    <section className="protection-section" id="protection">
      <div className="protection-intro"><p className="eyebrow eyebrow-light">{locale === "vi" ? "Hệ thống bảo vệ Buyer" : "Our buyer protection system"}</p><h2>{locale === "vi" ? <>7 lớp bảo vệ.<br /><em>Một đầu mối trách nhiệm.</em></> : <>Seven layers of protection.<br /><em>One clear responsibility.</em></>}</h2><p>{locale === "vi" ? "Mỗi đơn hàng được hỗ trợ bởi một quy trình thực tế nhằm giảm rủi ro trước, trong và sau sản xuất." : "Every order is supported by a practical process designed to reduce uncertainty before, during and after production."}</p></div>
      <div className="protection-list">{protectionLayers.map((layer) => { const images: Record<string, string> = { "01": "/images/protection/factory-verification.jpg", "02": "/images/protection/supplier-selection.jpg", "04": "/images/protection/production-supervision.jpg", "05": "/images/protection/quality-control.jpg", "06": "/images/protection/export-support.jpg" }; const image = images[layer.number]; return <article className="protection-item" key={layer.number}><span className="layer-number">{layer.number}</span>{image && <div className="protection-thumb"><Image src={image} alt={layer.title} fill sizes="70px" /></div>}<div><h3>{layer.title}</h3><p>{layer.description}</p></div><span className="layer-arrow" aria-hidden="true">↗</span></article>; })}</div>
      <div className="protection-badge"><span aria-hidden="true">✓</span><strong>{locale === "vi" ? "Buyer là trung tâm" : "Buyer first"}</strong><small>{locale === "vi" ? <>Từ xác minh nhà máy<br />đến khi xuất hàng</> : <>From factory check<br />to final shipment</>}</small></div>
    </section>
  );
}
