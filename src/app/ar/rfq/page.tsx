import { RfqWizard } from "@/components/RfqWizard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = { title: "إرسال طلب عرض سعر | MISO JAPAN" };
export default function ArabicRfqPage() {
  return <><Header locale="ar" /><RfqWizard locale="ar" /><Footer locale="ar" /></>;
}
