"use client";

import { type FormEvent, type MouseEvent, useState } from "react";
import type { Locale } from "@/data/landing-page";

type Step = 1 | 2 | 3;

export function RfqWizard({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const ar = locale === "ar";
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    product: "Plywood",
    specification: "",
    core: "",
    bond: "",
    application: "",
    quantity: "",
    destination: "",
    delivery: "",
    name: "",
    company: "",
    email: "",
    whatsapp: "",
  });

  const copy = vi
    ? {
        eyebrow: "YÊU CẦU SOURCING CỦA MISO JAPAN",
        title: "Cho chúng tôi biết bạn cần tìm nguồn hàng gì tại Việt Nam.",
        description:
          "Chúng tôi xem xét yêu cầu và shortlist các nhà sản xuất Việt Nam phù hợp thông qua quy trình sourcing và kiểm soát rủi ro cho buyer.",
        steps: ["Sản phẩm", "Yêu cầu kỹ thuật", "Liên hệ"],
        product: "DANH MỤC SẢN PHẨM",
        specification: "QUY CÁCH SẢN PHẨM",
        core: "LÕI / VẬT LIỆU",
        bond: "YÊU CẦU KEO",
        application: "ỨNG DỤNG VÀ MỤC ĐÍCH SỬ DỤNG",
        quantity: "SẢN LƯỢNG DỰ KIẾN",
        destination: "THỊ TRƯỜNG / CẢNG ĐẾN",
        delivery: "THỜI GIAN GIAO HÀNG MONG MUỐN",
        name: "HỌ VÀ TÊN",
        company: "TÊN CÔNG TY",
        email: "EMAIL CÔNG VIỆC",
        whatsapp: "WHATSAPP",
        specificationPlaceholder: "Ví dụ: 1220 x 2440 x 18mm",
        corePlaceholder: "Chọn lõi / Chưa chắc chắn",
        bondPlaceholder: "Chọn keo / Chưa chắc chắn",
        applicationPlaceholder: "Mô tả sản phẩm sẽ được sử dụng như thế nào",
        quantityPlaceholder: "Ví dụ: 1 x 40HC mỗi tháng",
        destinationPlaceholder: "Ví dụ: Hải Phòng, Hồ Chí Minh, Dubai...",
        deliveryPlaceholder: "Ví dụ: Cần giao trong tháng 10",
        namePlaceholder: "Họ và tên của bạn",
        companyPlaceholder: "Tên công ty của bạn",
        continue: "Tiếp tục",
        back: "Quay lại",
        submit: "Gửi RFQ",
        received: "Đã nhận yêu cầu",
        successTitle: "MISO JAPAN sẽ tìm các nhà máy phù hợp cho bạn.",
        successDescription:
          "Chúng tôi sẽ xem xét yêu cầu và xác định phương án sourcing, qualification nhà cung cấp phù hợp.",
        home: "Về trang chủ",
      }
    : ar ? {
        eyebrow: "طلب توريد من MISO JAPAN",
        title: "أخبرنا بما تحتاج إلى توريده من فيتنام.",
        description: "نراجع متطلباتك ونختار المصنعين الفيتناميين المناسبين من خلال عملية التوريد ومراقبة مخاطر المشتري.",
        steps: ["المنتج", "المتطلبات التقنية", "جهة الاتصال"],
        product: "فئة المنتج",
        specification: "مواصفات المنتج",
        core: "القلب / المادة",
        bond: "متطلبات اللصق",
        application: "التطبيق والاستخدام النهائي",
        quantity: "الكمية المتوقعة",
        destination: "السوق / ميناء الوصول",
        delivery: "الجدول الزمني المفضل للتسليم",
        name: "الاسم الكامل",
        company: "اسم الشركة",
        email: "البريد الإلكتروني للعمل",
        whatsapp: "واتساب",
        specificationPlaceholder: "مثال: 1220 × 2440 × 18 مم",
        corePlaceholder: "اختر القلب / غير متأكد",
        bondPlaceholder: "اختر نوع اللصق / غير متأكد",
        applicationPlaceholder: "كيف سيُستخدم هذا المنتج؟",
        quantityPlaceholder: "مثال: حاوية 40 قدم شهريًا",
        destinationPlaceholder: "مثال: حيفا فونغ، دبي...",
        deliveryPlaceholder: "مثال: مطلوب بحلول أكتوبر",
        namePlaceholder: "اسمك الكامل",
        companyPlaceholder: "اسم شركتك",
        continue: "متابعة",
        back: "رجوع",
        submit: "إرسال طلب عرض السعر",
        received: "تم استلام الاستفسار",
        successTitle: "ستجد MISO JAPAN المصانع المناسبة لك.",
        successDescription: "سنراجع متطلباتك ونحدد منهج التوريد وتأهيل المورد المناسب.",
        home: "العودة إلى الرئيسية",
      } : {
        eyebrow: "MISO JAPAN SOURCING REQUEST",
        title: "Tell us what you need to source from Vietnam.",
        description:
          "We review your requirements and shortlist suitable Vietnamese manufacturers through our sourcing and buyer risk-control process.",
        steps: ["Product", "Technical Requirements", "Contact"],
        product: "PRODUCT CATEGORY",
        specification: "PRODUCT SPECIFICATION",
        core: "CORE / MATERIAL",
        bond: "BONDING REQUIREMENT",
        application: "APPLICATION & END USE",
        quantity: "EXPECTED QUANTITY",
        destination: "MARKET / DESTINATION PORT",
        delivery: "PREFERRED DELIVERY TIMELINE",
        name: "FULL NAME",
        company: "COMPANY NAME",
        email: "WORK EMAIL",
        whatsapp: "WHATSAPP",
        specificationPlaceholder: "e.g. 1220 x 2440 x 18mm",
        corePlaceholder: "Select core / Not sure",
        bondPlaceholder: "Select bond / Not sure",
        applicationPlaceholder: "How will this product be used?",
        quantityPlaceholder: "e.g. 1 x 40HC per month",
        destinationPlaceholder: "e.g. Hai Phong, Ho Chi Minh, Dubai...",
        deliveryPlaceholder: "e.g. Needed by October",
        namePlaceholder: "Your full name",
        companyPlaceholder: "Your company name",
        continue: "Continue",
        back: "Back",
        submit: "Submit RFQ",
        received: "Inquiry received",
        successTitle: "MISO JAPAN will find the right manufacturers for you.",
        successDescription:
          "We will review your requirement and determine the appropriate sourcing and supplier qualification approach.",
        home: "Back to home",
      };

  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  const advance = (event: MouseEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.form?.reportValidity()) return;
    setStep(step === 1 ? 2 : 3);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="rfq-page">
        <section className="rfq-wizard-success" aria-live="polite">
          <span aria-hidden="true">✓</span>
          <p className="eyebrow">{copy.received}</p>
          <h1>{copy.successTitle}</h1>
          <p>{copy.successDescription}</p>
          <a className="button button-primary" href={ar ? "/ar" : vi ? "/vi" : "/"}>
            {copy.home} <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="rfq-page">
      <section className="rfq-wizard-hero">
        <p className="eyebrow eyebrow-light">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </section>

      <section className="rfq-wizard-content">
        <form className="rfq-wizard-form" onSubmit={submit} aria-label={copy.eyebrow}>
          <ol className="rfq-wizard-progress">
            {copy.steps.map((label, index) => {
              const currentStep = (index + 1) as Step;
              const state = step === currentStep ? "is-active" : step > currentStep ? "is-complete" : "";
              return (
                <li className={state} key={label} aria-current={step === currentStep ? "step" : undefined}>
                  <span>0{currentStep}</span>
                  <strong>{label}</strong>
                </li>
              );
            })}
          </ol>

          {step === 1 && (
            <div className="rfq-wizard-fields">
              <label>
                {copy.product}
                <select name="product" value={form.product} onChange={(event) => update("product", event.target.value)} required>
                  <option>Plywood</option>
                  <option>Veneer</option>
                  <option>LVL</option>
                  <option>MDF / HDF</option>
                   <option>{vi ? "Sản phẩm gỗ khác" : ar ? "منتجات خشبية أخرى" : "Other wood products"}</option>
                </select>
              </label>
              <label>
                {copy.specification}
                <input name="specification" value={form.specification} onChange={(event) => update("specification", event.target.value)} placeholder={copy.specificationPlaceholder} required />
              </label>
              <label>
                {copy.core}
                <select name="core" value={form.core} onChange={(event) => update("core", event.target.value)} required>
                  <option value="" disabled>{copy.corePlaceholder}</option>
                   <option>{vi ? "Lõi bạch đàn" : ar ? "قلب أوكالبتوس" : "Poplar core"}</option>
                   <option>{vi ? "Lõi keo" : ar ? "قلب أكاسيا" : "Acacia core"}</option>
                   <option>{vi ? "Lõi combi" : ar ? "قلب مركب" : "Combi core"}</option>
                   <option>{vi ? "Khác / Chưa chắc chắn" : ar ? "أخرى / غير متأكد" : "Other / Not sure"}</option>
                </select>
              </label>
              <label>
                {copy.bond}
                <select name="bond" value={form.bond} onChange={(event) => update("bond", event.target.value)} required>
                  <option value="" disabled>{copy.bondPlaceholder}</option>
                  <option>MR / E1</option>
                  <option>WBP</option>
                  <option>Melamine</option>
                   <option>{vi ? "Khác / Chưa chắc chắn" : ar ? "أخرى / غير متأكد" : "Other / Not sure"}</option>
                </select>
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="rfq-wizard-fields">
              <label className="rfq-wizard-field-full">
                {copy.application}
                <textarea name="application" value={form.application} onChange={(event) => update("application", event.target.value)} placeholder={copy.applicationPlaceholder} rows={3} required />
              </label>
              <label>
                {copy.quantity}
                <input name="quantity" value={form.quantity} onChange={(event) => update("quantity", event.target.value)} placeholder={copy.quantityPlaceholder} required />
              </label>
              <label>
                {copy.destination}
                <input name="destination" value={form.destination} onChange={(event) => update("destination", event.target.value)} placeholder={copy.destinationPlaceholder} required />
              </label>
              <label className="rfq-wizard-field-full">
                {copy.delivery}
                <input name="delivery" value={form.delivery} onChange={(event) => update("delivery", event.target.value)} placeholder={copy.deliveryPlaceholder} required />
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="rfq-wizard-fields">
              <label>
                {copy.name}
                <input name="name" value={form.name} onChange={(event) => update("name", event.target.value)} placeholder={copy.namePlaceholder} required />
              </label>
              <label>
                {copy.company}
                <input name="company" value={form.company} onChange={(event) => update("company", event.target.value)} placeholder={copy.companyPlaceholder} required />
              </label>
              <label>
                {copy.email}
                <input type="email" name="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="name@company.com" required />
              </label>
              <label>
                {copy.whatsapp}
                <input type="tel" name="whatsapp" value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder="+84... / +971..." />
              </label>
            </div>
          )}

          <div className="rfq-wizard-actions">
            {step > 1 ? (
              <button className="rfq-wizard-back" type="button" onClick={() => setStep(step === 2 ? 1 : 2)}>
                <span aria-hidden="true">←</span> {copy.back}
              </button>
            ) : <span />}
            {step < 3 ? (
              <button className="button button-primary" type="button" onClick={advance}>
                {copy.continue} <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button className="button button-primary" type="submit">
                {copy.submit} <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
