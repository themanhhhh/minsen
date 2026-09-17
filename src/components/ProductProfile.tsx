import Link from "next/link";
import Image from "next/image";
import { factories, getFactoryPublicLabel, getLocalizedPath, productCatalog, type Locale } from "@/data/landing-page";
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
  const ar = locale === "ar";
  if (!product)
    return (
      <main className="not-found-panel">
        <h1>Product not found</h1>
        <Link href={getLocalizedPath(locale, "/products")}>{vi ? "Quay lại sản phẩm" : ar ? "العودة إلى المنتجات" : "Back to products"}</Link>
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
           ? vi ? product.viName : ar ? product.arName : product.name
           : vi ? `${product.viName} - hình ảnh ứng dụng` : ar ? `${product.arName} - صورة تطبيق` : `${product.name} application`,
    }),
  );
  const normalizeProduct = (value: string) => value.toLowerCase().replace(/-/g, " ").replace(/\s+/g, " ").trim();
  const matchingFactories = factories.filter((factory) =>
    factory.products.some((item) => normalizeProduct(item) === normalizeProduct(product.name)),
  );
  const missing = vi ? "Chưa cung cấp" : "Not provided";
  return (
    <>
      <Header locale={locale} />
      <main className="product-profile">
        <section className="product-profile-hero">
          <div>
            <p className="eyebrow eyebrow-light">
              {vi ? product.viName : ar ? product.arName : product.name}
            </p>
            <h1>
              {vi
                ? "Tìm nguồn cung phù hợp cho sản phẩm này."
                : ar ? "اعثر على المصدر المناسب لهذا المنتج." : "Find the right source for this product."}
            </h1>
            <p>
              {vi
                ? "Chia sẻ quy cách và nhu cầu của bạn. MISO JAPAN sẽ tìm kiếm trong mạng lưới nhà máy để chọn ra các phương án phù hợp."
                : ar ? "شارك المواصفات والمتطلبات. ستبحث MISO JAPAN في شبكة المصانع وتختار الخيارات المناسبة." : "Share your specification and requirements. MISO JAPAN will search the manufacturing network and shortlist suitable options."}
            </p>
            <Link
              className="button button-light"
              href={`${getLocalizedPath(locale, "/rfq")}?product=${product.slug}`}
            >
              {vi ? "Gửi yêu cầu sản phẩm" : ar ? "طلب هذا المنتج" : "Request this product"} ↗
            </Link>
          </div>
          <ProductGallery
            images={galleryImages}
             productName={vi ? product.viName : ar ? product.arName : product.name}
          />
           <ScrollCue targetId="product-profile-body" label={vi ? "Cuộn để xem thông tin" : ar ? "مرر لعرض التفاصيل" : "Scroll to view details"} />
        </section>
        <section className="product-profile-body" id="product-profile-body">
          <div>
            <p className="eyebrow">
               {vi ? "Thông tin sản phẩm" : ar ? "معلومات المنتج" : "Product information"}
            </p>
             <h2>{vi ? product.viName : ar ? product.arName : product.name}</h2>
             <p>{vi ? product.viDescription : ar ? product.arDescription : product.description}</p>
          </div>
          <div className="product-profile-spec">
             <h3>{vi ? "Quy cách tham khảo" : ar ? "المواصفات المرجعية" : "Reference specifications"}</h3>
             <p>{vi ? product.viSpecs : ar ? product.arSpecs : product.specs}</p>
             <h3>{vi ? "Ứng dụng" : ar ? "التطبيقات المعتادة" : "Typical applications"}</h3>
            <p>
              {vi
                ? "Nội thất · Xây dựng · Đóng gói · Trang trí · Sản xuất OEM"
                 : ar ? "الأثاث · البناء · التغليف · التصميم الداخلي · إنتاج OEM" : "Furniture · Construction · Packaging · Interior · OEM production"}
            </p>
          </div>
        </section>
        <section className="product-factories" id="matched-factories">
          <div className="product-factories-heading">
            <div>
              <p className="eyebrow">
                 {vi ? "Nhà máy phù hợp" : ar ? "المصنعون المطابقون" : "Matched manufacturers"}
              </p>
              <h2>
                {vi
                   ? "Nhà máy đang sản xuất sản phẩm này."
                   : ar ? "مصانع تنتج هذا المنتج." : "Factories producing this product."}
              </h2>
            </div>
            <p>
              {vi
                 ? "Xem nhanh các hồ sơ có năng lực tham khảo phù hợp, sau đó mở chi tiết hoặc gửi yêu cầu sourcing."
                 : ar ? "راجع ملفات المصنعين ذوي القدرات المناسبة، ثم افتح ملفًا أو ابدأ طلب توريد." : "Review manufacturers with relevant reference capabilities, then open a profile or start a sourcing request."}
            </p>
          </div>
          <div className="product-factory-grid">
            {matchingFactories.map((factory) => (
              <article className="product-factory-card" key={factory.id}>
                <div className="product-factory-image">
                  {factory.imagePath && (
                    <Image
                      src={factory.imagePath}
                       alt={getFactoryPublicLabel(locale, factory.id)}
                       fill
                       sizes="(max-width: 820px) 100vw, 33vw"
                       unoptimized={/\.(avif|jfif)$/i.test(factory.imagePath)}
                     />
                  )}
                   <span>{factory.imagePath ? factory.region : vi ? "CHƯA CÓ ẢNH" : ar ? "الصورة قيد التجهيز" : "IMAGE PENDING"}</span>
                </div>
                <p className="product-factory-location">{factory.location}</p>
                  <h3>{getFactoryPublicLabel(locale, factory.id)}</h3>
                <div className="product-factory-tags">
                  {factory.products.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <dl>
                  <div>
                   <dt>{vi ? "Công suất" : ar ? "الطاقة الإنتاجية" : "Capacity"}</dt>
                    <dd>{factory.capacity || missing}</dd>
                  </div>
                  <div>
                   <dt>{vi ? "Vật liệu và quy cách" : ar ? "المواد والمواصفات" : "Materials and specifications"}</dt>
                    <dd>{factory.materialsAndSpecs || factory.materials.join(" · ") || missing}</dd>
                  </div>
                </dl>
                <Link
                  className="product-factory-link"
                   href={getLocalizedPath(locale, `/manufacturers/${factory.slug}`)}
                >
                   {vi ? "Xem hồ sơ nhà máy" : ar ? "عرض ملف المصنع" : "View factory profile"} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          {matchingFactories.length === 0 && (
            <p className="product-factories-empty">
              {vi
                 ? "Chưa có hồ sơ nhà máy phù hợp. Hãy gửi yêu cầu để chúng tôi tìm thêm lựa chọn."
                 : ar ? "لا توجد ملفات مصانع مطابقة بعد. أرسل استفسارًا وسنبحث عن خيارات إضافية." : "No matching factory profiles yet. Submit an inquiry and we will find more options."}
            </p>
          )}
        </section>
        <section className="product-profile-cta">
          <p className="eyebrow">
             {vi ? "Cần quy cách riêng?" : ar ? "هل تحتاج إلى مواصفات مخصصة؟" : "Need a custom specification?"}
          </p>
          <h2>
            {vi
               ? "Để MISO JAPAN tìm nhà máy phù hợp cho bạn."
               : ar ? "دع MISO JAPAN تجد المصنع المناسب لك." : "Let MISO JAPAN find the right factory for you."}
          </h2>
          <Link
            className="button button-primary"
             href={getLocalizedPath(locale, "/rfq")}
          >
             {vi ? "Bắt đầu RFQ" : ar ? "ابدأ طلب عرض سعر" : "Start an RFQ"} ↗
          </Link>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
