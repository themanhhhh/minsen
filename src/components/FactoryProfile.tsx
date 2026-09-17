import Link from "next/link";
import Image from "next/image";
import { factories, getFactoryPublicLabel, getLocalizedPath, type Locale } from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGallery } from "@/components/ProductGallery";
import { ScrollCue } from "@/components/ScrollCue";

export function FactoryProfile({
  factoryId,
  locale,
}: {
  factoryId: string;
  locale: Locale;
}) {
  const factory = factories.find(
    (item) => item.slug === factoryId.toLowerCase() || item.id.toLowerCase() === factoryId.toLowerCase(),
  );
  if (!factory)
    return (
      <main className="not-found-panel">
        <h1>Factory not found</h1>
         <Link href={getLocalizedPath(locale, "/manufacturers")}>
           {locale === "vi" ? "Quay lại danh sách nhà máy" : locale === "ar" ? "العودة إلى المصانع" : "Back to manufacturers"}
        </Link>
      </main>
    );
  const vi = locale === "vi";
  const ar = locale === "ar";
  const factoryPublicLabel = getFactoryPublicLabel(locale);
  const missing = vi ? "Chưa cung cấp trong tài liệu" : ar ? "غير مذكور في الملف المقدم" : "Not provided in submitted file";
  const galleryImages = factory.galleryPaths.map((src) => ({
    src,
    alt: factoryPublicLabel,
    unoptimized: /\.(avif|jfif)$/i.test(src),
  }));
  return (
    <>
      <Header locale={locale} />
      <main className="factory-profile">
        <section className="profile-hero">
          <div>
            <p className="eyebrow eyebrow-light">
                {vi ? "Hồ sơ năng lực do doanh nghiệp cung cấp" : ar ? "ملف القدرات المقدم من الشركة" : "Company-submitted capability profile"}
            </p>
             <div className="profile-id">{factoryPublicLabel}</div>
             <h1>
               {factoryPublicLabel}
             </h1>
             <p className="profile-company-name">{factoryPublicLabel}</p>
            <p>{factory.location} · {factory.region} Vietnam</p>
            <Link
              className="button button-light"
              href={`${getLocalizedPath(locale, "/rfq")}?factory=${factory.id}`}
            >
               {vi
                 ? "Yêu cầu MISO JAPAN qualification"
                 : ar ? "اطلب تأهيل MISO JAPAN" : "Request MISO JAPAN qualification"}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="profile-mark" aria-hidden="true">
            {factory.imagePath && (
              <Image
                src={factory.imagePath}
                alt=""
                fill
                sizes="220px"
                unoptimized={/\.(avif|jfif)$/i.test(factory.imagePath)}
              />
            )}
            <span className="factory-image-status">{factory.imagePath ? "FACTORY IMAGE" : "IMAGE PENDING"}</span>
            <strong>Q</strong>
            <small>
              {factory.misoStatus.toUpperCase()}
            </small>
          </div>
           <ScrollCue targetId="profile-body" label={vi ? "Cuộn để xem hồ sơ" : ar ? "مرر لعرض الملف" : "Scroll to view profile"} />
        </section>
        <section className="profile-body" id="profile-body">
          <div className="profile-main">
             <div className="profile-heading">
               <p className="eyebrow">
                 {vi ? "Tổng quan hồ sơ" : ar ? "نظرة عامة على الملف" : "Profile overview"}
              </p>
              <h2>
                {vi
                   ? "Năng lực được cung cấp, đang chờ qualification."
                   : ar ? "القدرات المقدمة بانتظار التأهيل." : "Submitted capability, pending qualification."}
               </h2>
             </div>
             {galleryImages.length > 0 && (
               <div className="profile-block factory-profile-gallery">
                 <h3>{vi ? "Hình ảnh nhà máy" : ar ? "صور المصنع" : "Factory images"}</h3>
                 <ProductGallery images={galleryImages} productName={factoryPublicLabel} />
               </div>
             )}
             <div className="profile-spec-grid">
              <div>
                 <span>{vi ? "Năm thành lập" : ar ? "سنة التأسيس" : "Established"}</span>
                <strong>{factory.establishedYear}</strong>
              </div>
              <div>
                 <span>{vi ? "Nhân sự" : ar ? "القوى العاملة" : "Workforce"}</span>
                <strong>{factory.workforce || missing}</strong>
              </div>
              <div>
                 <span>{vi ? "Công suất" : ar ? "الطاقة الإنتاجية" : "Capacity"}</span>
                <strong>{factory.capacity || missing}</strong>
              </div>
              <div>
                 <span>{vi ? "Trạng thái" : ar ? "الحالة" : "Status"}</span>
                 <strong>{vi ? "Đang chờ qualification" : ar ? "بانتظار التأهيل" : factory.misoStatus}</strong>
              </div>
            </div>
            <div className="profile-block">
               <h3>{vi ? "Mô tả hồ sơ" : ar ? "وصف الملف" : "Profile description"}</h3>
              <p>{factory.shortDescription}</p>
            </div>
            <div className="profile-block">
               <h3>{vi ? "Sản phẩm chính" : ar ? "المنتجات الرئيسية" : "Main products"}</h3>
              <div className="profile-tags">
                {factory.products.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="profile-block">
              <h3>
                {vi
                   ? "Nguyên liệu và quy cách"
                   : ar ? "المواد والمواصفات" : "Materials and specifications"}
              </h3>
              <p>
                {factory.materials.join(" · ") || missing}
              </p>
              {factory.materialsAndSpecs && <p>{factory.materialsAndSpecs}</p>}
            </div>
            <div className="profile-block">
               <h3>{vi ? "Thị trường tham khảo" : ar ? "الأسواق المرجعية" : "Reference markets"}</h3>
              <div className="profile-tags">
                {factory.exportMarkets.length > 0 ? factory.exportMarkets.map((item) => (
                  <span key={item}>{item}</span>
                )) : <p>{missing}</p>}
              </div>
            </div>
            <div className="profile-block">
               <h3>{vi ? "Chứng nhận" : ar ? "الشهادات" : "Certifications"}</h3>
              <div className="profile-tags">
                {factory.certifications.length > 0 ? factory.certifications.map((item) => (
                  <span key={item}>{item}</span>
                )) : <p>{missing}</p>}
              </div>
            </div>
          </div>
          <aside className="profile-sidebar">
            <div className="verification-card">
              <span className="is-pending">!</span>
               <strong>{vi ? "TRẠNG THÁI MISO JAPAN" : ar ? "حالة MISO JAPAN" : "MISO JAPAN STATUS"}</strong>
              <p>
                 {factory.galleryPaths.length > 0
                   ? vi
                     ? "Đây là thông tin do doanh nghiệp cung cấp và đang chờ qualification. Hình ảnh được cung cấp để tham khảo và chưa thay thế quy trình xác minh."
                     : ar ? "قدمت الشركة هذه المعلومات ولا تزال بانتظار التأهيل. الصور المعروضة مرجعية ولا تحل محل عملية التحقق." : "This information was submitted by the company and remains pending qualification. The images are provided for reference and do not replace verification."
                   : vi
                     ? "Đây là thông tin do doanh nghiệp cung cấp và đang chờ qualification. Chưa có ảnh nhà máy hoặc bản scan chứng nhận trong tài liệu."
                     : ar ? "قدمت الشركة هذه المعلومات ولا تزال بانتظار التأهيل. لم تُرفق صور للمصنع أو نسخ ممسوحة من الشهادات في المصدر." : "This information was submitted by the company and remains pending qualification. No factory images or certification scans were included in the source material."}
              </p>
            </div>
            <div className="profile-source">
               <h3>{vi ? "Nguồn dữ liệu công khai" : ar ? "مصدر البيانات العامة" : "Public data source"}</h3>
               <p><strong>{vi ? "File nguồn" : ar ? "الملف المصدر" : "Source file"}</strong>{factory.sourceFile}</p>
               <p><strong>{vi ? "Ghi chú phát triển" : ar ? "ملاحظة التطوير" : "Development note"}</strong>{factory.devNote}</p>
            </div>
            <Link
              className="button button-primary profile-cta"
               href={`${getLocalizedPath(locale, "/rfq")}?factory=${factory.id}`}
            >
               {vi ? "Yêu cầu MISO JAPAN đánh giá" : ar ? "اطلب من MISO JAPAN التقييم" : "Ask MISO JAPAN to assess"}
              <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </section>
      </main>
      <Footer locale={locale} />{" "}
    </>
  );
}
