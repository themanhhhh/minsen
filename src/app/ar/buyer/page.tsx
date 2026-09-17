import { BuyerCatalogue } from "@/components/BuyerCatalogue";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getBuyerProfiles } from "@/data/buyers";

export const metadata = { title: "دليل المشترين الدوليين | MISO JAPAN" };
export default function ArabicBuyerPage() {
  const profiles = getBuyerProfiles();

  return <><Header locale="ar" /><BuyerCatalogue locale="ar" profiles={profiles} /><Footer locale="ar" /></>;
}
