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
      eyebrow: "Sourcing services",
      title: "One partner between your requirement and the right factory.",
      description:
        "Minsen identifies, verifies and coordinates suitable manufacturers so you can source with less uncertainty.",
      cards: [
        [
          "Factory matching",
          "Tell us your product and we will shortlist 3–5 suitable manufacturers.",
        ],
        [
          "Verification and QC",
          "We review capability, production and quality requirements before cooperation.",
        ],
        [
          "Export coordination",
          "From quotation and sample to documents, loading and shipment.",
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
      eyebrow: "Dịch vụ sourcing",
      title: "Một đối tác giữa yêu cầu của bạn và nhà máy phù hợp.",
      description:
        "Minsen tìm kiếm, xác minh và điều phối các nhà máy phù hợp để bạn sourcing với ít rủi ro hơn.",
      cards: [
        [
          "Kết nối nhà máy",
          "Gửi sản phẩm cần tìm để chúng tôi chọn ra 3–5 nhà máy phù hợp.",
        ],
        [
          "Xác minh và QC",
          "Xem xét năng lực, sản xuất và yêu cầu chất lượng trước khi hợp tác.",
        ],
        [
          "Điều phối xuất khẩu",
          "Từ báo giá, mẫu đến chứng từ, đóng hàng và vận chuyển.",
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
      title: "Thông tin hữu ích cho quyết định mua hàng tốt hơn.",
      description:
        "Hướng dẫn thực tế cho buyer quốc tế khi sourcing plywood, veneer và ván gỗ từ Việt Nam.",
      cards: [
        [
          "Cách sourcing plywood từ Việt Nam",
          "Những câu hỏi quan trọng về quy cách, nhà máy và lô hàng.",
        ],
        [
          "MR, Melamine và Phenolic",
          "Hiểu các loại keo và lựa chọn hiệu năng phù hợp với ứng dụng.",
        ],
        [
          "Cách kiểm tra plywood",
          "Điểm bắt đầu thực tế cho duyệt mẫu và kiểm soát chất lượng trước xuất hàng.",
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
            {vi ? "Hãy để Minsen tìm giúp bạn." : "Let Minsen search for you."}
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
