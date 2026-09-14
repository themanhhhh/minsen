"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { getLocalizedPath, type Locale } from "@/data/landing-page";
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  Factory,
  ShieldCheck,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

type BuyerIconName = "factory" | "cart" | "clipboard" | "shield" | "users" | "building" | "badge";

type BuyerProfile = {
  number: string;
  id: string;
  country: string;
  mainProduct: string[];
  core: string[];
  glue: string[];
  needs: string[];
  buying: string[];
  application: string[];
  fit: string;
  fitDescription: string;
  qualifications: string[];
  model: string;
  market: string;
  ports: string;
};

const buyerProfiles: BuyerProfile[] = [
  {
    number: "01",
    id: "MJB-IN-0001",
    country: "India",
    mainProduct: ["Commercial Plywood,", "Film Faced Plywood"],
    core: ["Eucalyptus Core,", "Combi Core"],
    glue: ["MR, E2", "Melamine"],
    needs: [
      "Nhu cầu đều đặn theo tháng (theo container)",
      "Ưu tiên ổn định chất lượng & kiểm soát độ ẩm",
      "Đa dạng cấp phẩm & chủng loại",
    ],
    buying: ["Mua theo số lượng", "Ưu tiên hợp tác dài hạn", "Giá cạnh tranh nhưng đảm bảo chất lượng"],
    application: ["Nội thất, Nội thất văn phòng,", "Xây dựng"],
    fit: "Cao",
    fitDescription: "Phù hợp với nhà máy có chất lượng ổn định và năng lực cung ứng tốt",
    qualifications: ["Chứng chỉ chất lượng (ISO)", "Năng lực sản xuất ổn định", "Lịch sử giao hàng"],
    model: "Nhập khẩu trực tiếp",
    market: "Miền Tây & Miền Bắc Ấn Độ",
    ports: "Nhava Sheva, Mundra",
  },
  {
    number: "02",
    id: "MJB-IN-0002",
    country: "India",
    mainProduct: ["Film Faced Plywood,", "Marine Plywood"],
    core: ["Hardwood Core,", "Combi Core"],
    glue: ["Phenolic,", "WBP"],
    needs: [
      "Phục vụ dự án xây dựng & hạ tầng",
      "Yêu cầu cao về chất lượng film và độ bền",
      "Đơn hàng lớn và nhu cầu ổn định",
    ],
    buying: ["Mua theo chất lượng & tiêu chuẩn", "Hợp tác dài hạn", "Dịch vụ sau bán hàng quan trọng"],
    application: ["Xây dựng, Ván khuôn", "bê tông"],
    fit: "Rất cao",
    fitDescription: "Chuyên về Film Faced & Marine plywood",
    qualifications: ["Chứng chỉ WBP/Phenolic", "Kiểm tra film & độ bền", "Năng lực cung ứng lớn", "Hồ sơ dự án tương tự"],
    model: "Nhập khẩu trực tiếp",
    market: "Nam Ấn Độ",
    ports: "Chennai, Tuticorin",
  },
  {
    number: "03",
    id: "MJB-IN-0003",
    country: "India",
    mainProduct: ["Furniture Plywood", "BWP Plywood"],
    core: ["Poplar Core", "Combi Core"],
    glue: ["E1, Formaldehyde", "Melamine"],
    needs: [
      "Nhu cầu liên tục cho sản xuất nội thất",
      "Có yêu cầu chất lượng bề mặt & sự đồng đều",
      "Chấp nhận nhiều container mix",
    ],
    buying: ["Ưu tiên chất lượng", "Giá ổn định & nguồn cung ổn định", "Cần hỗ trợ kỹ thuật"],
    application: ["Nội thất, Nội thất cao cấp,", "Nội thất retail"],
    fit: "Trung bình",
    fitDescription: "Phù hợp với nhà máy chuyên plywood nội thất",
    qualifications: ["Chất lượng bề mặt", "Độ ẩm ổn định", "Mẫu test đạt yêu cầu"],
    model: "Nhập khẩu trực tiếp",
    market: "Miền Tây Ấn Độ",
    ports: "Nhava Sheva, Mundra",
  },
  {
    number: "04",
    id: "MJB-IN-0004",
    country: "India",
    mainProduct: ["Commercial Plywood,", "Blockboard"],
    core: ["Eucalyptus Core", "Combi Core"],
    glue: ["MR, E2,", "Melamine"],
    needs: ["Phân phối cho nhiều khu vực", "Kết hợp bán lẻ & dự án", "Mua theo nhiều quy cách"],
    buying: ["Nhạy cảm về giá", "Vòng quay nhanh", "Điều khoản thanh toán linh hoạt"],
    application: ["Nội thất, Nội thất văn phòng,", "Đóng gói"],
    fit: "Trung bình",
    fitDescription: "Phù hợp với nhà máy giá cạnh tranh & giao hàng nhanh",
    qualifications: ["Khả năng bề mặt", "Độ đa dạng quy cách", "Giá cạnh tranh"],
    model: "Nhập khẩu trực tiếp",
    market: "Miền Bắc Ấn Độ",
    ports: "Nhava Sheva, Mundra",
  },
  {
    number: "05",
    id: "MJB-IN-0005",
    country: "India",
    mainProduct: ["Industrial Plywood,", "Packing Plywood"],
    core: ["Hardwood Core,", "Eucalyptus Core"],
    glue: ["MR, E1", "Melamine"],
    needs: ["Phục vụ cho công nghiệp & đóng gói", "Độ bền & strength quan trọng", "Mua lặp lại thường xuyên"],
    buying: ["Quan tâm công năng", "Chất lượng phù hợp giá", "Giao hàng đúng tiến độ là yếu tố then chốt"],
    application: ["Đóng gói công nghiệp,", "Packaging"],
    fit: "Trung bình",
    fitDescription: "Phù hợp với nhà máy chuyên plywood công nghiệp, đóng gói",
    qualifications: ["Chứng chỉ chất lượng", "Độ bền & MOE/Strength", "Năng lực sản xuất ổn định"],
    model: "Nhập khẩu trực tiếp",
    market: "Miền Trung Ấn Độ",
    ports: "Nhava Sheva, Mundra",
  },
  {
    number: "06",
    id: "MJB-IN-0006",
    country: "India",
    mainProduct: ["Film Faced Plywood,", "Construction Plywood"],
    core: ["Eucalyptus Core,", "Combi Core"],
    glue: ["Phenolic,", "WBP"],
    needs: [
      "Phục vụ dự án bất động sản & hạ tầng",
      "Đơn hàng lớn & ổn định",
      "Yêu cầu chất lượng & chu kỳ cung ứng dài",
    ],
    buying: ["Đặc biệt chú ý độ tin cậy & lịch sử giao hàng", "Ưu tiên hợp đồng dài hạn", "Yêu cầu chứng từ đầy đủ"],
    application: ["Xây dựng, Ván khuôn", "bê tông"],
    fit: "Cao",
    fitDescription: "Phù hợp với nhà máy có nguồn cung ổn định, kiểm soát chất lượng tốt",
    qualifications: ["WBP/Phenolic", "Kiểm tra chất lượng nghiêm ngặt", "Hồ sơ dự án & tài chính"],
    model: "Nhập khẩu trực tiếp",
    market: "Miền Bắc & Đông Ấn Độ",
    ports: "Kolkata, Vishakhapatnam",
  },
];

const productOptions = Array.from(
  new Set(
    buyerProfiles.flatMap((buyer) =>
      buyer.mainProduct.map((product) => product.replace(/,$/, "")),
    ),
  ),
);
const marketOptions = Array.from(
  new Set(buyerProfiles.map((buyer) => buyer.market)),
);
const fitOptions = ["Rất cao", "Cao", "Trung bình"];
const buyerPageSize = 4;

const marketRail = [
  { country: "India", label: "ẤN ĐỘ", labelEn: "INDIA", className: "buyer-rail-india" },
  { country: "China", label: "TRUNG QUỐC", labelEn: "CHINA", className: "buyer-rail-china" },
  { country: "Vietnam", label: "VIỆT NAM", labelEn: "VIETNAM", className: "buyer-rail-vietnam" },
  { country: "Bangladesh", label: "BANGLADESH", labelEn: "BANGLADESH", className: "buyer-rail-bangladesh" },
  { country: "Indonesia", label: "INDONESIA", labelEn: "INDONESIA", className: "buyer-rail-indonesia" },
  { country: "Middle East", label: "TRUNG ĐÔNG", labelEn: "MIDDLE EAST", className: "buyer-rail-middle-east" },
  { country: "Africa", label: "CHÂU PHI", labelEn: "AFRICA", className: "buyer-rail-africa" },
  { country: "Global", label: "KHÁC / GLOBAL", labelEn: "GLOBAL", className: "buyer-rail-global" },
  { country: "Americas", label: "KHÁC / MỸ", labelEn: "AMERICAS", className: "buyer-rail-america" },
  { country: "Other", label: "KHÁC / KHÁC", labelEn: "OTHER", className: "buyer-rail-other" },
];

const buyerPageCopy = {
  en: {
    eyebrow: "INTERNATIONAL BUYER DIRECTORY",
    title: "Find buyers aligned with your manufacturing capability.",
    description: "Explore structured buyer profiles by country, product requirements and buying context. MISO JAPAN helps qualified manufacturers identify relevant opportunities and manage the connection locally.",
    action: "Ask MISO JAPAN to connect",
    catalogueTitle: "INTERNATIONAL BUYER DIRECTORY",
    catalogueDescription: "600 TRUSTED BUYER PROFILES MAPPED ACROSS PLYWOOD & WOOD PRODUCTS",
    countryLabel: "Filter by country",
    featuredCountry: "INDIA",
    featuredCountryType: "BUYER DIRECTORY",
  },
  vi: {
    eyebrow: "DANH MỤC BUYER QUỐC TẾ",
    title: "Tìm đúng buyer phù hợp với năng lực nhà máy của bạn.",
    description: "Khám phá hồ sơ buyer có cấu trúc theo quốc gia, yêu cầu sản phẩm và bối cảnh mua hàng. MISO JAPAN giúp nhà máy phù hợp xác định cơ hội liên quan và điều phối kết nối tại địa phương.",
    action: "Yêu cầu MISO JAPAN kết nối",
    catalogueTitle: "DANH MỤC BUYER QUỐC TẾ",
    catalogueDescription: "600 HỒ SƠ BUYER UY TÍN TRONG NGÀNH PLYWOOD & VÁN GỖ ĐƯỢC LẬP BẢN ĐỒ DỮ LIỆU",
    countryLabel: "Lọc theo quốc gia",
    featuredCountry: "ẤN ĐỘ",
    featuredCountryType: "DANH MỤC BUYER",
  },
  ar: {
    eyebrow: "دليل المشترين الدوليين",
    title: "اعثر على مشترين متوافقين مع قدرات مصنعك.",
    description: "استكشف ملفات المشترين حسب الدولة ومتطلبات المنتج وسياق الشراء. تساعد MISO JAPAN المصانع المؤهلة على تحديد الفرص المناسبة وإدارة التواصل محليًا.",
    action: "اطلب من MISO JAPAN التواصل",
    catalogueTitle: "دليل المشترين الدوليين",
    catalogueDescription: "600 ملف مشتري موثوق في مجال الخشب الرقائقي والمنتجات الخشبية",
    countryLabel: "تصفية حسب الدولة",
    featuredCountry: "الهند",
    featuredCountryType: "دليل المشترين",
  },
} as const;

function BuyerIcon({ name }: { name: BuyerIconName }) {
  const props = { size: 18, strokeWidth: 1.65, "aria-hidden": true } as const;

  switch (name) {
    case "cart":
      return <ShoppingCart {...props} />;
    case "clipboard":
      return <ClipboardList {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "users":
      return <UsersRound {...props} />;
    case "building":
      return <Building2 {...props} />;
    case "badge":
      return <BadgeCheck {...props} />;
    default:
      return <Factory {...props} />;
  }
}

function IndiaFlag() {
  return <span className="buyer-flag" aria-label="Ấn Độ" role="img" />;
}

function IndiaLandmark() {
  return (
    <svg className="buyer-landmark" viewBox="0 0 360 120" role="img" aria-label="Minh họa Taj Mahal tại Ấn Độ">
      <defs>
        <linearGradient id="buyer-landmark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f3e5d4" />
          <stop offset="1" stopColor="#bd7555" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="#b87757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 108h336" />
        <path d="M29 108V57l9-11 9 11v51M38 45V19M34 23l4-8 4 8M43 108V71h-10v37" />
        <path d="M303 108V57l9-11 9 11v51M312 45V19M308 23l4-8 4 8M317 108V71h-10v37" />
        <path d="M68 108V66h42v42M250 108V66h42v42" />
        <path d="M77 66v-9l12-7 12 7v9M259 66v-9l12-7 12 7v9" />
      </g>
      <g fill="url(#buyer-landmark-fill)" stroke="#a9674e" strokeLinejoin="round" strokeWidth="2">
        <path d="M109 108V55c15-3 27-3 42 0v53Z" />
        <path d="M151 108V42c10-7 48-7 58 0v66Z" />
        <path d="M209 108V55c15-3 27-3 42 0v53Z" />
        <path d="M163 42c5-11 29-11 34 0Z" />
        <path d="M172 28c3-15 13-24 17-24s14 9 17 24c-9-6-25-6-34 0Z" />
        <path d="M187 4V0M180 30c6-4 14-4 20 0M172 54h35v54h-35Z" fill="#f7eee3" />
        <path d="M179 108V79c0-13 21-13 21 0v29" fill="#bd7555" />
        <path d="M122 55c2-10 11-17 16-17s14 7 16 17M238 55c2-10 11-17 16-17s14 7 16 17" fill="#f2dfcc" />
        <path d="M123 55V31M153 55V31M238 55V31M268 55V31" fill="none" />
      </g>
      <g fill="#e9c69e" opacity=".75">
        <path d="M136 91h9v17h-9zM216 91h9v17h-9zM155 72h8v15h-8zM197 72h8v15h-8z" />
      </g>
    </svg>
  );
}

function LayerHeading({ tone, label, question }: { tone: "green" | "blue" | "gold"; label: string; question: string }) {
  return (
    <div className={`buyer-layer-heading buyer-layer-heading-${tone}`}>
      <strong>{label}</strong>
      <span>{question}</span>
    </div>
  );
}

function BuyerList({ items }: { items: string[] }) {
  return (
    <ul className="buyer-bullet-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function BuyerCard({ buyer }: { buyer: BuyerProfile }) {
  return (
    <article className={`buyer-profile buyer-profile-${buyer.number}`}>
      <header className="buyer-profile-header">
        <span className="buyer-profile-number">{buyer.number}</span>
        <strong>MÃ BUYER: {buyer.id}</strong>
        <span className="buyer-profile-country"><IndiaFlag /> ẤN ĐỘ</span>
      </header>

      <section className="buyer-layer buyer-signal-layer">
        <LayerHeading tone="green" label="TẦNG 1 – PRODUCT SIGNAL" question="BUYER ĐANG CẦN GÌ?" />
        <div className="buyer-signal-grid">
          <div className="buyer-signal-item">
            <BuyerIcon name="factory" />
            <div><span className="buyer-field-label">SẢN PHẨM CHÍNH</span>{buyer.mainProduct.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
          <div className="buyer-signal-item">
            <BuyerIcon name="building" />
            <div><span className="buyer-field-label">LÕI (CORE)</span>{buyer.core.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
          <div className="buyer-signal-item">
            <BuyerIcon name="badge" />
            <div><span className="buyer-field-label">KEO (GLUE)</span>{buyer.glue.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
        </div>
      </section>

      <section className="buyer-layer buyer-context-layer">
        <LayerHeading tone="blue" label="TẦNG 2 – BUYING CONTEXT" question="BUYER MUA NHƯ THẾ NÀO?" />
        <div className="buyer-context-grid">
          <div className="buyer-context-column">
            <div className="buyer-context-label"><BuyerIcon name="clipboard" /><strong>HỒ SƠ NHU CẦU</strong></div>
            <BuyerList items={buyer.needs} />
          </div>
          <div className="buyer-context-column">
            <div className="buyer-context-label"><BuyerIcon name="cart" /><strong>ĐẶC ĐIỂM MUA HÀNG</strong></div>
            <BuyerList items={buyer.buying} />
          </div>
          <div className="buyer-context-column buyer-application-column">
            <div className="buyer-context-label"><BuyerIcon name="building" /><strong>ỨNG DỤNG CUỐI</strong></div>
            <p>{buyer.application.map((line) => <span key={line}>{line}</span>)}</p>
          </div>
        </div>
      </section>

      <section className="buyer-layer buyer-fit-layer">
        <LayerHeading tone="gold" label="TẦNG 3 – FACTORY FIT" question="NHÀ MÁY CỦA BẠN CÓ PHÙ HỢP?" />
        <div className="buyer-fit-grid">
          <div className="buyer-fit-column">
            <div className="buyer-context-label"><BuyerIcon name="factory" /><strong>MỨC ĐỘ PHÙ HỢP<br />VỚI NHÀ MÁY</strong></div>
            <b className="buyer-fit-level">{buyer.fit}</b>
            <p>{buyer.fitDescription}</p>
          </div>
          <div className="buyer-fit-column">
            <div className="buyer-context-label"><BuyerIcon name="clipboard" /><strong>YÊU CẦU QUALIFICATION</strong></div>
            <BuyerList items={buyer.qualifications} />
          </div>
          <div className="buyer-fit-column buyer-access-column">
            <div className="buyer-context-label"><BuyerIcon name="shield" /><strong>TRẠNG THÁI TRUY CẬP</strong></div>
            <strong className="buyer-access-status">THÔNG TIN BUYER<br />ĐƯỢC KIỂM SOÁT<br />THÔNG QUA<br />MISO JAPAN</strong>
          </div>
        </div>
      </section>

      <footer className="buyer-profile-meta">
        <span><b>MÔ HÌNH HỢP TÁC:</b> {buyer.model}</span>
        <span><b>THỊ TRƯỜNG:</b> {buyer.market}</span>
        <span><b>CẢNG ƯU TIÊN:</b> {buyer.ports}</span>
      </footer>
    </article>
  );
}

function CatalogueCategories() {
  const categories: { icon: BuyerIconName; label: string }[] = [
    { icon: "users", label: "NHÀ NHẬP KHẨU" },
    { icon: "building", label: "NHÀ PHÂN PHỐI" },
    { icon: "badge", label: "NHÀ PHÂN PHỐI PLYWOOD / PANEL" },
    { icon: "factory", label: "NHÀ SẢN XUẤT NỘI THẤT" },
    { icon: "building", label: "NGƯỜI DÙNG CÔNG NGHIỆP" },
    { icon: "users", label: "THƯƠNG MẠI / TRADER" },
  ];

  return (
    <nav className="buyer-category-strip" aria-label="Phân loại buyer">
      {categories.map((category) => (
        <span className="buyer-category" key={category.label}>
          <span className="buyer-category-icon"><BuyerIcon name={category.icon} /></span>
          <strong>{category.label}</strong>
        </span>
      ))}
    </nav>
  );
}

export function BuyerCatalogue({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const ar = locale === "ar";
  const copy = buyerPageCopy[locale];
  const [query, setQuery] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [fitFilter, setFitFilter] = useState("");
  const [marketFilter, setMarketFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const deferredQuery = useDeferredValue(query);

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredProfiles = buyerProfiles.filter((buyer) => {
    const searchableText = [
      buyer.id,
      ...buyer.mainProduct,
      ...buyer.core,
      ...buyer.glue,
      ...buyer.needs,
      ...buyer.buying,
      ...buyer.application,
      buyer.fit,
      buyer.fitDescription,
      ...buyer.qualifications,
      buyer.market,
      buyer.ports,
      buyer.model,
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!normalizedQuery || searchableText.includes(normalizedQuery)) &&
      (!productFilter || buyer.mainProduct.some((product) => product.replace(/,$/, "") === productFilter)) &&
      (!fitFilter || buyer.fit === fitFilter) &&
      (!marketFilter || buyer.market === marketFilter) &&
      (!countryFilter || buyer.country === countryFilter)
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProfiles.length / buyerPageSize),
  );
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProfiles = filteredProfiles.slice(
    (safePage - 1) * buyerPageSize,
    safePage * buyerPageSize,
  );
  const hasFilters = Boolean(
    query.trim() || productFilter || fitFilter || marketFilter || countryFilter,
  );
  const clearFilters = () => {
    setQuery("");
    setProductFilter("");
    setFitFilter("");
    setMarketFilter("");
    setCountryFilter("");
    setCurrentPage(1);
  };

  return (
    <div className="buyer-catalogue-page">
      <div className="buyer-catalogue-sheet">
        <section className="buyer-page-intro">
          <div className="buyer-page-intro-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
            <Link className="button button-primary" href={getLocalizedPath(locale, "/rfq")}>
              {copy.action} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="buyer-page-intro-stats" aria-label="Buyer catalogue overview">
            <strong>600+</strong>
            <span>{vi ? "HỒ SƠ BUYER" : ar ? "ملفات المشترين" : "BUYER PROFILES"}</span>
            <small>{vi ? "Được lập bản đồ theo nhu cầu" : ar ? "مصنفة حسب متطلبات الشراء" : "Mapped by buying requirement"}</small>
          </div>
        </section>
        <header className="buyer-catalogue-cover">
          <div className="buyer-cover-copy">
            <h2>{copy.catalogueTitle}</h2>
            <p>{copy.catalogueDescription}</p>
            <div className="buyer-cover-meta"><span>TRANG DANH MỤC 018 / 100</span><i /> <span>TRANG CATALOGUE 046 / 146</span></div>
          </div>
          <IndiaLandmark />
          <div className="buyer-cover-stamp"><strong>{copy.featuredCountry}</strong><span>{copy.featuredCountryType}</span></div>
        </header>

        <CatalogueCategories />

        <section className="buyer-directory-tools" aria-label="Tìm kiếm và lọc buyer">
          <div className="buyer-directory-tools-heading">
            <div>
              <span>TRA CỨU HỒ SƠ BUYER</span>
              <strong>Tìm đúng nhu cầu trước khi matching nhà máy</strong>
            </div>
            <button
              className="buyer-filter-clear"
              type="button"
              onClick={clearFilters}
              disabled={!hasFilters}
            >
              Xóa bộ lọc
            </button>
          </div>
          <div className="buyer-filter-controls">
            <label className="buyer-search-field">
              <span>Tìm kiếm</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Mã buyer, sản phẩm, ứng dụng, thị trường..."
              />
              <b aria-hidden="true">⌕</b>
            </label>
            <label>
              <span>Sản phẩm chính</span>
              <select
                value={productFilter}
                onChange={(event) => {
                  setProductFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">Tất cả sản phẩm</option>
                {productOptions.map((product) => <option key={product}>{product}</option>)}
              </select>
            </label>
            <label>
              <span>Mức độ phù hợp</span>
              <select
                value={fitFilter}
                onChange={(event) => {
                  setFitFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">Tất cả mức độ</option>
                {fitOptions.map((fit) => <option key={fit}>{fit}</option>)}
              </select>
            </label>
            <label>
              <span>Thị trường</span>
              <select
                value={marketFilter}
                onChange={(event) => {
                  setMarketFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">Tất cả thị trường</option>
                {marketOptions.map((market) => <option key={market}>{market}</option>)}
              </select>
            </label>
          </div>
          <div className="buyer-directory-results-bar" aria-live="polite">
            <span>
              Hiển thị <strong>{filteredProfiles.length === 0 ? 0 : (safePage - 1) * buyerPageSize + 1}-{Math.min(safePage * buyerPageSize, filteredProfiles.length)}</strong> trong tổng số <strong>{filteredProfiles.length}</strong> hồ sơ
            </span>
            <span>{hasFilters ? "Đã áp dụng bộ lọc" : "Tất cả hồ sơ đã lập bản đồ"}</span>
          </div>
        </section>

        <main className="buyer-profiles-grid" aria-live="polite">
          {paginatedProfiles.map((buyer) => <BuyerCard buyer={buyer} key={buyer.id} />)}
          {paginatedProfiles.length === 0 && (
            <div className="buyer-empty-results">
              <strong>Không tìm thấy hồ sơ phù hợp</strong>
              <span>Hãy thử từ khóa khác hoặc xóa bớt điều kiện lọc.</span>
              <button type="button" onClick={clearFilters}>Xem tất cả hồ sơ</button>
            </div>
          )}
        </main>

        {filteredProfiles.length > 0 && (
          <nav className="buyer-pagination" aria-label="Phân trang danh sách buyer">
            <button
              type="button"
              aria-label="Trang trước"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                className={page === safePage ? "is-active" : ""}
                type="button"
                aria-current={page === safePage ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {String(page).padStart(2, "0")}
              </button>
            ))}
            <button
              type="button"
              aria-label="Trang sau"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
            >
              →
            </button>
            <span>TRANG {String(safePage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span>
          </nav>
        )}

      </div>
      <aside className="buyer-market-rail" aria-label={copy.countryLabel}>
        {marketRail.map((market) => {
          const isActive = countryFilter === market.country;
          return (
            <button
              className={`${market.className}${isActive ? " is-active" : ""}`}
              type="button"
              aria-pressed={isActive}
              aria-label={`${copy.countryLabel}: ${vi ? market.label : market.labelEn}`}
              onClick={() => {
                setCountryFilter(isActive ? "" : market.country);
                setCurrentPage(1);
              }}
              key={market.country}
            >
              {vi ? market.label : market.labelEn}
            </button>
          );
        })}
      </aside>
    </div>
  );
}
