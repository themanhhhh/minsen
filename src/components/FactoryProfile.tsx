import Link from "next/link";
import { factories, type Locale } from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
        <Link href={locale === "vi" ? "/vi/manufacturers" : "/manufacturers"}>
          Back to manufacturers
        </Link>
      </main>
    );
  const vi = locale === "vi";
  const missing = vi ? "Chưa cung cấp trong tài liệu" : "Not provided in submitted file";
  return (
    <>
      <Header locale={locale} />
      <main className="factory-profile">
        <section className="profile-hero">
          <div>
            <p className="eyebrow eyebrow-light">
                {vi ? "Hồ sơ năng lực do doanh nghiệp cung cấp" : "Company-submitted capability profile"}
            </p>
            <div className="profile-id">{factory.id}</div>
            <h1>
              {vi ? factory.companyNameVi : factory.displayName}
            </h1>
            <p className="profile-company-name">{vi ? factory.companyNameEn : factory.companyNameVi}</p>
            <p>{factory.location} · {factory.region} Vietnam</p>
            <Link
              className="button button-light"
              href={`${vi ? "/vi" : ""}/rfq?factory=${factory.id}`}
            >
              {vi
                ? "Yêu cầu MISO JAPAN qualification"
                : "Request MISO JAPAN qualification"}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="profile-mark" aria-hidden="true">
            <span className="factory-image-status">{factory.imagePath ? "FACTORY IMAGE" : "IMAGE PENDING"}</span>
            <strong>Q</strong>
            <small>
              {factory.misoStatus.toUpperCase()}
            </small>
          </div>
          <ScrollCue targetId="profile-body" label={vi ? "Cuộn để xem hồ sơ" : "Scroll to view profile"} />
        </section>
        <section className="profile-body" id="profile-body">
          <div className="profile-main">
            <div className="profile-heading">
              <p className="eyebrow">
                {vi ? "Tổng quan hồ sơ" : "Profile overview"}
              </p>
              <h2>
                {vi
                  ? "Năng lực được cung cấp, đang chờ qualification."
                  : "Submitted capability, pending qualification."}
              </h2>
            </div>
            <div className="profile-spec-grid">
              <div>
                <span>{vi ? "Năm thành lập" : "Established"}</span>
                <strong>{factory.establishedYear}</strong>
              </div>
              <div>
                <span>{vi ? "Nhân sự" : "Workforce"}</span>
                <strong>{factory.workforce || missing}</strong>
              </div>
              <div>
                <span>{vi ? "Công suất" : "Capacity"}</span>
                <strong>{factory.capacity || missing}</strong>
              </div>
              <div>
                <span>{vi ? "Trạng thái" : "Status"}</span>
                <strong>{vi ? "Đang chờ qualification" : factory.misoStatus}</strong>
              </div>
            </div>
            <div className="profile-block">
              <h3>{vi ? "Mô tả hồ sơ" : "Profile description"}</h3>
              <p>{factory.shortDescription}</p>
            </div>
            <div className="profile-block">
              <h3>{vi ? "Sản phẩm chính" : "Main products"}</h3>
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
                  : "Materials and specifications"}
              </h3>
              <p>
                {factory.materials.join(" · ") || missing}
              </p>
              {factory.materialsAndSpecs && <p>{factory.materialsAndSpecs}</p>}
            </div>
            <div className="profile-block">
              <h3>{vi ? "Thị trường tham khảo" : "Reference markets"}</h3>
              <div className="profile-tags">
                {factory.exportMarkets.length > 0 ? factory.exportMarkets.map((item) => (
                  <span key={item}>{item}</span>
                )) : <p>{missing}</p>}
              </div>
            </div>
            <div className="profile-block">
              <h3>{vi ? "Chứng nhận" : "Certifications"}</h3>
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
              <strong>{vi ? "TRẠNG THÁI MISO JAPAN" : "MISO JAPAN STATUS"}</strong>
              <p>
                {vi
                  ? "Đây là thông tin do doanh nghiệp cung cấp và đang chờ qualification. Chưa có ảnh nhà máy hoặc bản scan chứng nhận trong tài liệu."
                  : "This information was submitted by the company and remains pending qualification. No factory images or certification scans were included in the source material."}
              </p>
            </div>
            <div className="profile-source">
              <h3>{vi ? "Nguồn dữ liệu công khai" : "Public data source"}</h3>
              <p><strong>{vi ? "File nguồn" : "Source file"}</strong>{factory.sourceFile}</p>
              <p><strong>{vi ? "Ghi chú phát triển" : "Development note"}</strong>{factory.devNote}</p>
            </div>
            <Link
              className="button button-primary profile-cta"
              href={`${vi ? "/vi" : ""}/rfq?factory=${factory.id}`}
            >
              {vi ? "Yêu cầu MISO JAPAN đánh giá" : "Ask MISO JAPAN to assess"}
              <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </section>
      </main>
      <Footer locale={locale} />{" "}
    </>
  );
}
