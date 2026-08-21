import { DetailPage } from "@/components/DetailPage";

export const metadata = {
  title: "Buyer Risk Control | MISO JAPAN",
  description: "MISO JAPAN's buyer risk elimination and order control system.",
};
export default function BuyerProtectionPage() {
  return <DetailPage kind="protection" locale="en" />;
}
