import Image from "next/image";
import { getLandingContent, type Locale } from "@/data/landing-page";

export function Features({ locale }: { locale: Locale }) {
  const { buyerConcerns, products } = getLandingContent(locale);
  const imageFor = {
    "product-plywood": "/images/products/product-commercial-plywood.jpg",
    "product-veneer": "/images/products/product-natural-veneer.jpg",
    "product-custom": "/images/products/product-packing-plywood.jpg",
  };
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
        {products.map((product) => (
          <article
            className={`product-card ${product.className}`}
            key={product.index}
          >
            <div className="product-art">
              <Image src={imageFor[product.className as keyof typeof imageFor]} alt={product.name} fill sizes="(max-width: 820px) 100vw, 33vw" />
              <span>{product.index}</span>
            </div>
            <div>
              <p className="product-detail">{product.detail}</p>
              <h3>{product.name}</h3>
            </div>
            <a
              href="#contact"
              className="feature-arrow"
              aria-label={`${locale === "vi" ? "Gửi yêu cầu" : "Send an inquiry"}: ${product.name}`}
            >
              ↗
            </a>
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
