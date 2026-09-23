import { getLandingContent, type Locale } from "@/data/landing-page";
import {
  CheckCircle2,
  ClipboardList,
  Factory,
  FileCheck,
  FlaskConical,
  GitCompareArrows,
  Globe2,
  Handshake,
  LifeBuoy,
  MessageCircle,
  Package,
  ShieldAlert,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const processIcons: LucideIcon[] = [
  ClipboardList,
  MessageCircle,
  ShieldAlert,
  Factory,
  GitCompareArrows,
  FileCheck,
  FlaskConical,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Package,
  Globe2,
  LifeBuoy,
];

export function Process({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const { sourcingSteps } = getLandingContent(locale);
  const steps = full ? sourcingSteps : sourcingSteps.slice(0, 4);
  return (
    <section className="section process-section" id="process">
      <div className="section-heading">
        <p className="eyebrow">
          {locale === "vi" ? "MISO JAPAN làm gì" : locale === "ar" ? "ماذا تقدم MISO JAPAN" : "What MISO JAPAN does"}
        </p>
        <h2>
          {locale === "vi" ? (
            <>
              Từ yêu cầu của Buyer
              <br />
              <em>đến khi giao hàng.</em>
            </>
          ) : locale === "ar" ? (
            <>من متطلبات المشتري<br /><em>إلى الشحن.</em></>
          ) : (
            <>
              From buyer requirement
              <br />
              <em>to shipment.</em>
            </>
          )}
        </h2>
      </div>
      <div className={`process-grid ${full ? "is-full" : "is-preview"}`}>
        {steps.map((step, index) => (
          <article key={step.number}>
            <div className="process-step-icon" aria-hidden="true">
              {(() => {
                const Icon = processIcons[index] ?? ClipboardList;
                return <Icon size={26} strokeWidth={1.8} />;
              })()}
            </div>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <span className="process-flow-arrow" aria-hidden="true">→</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
