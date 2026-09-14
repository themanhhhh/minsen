import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/data/landing-page";

export function HomeResources({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const ar = locale === "ar";
  const cards = vi
    ? [
        [
          "01",
          "Cách sourcing plywood từ Việt Nam",
          "Những câu hỏi quan trọng về quy cách, nhà máy và lô hàng.",
        ],
        [
          "02",
          "MR vs Melamine vs Phenolic",
          "Chọn loại keo phù hợp với ứng dụng và tiêu chuẩn buyer.",
        ],
        [
          "03",
          "Cách kiểm tra plywood",
          "Một checklist thực tế cho duyệt mẫu và kiểm soát chất lượng.",
        ],
      ]
    : ar ? [
        ["01", "كيفية توريد الخشب الرقائقي من فيتنام", "الأسئلة الرئيسية حول المواصفات والمصنع والشحن."],
        ["02", "MR مقابل الميلامين والفينوليك", "اختر أداء الغراء المناسب لتطبيقك وسوقك."],
        ["03", "كيفية فحص الخشب الرقائقي", "قائمة عملية لاعتماد العينات ومراقبة الجودة."],
      ] : [
        [
          "01",
          "How to source plywood from Vietnam",
          "The key questions to ask about specification, factory and shipment.",
        ],
        [
          "02",
          "MR vs Melamine vs Phenolic",
          "Choose the right glue performance for your application and market.",
        ],
        [
          "03",
          "How to inspect plywood",
          "A practical checklist for sample approval and quality control.",
        ],
      ];
  return (
    <section className="home-resources">
      <div className="resources-intro">
        <p className="eyebrow eyebrow-light">
          {vi ? "Kiến thức sourcing" : ar ? "رؤى التوريد" : "Sourcing insights"}
        </p>
        <h2>
          {vi ? (
            <>
              Mua hàng tốt hơn
              <br />
              <em>bắt đầu từ hiểu biết.</em>
            </>
          ) : ar ? (
            <>شراء أفضل<br /><em>يبدأ بالمعرفة.</em></>
          ) : (
            <>
              Better buying
              <br />
              <em>starts with insight.</em>
            </>
          )}
        </h2>
        <p>
            {vi
              ? "Thông tin thực tế giúp buyer quốc tế ra quyết định tự tin hơn khi sourcing sản phẩm gỗ từ Việt Nam."
              : ar ? "معرفة عملية تساعد المشترين الدوليين على اتخاذ قرارات أكثر ثقة عند توريد المنتجات الخشبية من فيتنام." : "Practical knowledge to help international buyers make more confident decisions when sourcing wood products from Vietnam."}
        </p>
        <Link
          className="button button-light"
          href={getLocalizedPath(locale, "/insights")}
        >
          {vi ? "Xem tất cả kiến thức" : ar ? "استكشف جميع الرؤى" : "Explore all insights"} ↗
        </Link>
      </div>
      <div className="resources-list">
        {cards.map(([number, title, description]) => (
          <Link
            className="resource-card"
            href={getLocalizedPath(locale, "/insights")}
            key={number}
          >
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <strong>↗</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
