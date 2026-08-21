"use client";

import { FormEvent, useState } from "react";
import { company, getLandingContent, type Locale } from "@/data/landing-page";

export function Contact({ locale }: { locale: Locale }) {
  const { contactContent } = getLandingContent(locale);
  const vi = locale === "vi";
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
            {vi
              ? "Thông tin liên hệ chính thức sẽ được cập nhật sau khi xác nhận."
              : "Official contact details will be added after confirmation."}
          </span>
          <small>{company.legalName}</small>
          <small>{company.location}</small>
        </div>
      </div>
      {submitted ? (
        <div className="contact-success">
          <span>✓</span>
          <h3>
            {vi ? "Đã nhận yêu cầu của bạn" : "Your inquiry has been received"}
          </h3>
          <p>
            {vi
              ? "Đội ngũ MISO JAPAN sẽ xem xét yêu cầu và phản hồi theo quy trình sourcing."
              : "The MISO JAPAN team will review your requirements and respond through the sourcing process."}
          </p>
          <button
            className="text-link"
            type="button"
            onClick={() => setSubmitted(false)}
          >
            {vi ? "Gửi yêu cầu khác" : "Send another inquiry"}
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <label>
              {vi ? "Họ và tên" : "Full name"}
              <input
                type="text"
                name="name"
                placeholder={vi ? "Tên của bạn" : "Your name"}
                required
              />
            </label>
            <label>
              {vi ? "Tên công ty" : "Company name"}
              <input
                type="text"
                name="company"
                placeholder={vi ? "Tên công ty" : "Your company"}
                required
              />
            </label>
            <label>
              {vi ? "Email công việc" : "Work email"}
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                required
              />
            </label>
            <label>
              WhatsApp
              <input
                type="tel"
                name="whatsapp"
                placeholder="+91... / +971..."
              />
            </label>
          </div>
          <label>
            {vi ? "Sản phẩm cần tìm" : "Product you are sourcing"}
            <input
              type="text"
              name="product"
              placeholder={
                vi
                  ? "Plywood, veneer, sản phẩm theo yêu cầu..."
                  : "Plywood, veneer, custom products..."
              }
              required
            />
          </label>
          <label>
            {vi ? "Quy cách và nhu cầu" : "Specification and requirements"}
            <textarea
              name="message"
              placeholder={
                vi
                  ? "Quy cách, số lượng, điểm đến và yêu cầu của bạn"
                  : "Specification, volume, destination and requirements"
              }
              rows={3}
            />
          </label>
          <button className="button button-light" type="submit">
            {vi ? "Gửi yêu cầu" : "Send inquiry"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      )}
    </section>
  );
}
