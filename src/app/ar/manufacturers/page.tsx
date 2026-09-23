import { FactoryDirectory } from "@/components/FactoryDirectory";

export const metadata = { title: "شبكة المصانع | MISO JAPAN" };
export default async function ArabicManufacturersPage({ searchParams }: PageProps<"/ar/manufacturers">) {
  const { product, q } = await searchParams;
  return (
    <FactoryDirectory
      locale="ar"
      initialProduct={typeof product === "string" ? product : undefined}
      initialSearch={typeof q === "string" ? q : undefined}
    />
  );
}
