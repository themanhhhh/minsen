import { FactoryRegistrationForm } from "@/components/FactoryRegistrationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Đăng ký nhà máy | MISO JAPAN",
  description: "Gửi thông tin nhà máy plywood và veneer của bạn cho mạng lưới MISO JAPAN.",
};

export default function VietnameseFactoryRegistrationPage() {
  return <><Header locale="vi" /><FactoryRegistrationForm locale="vi" /><Footer locale="vi" /></>;
}
