import Image from "next/image";
import Link from "next/link";
import { getLandingContent, productCatalog, type Locale } from "@/data/landing-page";

export function Features({ locale }: { locale: Locale }) {
  const { buyerConcerns } = getLandingContent(locale);
  const products = productCatalog.filter((product) =>
    [
      "Commercial Plywood",
      "Film Faced Plywood",
      "Packing Plywood",
      "Natural Veneer",
      "MDF / HDF",
      "LVL",
    ].includes(product.name),
  );
  return (
    <section className="section products-section" id="products">
      <div className="section-heading">
        <p className="eyebrow">
          {locale === "vi" ? "Danh mục sản phẩm" : "Our product range"}
        </p>
        <h2>
          {locale === "vi" ? (
            <>
              Sản phẩm gỗ Việt Nam
              <br />
              <em>cho buyer quốc tế.</em>
            </>
          ) : (
            <>
              Vietnam-made products
              <br />
              <em>for global buyers.</em>
            </>
          )}
        </h2>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <article
            className={`product-card ${product.className}`}
            key={product.slug}
          >
            <div className="product-art">
              <Image src={`/images/products/product-${product.slug}.jpg`} alt={locale === "vi" ? product.viName : product.name} fill sizes="(max-width: 820px) 100vw, 33vw" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <p className="product-detail">{locale === "vi" ? product.viCategory : product.category}</p>
              <h3>{locale === "vi" ? product.viName : product.name}</h3>
              <p>{locale === "vi" ? product.viDescription : product.description}</p>
            </div>
            <div className="product-card-actions">
              <Link href={`${locale === "vi" ? "/vi" : ""}/products/${product.slug}`}>
                {locale === "vi" ? "Xem chi tiết" : "View details"} <span aria-hidden="true">↗</span>
              </Link>
              <Link href={`${locale === "vi" ? "/vi" : ""}/manufacturers?product=${encodeURIComponent(product.name)}`}>
                {locale === "vi" ? "Tìm nhà máy" : "Find factories"} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="concerns-row">
        <p className="eyebrow">
          {locale === "vi"
            ? "Bạn không cần phải lo lắng về"
            : "You should not have to worry about"}
        </p>
        <div>
          {buyerConcerns.map((concern) => (
            <span key={concern}>{concern}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
