import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
import { getLocalizedPath, type Locale } from "@/data/landing-page";

type SupplyPath = {
  stat: string;
  statLabel: string;
  title: string;
  points: string[];
  cta: string;
  image: string;
  alt: string;
};

function getSupplyPaths(locale: Locale): SupplyPath[] {
  if (locale === "vi") {
    return [
      {
        stat: "500",
        statLabel: "XƯỞNG & NHÀ MÁY VÁN BÓC",
        title: "THÊM ĐẦU RA — TĂNG QUYỀN CHỦ ĐỘNG",
        points: [
          "Tiếp cận nhiều nhà máy plywood phù hợp",
          "Giảm phụ thuộc vào một đầu mối thu gom",
          "Thêm cơ sở đàm phán giá và điều kiện bán",
          "Cơ hội cải thiện biên lợi nhuận",
          "Có cơ sở mở rộng sản xuất khi đơn hàng ổn định",
        ],
        cta: "GỬI HỒ SƠ NGUỒN CUNG VENEER",
        image: "/images/products/product-natural-veneer.jpg",
        alt: "Veneer tự nhiên được kiểm tra tại khu vực sản xuất",
      },
      {
        stat: "300",
        statLabel: "NHÀ MÁY PLYWOOD",
        title: "CHỦ ĐỘNG ĐẦU VÀO — MỞ RỘNG ĐẦU RA",
        points: [
          "Thêm buyer quốc tế để lựa chọn hợp tác",
          "Đa dạng nguồn veneer phù hợp và ổn định",
          "Cơ hội tối ưu chi phí nguyên liệu và sản xuất",
          "Nâng khả năng cạnh tranh theo yêu cầu buyer",
          "Phát triển đơn hàng dài hạn và công suất phù hợp",
        ],
        cta: "GỬI NĂNG LỰC NHÀ MÁY & NHU CẦU VENEER",
        image: "/images/products/product-commercial-plywood.jpg",
        alt: "Các tấm plywood thương mại trong khu vực sản xuất",
      },
      {
        stat: "1.000",
        statLabel: "BUYER QUỐC TẾ",
        title: "THÊM NGUỒN CUNG — CHỌN ĐÚNG NHÀ MÁY",
        points: [
          "So sánh nhiều phương án nhà cung cấp Việt Nam",
          "Chọn chất lượng phù hợp ứng dụng và quy cách",
          "Đối chiếu giá, năng lực và bằng chứng",
          "Đa dạng nguồn cung, giảm phụ thuộc",
          "Hướng tới nguồn cung ổn định và hợp tác dài hạn",
        ],
        cta: "GỬI YÊU CẦU MUA HÀNG / RFQ",
        image: "/images/team/minsen-buyer-factory-meeting.jpg",
        alt: "Buyer quốc tế trao đổi cùng đội ngũ sourcing và nhà máy",
      },
    ];
  }

  if (locale === "ar") {
    return [
      {
        stat: "500",
        statLabel: "ورشة ومصنع قشرة خشبية",
        title: "مزيد من الطلبات — تحكم أكبر",
        points: [
          "الوصول إلى مصانع خشب رقائقي مناسبة ومتعددة",
          "تقليل الاعتماد على جهة تجميع واحدة",
          "أساس أقوى للتفاوض على السعر وشروط البيع",
          "فرصة لتحسين هامش الربح",
          "توسيع الإنتاج مع استقرار الطلبات",
        ],
        cta: "أرسل ملف توريد القشرة الخشبية",
        image: "/images/products/product-natural-veneer.jpg",
        alt: "قشرة خشبية طبيعية قيد الفحص في منطقة الإنتاج",
      },
      {
        stat: "300",
        statLabel: "مصنع خشب رقائقي",
        title: "مدخلات أكثر مرونة — أسواق أوسع",
        points: [
          "إضافة مشترين دوليين لاختيار فرص التعاون",
          "تنويع مصادر القشرة المناسبة والمستقرة",
          "فرصة لتحسين تكلفة المواد والإنتاج",
          "رفع القدرة التنافسية وفق متطلبات المشتري",
          "تطوير طلبات طويلة الأجل وطاقة مناسبة",
        ],
        cta: "أرسل قدرة المصنع واحتياج القشرة",
        image: "/images/products/product-commercial-plywood.jpg",
        alt: "ألواح خشب رقائقي تجاري في منطقة الإنتاج",
      },
      {
        stat: "1,000",
        statLabel: "مشترٍ دولي",
        title: "مصادر أكثر — المصنع المناسب",
        points: [
          "مقارنة خيارات متعددة من الموردين الفيتناميين",
          "اختيار الجودة المناسبة للتطبيق والمواصفات",
          "مطابقة السعر والقدرة والأدلة",
          "تنويع مصادر التوريد وتقليل الاعتماد",
          "بناء توريد مستقر وتعاون طويل الأجل",
        ],
        cta: "أرسل طلب الشراء / RFQ",
        image: "/images/team/minsen-buyer-factory-meeting.jpg",
        alt: "مشتريون دوليون يتحدثون مع فريق التوريد والمصنع",
      },
    ];
  }

  return [
    {
      stat: "500",
      statLabel: "VENEER MILLS & WORKSHOPS",
      title: "MORE OUTPUT — MORE CONTROL",
      points: [
        "Reach more suitable plywood factories",
        "Reduce reliance on a single collector",
        "Build stronger leverage on price and selling terms",
        "Create an opportunity to improve margins",
        "Expand production when orders become stable",
      ],
      cta: "SEND YOUR VENEER SUPPLY PROFILE",
      image: "/images/products/product-natural-veneer.jpg",
      alt: "Natural veneer inspected in a production area",
    },
    {
      stat: "300",
      statLabel: "PLYWOOD FACTORIES",
      title: "MORE INPUT OPTIONS — MORE OUTPUT",
      points: [
        "Add international buyers to your partnership options",
        "Diversify suitable and stable veneer sources",
        "Find opportunities to optimise material and production costs",
        "Compete more effectively against buyer requirements",
        "Develop long-term orders at the right capacity",
      ],
      cta: "SEND FACTORY CAPABILITY & VENEER NEEDS",
      image: "/images/products/product-commercial-plywood.jpg",
      alt: "Commercial plywood panels in a production area",
    },
    {
      stat: "1,000",
      statLabel: "INTERNATIONAL BUYERS",
      title: "MORE SOURCES — THE RIGHT FACTORY",
      points: [
        "Compare multiple Vietnamese supplier options",
        "Choose quality that fits the application and specification",
        "Compare price, capability and evidence",
        "Diversify supply and reduce dependency",
        "Build a stable, long-term supply relationship",
      ],
      cta: "SEND YOUR PURCHASE REQUEST / RFQ",
      image: "/images/team/minsen-buyer-factory-meeting.jpg",
      alt: "International buyers meeting a sourcing team and factory",
    },
  ];
}

export function HomeSupplyPaths({ locale }: { locale: Locale }) {
  const paths = getSupplyPaths(locale);
  const factoryRegistrationPath = getLocalizedPath(locale, "/factory-registration");
  const rfqPath = getLocalizedPath(locale, "/rfq");
  const heading = locale === "vi"
    ? "Kết nối nguồn cung, nhà máy và buyer quốc tế"
    : locale === "ar"
      ? "نربط مصادر التوريد والمصانع والمشترين الدوليين"
      : "Connecting supply, factories and international buyers";

  return (
    <section className="supply-paths" id="supply-paths" aria-labelledby="supply-paths-heading">
      <h2 className="sr-only" id="supply-paths-heading">{heading}</h2>
      <div className="supply-path-grid">
        {paths.map((path, index) => {
          const href = index === 2 ? rfqPath : factoryRegistrationPath;
          return (
            <article className="supply-path-card" key={path.statLabel}>
              <div className="supply-path-visual">
                <div className="supply-path-stat">
                  <strong>{path.stat}</strong>
                  <span>{path.statLabel}</span>
                </div>
                <div className="supply-path-image">
                  <Image src={path.image} alt={path.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                </div>
              </div>
              <div className="supply-path-body">
                <h3>{path.title}</h3>
                <ul>
                  {path.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={19} strokeWidth={2.5} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link className="supply-path-cta" href={href}>
                  <Send size={20} strokeWidth={2.4} aria-hidden="true" />
                  <span>{path.cta}</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
