import Link from "next/link";
import Image from "next/image";
import { factories, type Locale } from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function FactoryProfile({
  factoryId,
  locale,
}: {
  factoryId: string;
  locale: Locale;
}) {
  const factory = factories.find(
    (item) => item.id.toLowerCase() === factoryId.toLowerCase(),
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
  const factoryImage = {
    "VN-PW-018": "/images/factories/vn-pw-018/exterior.jpg",
    "VN-PW-038": "/images/factories/vn-pw-038/exterior.jpg",
    "VN-PW-052": "/images/factories/vn-pw-052/exterior.jpg",
  }[factory.id as "VN-PW-018" | "VN-PW-038" | "VN-PW-052"];
  return (
    <>
      <Header locale={locale} />
      <main className="factory-profile">
        <section className="profile-hero">
          <div>
            <p className="eyebrow eyebrow-light">
              {vi ? "Hồ sơ năng lực tham khảo" : "Reference capability profile"}
            </p>
            <div className="profile-id">{factory.id}</div>
            <h1>
              {vi
                ? "Hồ sơ mẫu cho qualification qua MISO JAPAN"
                : "Sample profile for qualification through MISO JAPAN"}
            </h1>
            <p>
              {factory.location} · {factory.region} Vietnam
            </p>
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
            {factoryImage && (
              <Image
                src={factoryImage}
                alt={`${factory.id} factory`}
                fill
                sizes="220px"
              />
            )}
            <span>MISO JAPAN</span>
            <strong>Q</strong>
            <small>
              QUALIFICATION
              <br />
              PENDING
            </small>
          </div>
        </section>
        <section className="profile-body">
          <div className="profile-main">
            <div className="profile-heading">
              <p className="eyebrow">
                {vi ? "Tổng quan hồ sơ" : "Profile overview"}
              </p>
              <h2>
                {vi
                  ? "Năng lực tham khảo, cần được đánh giá trước khi công bố."
                  : "Reference capability, to be assessed before publication."}
              </h2>
            </div>
            <div className="profile-spec-grid">
              <div>
                <span>{vi ? "Loại hình" : "Factory type"}</span>
                <strong>{vi ? "Nhà sản xuất" : "Manufacturer"}</strong>
              </div>
              <div>
                <span>{vi ? "Hoạt động tham khảo" : "Operating history"}</span>
                <strong>{factory.years}+ years</strong>
              </div>
              <div>
                <span>{vi ? "Nhân sự tham khảo" : "Reference workforce"}</span>
                <strong>{factory.employees}</strong>
              </div>
              <div>
                <span>{vi ? "Công suất tham khảo" : "Reference capacity"}</span>
                <strong>{factory.monthlyCapacity}</strong>
              </div>
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
                {factory.materials.join(" · ")} · {factory.thicknessRange}
              </p>
            </div>
            <div className="profile-block">
              <h3>{vi ? "Thị trường tham khảo" : "Reference markets"}</h3>
              <div className="profile-tags">
                {factory.exportMarkets.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <aside className="profile-sidebar">
            <div className="verification-card">
              <span>!</span>
              <strong>
                {vi ? "CHƯA PHẢI HỒ SƠ VERIFIED" : "NOT A VERIFIED PROFILE"}
              </strong>
              <p>
                {vi
                  ? "Thông tin này là dữ liệu mẫu. Bằng chứng, phạm vi và ngày đánh giá sẽ được bổ sung sau qualification."
                  : "This is sample data. Evidence, scope and assessment dates will be added after qualification."}
              </p>
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
