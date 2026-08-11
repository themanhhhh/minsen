import { notFound } from "next/navigation";
import { FactoryProfile } from "@/components/FactoryProfile";
import { factories } from "@/data/landing-page";

export function generateStaticParams() { return factories.map((factory) => ({ id: factory.id.toLowerCase() })); }
export default async function VietnameseFactoryPage({ params }: PageProps<"/vi/manufacturers/[id]">) { const { id } = await params; if (!factories.some((factory) => factory.id.toLowerCase() === id)) notFound(); return <><FactoryProfile factoryId={id} locale="vi" /></>; }
