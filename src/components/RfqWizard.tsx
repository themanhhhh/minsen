"use client";

import { FormEvent, useState } from "react";
import { type Locale } from "@/data/landing-page";

export function RfqWizard({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    product: "Plywood",
    specification: "",
    core: "",
    glue: "",
    quantity: "",
    destination: "",
    name: "",
    company: "",
    email: "",
    whatsapp: "",
  });
  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));
  const next = (event: FormEvent) => {
    event.preventDefault();
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
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
              ? "Minsen sẽ tìm các nhà máy phù hợp cho bạn."
              : "Minsen will find the right manufacturers for you."}
          </h1>
          <p>
            {vi
              ? "Đội ngũ sourcing sẽ xem xét yêu cầu và phản hồi với 3–5 lựa chọn phù hợp trong vòng một ngày làm việc."
              : "Our sourcing team will review your requirements and respond with 3–5 suitable options within one business day."}
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
      <section className="rfq-header">
        <p className="eyebrow eyebrow-light">
          {vi ? "Minsen sourcing request" : "Minsen sourcing request"}
        </p>
        <h1>
          {vi
            ? "Hãy cho chúng tôi biết bạn cần tìm gì."
            : "Tell us what you need to source."}
        </h1>
        <p>
          {vi
            ? "Chúng tôi sẽ tìm kiếm trong mạng lưới nhà máy và chọn ra các phương án phù hợp nhất."
            : "We will search across our manufacturing network and shortlist the most suitable options."}
        </p>
      </section>
      <form className="rfq-form" onSubmit={next}>
        <div className="rfq-progress">
          <span className={step >= 1 ? "active" : ""}>
            01 <small>{vi ? "Sản phẩm" : "Product"}</small>
          </span>
          <span className={step >= 2 ? "active" : ""}>
            02 <small>{vi ? "Yêu cầu" : "Requirements"}</small>
          </span>
          <span className={step >= 3 ? "active" : ""}>
            03 <small>{vi ? "Thông tin" : "Contact"}</small>
          </span>
        </div>
        {step === 1 && (
          <div className="rfq-fields">
            <label>
              {vi ? "Bạn đang mua gì?" : "What are you buying?"}
              <select
                value={form.product}
                onChange={(event) => update("product", event.target.value)}
              >
                <option>Plywood</option>
                <option>Veneer</option>
                <option>LVL</option>
                <option>MDF / HDF</option>
                <option>Other wood panels</option>
              </select>
            </label>
            <label>
              {vi ? "Quy cách sản phẩm" : "Product specification"}
              <input
                value={form.specification}
                onChange={(event) =>
                  update("specification", event.target.value)
                }
                placeholder="1220 × 2440 × 18mm"
                required
              />
            </label>
            <label>
              {vi ? "Nguyên liệu lõi" : "Core material"}
              <select
                value={form.core}
                onChange={(event) => update("core", event.target.value)}
              >
                <option value="">Select material</option>
                <option>Acacia</option>
                <option>Eucalyptus</option>
                <option>Rubberwood</option>
                <option>Poplar</option>
                <option>Mixed hardwood</option>
              </select>
            </label>
            <label>
              {vi ? "Loại keo" : "Glue type"}
              <select
                value={form.glue}
                onChange={(event) => update("glue", event.target.value)}
              >
                <option value="">Select glue</option>
                <option>MR</option>
                <option>E0</option>
                <option>E1</option>
                <option>Melamine</option>
                <option>Phenolic / WBP</option>
              </select>
            </label>
          </div>
        )}
        {step === 2 && (
          <div className="rfq-fields">
            <label>
              {vi ? "Số lượng dự kiến" : "Estimated quantity"}
              <input
                value={form.quantity}
                onChange={(event) => update("quantity", event.target.value)}
                placeholder="10 containers / month"
                required
              />
            </label>
            <label>
              {vi ? "Điểm đến" : "Destination"}
              <input
                value={form.destination}
                onChange={(event) => update("destination", event.target.value)}
                placeholder="Nhava Sheva, India"
                required
              />
            </label>
            <label>
              {vi
                ? "Mức giá mục tiêu (không bắt buộc)"
                : "Target price (optional)"}
              <input placeholder="Your target price and currency" />
            </label>
            <label>
              {vi ? "Ghi chú thêm" : "Additional notes"}
              <textarea
                placeholder={
                  vi
                    ? "Tiêu chuẩn, chứng nhận, ứng dụng..."
                    : "Standards, certifications, application..."
                }
              />
            </label>
          </div>
        )}
        {step === 3 && (
          <div className="rfq-fields">
            <label>
              {vi ? "Họ và tên" : "Full name"}
              <input
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              {vi ? "Tên công ty" : "Company name"}
              <input
                value={form.company}
                onChange={(event) => update("company", event.target.value)}
                placeholder="Your company"
                required
              />
            </label>
            <label>
              {vi ? "Email công việc" : "Work email"}
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="name@company.com"
                required
              />
            </label>
            <label>
              WhatsApp
              <input
                value={form.whatsapp}
                onChange={(event) => update("whatsapp", event.target.value)}
                placeholder="+91... / +971..."
              />
            </label>
          </div>
        )}
        <div className="rfq-actions">
          {step > 1 && (
            <button
              className="text-link"
              type="button"
              onClick={() => setStep(step - 1)}
            >
              ← {vi ? "Quay lại" : "Back"}
            </button>
          )}
          <button className="button button-primary" type="submit">
            {step === 3
              ? vi
                ? "Gửi yêu cầu"
                : "Submit RFQ"
              : vi
                ? "Tiếp tục"
                : "Continue"}{" "}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </main>
  );
}
