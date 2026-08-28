import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollCue } from "@/components/ScrollCue";
import { type Locale } from "@/data/landing-page";

type HubKind = "sourcing" | "factory-videos" | "insights";
const content = {
  en: {
    sourcing: {
      eyebrow: "What MISO JAPAN does",
      title: "From buyer requirement to shipment.",
      description:
        "Our sourcing process begins with the buyer's actual requirement, then moves through factory matching, controlled execution and documented evidence.",
      cards: [
        [
          "Requirement clarification",
          "We convert product application, specification, quantity and destination into clear technical and commercial criteria.",
        ],
        [
          "Factory search and matching",
          "We verify relevant capability and compare suitable Vietnam manufacturers against the buyer requirement.",
        ],
        [
          "Controlled execution and evidence",
          "We coordinate samples, production, QC, packing, loading, shipment and documented evidence within the agreed scope.",
        ],
      ],
    },
    "factory-videos": {
      eyebrow: "Factory videos",
      title: "See how Vietnam's wood products are made.",
      description:
        "A growing library of factory tours and production moments to help buyers understand the supply behind each product.",
      cards: [
        [
          "Factory tour",
          "Explore the people, space and production capability behind a verified partner.",
        ],
        [
          "Plywood production",
          "See peeling, drying, gluing, hot pressing and sanding in context.",
        ],
        [
          "Quality and loading",
          "Follow inspection, packing and container loading before export.",
        ],
      ],
    },
    insights: {
      eyebrow: "Sourcing insights",
      title: "Useful knowledge for better buying decisions.",
      description:
        "Practical guidance for international buyers sourcing plywood, veneer and wood panels from Vietnam.",
      cards: [
        [
          "How to source plywood from Vietnam",
          "The key questions to ask about specification, factory and shipment.",
        ],
        [
          "MR vs Melamine vs Phenolic",
          "Understand glue types and choose the right performance for your application.",
        ],
        [
          "How to inspect plywood",
          "A practical starting point for sample approval and pre-shipment quality control.",
        ],
      ],
    },
  },
  vi: {
    sourcing: {
      eyebrow: "MISO JAPAN làm gì",
      title: "Từ yêu cầu của Buyer đến khi giao hàng.",
      description:
        "Quy trình sourcing bắt đầu từ yêu cầu thực tế của buyer, sau đó đi qua matching nhà máy, thực thi có kiểm soát và bằng chứng đầy đủ.",
      cards: [
        [
          "Làm rõ yêu cầu",
          "Chuyển ứng dụng, thông số, số lượng và điểm đến thành tiêu chí kỹ thuật và thương mại rõ ràng.",
        ],
        [
          "Tìm kiếm và matching nhà máy",
          "Xác minh năng lực liên quan và đối chiếu các nhà sản xuất Việt Nam phù hợp với yêu cầu buyer.",
        ],
        [
          "Thực thi và bằng chứng",
          "Điều phối mẫu, sản xuất, QC, đóng gói, loading, shipment và bằng chứng trong phạm vi đã thống nhất.",
        ],
      ],
    },
    "factory-videos": {
      eyebrow: "Video nhà máy",
      title: "Xem cách các sản phẩm gỗ Việt Nam được sản xuất.",
      description:
        "Thư viện video giới thiệu nhà máy và dây chuyền để buyer hiểu rõ hơn về nguồn cung phía sau sản phẩm.",
      cards: [
        [
          "Tham quan nhà máy",
          "Khám phá con người, không gian và năng lực sản xuất của đối tác đã xác minh.",
        ],
        [
          "Sản xuất plywood",
          "Theo dõi quá trình bóc, sấy, tráng keo, ép nóng và chà nhám.",
        ],
        [
          "Kiểm tra và đóng hàng",
          "Xem quy trình kiểm tra, đóng gói và đóng container trước khi xuất khẩu.",
        ],
      ],
    },
    insights: {
      eyebrow: "Kiến thức sourcing",
      title: "Kiến thức hữu ích cho quyết định mua hàng tốt hơn.",
      description:
        "Hướng dẫn thực tế cho buyer quốc tế khi sourcing plywood, veneer và ván gỗ từ Việt Nam.",
      cards: [
        [
          "Cách sourcing plywood từ Việt Nam",
          "Những câu hỏi quan trọng về quy cách, nhà máy và lô hàng.",
        ],
        [
          "MR vs Melamine vs Phenolic",
          "Hiểu các loại keo và lựa chọn hiệu năng phù hợp với ứng dụng.",
        ],
        [
          "Cách kiểm tra plywood",
          "Một điểm bắt đầu thực tế cho duyệt mẫu và kiểm soát chất lượng trước xuất hàng.",
        ],
      ],
    },
  },
} as const;

export function HubPage({ kind, locale }: { kind: HubKind; locale: Locale }) {
  const page = content[locale][kind];
  const vi = locale === "vi";
  const imageFor = (index: number) =>
    kind === "factory-videos"
      ? [
          "factory-tour-poster.jpg",
          "veneer-peeling-poster.jpg",
          "plywood-hot-press-poster.jpg",
        ][index]
      : [
          "insight-vietnam-plywood-sizes.jpg",
          "insight-plywood-glue-types.jpg",
          "insight-plywood-quality-checklist.jpg",
        ][index];
  return (
    <>
      <Header locale={locale} />
      <main className={`hub-page hub-${kind}`}>
        <section className="hub-hero">
          <div>
            <p className="eyebrow eyebrow-light">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <Link
              className="button button-light"
              href={vi ? "/vi/rfq" : "/rfq"}
            >
              {vi ? "Gửi yêu cầu sourcing" : "Submit your RFQ"}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hub-hero-number" aria-hidden="true">
            {kind === "sourcing"
              ? "01"
              : kind === "factory-videos"
                ? "02"
            : "03"}
          </div>
          <ScrollCue targetId="hub-cards" label={vi ? "Cuộn để khám phá" : "Scroll to explore"} />
        </section>
        <section className="hub-cards" id="hub-cards">
          {page.cards.map(([title, description], index) => (
            <article key={title}>
              {kind !== "sourcing" && (
                <div className="hub-card-image">
                  <Image
                    src={`/images/${kind === "factory-videos" ? "videos" : "insights"}/${imageFor(index)}`}
                    alt={title}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                  />
                </div>
              )}
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              {kind === "insights" && (
                <a href="#top">{vi ? "Đọc thêm" : "Read article"} ↗</a>
              )}
              {kind === "factory-videos" && (
                <button type="button" className="video-placeholder">
                  ▶ {vi ? "Xem video mẫu" : "Preview video"}
                </button>
              )}
            </article>
          ))}
        </section>
        <section className="hub-bottom">
          <p className="eyebrow">
            {vi
              ? "Không tìm thấy đúng sản phẩm?"
              : "Can't find exactly what you need?"}
          </p>
          <h2>
            {vi ? "Hãy để MISO JAPAN tìm giúp bạn." : "Let MISO JAPAN search for you."}
          </h2>
          <Link
            className="button button-primary"
            href={vi ? "/vi/rfq" : "/rfq"}
          >
            {vi ? "Yêu cầu hỗ trợ sourcing" : "Request sourcing support"} ↗
          </Link>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
