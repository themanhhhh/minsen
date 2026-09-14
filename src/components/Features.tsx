import Image from "next/image";
import Link from "next/link";
import { getLandingContent, getLocalizedPath, productCatalog, type Locale } from "@/data/landing-page";

export function Features({ locale }: { locale: Locale }) {
  const { buyerConcerns } = getLandingContent(locale);
  const ar = locale === "ar";
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
          {locale === "vi" ? "Danh mục sản phẩm" : ar ? "مجموعة منتجاتنا" : "Our product range"}
        </p>
        <h2>
          {locale === "vi" ? (
            <>
              Sản phẩm gỗ Việt Nam
              <br />
              <em>cho buyer quốc tế.</em>
            </>
          ) : ar ? (
            <>
              منتجات مصنوعة في فيتنام
              <br />
              <em>للمشترين حول العالم.</em>
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
              <Image src={`/images/products/product-${product.slug}.jpg`} alt={locale === "vi" ? product.viName : ar ? product.arName : product.name} fill sizes="(max-width: 820px) 100vw, 33vw" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
                <p className="product-detail">{locale === "vi" ? product.viCategory : ar ? product.arCategory : product.category}</p>
               <h3>{locale === "vi" ? product.viName : ar ? product.arName : product.name}</h3>
               <p>{locale === "vi" ? product.viDescription : ar ? product.arDescription : product.description}</p>
            </div>
            <div className="product-card-actions">
              <Link href={getLocalizedPath(locale, `/products/${product.slug}`)}>
                {locale === "vi" ? "Xem chi tiết" : ar ? "عرض التفاصيل" : "View details"} <span aria-hidden="true">↗</span>
              </Link>
              <Link href={`${getLocalizedPath(locale, "/manufacturers")}?product=${encodeURIComponent(product.name)}`}>
                {locale === "vi" ? "Tìm nhà máy" : ar ? "البحث عن المصانع" : "Find factories"} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="concerns-row">
        <p className="eyebrow">
          {locale === "vi" ? "Bạn không cần phải lo lắng về" : ar ? "لا ينبغي أن تقلق بشأن" : "You should not have to worry about"}
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
