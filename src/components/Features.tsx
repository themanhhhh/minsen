import Image from "next/image";
import Link from "next/link";
import { getLandingContent, productCatalog, type Locale } from "@/data/landing-page";

export function Features({ locale }: { locale: Locale }) {
  const { buyerConcerns } = getLandingContent(locale);
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
        {productCatalog.slice(0, 6).map((product, index) => (
          <article
            className={`product-card ${product.className}`}
            key={product.slug}
          >
            <div className="product-art">
              <Image
                src={`/images/products/product-${product.slug}.jpg`}
                alt={locale === "vi" ? product.viName : product.name}
                fill
                sizes="(max-width: 820px) 100vw, 33vw"
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <p className="product-detail">{product.category}</p>
              <h3>{locale === "vi" ? product.viName : product.name}</h3>
              <p>{product.description}</p>
            </div>
            <Link
              href={`${locale === "vi" ? "/vi" : ""}/products/${product.slug}`}
              className="feature-arrow"
              aria-label={`${locale === "vi" ? "Xem chi tiết" : "View details"}: ${product.name}`}
            >
              ↗
            </Link>
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
