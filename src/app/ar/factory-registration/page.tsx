import { FactoryRegistrationForm } from "@/components/FactoryRegistrationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getFactoryRegistrationPrefill, type FormSearchParams } from "@/lib/form-prefill";

export const metadata = { title: "تسجيل المصنع | MISO JAPAN" };
export default async function ArabicFactoryRegistrationPage({
  searchParams,
}: {
  searchParams: Promise<FormSearchParams>;
}) {
  const prefill = getFactoryRegistrationPrefill("ar", await searchParams);
  return <><Header locale="ar" /><FactoryRegistrationForm locale="ar" prefill={prefill} /><Footer locale="ar" /></>;
}
