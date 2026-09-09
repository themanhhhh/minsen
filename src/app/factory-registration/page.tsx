import { FactoryRegistrationForm } from "@/components/FactoryRegistrationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Register Factory | MISO JAPAN",
  description: "Register your Vietnam plywood factory with the MISO JAPAN manufacturing network.",
};

export default function FactoryRegistrationPage() {
  return (
    <>
      <Header locale="en" />
      <FactoryRegistrationForm />
      <Footer locale="en" />
    </>
  );
}
