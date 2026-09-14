import { getLandingContent, type Locale } from "@/data/landing-page";
import Image from "next/image";

export function Process({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const { sourcingSteps } = getLandingContent(locale);
  const images = [
    "/images/process/buyer-inquiry.jpg",
    "/images/process/factory-matching.jpg",
    "/images/process/sample-approval.jpg",
    "/images/process/container-shipment.jpg",
  ];
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
      <div className="process-grid">
        {steps.map((step, index) => (
          <article key={step.number}>
            <div className="process-image">
              <Image
                src={images[index % images.length]}
                alt={step.title}
                fill
                sizes="(max-width: 820px) 100vw, 25vw"
              />
            </div>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
