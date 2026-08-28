import { type Locale } from "@/data/landing-page";

export function ProductKnowledge({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const applications = vi
    ? [
        "Commercial Plywood — Plywood thương mại",
        "Furniture Plywood — Plywood nội thất",
        "Packing Plywood — Plywood đóng gói",
        "Construction Plywood — Plywood xây dựng",
        "Film-Faced Plywood — Plywood phủ phim",
        "Plywood theo dự án hoặc ứng dụng đặc thù",
      ]
    : [
        "Commercial Plywood",
        "Furniture Plywood",
        "Packing Plywood",
        "Construction Plywood",
        "Film-Faced Plywood",
        "Special application / project-based plywood",
      ];
  const parameters = vi
    ? [
        "Kích thước và độ dày",
        "Dung sai độ dày",
        "Loại gỗ lõi và kết cấu lõi",
        "Cấp mặt và mặt sau",
        "Chất lượng veneer",
        "Yêu cầu keo / bonding",
        "Độ ẩm và tỷ trọng",
        "Yêu cầu bề mặt",
        "Yêu cầu phát thải / thử nghiệm",
        "Đóng gói, marking và yêu cầu thị trường nhập khẩu",
      ]
    : [
        "Size and thickness",
        "Thickness tolerance",
        "Core species and core construction",
        "Face / back grade",
        "Veneer quality",
        "Adhesive / bonding requirement",
        "Moisture content and density",
        "Surface requirement",
        "Emission / testing requirement",
        "Packing, marking and destination market requirements",
      ];

  return (
    <section className="product-knowledge">
      <div className="product-knowledge-copy">
        <p className="eyebrow">
          {vi ? "Hiểu biết sản phẩm và kỹ thuật plywood" : "Plywood product & technical understanding"}
        </p>
        <h2>{vi ? "Sourcing plywood không chỉ là biết tên sản phẩm." : "Plywood sourcing requires more than product names."}</h2>
        <p>
          {vi
            ? "Mỗi buyer, mỗi ứng dụng và mỗi thị trường đều có thể yêu cầu thông số khác nhau. MISO JAPAN hỗ trợ làm rõ yêu cầu kỹ thuật trước khi lựa chọn nhà cung cấp và so sánh báo giá."
            : "Different buyers, applications and markets require different specifications. MISO JAPAN helps clarify technical requirements before supplier matching and quotation comparison."}
        </p>
        <blockquote>
          {vi
            ? "Sản phẩm phải được định nghĩa bằng thông số kỹ thuật, mục đích sử dụng và tiêu chí chấp nhận — không chỉ bằng tên gọi."
            : "The product is defined by specification, application and acceptance criteria — not by name alone."}
        </blockquote>
      </div>
      <div className="product-knowledge-lists">
        <div>
          <h3>{vi ? "Các nhóm ứng dụng điển hình" : "Typical product applications"}</h3>
          <ul>
            {applications.map((application) => <li key={application}>{application}</li>)}
          </ul>
        </div>
        <div>
          <h3>{vi ? "Các thông số cần làm rõ" : "Key parameters we clarify"}</h3>
          <ul>
            {parameters.map((parameter) => <li key={parameter}>{parameter}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
