import { getLandingContent, type Locale } from "@/data/landing-page";

export function Contact({ locale }: { locale: Locale }) {
  const { contactContent } = getLandingContent(locale);
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy"><p className="eyebrow">{contactContent.eyebrow}</p><h2>{contactContent.title}</h2><p>{contactContent.description}</p></div>
      <form className="contact-form">
        <label>{locale === "vi" ? "Họ và tên" : "Full name"}<input type="text" name="name" placeholder={locale === "vi" ? "Tên của bạn" : "Your name"} required /></label>
        <label>{locale === "vi" ? "Email công việc" : "Work email"}<input type="email" name="email" placeholder="name@company.com" required /></label>
        <label>{locale === "vi" ? "Bạn đang cần tìm sản phẩm gì?" : "What are you sourcing?"}<input type="text" name="product" placeholder={locale === "vi" ? "Plywood, veneer, sản phẩm theo yêu cầu..." : "Plywood, veneer, custom products..."} /></label>
        <label>{locale === "vi" ? "Nội dung yêu cầu" : "Message"}<input type="text" name="message" placeholder={locale === "vi" ? "Quy cách, số lượng và yêu cầu của bạn" : "Tell us about your specifications and volume"} /></label>
        <button className="button button-light" type="submit">{locale === "vi" ? "Gửi yêu cầu" : "Send inquiry"} <span aria-hidden="true">↗</span></button>
      </form>
    </section>
  );
}
