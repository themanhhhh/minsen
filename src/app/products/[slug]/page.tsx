import { notFound } from "next/navigation";
import { ProductProfile } from "@/components/ProductProfile";
import { productCatalog } from "@/data/landing-page";
export function generateStaticParams() {
  return productCatalog.map((product) => ({ slug: product.slug }));
}
export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  if (!productCatalog.some((product) => product.slug === slug)) notFound();
  return <ProductProfile slug={slug} locale="en" />;
}
