import { RfqWizard } from "@/components/RfqWizard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getRfqPrefill, type FormSearchParams } from "@/lib/form-prefill";
export const metadata = {
  title: "Submit RFQ | MISO JAPAN",
  description: "Tell MISO JAPAN what plywood, veneer or wood product you need.",
};
export default async function RfqPage({
  searchParams,
}: {
  searchParams: Promise<FormSearchParams>;
}) {
  const prefill = getRfqPrefill("en", await searchParams);
  return (
    <>
      <Header locale="en" />
      <RfqWizard locale="en" prefill={prefill} />
      <Footer locale="en" />
    </>
  );
}
