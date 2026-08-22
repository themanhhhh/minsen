import Link from "next/link";
import Image from "next/image";
import { factories, productCatalog, type Locale } from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGallery } from "@/components/ProductGallery";
import { ScrollCue } from "@/components/ScrollCue";

export function ProductProfile({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const product = productCatalog.find((item) => item.slug === slug);
  const vi = locale === "vi";
  if (!product)
    return (
      <main className="not-found-panel">
        <h1>Product not found</h1>
        <Link href={vi ? "/vi/products" : "/products"}>Back to products</Link>
      </main>
    );
  const image = `/images/products/product-${product.slug}.jpg`;
  const applicationImages: Record<string, string[]> = {
    "commercial-plywood": [
      "/images/products/commercial-plywood-main.jpg",
      "/images/quality/quality-control-plywood.jpg",
      "/images/factories/vn-pw-018/product-stack.jpg",
    ],
    "film-faced-plywood": [
      "/images/quality/quality-control-plywood.jpg",
      "/images/factories/vn-pw-038/product-stack.jpg",
      "/images/logistics/export-container-loading.jpg",
    ],
    "packing-plywood": [
      "/images/factories/vn-pw-052/product-stack.jpg",
      "/images/logistics/export-container-loading.jpg",
      "/images/videos/container-loading-poster.jpg",
    ],
    "natural-veneer": [
      "/images/videos/veneer-peeling-poster.jpg",
      "/images/process/sample-approval.jpg",
      "/images/factories/vn-pw-018/production-line.jpg",
    ],
    "engineered-veneer": [
      "/images/videos/veneer-peeling-poster.jpg",
      "/images/process/sample-approval.jpg",
      "/images/quality/quality-control-plywood.jpg",
    ],
    lvl: [
      "/images/factories/vn-pw-038/product-stack.jpg",
      "/images/factories/vn-pw-038/production-line.jpg",
      "/images/logistics/export-container-loading.jpg",
    ],
    "mdf-hdf": [
      "/images/process/sample-approval.jpg",
      "/images/factories/vn-pw-052/product-stack.jpg",
      "/images/quality/quality-control-plywood.jpg",
    ],
    "finger-joint-board": [
      "/images/process/sample-approval.jpg",
      "/images/factories/vn-pw-018/production-line.jpg",
      "/images/factories/vn-pw-018/product-stack.jpg",
    ],
  };
  const galleryImages = [image, ...(applicationImages[product.slug] ?? [])].map(
    (src, index) => ({
      src,
      alt:
        index === 0
          ? vi
            ? product.viName
            : product.name
          : vi
            ? `${product.viName} - hình ảnh ứng dụng`
            : `${product.name} application`,
    }),
  );
  const matchingFactories = factories.filter((factory) =>
    factory.products.includes(product.name),
  );
  const factoryImages: Record<string, string> = {
    "VN-PW-018": "/images/factories/vn-pw-018/exterior.jpg",
    "VN-PW-038": "/images/factories/vn-pw-038/exterior.jpg",
    "VN-PW-052": "/images/factories/vn-pw-052/exterior.jpg",
  };
  return (
    <>
      <Header locale={locale} />
      <main className="product-profile">
        <section className="product-profile-hero">
          <div>
            <p className="eyebrow eyebrow-light">
              {vi ? product.viName : product.name}
            </p>
            <h1>
              {vi
                ? "Tìm nguồn cung phù hợp cho sản phẩm này."
                : "Find the right source for this product."}
            </h1>
            <p>
              {vi
                ? "Chia sẻ quy cách và nhu cầu của bạn. Minsen sẽ tìm kiếm trong mạng lưới nhà máy để chọn ra các phương án phù hợp."
                : "Share your specification and requirements. Minsen will search the manufacturing network and shortlist suitable options."}
            </p>
            <Link
              className="button button-light"
              href={`${vi ? "/vi" : ""}/rfq?product=${product.slug}`}
            >
              {vi ? "Gửi yêu cầu sản phẩm" : "Request this product"} ↗
            </Link>
          </div>
          <ProductGallery
            images={galleryImages}
            productName={vi ? product.viName : product.name}
          />
          <ScrollCue targetId="product-profile-body" label={vi ? "Cuộn để xem thông tin" : "Scroll to view details"} />
        </section>
        <section className="product-profile-body" id="product-profile-body">
          <div>
            <p className="eyebrow">
              {vi ? "Thông tin sản phẩm" : "Product information"}
            </p>
            <h2>{vi ? product.viName : product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-profile-spec">
            <h3>{vi ? "Quy cách tham khảo" : "Reference specifications"}</h3>
            <p>{product.specs}</p>
            <h3>{vi ? "Ứng dụng" : "Typical applications"}</h3>
            <p>
              {vi
                ? "Nội thất · Xây dựng · Đóng gói · Trang trí · Sản xuất OEM"
                : "Furniture · Construction · Packaging · Interior · OEM production"}
            </p>
          </div>
        </section>
        <section className="product-factories">
          <div className="product-factories-heading">
            <div>
              <p className="eyebrow">
                {vi ? "Nhà máy phù hợp" : "Matched manufacturers"}
              </p>
              <h2>
                {vi
                  ? "Nhà máy đang sản xuất sản phẩm này."
                  : "Factories producing this product."}
              </h2>
            </div>
            <p>
              {vi
                ? "Xem nhanh các hồ sơ có năng lực tham khảo phù hợp, sau đó mở chi tiết hoặc gửi yêu cầu sourcing."
                : "Review manufacturers with relevant reference capabilities, then open a profile or start a sourcing request."}
            </p>
          </div>
          <div className="product-factory-grid">
            {matchingFactories.map((factory) => (
              <article className="product-factory-card" key={factory.id}>
                <div className="product-factory-image">
                  {factoryImages[factory.id] && (
                    <Image
                      src={factoryImages[factory.id]}
                      alt={`${factory.id} factory`}
                      fill
                      sizes="(max-width: 820px) 100vw, 33vw"
                    />
                  )}
                  <span>{factory.region}</span>
                </div>
                <p className="product-factory-location">{factory.location}</p>
                <h3>{factory.id}</h3>
                <div className="product-factory-tags">
                  {factory.products.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <dl>
                  <div>
                    <dt>{vi ? "Công suất" : "Capacity"}</dt>
                    <dd>{factory.monthlyCapacity}</dd>
                  </div>
                  <div>
                    <dt>{vi ? "Vật liệu" : "Materials"}</dt>
                    <dd>{factory.materials.join(" · ")}</dd>
                  </div>
                </dl>
                <Link
                  className="product-factory-link"
                  href={`${vi ? "/vi" : ""}/manufacturers/${factory.id.toLowerCase()}`}
                >
                  {vi ? "Xem hồ sơ nhà máy" : "View factory profile"} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          {matchingFactories.length === 0 && (
            <p className="product-factories-empty">
              {vi
                ? "Chưa có hồ sơ nhà máy phù hợp. Hãy gửi yêu cầu để chúng tôi tìm thêm lựa chọn."
                : "No matching factory profiles yet. Submit an inquiry and we will find more options."}
            </p>
          )}
        </section>
        <section className="product-profile-cta">
          <p className="eyebrow">
            {vi ? "Cần quy cách riêng?" : "Need a custom specification?"}
          </p>
          <h2>
            {vi
              ? "Để Minsen tìm nhà máy phù hợp cho bạn."
              : "Let Minsen find the right factory for you."}
          </h2>
          <Link
            className="button button-primary"
            href={vi ? "/vi/rfq" : "/rfq"}
          >
            {vi ? "Bắt đầu RFQ" : "Start an RFQ"} ↗
          </Link>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
