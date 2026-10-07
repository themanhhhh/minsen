import { getBuyerProfiles } from "@/data/buyers";
import { factories, getFactoryPublicLabel, type Locale } from "@/data/landing-page";

export type FormSearchParams = Record<string, string | string[] | undefined>;

export type FactoryRegistrationPrefill = {
  buyerReference: string;
  mainProducts: string;
  specifications: string;
};

export type RfqPrefill = {
  factoryReference: string;
  product: string;
  specification: string;
  application: string;
};

function getFirstParam(searchParams: FormSearchParams, key: string) {
  const value = searchParams[key];
  return Array.isArray(value) ? value[0] : value;
}

function joinValues(values: string[]) {
  return values.filter(Boolean).join(", ");
}

function getProductOption(values: string[], locale: Locale) {
  const normalized = values.join(" ").toLowerCase();
  if (normalized.includes("veneer") || normalized.includes("ván bóc")) return "Veneer";
  if (normalized.includes("lvl")) return "LVL";
  if (normalized.includes("mdf") || normalized.includes("hdf")) return "MDF / HDF";
  if (normalized.includes("plywood") || normalized.includes("gỗ dán") || normalized.includes("ván ép")) return "Plywood";
  return locale === "vi" ? "Sản phẩm gỗ khác" : locale === "ar" ? "منتجات خشبية أخرى" : "Other wood products";
}

function getSourceLabels(locale: Locale) {
  if (locale === "vi") {
    return {
      country: "Quốc gia",
      products: "Sản phẩm",
      core: "Lõi / vật liệu",
      glue: "Yêu cầu keo",
      needs: "Nhu cầu",
      market: "Thị trường / cảng",
      factory: "Nhà máy",
      id: "Mã hồ sơ",
      location: "Địa điểm",
      capacity: "Công suất",
      status: "Trạng thái",
    };
  }
  if (locale === "ar") {
    return {
      country: "الدولة",
      products: "المنتجات",
      core: "القلب / المادة",
      glue: "متطلبات اللصق",
      needs: "الاحتياج",
      market: "السوق / الميناء",
      factory: "المصنع",
      id: "معرّف الملف",
      location: "الموقع",
      capacity: "الطاقة الإنتاجية",
      status: "الحالة",
    };
  }
  return {
    country: "Country",
    products: "Products",
    core: "Core / material",
    glue: "Bonding requirement",
    needs: "Requirement",
    market: "Market / port",
    factory: "Factory",
    id: "Profile ID",
    location: "Location",
    capacity: "Capacity",
    status: "Status",
  };
}

export function getFactoryRegistrationPrefill(
  locale: Locale,
  searchParams: FormSearchParams,
): FactoryRegistrationPrefill | undefined {
  const buyerId = getFirstParam(searchParams, "buyer");
  if (!buyerId) return undefined;

  const buyer = getBuyerProfiles().find((item) => item.id.toLowerCase() === buyerId.toLowerCase());
  if (!buyer) return undefined;

  const labels = getSourceLabels(locale);
  return {
    buyerReference: buyer.id,
    mainProducts: joinValues(buyer.mainProduct),
    specifications: [
      `${labels.core}: ${joinValues(buyer.core)}`,
      `${labels.glue}: ${joinValues(buyer.glue)}`,
      `${labels.needs}: ${joinValues(buyer.needs)}`,
      `${labels.market}: ${buyer.market} · ${buyer.ports}`,
    ].join("\n"),
  };
}

export function getRfqPrefill(locale: Locale, searchParams: FormSearchParams): RfqPrefill | undefined {
  const factoryId = getFirstParam(searchParams, "factory");
  if (!factoryId) return undefined;

  const factory = factories.find(
    (item) => item.id.toLowerCase() === factoryId.toLowerCase() || item.slug.toLowerCase() === factoryId.toLowerCase(),
  );
  if (!factory) return undefined;

  const labels = getSourceLabels(locale);
  const factoryLabel = getFactoryPublicLabel(locale, factory.id);
  const factoryReference = [
    `${labels.factory}: ${factoryLabel}`,
    `${labels.id}: ${factory.id}`,
    `${labels.location}: ${factory.location}`,
    `${labels.products}: ${joinValues(factory.products)}`,
    `${labels.capacity}: ${factory.capacity || "Not provided"}`,
    `${labels.status}: ${factory.misoStatus}`,
  ].join("\n");

  return {
    factoryReference,
    product: getProductOption(factory.products, locale),
    specification: [joinValues(factory.materials), factory.materialsAndSpecs].filter(Boolean).join("\n"),
    application: locale === "vi"
      ? `Tôi quan tâm đến ${factoryLabel} và muốn MISO JAPAN hỗ trợ kết nối, đánh giá và qualification.`
      : locale === "ar"
        ? `أرغب في التواصل مع ${factoryLabel} وأطلب من MISO JAPAN تنسيق التقييم والتأهيل.`
        : `I am interested in connecting with ${factoryLabel} and would like MISO JAPAN to coordinate assessment and qualification.`,
  };
}
