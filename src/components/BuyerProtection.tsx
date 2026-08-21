import { getLandingContent, type Locale } from "@/data/landing-page";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export function BuyerProtection({ locale }: { locale: Locale }) {
  const { protectionLayers } = getLandingContent(locale);
  const images: Record<string, string> = {
    "01": "/images/protection/factory-verification.jpg",
    "02": "/images/protection/supplier-selection.jpg",
    "03": "/images/protection/quality-inspection.jpg",
    "04": "/images/protection/production-supervision.jpg",
    "05": "/images/protection/quality-control.jpg",
    "06": "/images/protection/export-support.jpg",
    "07": "/images/team/minsen-buyer-factory-meeting.jpg",
  };

  return (
    <section className="protection-section" id="protection">
      <div className="protection-intro">
        <p className="eyebrow eyebrow-light">
          {locale === "vi"
            ? "Hệ thống bảo vệ Buyer"
            : "Our buyer protection system"}
        </p>
        <h2>
          {locale === "vi" ? (
            <>
              7 lớp bảo vệ.
              <br />
              <em>Một đầu mối trách nhiệm.</em>
            </>
          ) : (
            <>
              Seven layers
              <br />
              of protection.
              <br />
              <em>
                One clear
                <br />
                responsibility.
              </em>
            </>
          )}
        </h2>
        <p>
          {locale === "vi"
            ? "Mỗi đơn hàng được quản lý qua một quy trình có cấu trúc nhằm giảm rủi ro, đảm bảo chất lượng ổn định và giúp bạn an tâm từ yêu cầu đầu tiên đến lô hàng cuối cùng."
            : "Every order is managed through a structured process designed to reduce risk, ensure consistent quality and give you peace of mind from the first inquiry to the final shipment."}
        </p>
      </div>
      <div className="protection-list">
        {protectionLayers.map((layer) => (
          <article className="protection-item" key={layer.number}>
            <div className="protection-item-head">
              <span className="layer-number">{layer.number}</span>
              <div className="protection-thumb">
                <Image
                  src={images[layer.number]}
                  alt={layer.title}
                  fill
                  sizes="(max-width: 820px) 35vw, 140px"
                />
              </div>
              <h3>{layer.title}</h3>
            </div>
            <p>{layer.description}</p>
          </article>
        ))}
      </div>
      <div className="protection-badge">
        <span aria-hidden="true"><ShieldCheck size={27} strokeWidth={1.8} /></span>
        <strong>
          {locale === "vi" ? "Buyer là trung tâm" : "Buyer first"}
        </strong>
        <small>
          {locale === "vi" ? (
            <>
              Rủi ro của bạn là ưu tiên.
              <br />
              Bảo vệ doanh nghiệp ở mọi bước.
            </>
          ) : (
            <>
              Your risk is our priority.
              <br />
              We protect your business at every step.
            </>
          )}
        </small>
      </div>
    </section>
  );
}
