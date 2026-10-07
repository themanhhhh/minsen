import { RfqWizard } from "@/components/RfqWizard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getRfqPrefill, type FormSearchParams } from "@/lib/form-prefill";

export const metadata = { title: "إرسال طلب عرض سعر | MISO JAPAN" };
export default async function ArabicRfqPage({
  searchParams,
}: {
  searchParams: Promise<FormSearchParams>;
}) {
  const prefill = getRfqPrefill("ar", await searchParams);
  return <><Header locale="ar" /><RfqWizard locale="ar" prefill={prefill} /><Footer locale="ar" /></>;
}
