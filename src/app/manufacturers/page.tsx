import { FactoryDirectory } from "@/components/FactoryDirectory";
export const metadata = {
  title: "Manufacturing Network | MISO JAPAN",
  description:
    "Explore sample capability profiles in the MISO JAPAN manufacturing network.",
};
export default async function ManufacturersPage({ searchParams }: PageProps<"/manufacturers">) {
  const { product, q } = await searchParams;
  return (
    <FactoryDirectory
      locale="en"
      initialProduct={typeof product === "string" ? product : undefined}
      initialSearch={typeof q === "string" ? q : undefined}
    />
  );
}
