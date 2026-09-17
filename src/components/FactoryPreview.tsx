import Link from "next/link";
import Image from "next/image";
import { factories, getFactoryPublicLabel, getLocalizedPath, type Locale } from "@/data/landing-page";

export function FactoryPreview({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const ar = locale === "ar";
  const factoryPublicLabel = getFactoryPublicLabel(locale);
  const regionNames = { North: "Miền Bắc", Central: "Miền Trung", South: "Miền Nam" };
  const regionNamesAr = { North: "الشمال", Central: "الوسط", South: "الجنوب" };
  const productNames: Record<string, string> = {
    "Commercial Plywood": "Plywood thương mại",
    "Film-Faced Plywood": "Plywood phủ phim",
    LVL: "LVL",
    Veneer: "Veneer",
  };
  const missing = vi ? "Chưa cung cấp" : ar ? "غير متوفر" : "Not provided";
  return (
    <section className="factory-preview">
      <div className="section-heading">
        <p className="eyebrow">
          {vi ? "Mạng lưới MISO JAPAN" : ar ? "شبكة MISO JAPAN" : "The MISO JAPAN network"}
        </p>
        <h2>
          {vi ? (
            <>
              Khám phá nhà máy
              <br />
              <em>phù hợp với bạn.</em>
            </>
          ) : ar ? (
            <>استكشف المصانع<br /><em>المناسبة لاحتياجاتك.</em></>
          ) : (
            <>
              Explore factories
              <br />
              <em>built for your needs.</em>
            </>
          )}
        </h2>
      </div>
      <div className="preview-grid">
        {factories.slice(0, 3).map((factory) => (
          <article key={factory.id}>
            <div className="factory-placeholder">
              {factory.imagePath && (
                <Image
                  src={factory.imagePath}
                   alt={factoryPublicLabel}
                   fill
                   sizes="(max-width: 820px) 100vw, 33vw"
                   unoptimized={/\.(avif|jfif)$/i.test(factory.imagePath)}
                 />
              )}
              <span className="factory-image-status">{factory.imagePath ? "VN" : vi ? "CHƯA CÓ ẢNH" : ar ? "الصورة قيد التجهيز" : "IMAGE PENDING"}</span>
               <strong>{vi ? regionNames[factory.region] : ar ? regionNamesAr[factory.region] : factory.region}</strong>
            </div>
            <span className="factory-id">
                {factoryPublicLabel} · {factory.location}
             </span>
             <h3>{factoryPublicLabel}</h3>
            <p>
              {factory.products.slice(0, 2).map((product) => vi ? productNames[product] ?? product : product).join(" · ")} ·{" "}
              {factory.capacity || missing}
            </p>
            <Link
              href={getLocalizedPath(locale, `/manufacturers/${factory.slug}`)}
            >
              {vi ? "Xem hồ sơ" : ar ? "عرض الملف" : "View profile"} ↗
            </Link>
          </article>
        ))}
      </div>
      <Link
        className="button button-primary"
        href={getLocalizedPath(locale, "/manufacturers")}
      >
        {vi ? "Xem toàn bộ mạng lưới" : ar ? "استكشف جميع المصانع" : "Explore all manufacturers"}{" "}
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
