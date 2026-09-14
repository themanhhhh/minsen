import { notFound } from "next/navigation";
import { FactoryProfile } from "@/components/FactoryProfile";
import { factories } from "@/data/landing-page";

export function generateStaticParams() { return factories.map((factory) => ({ id: factory.slug })); }
export default async function ArabicFactoryPage({ params }: PageProps<"/ar/manufacturers/[id]">) { const { id } = await params; if (!factories.some((factory) => factory.slug === id)) notFound(); return <FactoryProfile factoryId={id} locale="ar" />; }
