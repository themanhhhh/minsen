import Link from "next/link";
import Image from "next/image";
import { factories, type Locale } from "@/data/landing-page";

export function FactoryPreview({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const regionNames = { North: "Miền Bắc", Central: "Miền Trung", South: "Miền Nam" };
  const productNames: Record<string, string> = {
    "Commercial Plywood": "Plywood thương mại",
    "Packing Plywood": "Plywood đóng gói",
    "Film Faced Plywood": "Plywood phủ phim",
    "Natural Veneer": "Veneer tự nhiên",
    "MDF / HDF": "MDF / HDF",
    LVL: "LVL",
    Veneer: "Veneer",
  };
  const locations: Record<string, string> = {
    "VN-PW-018": "Bắc Ninh, Việt Nam",
    "VN-PW-038": "Bắc Giang, Việt Nam",
    "VN-PW-052": "Thái Nguyên, Việt Nam",
  };
  const imageFor = (id: string) =>
    id === "VN-PW-018"
      ? "/images/factories/vn-pw-018/exterior.jpg"
      : id === "VN-PW-038"
        ? "/images/factories/vn-pw-038/exterior.jpg"
        : id === "VN-PW-052"
          ? "/images/factories/vn-pw-052/exterior.jpg"
          : undefined;
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
              {imageFor(factory.id) && (
                <Image
                  src={imageFor(factory.id)!}
                  alt={`${factory.id} factory`}
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                />
              )}
              <span>VN</span>
               <strong>{vi ? regionNames[factory.region] : factory.region}</strong>
            </div>
            <span className="factory-id">
               {factory.id} · {vi ? locations[factory.id] ?? factory.location : factory.location}
            </span>
            <h3>
              {vi ? "Đối tác sản xuất plywood" : "Wood manufacturing partner"}
            </h3>
            <p>
              {factory.products.slice(0, 2).map((product) => vi ? productNames[product] ?? product : product).join(" · ")} ·{" "}
              {vi ? factory.monthlyCapacity.replace(" containers", " container/tháng") : factory.monthlyCapacity}
            </p>
            <Link
              href={`${vi ? "/vi" : ""}/manufacturers/${factory.id.toLowerCase()}`}
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
