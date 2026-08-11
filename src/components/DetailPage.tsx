import Link from "next/link";
import { detailPageContent, type Locale } from "@/data/landing-page";
import { About } from "@/components/About";
import { BuyerProtection } from "@/components/BuyerProtection";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Process } from "@/components/Process";

export type DetailPageKind = keyof typeof detailPageContent.en;

export function DetailPage({ kind, locale }: { kind: DetailPageKind; locale: Locale }) {
  const content = detailPageContent[locale][kind];
  const homePath = locale === "vi" ? "/vi" : "/";
  return <><Header locale={locale} /><main className="detail-page"><section className="detail-hero"><div><p className="eyebrow eyebrow-light">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.description}</p><Link className="button button-light" href={`${homePath}#contact`}>{locale === "vi" ? "Gửi yêu cầu" : "Send an inquiry"}<span aria-hidden="true">↗</span></Link></div><div className={`detail-hero-number detail-${kind}`} aria-hidden="true"><span>{kind === "products" ? "03" : kind === "protection" ? "07" : kind === "network" ? "230+" : "04"}</span></div></section>{kind === "products" && <Features locale={locale} />}{kind === "protection" && <BuyerProtection locale={locale} />}{kind === "network" && <About locale={locale} />}{kind === "process" && <Process locale={locale} />}<Contact locale={locale} /></main><Footer locale={locale} /></>;
}
