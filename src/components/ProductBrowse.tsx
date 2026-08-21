import Link from "next/link";
import Image from "next/image";
import { productCatalog, type Locale } from "@/data/landing-page";

export function ProductBrowse({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const imageFor = (slug: string) =>
    ({
      "commercial-plywood": "/images/products/product-commercial-plywood.jpg",
      "film-faced-plywood": "/images/products/product-film-faced-plywood.jpg",
      "packing-plywood": "/images/products/product-packing-plywood.jpg",
      "natural-veneer": "/images/products/product-natural-veneer.jpg",
      "engineered-veneer": "/images/products/product-engineered-veneer.jpg",
      lvl: "/images/products/product-lvl.jpg",
      "mdf-hdf": "/images/products/product-mdf-hdf.jpg",
      "finger-joint-board": "/images/products/product-finger-joint-board.jpg",
    })[slug];
  const iconFor = (slug: string) =>
    ({
      "commercial-plywood": "▰",
      "film-faced-plywood": "▤",
      "packing-plywood": "◇",
      "natural-veneer": "◒",
    })[slug] ?? "▰";

  return (
    <section className="product-browse">
      <div className="section-heading">
        <p className="eyebrow">
          {vi ? "Tìm theo sản phẩm" : "Browse by product"}
        </p>
        <p className="browse-heading-copy">
          {vi
            ? "Tìm đúng sản phẩm cho nhu cầu của bạn. Chúng tôi kết nối bạn với nhà sản xuất phù hợp."
            : "Find the right plywood for your business. We match you with suitable manufacturers."}
        </p>
        <Link className="browse-heading-link" href={vi ? "/vi/products" : "/products"}>
          {vi ? "Xem tất cả sản phẩm" : "View all products"} <span aria-hidden="true">›</span>
        </Link>
      </div>
      <div className="browse-grid">
        {productCatalog.slice(0, 4).map((product) => (
          <Link
            className="browse-card"
            href={`${vi ? "/vi" : ""}/products/${product.slug}`}
            key={product.slug}
          >
            <div className="browse-art">
              {imageFor(product.slug) && (
                <Image
                  src={imageFor(product.slug)!}
                  alt={vi ? product.viName : product.name}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              )}
              <span className="browse-art-category">{product.category}</span>
            </div>
            <div className="browse-card-icon" aria-hidden="true">{iconFor(product.slug)}</div>
            <h3>{vi ? product.viName : product.name}</h3>
            <p className="browse-card-description">{product.description}</p>
            <ul className="browse-card-specs">
              {product.specs.split(" · ").map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <span className="browse-card-details">
              {vi ? "Xem chi tiết" : "View details"} <span aria-hidden="true">›</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
