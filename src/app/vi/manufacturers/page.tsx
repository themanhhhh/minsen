import { FactoryDirectory } from "@/components/FactoryDirectory";
export const metadata = { title: "Mạng lưới sản xuất | MISO JAPAN", description: "Khám phá các hồ sơ năng lực mẫu trong mạng lưới sản xuất của MISO JAPAN." };
export default async function VietnameseManufacturersPage({ searchParams }: PageProps<"/vi/manufacturers">) {
  const { product, q } = await searchParams;
  return (
    <FactoryDirectory
      locale="vi"
      initialProduct={typeof product === "string" ? product : undefined}
      initialSearch={typeof q === "string" ? q : undefined}
    />
  );
}
