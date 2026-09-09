"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

export function FactoryRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileError, setFileError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = event.currentTarget.elements.namedItem("companyProfile");
    const file = fileInput instanceof HTMLInputElement ? fileInput.files?.[0] : undefined;
    if (file && file.size > 10 * 1024 * 1024) {
      setFileError(true);
      return;
    }
    setFileError(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="registration-page">
        <section className="registration-success" aria-live="polite">
          <span aria-hidden="true">✓</span>
          <p className="eyebrow">ĐÃ NHẬN ĐĂNG KÝ / REGISTRATION RECEIVED</p>
          <h1>Cảm ơn bạn đã đăng ký / Thank you for registering.</h1>
          <p>
            MISO JAPAN sẽ xem xét thông tin nhà máy và liên hệ khi cần thêm tài liệu cho quá trình qualification.
            <br />
            MISO JAPAN will review the factory information and contact you if additional qualification documents are needed.
          </p>
          <Link className="button button-primary" href="/">
            Về trang chủ / Back to home <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="registration-page">
      <section className="registration-hero">
        <div>
          <p className="eyebrow eyebrow-light">MISO JAPAN FACTORY NETWORK</p>
          <h1>ĐĂNG KÝ NHÀ MÁY / REGISTER FACTORY</h1>
          <p>
            Chia sẻ thông tin nhà máy để MISO JAPAN xem xét cơ hội qualification và hợp tác.
            <br />
            Share your factory information for MISO JAPAN to review qualification and partnership opportunities.
          </p>
        </div>
        <div className="registration-hero-mark" aria-hidden="true">
          <strong>01</strong>
          <span>FACTORY<br />REGISTRATION</span>
        </div>
      </section>

      <section className="registration-content">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="registration-form-heading">
            <p className="eyebrow">THÔNG TIN NHÀ MÁY / FACTORY INFORMATION</p>
            <p>Vui lòng cung cấp thông tin chính xác. Các trường có dấu ** hoặc * là bắt buộc.</p>
          </div>

          <div className="registration-fields">
            <label>
              <span>Tên công ty / Company Name <sup>**</sup></span>
              <input name="companyName" type="text" autoComplete="organization" required />
            </label>
            <label>
              <span>Địa chỉ nhà máy / Factory Address <sup>**</sup></span>
              <input name="factoryAddress" type="text" autoComplete="street-address" required />
            </label>
            <label>
              <span>Website / Facebook</span>
              <input name="website" type="url" placeholder="https://" />
            </label>
            <label>
              <span>Người liên hệ / Contact Person <sup>**</sup></span>
              <input name="contactPerson" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Chức vụ / Position</span>
              <input name="position" type="text" />
            </label>
            <label>
              <span>Email <sup>*</sup></span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>WhatsApp / Điện thoại / WhatsApp / Phone <sup>**</sup></span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label className="registration-field-full">
              <span>Sản phẩm Plywood chính / Main Plywood Products <sup>**</sup></span>
              <textarea name="mainProducts" rows={3} required placeholder="Ví dụ / Example: Commercial plywood, film-faced plywood, LVL..." />
            </label>
            <label className="registration-field-full">
              <span>Quy cách sản phẩm chính / Main Product Specifications <sup>**</sup></span>
              <textarea name="specifications" rows={4} required placeholder="Độ dày / Thickness · Kích thước / Size · Lõi / Core · Keo / Glue" />
            </label>
            <label>
              <span>Công suất sản xuất / Production Capacity <sup>**</sup></span>
              <input name="capacity" type="text" required placeholder="Ví dụ / Example: 3,000 CBM/month" />
            </label>
            <label>
              <span>Thị trường xuất khẩu chính / Main Export Markets</span>
              <input name="exportMarkets" type="text" placeholder="Ví dụ / Example: Japan, Korea, USA" />
            </label>
            <label className="registration-field-full registration-file-field">
              <span>Hồ sơ công ty / Catalogue / Company Profile / Catalogue</span>
              <input name="companyProfile" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
              <small>PDF, Word, Excel hoặc PowerPoint · Tối đa 10MB / PDF, Word, Excel or PowerPoint · Max 10MB</small>
              {fileError && <small className="registration-file-error" role="alert">Tệp vượt quá 10MB. Vui lòng chọn tệp khác / This file exceeds 10MB. Please choose another file.</small>}
            </label>
          </div>

          <label className="registration-consent">
            <input name="consent" type="checkbox" required />
            <span>
              Tôi đồng ý để MISO JAPAN liên hệ về đánh giá nhà máy và cơ hội hợp tác / I agree to be contacted by MISO JAPAN regarding factory qualification and business opportunities.
            </span>
          </label>

          <div className="registration-actions">
            <button className="button button-primary" type="submit">
              ĐĂNG KÝ NHÀ MÁY / REGISTER FACTORY <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
