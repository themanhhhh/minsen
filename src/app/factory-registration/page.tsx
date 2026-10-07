import { FactoryRegistrationForm } from "@/components/FactoryRegistrationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getFactoryRegistrationPrefill, type FormSearchParams } from "@/lib/form-prefill";

export const metadata = {
  title: "Register Factory | MISO JAPAN",
  description: "Register your Vietnam plywood factory with the MISO JAPAN manufacturing network.",
};

export default async function FactoryRegistrationPage({
  searchParams,
}: {
  searchParams: Promise<FormSearchParams>;
}) {
  const prefill = getFactoryRegistrationPrefill("en", await searchParams);
  return (
    <>
      <Header locale="en" />
      <FactoryRegistrationForm prefill={prefill} />
      <Footer locale="en" />
    </>
  );
}
