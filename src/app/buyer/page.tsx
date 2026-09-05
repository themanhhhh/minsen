import { BuyerCatalogue } from "@/components/BuyerCatalogue";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "International Buyer Directory | MISO JAPAN",
  description: "Explore structured international buyer profiles for plywood and wood products.",
};

export default function BuyerPage() {
  return (
    <>
      <Header locale="en" />
      <BuyerCatalogue locale="en" />
      <Footer locale="en" />
    </>
  );
}
