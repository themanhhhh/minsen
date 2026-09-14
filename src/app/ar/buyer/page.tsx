import { BuyerCatalogue } from "@/components/BuyerCatalogue";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = { title: "دليل المشترين الدوليين | MISO JAPAN" };
export default function ArabicBuyerPage() {
  return <><Header locale="ar" /><BuyerCatalogue locale="ar" /><Footer locale="ar" /></>;
}
