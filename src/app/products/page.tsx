import { DetailPage } from "@/components/DetailPage";

export const metadata = {
  title: "Products | MISO JAPAN",
  description:
    "Plywood, veneer and wood panels sourced through a controlled buyer process.",
};
export default function ProductsPage() {
  return <DetailPage kind="products" locale="en" />;
}
