import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = { title: "اتصل بنا | MISO JAPAN" };
export default function ArabicContactPage() {
  return <><Header locale="ar" /><main><Contact locale="ar" /></main><Footer locale="ar" /></>;
}
