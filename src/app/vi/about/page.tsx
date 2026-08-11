import { CompanyAbout } from "@/components/CompanyAbout";

export const metadata = {
  title: "Về Minsen Export | Nguồn cung gỗ Việt Nam",
  description: "Tìm hiểu cách Minsen Export kết nối buyer quốc tế với các nhà máy gỗ Việt Nam đã được xác minh.",
};

export default function VietnameseAboutPage() {
  return <CompanyAbout locale="vi" />;
}
