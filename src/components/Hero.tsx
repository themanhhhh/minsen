import { getLandingContent, heroStats, type Locale } from "@/data/landing-page";
import { Factory, Globe2, Handshake, ShieldCheck } from "lucide-react";
import Image from "next/image";

const statIcons = [Factory, ShieldCheck, Handshake, Globe2];

export function Hero({ locale }: { locale: Locale }) {
  const { heroContent } = getLandingContent(locale);
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          {heroContent.eyebrow}
        </p>
        <h1>
          {heroContent.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-description">{heroContent.description}</p>
        <form className="hero-search" action="#contact">
          <label className="sr-only" htmlFor="product-search">
            Product you are looking for
          </label>
          <input
            id="product-search"
            name="product"
            placeholder={heroContent.searchPlaceholder}
          />
          <button className="button button-search" type="submit">
            {heroContent.searchAction} <span aria-hidden="true">›</span>
          </button>
        </form>
        <div className="hero-popular">
          <strong>Popular searches:</strong>
          {heroContent.popularSearches.map((search) => (
            <a href="#products" key={search}>
              {search}
            </a>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            {heroContent.primaryAction} <span aria-hidden="true">›</span>
          </a>
          <a className="button button-outline" href="#protection">
            {heroContent.secondaryAction} <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>
      <Image
        className="hero-background"
        src="/images/hero/hero-vietnam-plywood-factory.png"
        alt=""
        fill
        preload
        sizes="100vw"
      />
      <div className="hero-stats">
        {heroStats.map((stat, index) => {
          const Icon = statIcons[index] || Factory;
          return <div key={stat.label}>
            <span className="stat-icon" aria-hidden="true">
              <Icon size={28} strokeWidth={1.8} />
            </span>
            <strong>{stat.value}</strong>
            <span className="stat-label">{stat.label}</span>
            <small>{stat.detail}</small>
          </div>;
        })}
      </div>
    </section>
  );
}
