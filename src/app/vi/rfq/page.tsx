import { RfqWizard } from "@/components/RfqWizard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getRfqPrefill, type FormSearchParams } from "@/lib/form-prefill";
export const metadata = { title: "Gửi RFQ | MISO JAPAN", description: "Gửi yêu cầu plywood, veneer hoặc sản phẩm gỗ cho MISO JAPAN." };
export default async function VietnameseRfqPage({
  searchParams,
}: {
  searchParams: Promise<FormSearchParams>;
}) {
  const prefill = getRfqPrefill("vi", await searchParams);
  return <><Header locale="vi" /><RfqWizard locale="vi" prefill={prefill} /><Footer locale="vi" /></>;
}
