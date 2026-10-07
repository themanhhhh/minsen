"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { getLocalizedPath, type Locale } from "@/data/landing-page";
import { submitFormToGoogleSheets } from "@/lib/form-submission";
import type { FactoryRegistrationPrefill } from "@/lib/form-prefill";

export function FactoryRegistrationForm({
  locale = "en",
  prefill,
}: {
  locale?: Locale;
  prefill?: FactoryRegistrationPrefill;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const isVietnamese = locale === "vi";
  const isArabic = locale === "ar";
  const copy = isVietnamese
    ? {
        heroTitle: "ĐĂNG KÝ NHÀ MÁY",
        heroDescription: "Chia sẻ thông tin nhà máy để MISO JAPAN xem xét cơ hội qualification và hợp tác.",
        heroMark: ["ĐĂNG KÝ", "NHÀ MÁY"],
        successEyebrow: "ĐÃ NHẬN ĐĂNG KÝ",
        successTitle: "Cảm ơn bạn đã đăng ký.",
        successDescription: "MISO JAPAN sẽ xem xét thông tin nhà máy và liên hệ khi cần thêm tài liệu cho quá trình qualification.",
        home: "Về trang chủ",
        formEyebrow: "THÔNG TIN NHÀ MÁY",
        formDescription: "Vui lòng cung cấp thông tin chính xác. Các trường có dấu ** hoặc * là bắt buộc.",
        buyerReference: "HỒ SƠ KHÁCH HÀNG ĐANG KẾT NỐI",
        companyName: "TÊN CÔNG TY",
        factoryAddress: "ĐỊA CHỈ NHÀ MÁY",
        website: "WEBSITE / FACEBOOK",
        contactPerson: "NGƯỜI LIÊN HỆ",
        position: "CHỨC VỤ",
        email: "EMAIL CÔNG VIỆC",
        phone: "WHATSAPP / ĐIỆN THOẠI",
        mainProducts: "SẢN PHẨM PLYWOOD CHÍNH",
        specifications: "QUY CÁCH SẢN PHẨM CHÍNH",
        capacity: "CÔNG SUẤT SẢN XUẤT",
        exportMarkets: "THỊ TRƯỜNG XUẤT KHẨU CHÍNH",
        companyProfile: "HỒ SƠ CÔNG TY / CATALOGUE",
        fileHelp: "PDF, Word, Excel hoặc PowerPoint · Tối đa 10MB",
        fileError: "Tệp vượt quá 10MB. Vui lòng chọn tệp khác.",
        consent: "Tôi đồng ý để MISO JAPAN liên hệ về đánh giá nhà máy và cơ hội hợp tác.",
        submitError: "Không thể gửi đăng ký lúc này. Vui lòng thử lại.",
        submit: "ĐĂNG KÝ NHÀ MÁY",
        mainProductsPlaceholder: "Ví dụ: Plywood thương mại, plywood phủ phim, LVL...",
        specificationsPlaceholder: "Độ dày · Kích thước · Lõi · Keo",
        capacityPlaceholder: "Ví dụ: 3.000 CBM/tháng",
        exportMarketsPlaceholder: "Ví dụ: Nhật Bản, Hàn Quốc, Hoa Kỳ",
      }
    : isArabic
      ? {
          heroTitle: "تسجيل المصنع",
          heroDescription: "شاركوا معلومات مصنعكم لتراجع MISO JAPAN فرص التأهيل والشراكة.",
          heroMark: ["تسجيل", "المصنع"],
          successEyebrow: "تم استلام التسجيل",
          successTitle: "شكرًا لتسجيلكم.",
          successDescription: "ستراجع MISO JAPAN معلومات المصنع وتتواصل معكم إذا لزم تقديم مستندات إضافية للتأهيل.",
          home: "العودة إلى الصفحة الرئيسية",
          formEyebrow: "معلومات المصنع",
          formDescription: "يرجى تقديم معلومات دقيقة. الحقول المميزة بعلامة ** أو * إلزامية.",
          buyerReference: "ملف المشتري المطلوب",
          companyName: "اسم الشركة",
          factoryAddress: "عنوان المصنع",
          website: "الموقع الإلكتروني / فيسبوك",
          contactPerson: "جهة الاتصال",
          position: "المنصب",
          email: "البريد الإلكتروني للعمل",
          phone: "واتساب / الهاتف",
          mainProducts: "منتجات الخشب الرقائقي الرئيسية",
          specifications: "مواصفات المنتجات الرئيسية",
          capacity: "الطاقة الإنتاجية",
          exportMarkets: "أسواق التصدير الرئيسية",
          companyProfile: "ملف الشركة / الكتالوج",
          fileHelp: "PDF أو Word أو Excel أو PowerPoint · الحد الأقصى 10 ميغابايت",
          fileError: "يتجاوز الملف 10 ميغابايت. يرجى اختيار ملف آخر.",
          consent: "أوافق على تواصل MISO JAPAN معي بشأن تأهيل المصنع وفرص التعاون.",
          submitError: "تعذر إرسال التسجيل الآن. يرجى المحاولة مرة أخرى.",
          submit: "تسجيل المصنع",
          mainProductsPlaceholder: "مثال: خشب رقائقي تجاري، خشب رقائقي مكسو بالفيلم، LVL...",
          specificationsPlaceholder: "السماكة · المقاس · القلب · نوع اللصق",
          capacityPlaceholder: "مثال: 3,000 متر مكعب شهريًا",
          exportMarketsPlaceholder: "مثال: اليابان، كوريا، الولايات المتحدة",
        }
      : {
          heroTitle: "REGISTER FACTORY",
          heroDescription: "Share your factory information for MISO JAPAN to review qualification and partnership opportunities.",
          heroMark: ["FACTORY", "REGISTRATION"],
          successEyebrow: "REGISTRATION RECEIVED",
          successTitle: "Thank you for registering.",
          successDescription: "MISO JAPAN will review the factory information and contact you if additional qualification documents are needed.",
          home: "Back to home",
          formEyebrow: "FACTORY INFORMATION",
          formDescription: "Please provide accurate information. Fields marked with ** or * are required.",
          buyerReference: "BUYER PROFILE OF INTEREST",
          companyName: "COMPANY NAME",
          factoryAddress: "FACTORY ADDRESS",
          website: "WEBSITE / FACEBOOK",
          contactPerson: "CONTACT PERSON",
          position: "POSITION",
          email: "WORK EMAIL",
          phone: "WHATSAPP / PHONE",
          mainProducts: "MAIN PLYWOOD PRODUCTS",
          specifications: "MAIN PRODUCT SPECIFICATIONS",
          capacity: "PRODUCTION CAPACITY",
          exportMarkets: "MAIN EXPORT MARKETS",
          companyProfile: "COMPANY PROFILE / CATALOGUE",
          fileHelp: "PDF, Word, Excel or PowerPoint · Max 10MB",
          fileError: "This file exceeds 10MB. Please choose another file.",
          consent: "I agree to be contacted by MISO JAPAN regarding factory qualification and business opportunities.",
          submitError: "The registration could not be sent. Please try again.",
          submit: "REGISTER FACTORY",
          mainProductsPlaceholder: "Example: Commercial plywood, film-faced plywood, LVL...",
          specificationsPlaceholder: "Thickness · Size · Core · Glue",
          capacityPlaceholder: "Example: 3,000 CBM/month",
          exportMarketsPlaceholder: "Example: Japan, Korea, USA",
        };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = event.currentTarget.elements.namedItem("companyProfile");
    const file = fileInput instanceof HTMLInputElement ? fileInput.files?.[0] : undefined;
    if (file && file.size > 10 * 1024 * 1024) {
      setFileError(true);
      return;
    }
    setFileError(false);
    setSubmitError(false);
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (key === "companyProfile") {
        data.companyProfileName = value instanceof File ? value.name : "";
      } else if (key === "consent") {
        data.consent = "true";
      } else if (typeof value === "string") {
        data[key] = value;
      }
    });
    const sent = await submitFormToGoogleSheets("registration", data);
    if (!sent) {
      setSubmitError(true);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="registration-page">
        <section className="registration-success" aria-live="polite">
          <span aria-hidden="true">✓</span>
          <p className="eyebrow">{copy.successEyebrow}</p>
          <h1>{copy.successTitle}</h1>
          <p>{copy.successDescription}</p>
          <Link className="button button-primary" href={getLocalizedPath(locale, "/")}>
            {copy.home} <span aria-hidden="true">↗</span>
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
          <h1>{copy.heroTitle}</h1>
          <p>{copy.heroDescription}</p>
        </div>
        <div className="registration-hero-mark" aria-hidden="true">
          <strong>01</strong>
          <span>{copy.heroMark[0]}<br />{copy.heroMark[1]}</span>
        </div>
      </section>

      <section className="registration-content">
        <form className="registration-form" onSubmit={handleSubmit}>
           <div className="registration-form-heading">
             <p className="eyebrow">{copy.formEyebrow}</p>
             <p>{copy.formDescription}</p>
           </div>

           <div className="registration-fields">
             {prefill?.buyerReference && (
               <label className="registration-field-full">
                 <span>
                   {copy.buyerReference}
                 </span>
                 <textarea name="buyerReference" defaultValue={prefill.buyerReference} rows={6} readOnly />
               </label>
             )}
             <label>
                <span>{copy.companyName} <sup>**</sup></span>
               <input name="companyName" type="text" autoComplete="organization" required />
            </label>
             <label>
                <span>{copy.factoryAddress} <sup>**</sup></span>
              <input name="factoryAddress" type="text" autoComplete="street-address" required />
            </label>
             <label>
               <span>{copy.website}</span>
              <input name="website" type="url" placeholder="https://" />
            </label>
             <label>
                <span>{copy.contactPerson} <sup>**</sup></span>
              <input name="contactPerson" type="text" autoComplete="name" required />
            </label>
             <label>
                <span>{copy.position}</span>
              <input name="position" type="text" />
            </label>
             <label>
               <span>{copy.email} <sup>*</sup></span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
             <label>
                <span>{copy.phone} <sup>**</sup></span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
              <label className="registration-field-full">
                 <span>{copy.mainProducts} <sup>**</sup></span>
                <textarea name="mainProducts" defaultValue={prefill?.mainProducts} rows={3} required placeholder={copy.mainProductsPlaceholder} />
              </label>
              <label className="registration-field-full">
                 <span>{copy.specifications} <sup>**</sup></span>
                <textarea name="specifications" defaultValue={prefill?.specifications} rows={4} required placeholder={copy.specificationsPlaceholder} />
              </label>
             <label>
                <span>{copy.capacity} <sup>**</sup></span>
               <input name="capacity" type="text" required placeholder={copy.capacityPlaceholder} />
             </label>
             <label>
                <span>{copy.exportMarkets}</span>
               <input name="exportMarkets" type="text" placeholder={copy.exportMarketsPlaceholder} />
             </label>
             <label className="registration-field-full registration-file-field">
                <span>{copy.companyProfile}</span>
               <input name="companyProfile" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
                <small>{copy.fileHelp}</small>
                {fileError && <small className="registration-file-error" role="alert">{copy.fileError}</small>}
            </label>
          </div>

          <label className="registration-consent">
            <input name="consent" type="checkbox" required />
           <span>
                {copy.consent}
            </span>
          </label>

           <div className="registration-actions">
             {submitError && <small className="form-submit-error" role="alert">{copy.submitError}</small>}
             <button className="button button-primary" type="submit">
                {copy.submit} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
