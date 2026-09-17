import { BuyerCatalogue } from "@/components/BuyerCatalogue";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getBuyerProfiles } from "@/data/buyers";

export const metadata = {
  title: "Danh mục Buyer quốc tế | MISO JAPAN",
  description: "Danh mục hồ sơ buyer quốc tế trong ngành plywood và ván gỗ.",
};

export default function VietnameseBuyerPage() {
  const profiles = getBuyerProfiles();

  return (
    <>
      <Header locale="vi" />
      <BuyerCatalogue locale="vi" profiles={profiles} />
      <Footer locale="vi" />
    </>
  );
}
