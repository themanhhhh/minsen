import { RfqWizard } from "@/components/RfqWizard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export const metadata = { title: "Submit RFQ | Minsen Export", description: "Tell Minsen what plywood, veneer or wood product you need." };
export default function RfqPage() { return <><Header locale="en" /><RfqWizard locale="en" /><Footer locale="en" /></>; }
