import Link from "next/link";
import Image from "next/image";
import { factories, type Locale } from "@/data/landing-page";

export function FactoryPreview({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const regionNames = { North: "Miền Bắc", Central: "Miền Trung", South: "Miền Nam" };
  const productNames: Record<string, string> = {
    "Commercial Plywood": "Plywood thương mại",
    "Film-Faced Plywood": "Plywood phủ phim",
    LVL: "LVL",
    Veneer: "Veneer",
  };
  const missing = vi ? "Chưa cung cấp" : "Not provided";
  return (
    <section className="factory-preview">
      <div className="section-heading">
        <p className="eyebrow">
          {vi ? "Mạng lưới MISO JAPAN" : "The MISO JAPAN network"}
        </p>
        <h2>
          {vi ? (
            <>
              Khám phá nhà máy
              <br />
              <em>phù hợp với bạn.</em>
            </>
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
                  alt={`${factory.id} factory`}
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                />
              )}
              <span className="factory-image-status">{factory.imagePath ? "VN" : vi ? "CHƯA CÓ ẢNH" : "IMAGE PENDING"}</span>
               <strong>{vi ? regionNames[factory.region] : factory.region}</strong>
            </div>
            <span className="factory-id">
               {factory.id} · {factory.location}
            </span>
            <h3>{vi ? factory.companyNameVi : factory.displayName}</h3>
            <p>
              {factory.products.slice(0, 2).map((product) => vi ? productNames[product] ?? product : product).join(" · ")} ·{" "}
              {factory.capacity || missing}
            </p>
            <Link
              href={`${vi ? "/vi" : ""}/manufacturers/${factory.slug}`}
            >
              {vi ? "Xem hồ sơ" : "View profile"} ↗
            </Link>
          </article>
        ))}
      </div>
      <Link
        className="button button-primary"
        href={vi ? "/vi/manufacturers" : "/manufacturers"}
      >
        {vi ? "Xem toàn bộ mạng lưới" : "Explore all manufacturers"}{" "}
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
