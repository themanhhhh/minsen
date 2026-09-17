"use client";

import { FormEvent, useState } from "react";
import { useEffect } from "react";
import { company, factories, getLandingContent, type Locale } from "@/data/landing-page";
import { readSavedBuyerIds, readSavedFactoryIds } from "@/data/saved-profiles";

export function Contact({ locale }: { locale: Locale }) {
  const { contactContent } = getLandingContent(locale);
  const vi = locale === "vi";
  const ar = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [savedFactoryIds, setSavedFactoryIds] = useState<string[]>([]);
  const [savedBuyerIds, setSavedBuyerIds] = useState<string[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const validFactoryIds = new Set(factories.map((factory) => factory.id));
      setSavedFactoryIds(readSavedFactoryIds().filter((id) => validFactoryIds.has(id)));
      setSavedBuyerIds(readSavedBuyerIds());
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

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
          {(savedFactoryIds.length > 0 || savedBuyerIds.length > 0) && (
            <div className="contact-saved-profiles" aria-live="polite">
              <p>
                {vi
                  ? "Hồ sơ đã lưu sẽ được gửi kèm yêu cầu này."
                  : ar
                    ? "سيتم إرفاق الملفات المحفوظة بهذا الاستفسار."
                    : "Your saved profiles will be included with this inquiry."}
              </p>
              {savedFactoryIds.length > 0 && (
                <div className="contact-saved-group">
                  <span>{vi ? "Mã nhà máy đã lưu" : ar ? "رموز المصانع المحفوظة" : "Saved factory IDs"}</span>
                  <div className="contact-saved-tags">
                    {savedFactoryIds.map((id) => <code key={id}>{id}</code>)}
                  </div>
                  <input type="hidden" name="saved_factory_ids" value={savedFactoryIds.join(", ")} readOnly />
                </div>
              )}
              {savedBuyerIds.length > 0 && (
                <div className="contact-saved-group">
                  <span>{vi ? "Mã buyer đã lưu" : ar ? "رموز المشترين المحفوظة" : "Saved buyer IDs"}</span>
                  <div className="contact-saved-tags">
                    {savedBuyerIds.map((id) => <code key={id}>{id}</code>)}
                  </div>
                  <input type="hidden" name="saved_buyer_ids" value={savedBuyerIds.join(", ")} readOnly />
                </div>
              )}
            </div>
          )}
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
