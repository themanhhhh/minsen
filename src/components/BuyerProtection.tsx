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
            ? "Hệ thống quản trị rủi ro Buyer"
            : "Buyer risk elimination system"}
        </p>
        <h2>
          {locale === "vi" ? (
            <>
              Một phương pháp
              <br />
              <em>có cấu trúc.</em>
            </>
          ) : (
            <>
              A structured approach
              <br />
              to buyer risk
              <br />
              <em>management.</em>
            </>
          )}
        </h2>
        <p>
          {locale === "vi"
            ? "100 nhóm rủi ro, 30 SOP tổng thể, biểu mẫu có kiểm soát, bộ bằng chứng và 12 control gate giúp giảm sự phụ thuộc vào lời hứa bằng miệng."
            : "100 buyer risks, 30 master SOPs, controlled forms, evidence packs and 12 control gates reduce dependence on verbal promises and make critical sourcing stages traceable."}
          </p>
        <div className="protection-system">
          <p className="eyebrow eyebrow-light">MISO JAPAN BUYER RISK ELIMINATION SYSTEM™</p>
          <div className="protection-system-flow">
            <span><strong>100</strong>{locale === "vi" ? "nhóm rủi ro Buyer" : "buyer risks"}</span>
            <span><strong>30</strong>{locale === "vi" ? "SOP tổng thể" : "master SOPs"}</span>
            <span>{locale === "vi" ? "Biểu mẫu và checklist có kiểm soát" : "Controlled forms & checklists"}</span>
            <span>{locale === "vi" ? "Bộ hồ sơ bằng chứng" : "Evidence packs"}</span>
            <span><strong>12</strong>{locale === "vi" ? "control gates" : "control gates"}</span>
          </div>
          <p className="protection-system-logic">
            {locale === "vi"
              ? "Nỗi lo Buyer → Rủi ro → Kiểm soát → Bằng chứng → Phê duyệt → Giám sát"
              : "Buyer fear → Risk → Control → Evidence → Approval → Monitoring"}
          </p>
        </div>
      </div>
      <div className="protection-list">
        {protectionLayers.map((layer) => (
          <article className="protection-item" key={layer.number}>
            <div className="protection-item-head">
              <span className="layer-number">{layer.number}</span>
              <div className="protection-thumb">
                <Image
                  src={images[layer.number] ?? images["05"]}
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
      <div className="protection-evidence">
        <p className="eyebrow eyebrow-light">{locale === "vi" ? "Sourcing dựa trên bằng chứng" : "Evidence-based sourcing"}</p>
        <h3>{locale === "vi" ? "Không chỉ nói cho Buyer biết. Hãy cho Buyer nhìn thấy." : "Do not just tell the buyer. Show the buyer."}</h3>
        <p>
          {locale === "vi"
            ? "Tùy theo phạm vi đã thống nhất, bộ bằng chứng có thể bao gồm hồ sơ xác minh nhà máy, xác nhận yêu cầu, hồ sơ duyệt mẫu, ảnh sản xuất, hồ sơ QC, bằng chứng đóng gói, loading và đối chiếu chứng từ shipment."
            : "Depending on the agreed scope, a buyer evidence package may include factory verification, requirement confirmation, sample approval, production photos, QC records, packing and loading evidence, and shipment document reconciliation."}
        </p>
        <div className="protection-evidence-list">
          {(locale === "vi"
            ? ["Hồ sơ xác minh nhà máy", "Xác nhận yêu cầu Buyer", "Hồ sơ phê duyệt mẫu", "Hồ sơ QC / Inspection", "Bằng chứng đóng gói và loading", "Đối chiếu chứng từ shipment"]
            : ["Factory verification record", "Buyer requirement confirmation", "Sample approval record", "QC / inspection records", "Packing and loading evidence", "Shipment document reconciliation"]
          ).map((item) => <span key={item}>{item}</span>)}
        </div>
        <strong className="protection-evidence-principle">{locale === "vi" ? "CAM KẾT → KIỂM SOÁT → BẰNG CHỨNG" : "CLAIM → CONTROL → EVIDENCE"}</strong>
      </div>
      <div className="protection-badge">
        <span aria-hidden="true"><ShieldCheck size={27} strokeWidth={1.8} /></span>
        <strong>
          {locale === "vi" ? "12 control gates" : "12 control gates"}
        </strong>
        <small>
          {locale === "vi" ? (
            <>
              Kiểm soát có cấu trúc.
              <br />
              Bằng chứng tại các bước quan trọng.
            </>
          ) : (
            <>
              Structured control.
              <br />
              Evidence at critical stages.
            </>
          )}
        </small>
      </div>
    </section>
  );
}
