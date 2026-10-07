import { FactoryRegistrationForm } from "@/components/FactoryRegistrationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getFactoryRegistrationPrefill, type FormSearchParams } from "@/lib/form-prefill";

export const metadata = {
  title: "Đăng ký nhà máy | MISO JAPAN",
  description: "Gửi thông tin nhà máy plywood và veneer của bạn cho mạng lưới MISO JAPAN.",
};

export default async function VietnameseFactoryRegistrationPage({
  searchParams,
}: {
  searchParams: Promise<FormSearchParams>;
}) {
  const prefill = getFactoryRegistrationPrefill("vi", await searchParams);
  return <><Header locale="vi" /><FactoryRegistrationForm locale="vi" prefill={prefill} /><Footer locale="vi" /></>;
}
