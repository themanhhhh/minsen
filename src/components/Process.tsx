import { getLandingContent, type Locale } from "@/data/landing-page";
import Image from "next/image";

export function Process({ locale }: { locale: Locale }) {
  const { sourcingSteps } = getLandingContent(locale);
  const images = [
    "/images/process/buyer-inquiry.jpg",
    "/images/process/factory-matching.jpg",
    "/images/process/sample-approval.jpg",
    "/images/process/container-shipment.jpg",
  ];
  return (
    <section className="section process-section" id="process">
      <div className="section-heading">
        <p className="eyebrow">
          {locale === "vi" ? "Quy trình sourcing" : "Our sourcing process"}
        </p>
        <h2>
          {locale === "vi" ? (
            <>
              Từ yêu cầu đầu tiên
              <br />
              <em>đến lô hàng xuất khẩu.</em>
            </>
          ) : (
            <>
              From first inquiry
              <br />
              <em>to final shipment.</em>
            </>
          )}
        </h2>
      </div>
      <div className="process-grid">
        {sourcingSteps.map((step, index) => (
          <article key={step.number}>
            <div className="process-image">
              <Image
                src={images[index]}
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
