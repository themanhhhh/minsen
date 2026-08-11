import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BuyerProtection } from "@/components/BuyerProtection";
import { Process } from "@/components/Process";
import { FactoryPreview } from "@/components/FactoryPreview";
import { ProductBrowse } from "@/components/ProductBrowse";
import { HomeResources } from "@/components/HomeResources";

export default function Home() {
  return <LandingPage locale="en" />;
}

export function LandingPage({ locale }: { locale: "en" | "vi" }) {
  return <><Header locale={locale} /><main><Hero locale={locale} /><ProductBrowse locale={locale} /><FactoryPreview locale={locale} /><BuyerProtection locale={locale} /><About locale={locale} /><Process locale={locale} /><HomeResources locale={locale} /><Contact locale={locale} /></main><Footer locale={locale} /></>;
}
