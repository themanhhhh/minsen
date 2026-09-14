"use client";

import { FormEvent, useState } from "react";
import { company, getLandingContent, type Locale } from "@/data/landing-page";

export function Contact({ locale }: { locale: Locale }) {
  const { contactContent } = getLandingContent(locale);
  const vi = locale === "vi";
  const ar = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">{contactContent.eyebrow}</p>
        <h2>{contactContent.title}</h2>
        <p>{contactContent.description}</p>
        <div className="contact-direct">
          <span>
            {vi ? "Liên hệ trực tiếp với MISO JAPAN" : ar ? "تواصل مباشرة مع MISO JAPAN" : "Contact MISO JAPAN directly"}
          </span>
          <a href={`mailto:${vi ? company.emailVi : company.email}`}>{vi ? company.emailVi : company.email}</a>
          <a href={`tel:${(vi ? company.whatsappVi : company.whatsapp).replace(/\s/g, "")}`}>{vi ? company.whatsappVi : company.whatsapp}</a>
          <small>{company.legalName}</small>
          <small>{company.location}</small>
        </div>
      </div>
      {submitted ? (
        <div className="contact-success">
          <span>✓</span>
          <h3>
            {vi ? "Đã nhận yêu cầu của bạn" : ar ? "تم استلام استفسارك" : "Your inquiry has been received"}
          </h3>
          <p>
              {vi
                ? "Đội ngũ MISO JAPAN sẽ xem xét yêu cầu và phản hồi theo quy trình sourcing."
                : ar ? "سيراجع فريق MISO JAPAN متطلباتك ويرد عليك من خلال عملية التوريد." : "The MISO JAPAN team will review your requirements and respond through the sourcing process."}
          </p>
          <button
            className="text-link"
            type="button"
            onClick={() => setSubmitted(false)}
          >
            {vi ? "Gửi yêu cầu khác" : ar ? "إرسال استفسار آخر" : "Send another inquiry"}
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <label>
              {vi ? "Họ và tên" : ar ? "الاسم الكامل" : "Full name"}
              <input
                type="text"
                name="name"
                placeholder={vi ? "Tên của bạn" : ar ? "اسمك" : "Your name"}
                required
              />
            </label>
            <label>
              {vi ? "Tên công ty" : ar ? "اسم الشركة" : "Company name"}
              <input
                type="text"
                name="company"
                placeholder={vi ? "Tên công ty" : ar ? "اسم شركتك" : "Your company"}
                required
              />
            </label>
            <label>
              {vi ? "Email công việc" : ar ? "البريد الإلكتروني للعمل" : "Work email"}
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                required
              />
            </label>
            <label>
            {ar ? "واتساب" : "WhatsApp"}
              <input
                type="tel"
                name="whatsapp"
                placeholder="+91... / +971..."
              />
            </label>
          </div>
          <label>
            {vi ? "Sản phẩm cần tìm" : ar ? "المنتج الذي تبحث عنه" : "Product you are sourcing"}
            <input
              type="text"
              name="product"
              placeholder={
                vi
                  ? "Plywood, veneer, sản phẩm theo yêu cầu..."
                  : ar ? "خشب رقائقي، قشرة، منتجات مخصصة..." : "Plywood, veneer, custom products..."
              }
              required
            />
          </label>
          <label>
            {vi ? "Quy cách và nhu cầu" : ar ? "المواصفات والمتطلبات" : "Specification and requirements"}
            <textarea
              name="message"
              placeholder={
                vi
                  ? "Quy cách, số lượng, điểm đến và yêu cầu của bạn"
                  : ar ? "المواصفات والكمية والوجهة والمتطلبات" : "Specification, volume, destination and requirements"
              }
              rows={3}
            />
          </label>
          <button className="button button-light" type="submit">
            {vi ? "Gửi yêu cầu" : ar ? "إرسال الاستفسار" : "Send inquiry"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      )}
    </section>
  );
}
