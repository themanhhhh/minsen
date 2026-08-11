import { getLandingContent, heroStats, type Locale } from "@/data/landing-page";
import Image from "next/image";

export function Hero({ locale }: { locale: Locale }) {
  const { heroContent } = getLandingContent(locale);
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow"><span className="eyebrow-dot" />{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p className="hero-description">{heroContent.description}</p>
        <form className="hero-search" action="#contact">
          <label className="sr-only" htmlFor="product-search">Product you are looking for</label>
          <input id="product-search" name="product" placeholder={heroContent.searchPlaceholder} />
          <button className="button button-search" type="submit">{heroContent.primaryAction} <span aria-hidden="true">›</span></button>
        </form>
        <a className="hero-secondary-link" href="#protection">{heroContent.secondaryAction} <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-photo"><Image src="/images/hero/hero-vietnam-plywood-factory.jpg" alt="Vietnam plywood factory and export network" fill priority sizes="(max-width: 820px) 100vw, 900px" /></div>
      <div className="hero-stats">{heroStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </section>
  );
}
