import { RfqWizard } from "@/components/RfqWizard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export const metadata = { title: "Gửi RFQ | Minsen Export", description: "Gửi yêu cầu plywood, veneer hoặc sản phẩm gỗ cho Minsen." };
export default function VietnameseRfqPage() { return <><Header locale="vi" /><RfqWizard locale="vi" /><Footer locale="vi" /></>; }
