import { LandingPage } from "@/app/page";

export const metadata = {
  title: "Minsen Export | Kết nối nguồn cung gỗ Việt Nam",
  description: "Kết nối buyer quốc tế với hơn 230 nhà máy plywood và veneer đã được xác minh tại Việt Nam.",
};

export default function VietnameseHome() {
  return <LandingPage locale="vi" />;
}
