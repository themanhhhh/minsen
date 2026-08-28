"use client";

import { FormEvent, useState } from "react";
import { getLandingContent, type Locale } from "@/data/landing-page";

export function RfqWizard({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const [submitted, setSubmitted] = useState(false);
  const { buyerConcerns } = getLandingContent(locale);
  const [form, setForm] = useState({
    product: "Commercial Plywood",
    specification: "",
    name: "",
    company: "",
    email: "",
    whatsapp: "",
  });
  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  if (submitted)
    return (
      <main className="rfq-page">
        <section className="rfq-success">
          <span>✓</span>
          <p className="eyebrow">
            {vi ? "Đã nhận yêu cầu" : "Inquiry received"}
          </p>
          <h1>
            {vi
              ? "MISO JAPAN sẽ tìm các nhà máy phù hợp cho bạn."
              : "MISO JAPAN will find the right manufacturers for you."}
          </h1>
          <p>
            {vi
              ? "Chúng tôi sẽ xem xét yêu cầu và xác định phương án sourcing, qualification nhà cung cấp phù hợp."
              : "We will review your requirement and determine the appropriate sourcing and supplier qualification approach."}
          </p>
          <a className="button button-primary" href={vi ? "/vi" : "/"}>
            {vi ? "Về trang chủ" : "Back to home"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    );
  return (
    <main className="rfq-page">
      <section className="rfq-concerns">
        <div>
          <p className="eyebrow">{vi ? "MỐI QUAN TÂM CỦA BUYER" : "COMMON BUYER CONCERNS"}</p>
          <h2>{vi ? "Những câu hỏi bạn không cần phải lo lắng." : "Questions you should not have to worry about."}</h2>
        </div>
        <div className="rfq-concern-list">
          {buyerConcerns.map((concern) => (
            <span key={concern}>{concern}</span>
          ))}
        </div>
      </section>
      <section className="rfq-request">
        <div className="rfq-request-copy">
          <p className="eyebrow eyebrow-light">
            {vi ? "HÃY BẮT ĐẦU TỪ YÊU CẦU CỦA BẠN" : "START WITH YOUR REQUIREMENT"}
          </p>
          <h1>{vi ? "Bạn đang tìm nhà cung cấp Plywood tại Việt Nam? Hãy bắt đầu từ yêu cầu — không chỉ từ một yêu cầu báo giá." : "Looking for a Vietnam Plywood Supplier? Start with Your Requirement — Not Just a Price Request."}</h1>
          <p>
            {vi
              ? "Hãy gửi mục đích sử dụng, thông số, số lượng, điểm đến và tiến độ giao hàng. MISO JAPAN sẽ xem xét yêu cầu và xác định phương án sourcing, qualification nhà cung cấp phù hợp."
              : "Send MISO JAPAN your product application, specification, quantity, destination and delivery expectation. We will review the requirement and determine the appropriate sourcing and supplier qualification approach."}
          </p>
          <div className="rfq-company-info">
            <span>{vi ? "Thông tin công ty chính thức" : "Official company information"}</span>
            <span>MISO JAPAN JOINT VENTURE COMPANY LIMITED</span>
            <span>{vi ? "Đối tác xuất khẩu và sourcing Việt Nam" : "Vietnam Export & Sourcing Partner"}</span>
          </div>
        </div>
        <form className="rfq-form" id="rfq-form" onSubmit={submit}>
          <div className="rfq-fields">
            <label>
              {vi ? "HỌ VÀ TÊN" : "FULL NAME"}
              <input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder={vi ? "Họ và tên của bạn" : "Your full name"} required />
            </label>
            <label>
              {vi ? "TÊN CÔNG TY" : "COMPANY NAME"}
              <input value={form.company} onChange={(event) => update("company", event.target.value)} placeholder={vi ? "Tên công ty của bạn" : "Your company name"} required />
            </label>
            <label>
              {vi ? "EMAIL CÔNG VIỆC" : "WORK EMAIL"}
              <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="name@company.com" required />
            </label>
            <label>
              WHATSAPP
              <input value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder={vi ? "Số WhatsApp của bạn" : "Your WhatsApp number"} />
            </label>
            <label className="rfq-field-full">
              {vi ? "DANH MỤC SẢN PHẨM" : "PRODUCT CATEGORY"}
              <select value={form.product} onChange={(event) => update("product", event.target.value)}>
                <option>Commercial Plywood</option>
                <option>Furniture Plywood</option>
                <option>Packing Plywood</option>
                <option>Construction Plywood</option>
                <option>Film-Faced Plywood</option>
                <option>Veneer</option>
                <option>LVL</option>
                <option>MDF / HDF</option>
                <option>{vi ? "Sản phẩm gỗ khác" : "Other wood products"}</option>
              </select>
            </label>
            <label className="rfq-field-full">
              {vi ? "QUY CÁCH VÀ YÊU CẦU" : "SPECIFICATION & REQUIREMENTS"}
              <textarea value={form.specification} onChange={(event) => update("specification", event.target.value)} placeholder={vi ? "Kích thước, độ dày, lõi, keo, số lượng, điểm đến và các yêu cầu khác" : "Size, thickness, core, glue, quantity, destination and other requirements"} rows={3} required />
            </label>
          </div>
          <div className="rfq-actions">
            <button className="button button-light" type="submit">
              {vi ? "Gửi RFQ" : "Submit RFQ"} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
