import { BuyerCatalogue } from "@/components/BuyerCatalogue";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Danh mục Buyer quốc tế | MISO JAPAN",
  description: "Danh mục hồ sơ buyer quốc tế trong ngành plywood và ván gỗ.",
};

export default function VietnameseBuyerPage() {
  return (
    <>
      <Header locale="vi" />
      <BuyerCatalogue />
      <Footer locale="vi" />
    </>
  );
}
