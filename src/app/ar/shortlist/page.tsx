import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ShortlistPage } from "@/components/ShortlistPage";

export const metadata = { title: "قائمتي المختصرة | MISO JAPAN" };
export default function ArabicShortlistRoute() {
  return <><Header locale="ar" /><ShortlistPage locale="ar" /><Footer locale="ar" /></>;
}
