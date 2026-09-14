import { FactoryRegistrationForm } from "@/components/FactoryRegistrationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = { title: "تسجيل المصنع | MISO JAPAN" };
export default function ArabicFactoryRegistrationPage() {
  return <><Header locale="ar" /><FactoryRegistrationForm locale="ar" /><Footer locale="ar" /></>;
}
