"use client";

import { useDeferredValue, useEffect, useState } from "react";
import type { Locale } from "@/data/landing-page";
import type { BuyerProfile } from "@/data/buyers";
import { readSavedBuyerIds, writeSavedBuyerIds } from "@/data/saved-profiles";
import {
  BadgeCheck,
  Bookmark,
  Building2,
  ClipboardList,
  Factory,
  Globe2,
  ShieldCheck,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

type BuyerIconName = "factory" | "cart" | "clipboard" | "shield" | "users" | "building" | "badge" | "globe";

const buyerPageSize = 6;

const marketRail = [
  { country: "India", label: "ẤN ĐỘ", labelEn: "INDIA", labelAr: "الهند", className: "buyer-rail-india" },
  { country: "China", label: "TRUNG QUỐC", labelEn: "CHINA", labelAr: "الصين", className: "buyer-rail-china" },
  { country: "Vietnam", label: "VIỆT NAM", labelEn: "VIETNAM", labelAr: "فيتنام", className: "buyer-rail-vietnam" },
  { country: "Bangladesh", label: "BANGLADESH", labelEn: "BANGLADESH", labelAr: "بنغلاديش", className: "buyer-rail-bangladesh" },
  { country: "Indonesia", label: "INDONESIA", labelEn: "INDONESIA", labelAr: "إندونيسيا", className: "buyer-rail-indonesia" },
  { country: "Middle East", label: "TRUNG ĐÔNG", labelEn: "MIDDLE EAST", labelAr: "الشرق الأوسط", className: "buyer-rail-middle-east" },
  { country: "Africa", label: "CHÂU PHI", labelEn: "AFRICA", labelAr: "أفريقيا", className: "buyer-rail-africa" },
  { country: "Global", label: "KHÁC / GLOBAL", labelEn: "GLOBAL", labelAr: "عالمي", className: "buyer-rail-global" },
  { country: "Americas", label: "KHÁC / MỸ", labelEn: "AMERICAS", labelAr: "الأمريكتان", className: "buyer-rail-america" },
  { country: "Other", label: "KHÁC / KHÁC", labelEn: "OTHER", labelAr: "أخرى", className: "buyer-rail-other" },
];

const buyerCountryCodes: Record<string, string> = {
  "Ấn Độ": "IN",
  "Mỹ": "US",
  Malaysia: "MY",
  "Trung Quốc": "CN",
  "Thổ Nhĩ Kỳ": "TR",
  UAE: "AE",
  "Hàn Quốc": "KR",
  Anh: "GB",
  "Ba Lan": "PL",
  "Úc": "AU",
  "Ả Rập Xê Út": "SA",
  "Ai Cập": "EG",
  "Ý": "IT",
  Philippines: "PH",
  Pakistan: "PK",
  Israel: "IL",
  Yemen: "YE",
  "Campuchia": "KH",
  "Litva": "LT",
  Romania: "RO",
  "Đài Loan": "TW",
  "Sri Lanka": "LK",
  "New Zealand": "NZ",
  "Tây Ban Nha": "ES",
  Nepal: "NP",
  Qatar: "QA",
  Indonesia: "ID",
  Guatemala: "GT",
  Jordan: "JO",
  "Thái Lan": "TH",
  "Nam Phi": "ZA",
  Nga: "RU",
  Maldives: "MV",
  "Hồng Kông": "HK",
  Bulgaria: "BG",
  Lebanon: "LB",
  "Hy Lạp": "GR",
  Panama: "PA",
  Peru: "PE",
  "Nhật Bản": "JP",
  Canada: "CA",
  Colombia: "CO",
  Oman: "OM",
  Brazil: "BR",
  Uruguay: "UY",
  "Thụy Điển": "SE",
  "Hà Lan": "NL",
  Bangladesh: "BD",
  Ukraine: "UA",
  "Costa Rica": "CR",
  Albania: "AL",
  "Pháp": "FR",
  Mayotte: "YT",
  Guyana: "GY",
  Uganda: "UG",
  Brunei: "BN",
  Maroc: "MA",
  Reunion: "RE",
  "Bosnia và Herzegovina": "BA",
  Slovenia: "SI",
  Ireland: "IE",
  "Bồ Đào Nha": "PT",
  Kazakhstan: "KZ",
  Turkmenistan: "TM",
  "Đức": "DE",
  Slovakia: "SK",
  Bahrain: "BH",
  Mexico: "MX",
  Hungary: "HU",
  "Việt Nam": "VN",
  Uzbekistan: "UZ",
  Samoa: "WS",
  Chile: "CL",
  "Cộng Hòa Séc": "CZ",
};

const buyerValueTranslations: Record<"en" | "ar", Record<string, string>> = {
  en: {
    "Ấn Độ, Trung Quốc": "India, China",
    "Oman và Ả Rập Xê Út": "Oman and Saudi Arabia",
    "Châu Âu": "Europe",
    "Miền Tây Ấn Độ": "Western India",
    "Miền Nam Ấn Độ": "Southern India",
    "Đông Nam Á": "Southeast Asia",
    "Bắc Mỹ": "North America",
    "Nam Á": "South Asia",
    "Đông Á": "East Asia",
    "Trung Đông": "Middle East",
    "Nam Mỹ": "South America",
    "Trung Mỹ": "Central America",
    "Việt Nam": "Vietnam",
    "Ván dăm": "Particle board",
    Vándăm: "Particle board",
    "Gỗ dán": "Plywood",
    "Gỗ dán phủ phim": "Film-faced plywood",
    "Ván OSB": "OSB board",
    "Gỗ dán LVL": "LVL plywood",
    "Ván dăm phủ melamine": "Melamine-faced particle board",
    "Gỗ dán bao bì": "Packaging plywood",
    "Ván dăm phủ laminate": "Laminate-faced particle board",
    "Gỗ dán phủ melamine": "Melamine-faced plywood",
    "Gỗ dán hàng hải": "Marine plywood",
    "Ván ép hiệu chuẩn": "Calibrated plywood",
    "Dăm bào": "Wood shavings",
    "Ván cứng (hardboard)": "Hardboard",
    "Ván bóc": "Veneer",
    "Gỗ keo": "Acacia wood",
    "Gỗ hỗn hợp/gỗ keo": "Mixed hardwood/acacia",
    "Gỗ bạch đàn": "Eucalyptus",
    "Gỗ bạch dương": "Birch",
    "Gỗ cao su": "Rubberwood",
    "Gỗ tạp": "Mixed wood",
    "Gỗ cứng": "Hardwood",
    "Gỗ dương": "Poplar",
    "Gỗ thông": "Pine",
    "Thông tin Buyer được kiểm soát thông qua Miso Japan": "Buyer information is controlled through MISO JAPAN",
    "Nội thất, xây dựng": "Furniture, construction",
    "Sản xuất nội thất": "Furniture manufacturing",
    "Đóng gói hàng hóa": "Goods packaging",
    "Ván khuôn xây dựng": "Construction formwork",
    "Đóng tàu, khu vực ẩm": "Shipbuilding, humid environments",
    "Trao đổi trực tiếp": "Direct negotiation",
    "100% LC trả ngay": "100% Sight LC",
    "LC trả ngay": "Sight LC",
    "LC trả sau": "Usance LC",
    "TT, cọc 30%": "TT, 30% deposit",
    "TT: cọc 30%, còn lại trước giao hàng": "TT: 30% deposit, balance before shipment",
    "TT, cọc 20%": "TT, 20% deposit",
    "TT: cọc 50%, còn lại trước giao hàng": "TT: 50% deposit, balance before shipment",
    "TT trước giao hàng": "TT before shipment",
    "100% TT trước giao hàng": "100% TT before shipment",
  },
  ar: {
    "Ấn Độ, Trung Quốc": "الهند والصين",
    "Oman và Ả Rập Xê Út": "عُمان والمملكة العربية السعودية",
    "Châu Âu": "أوروبا",
    "Miền Tây Ấn Độ": "غرب الهند",
    "Miền Nam Ấn Độ": "جنوب الهند",
    "Đông Nam Á": "جنوب شرق آسيا",
    "Bắc Mỹ": "أمريكا الشمالية",
    "Nam Á": "جنوب آسيا",
    "Đông Á": "شرق آسيا",
    "Trung Đông": "الشرق الأوسط",
    "Nam Mỹ": "أمريكا الجنوبية",
    "Trung Mỹ": "أمريكا الوسطى",
    "Việt Nam": "فيتنام",
    "Ván dăm": "ألواح حبيبية",
    Vándăm: "ألواح حبيبية",
    "Gỗ dán": "خشب رقائقي",
    "Gỗ dán phủ phim": "خشب رقائقي مكسو بالفيلم",
    "Ván OSB": "ألواح OSB",
    "Gỗ dán LVL": "خشب رقائقي LVL",
    "Ván dăm phủ melamine": "ألواح حبيبية مكسوة بالميلامين",
    "Gỗ dán bao bì": "خشب رقائقي للتغليف",
    "Ván dăm phủ laminate": "ألواح حبيبية مكسوة باللامينيت",
    "Gỗ dán phủ melamine": "خشب رقائقي مكسو بالميلامين",
    "Gỗ dán hàng hải": "خشب رقائقي بحري",
    "Ván ép hiệu chuẩn": "خشب رقائقي معاير",
    "Dăm bào": "نشارة الخشب",
    "Ván cứng (hardboard)": "ألواح صلبة",
    "Ván bóc": "قشرة خشبية",
    "Gỗ keo": "خشب الأكاسيا",
    "Gỗ hỗn hợp/gỗ keo": "خشب صلب مختلط/أكاسيا",
    "Gỗ bạch đàn": "خشب الأوكالبتوس",
    "Gỗ bạch dương": "خشب البتولا",
    "Gỗ cao su": "خشب المطاط",
    "Gỗ tạp": "خشب مختلط",
    "Gỗ cứng": "خشب صلب",
    "Gỗ dương": "خشب الحور",
    "Gỗ thông": "خشب الصنوبر",
    "Thông tin Buyer được kiểm soát thông qua Miso Japan": "بيانات المشتري تحت إدارة MISO JAPAN",
    "Nội thất, xây dựng": "الأثاث والإنشاءات",
    "Sản xuất nội thất": "تصنيع الأثاث",
    "Đóng gói hàng hóa": "تغليف البضائع",
    "Ván khuôn xây dựng": "قوالب البناء",
    "Đóng tàu, khu vực ẩm": "بناء السفن والمناطق الرطبة",
    "Trao đổi trực tiếp": "تفاوض مباشر",
    "100% LC trả ngay": "اعتماد مستندي فوري 100%",
    "LC trả ngay": "اعتماد مستندي فوري",
    "LC trả sau": "اعتماد مستندي مؤجل",
    "TT, cọc 30%": "تحويل، عربون 30%",
    "TT: cọc 30%, còn lại trước giao hàng": "تحويل: عربون 30%، والرصيد قبل الشحن",
    "TT, cọc 20%": "تحويل، عربون 20%",
    "TT: cọc 50%, còn lại trước giao hàng": "تحويل: عربون 50%، والرصيد قبل الشحن",
    "TT trước giao hàng": "تحويل قبل الشحن",
    "100% TT trước giao hàng": "تحويل كامل قبل الشحن",
  },
};

const buyerValuePhraseTranslations: Record<"en" | "ar", Array<[string, string]>> = {
  en: [
    ["100% TT trước giao hàng", "100% TT before shipment"],
    ["Thử lô đầu tiên", "First trial shipment"],
    ["Nhu cầu hàng tháng", "Monthly demand"],
    ["Nhập thử, có thể tăng", "Trial import, scalable"],
    ["Nhập hàng tháng", "Monthly import"],
    ["Mua theo dự án", "Project-based purchasing"],
    ["Mua theo đơn hàng", "Order-based purchasing"],
    ["Không mối mọt, ẩm mốc", "Free from termites and mold"],
    ["Đạt chất lượng xuất khẩu", "Export quality"],
    ["Không hở lõi", "No core gaps"],
    ["Ép nóng 2 lần", "Two hot-press cycles"],
    ["Chống nước", "Water resistant"],
    ["Cấp ", "Grade "],
    ["Dung sai", "Tolerance"],
    ["Ẩm ", "Moisture "],
    ["m³/tháng", "m³/month"],
    ["cont", "containers"],
    ["cọc", "deposit"],
    ["còn lại trước giao hàng", "balance before shipment"],
    ["Gỗ keo", "Acacia wood"],
    ["Gỗ bạch đàn", "Eucalyptus"],
    ["Gỗ bạch dương", "Birch"],
    ["Gỗ cao su", "Rubberwood"],
    ["Gỗ tạp", "Mixed wood"],
    ["Gỗ cứng", "Hardwood"],
    ["Gỗ thông", "Pine"],
    ["gỗ keo", "acacia wood"],
    ["gỗ bạch đàn", "eucalyptus"],
    ["gỗ bạch dương", "birch"],
    ["gỗ cao su", "rubberwood"],
    ["gỗ tạp", "mixed wood"],
    ["gỗ cứng", "hardwood"],
    ["gỗ thông", "pine"],
    ["Ván bóc keo", "Acacia veneer"],
    ["Ván bóc bạch đàn", "Eucalyptus veneer"],
    ["hoặc", "or"],
    [" và ", " and "],
    ["chính tại", "Mainly in"],
    ["cảng ", "Port "],
  ],
  ar: [
    ["100% TT trước giao hàng", "تحويل كامل قبل الشحن"],
    ["Thử lô đầu tiên", "الشحنة التجريبية الأولى"],
    ["Nhu cầu hàng tháng", "الطلب الشهري"],
    ["Nhập thử, có thể tăng", "استيراد تجريبي قابل للزيادة"],
    ["Nhập hàng tháng", "استيراد شهري"],
    ["Mua theo dự án", "شراء حسب المشروع"],
    ["Mua theo đơn hàng", "شراء حسب الطلب"],
    ["Không mối mọt, ẩm mốc", "مقاوم للنمل الأبيض والعفن"],
    ["Đạt chất lượng xuất khẩu", "جودة تصديرية"],
    ["Không hở lõi", "بدون فراغات في القلب"],
    ["Ép nóng 2 lần", "كبس حراري مرتين"],
    ["Chống nước", "مقاوم للماء"],
    ["Cấp ", "درجة "],
    ["Dung sai", "التفاوت"],
    ["Ẩm ", "الرطوبة "],
    ["m³/tháng", "م³/شهر"],
    ["cont", "حاويات"],
    ["cọc", "عربون"],
    ["còn lại trước giao hàng", "الرصيد قبل الشحن"],
    ["Gỗ keo", "خشب الأكاسيا"],
    ["Gỗ bạch đàn", "خشب الأوكالبتوس"],
    ["Gỗ bạch dương", "خشب البتولا"],
    ["Gỗ cao su", "خشب المطاط"],
    ["Gỗ tạp", "خشب مختلط"],
    ["Gỗ cứng", "خشب صلب"],
    ["Gỗ thông", "خشب الصنوبر"],
    ["gỗ keo", "خشب الأكاسيا"],
    ["gỗ bạch đàn", "خشب الأوكالبتوس"],
    ["gỗ bạch dương", "خشب البتولا"],
    ["gỗ cao su", "خشب المطاط"],
    ["gỗ tạp", "خشب مختلط"],
    ["gỗ cứng", "خشب صلب"],
    ["gỗ thông", "خشب الصنوبر"],
    ["Ván bóc keo", "قشرة أكاسيا"],
    ["Ván bóc bạch đàn", "قشرة أوكالبتوس"],
    ["hoặc", "أو"],
    [" và ", " و "],
    ["chính tại", "بشكل رئيسي في"],
    ["cảng ", "ميناء "],
  ],
};

function localizeBuyerValue(value: string, locale: Locale) {
  if (locale === "vi") {
    return value;
  }

  const countryCode = buyerCountryCodes[value];
  if (countryCode) {
    return new Intl.DisplayNames([locale], { type: "region" }).of(countryCode) ?? value;
  }

  const directTranslation = buyerValueTranslations[locale][value];
  if (directTranslation) {
    return directTranslation;
  }

  return buyerValuePhraseTranslations[locale].reduce(
    (translated, [source, target]) => translated.replaceAll(source, target),
    value,
  );
}

function localizeBuyerItems(items: string[], locale: Locale) {
  return items.map((item) => localizeBuyerValue(item, locale));
}

const countryRailGroups: Record<string, string[]> = {
  India: ["Ấn Độ"],
  China: ["Trung Quốc"],
  Vietnam: ["Việt Nam"],
  Bangladesh: ["Bangladesh"],
  Indonesia: ["Indonesia"],
  "Middle East": ["UAE", "Thổ Nhĩ Kỳ", "Ả Rập Xê Út", "Oman", "Oman và Ả Rập Xê Út", "Israel", "Jordan", "Yemen", "Qatar", "Bahrain", "Lebanon"],
  Africa: ["Ai Cập", "Nam Phi", "Mayotte", "Uganda", "Maroc", "Reunion"],
  Americas: ["Mỹ", "Canada", "Guatemala", "Panama", "Peru", "Colombia", "Costa Rica", "Brazil", "Uruguay", "Mexico", "Chile", "Guyana"],
};

function matchesCountryRail(country: string, filter: string) {
  if (!filter || filter === "Global") {
    return true;
  }

  if (filter === "Other") {
    const groupedCountries = Object.values(countryRailGroups).flat();
    return !groupedCountries.includes(country);
  }

  return countryRailGroups[filter]?.includes(country) ?? false;
}

function getPaginationItems(totalPages: number, currentPage: number): Array<number | "ellipsis"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const visiblePages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const pages = Array.from(visiblePages)
    .filter((page) => page > 0 && page <= totalPages)
    .sort((left, right) => left - right);
  const items: Array<number | "ellipsis"> = [];

  pages.forEach((page, index) => {
    if (index > 0 && page - pages[index - 1] > 1) {
      items.push("ellipsis");
    }
    items.push(page);
  });

  return items;
}

type BuyerCardCopy = {
  buyerId: string;
  layerOne: string;
  layerOneQuestion: string;
  mainProduct: string;
  core: string;
  glue: string;
  layerTwo: string;
  layerTwoQuestion: string;
  needs: string;
  buying: string;
  application: string;
  layerThree: string;
  layerThreeQuestion: string;
  capacity: string;
  quality: string;
  access: string;
  payment: string;
  market: string;
  ports: string;
};

type BuyerPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  catalogueTitle: string;
  catalogueDescription: string;
  countryLabel: string;
  featuredCountry: string;
  featuredCountryType: string;
  statsLabel: string;
  statsDetail: string;
  overviewAria: string;
  coverPageLabel: string;
  perPageLabel: string;
  directoryAria: string;
  lookupLabel: string;
  lookupTitle: string;
  clearFilters: string;
  searchLabel: string;
  searchPlaceholder: string;
  productLabel: string;
  allProducts: string;
  paymentLabel: string;
  allPayments: string;
  marketLabel: string;
  allMarkets: string;
  resultsPrefix: string;
  resultsMiddle: string;
  resultsSuffix: string;
  filteredStatus: string;
  allStatus: string;
  emptyTitle: string;
  emptyDescription: string;
  emptyAction: string;
  paginationAria: string;
  previousPage: string;
  nextPage: string;
  pageLabel: string;
  categoryAria: string;
  categories: string[];
  landmarkAria: string;
  card: BuyerCardCopy;
};

const buyerPageCopy: Record<Locale, BuyerPageCopy> = {
  en: {
    eyebrow: "INTERNATIONAL BUYER DIRECTORY",
    title: "Find buyers aligned with your manufacturing capability.",
    description: "Explore structured buyer profiles by country, product requirements and buying context. MISO JAPAN helps qualified manufacturers identify relevant opportunities and manage the connection locally.",
    action: "Ask MISO JAPAN to connect",
    catalogueTitle: "INTERNATIONAL BUYER DIRECTORY",
    catalogueDescription: "600 TRUSTED BUYER PROFILES MAPPED ACROSS PLYWOOD & WOOD PRODUCTS",
    countryLabel: "Filter by country",
    featuredCountry: "INDIA",
    featuredCountryType: "BUYER DIRECTORY",
    statsLabel: "BUYER PROFILES",
    statsDetail: "Mapped by buying requirement",
    overviewAria: "Buyer catalogue overview",
    coverPageLabel: "CATALOGUE PAGE",
    perPageLabel: "BUYERS / PAGE",
    directoryAria: "Search and filter buyers",
    lookupLabel: "BUYER PROFILE SEARCH",
    lookupTitle: "Find the right requirement before matching a factory",
    clearFilters: "Clear filters",
    searchLabel: "Search",
    searchPlaceholder: "Buyer ID, product, application, market...",
    productLabel: "Main product",
    allProducts: "All products",
    paymentLabel: "Payment method",
    allPayments: "All payment methods",
    marketLabel: "Market",
    allMarkets: "All markets",
    resultsPrefix: "Showing",
    resultsMiddle: "of",
    resultsSuffix: "profiles",
    filteredStatus: "Filters applied",
    allStatus: "All mapped profiles",
    emptyTitle: "No matching buyer profile",
    emptyDescription: "Try another search term or remove some filters.",
    emptyAction: "View all profiles",
    paginationAria: "Buyer directory pagination",
    previousPage: "Previous page",
    nextPage: "Next page",
    pageLabel: "PAGE",
    categoryAria: "Buyer categories",
    categories: ["IMPORTERS", "DISTRIBUTORS", "PLYWOOD / PANEL DISTRIBUTORS", "FURNITURE MANUFACTURERS", "INDUSTRIAL USERS", "TRADERS"],
    landmarkAria: "Taj Mahal illustration in India",
    card: {
      buyerId: "BUYER ID",
      layerOne: "TIER 1 - PRODUCT SIGNAL",
      layerOneQuestion: "WHAT DOES THE BUYER NEED?",
      mainProduct: "MAIN PRODUCT",
      core: "CORE",
      glue: "GLUE",
      layerTwo: "TIER 2 - BUYING CONTEXT",
      layerTwoQuestion: "HOW DOES THE BUYER BUY?",
      needs: "REQUIREMENT PROFILE",
      buying: "BUYING PATTERN",
      application: "END USE",
      layerThree: "TIER 3 - FACTORY FIT",
      layerThreeQuestion: "IS YOUR FACTORY A FIT?",
      capacity: "PRODUCTION CAPACITY",
      quality: "QUALITY REQUIREMENTS",
      access: "ACCESS STATUS",
      payment: "PAYMENT",
      market: "MARKET",
      ports: "PREFERRED PORT",
    },
  },
  vi: {
    eyebrow: "DANH MỤC BUYER QUỐC TẾ",
    title: "Tìm đúng buyer phù hợp với năng lực nhà máy của bạn.",
    description: "Khám phá hồ sơ buyer có cấu trúc theo quốc gia, yêu cầu sản phẩm và bối cảnh mua hàng. MISO JAPAN giúp nhà máy phù hợp xác định cơ hội liên quan và điều phối kết nối tại địa phương.",
    action: "Yêu cầu MISO JAPAN kết nối",
    catalogueTitle: "DANH MỤC BUYER QUỐC TẾ",
    catalogueDescription: "600 HỒ SƠ BUYER UY TÍN TRONG NGÀNH PLYWOOD & VÁN GỖ ĐƯỢC LẬP BẢN ĐỒ DỮ LIỆU",
    countryLabel: "Lọc theo quốc gia",
    featuredCountry: "ẤN ĐỘ",
    featuredCountryType: "DANH MỤC BUYER",
    statsLabel: "HỒ SƠ BUYER",
    statsDetail: "Được lập bản đồ theo nhu cầu",
    overviewAria: "Tổng quan danh mục buyer",
    coverPageLabel: "TRANG DANH MỤC",
    perPageLabel: "BUYER / TRANG",
    directoryAria: "Tìm kiếm và lọc buyer",
    lookupLabel: "TRA CỨU HỒ SƠ BUYER",
    lookupTitle: "Tìm đúng nhu cầu trước khi matching nhà máy",
    clearFilters: "Xóa bộ lọc",
    searchLabel: "Tìm kiếm",
    searchPlaceholder: "Mã buyer, sản phẩm, ứng dụng, thị trường...",
    productLabel: "Sản phẩm chính",
    allProducts: "Tất cả sản phẩm",
    paymentLabel: "Phương thức thanh toán",
    allPayments: "Tất cả thanh toán",
    marketLabel: "Thị trường",
    allMarkets: "Tất cả thị trường",
    resultsPrefix: "Hiển thị",
    resultsMiddle: "trong tổng số",
    resultsSuffix: "hồ sơ",
    filteredStatus: "Đã áp dụng bộ lọc",
    allStatus: "Tất cả hồ sơ đã lập bản đồ",
    emptyTitle: "Không tìm thấy hồ sơ phù hợp",
    emptyDescription: "Hãy thử từ khóa khác hoặc xóa bớt điều kiện lọc.",
    emptyAction: "Xem tất cả hồ sơ",
    paginationAria: "Phân trang danh sách buyer",
    previousPage: "Trang trước",
    nextPage: "Trang sau",
    pageLabel: "TRANG",
    categoryAria: "Phân loại buyer",
    categories: ["NHÀ NHẬP KHẨU", "NHÀ PHÂN PHỐI", "NHÀ PHÂN PHỐI PLYWOOD / PANEL", "NHÀ SẢN XUẤT NỘI THẤT", "NGƯỜI DÙNG CÔNG NGHIỆP", "THƯƠNG MẠI / TRADER"],
    landmarkAria: "Minh họa Taj Mahal tại Ấn Độ",
    card: {
      buyerId: "MÃ BUYER",
      layerOne: "TẦNG 1 - PRODUCT SIGNAL",
      layerOneQuestion: "BUYER ĐANG CẦN GÌ?",
      mainProduct: "SẢN PHẨM CHÍNH",
      core: "LÕI (CORE)",
      glue: "KEO (GLUE)",
      layerTwo: "TẦNG 2 - BUYING CONTEXT",
      layerTwoQuestion: "BUYER MUA NHƯ THẾ NÀO?",
      needs: "HỒ SƠ NHU CẦU",
      buying: "ĐẶC ĐIỂM MUA HÀNG",
      application: "ỨNG DỤNG CUỐI",
      layerThree: "TẦNG 3 - FACTORY FIT",
      layerThreeQuestion: "NHÀ MÁY CỦA BẠN CÓ PHÙ HỢP?",
      capacity: "CÔNG SUẤT SẢN XUẤT",
      quality: "YÊU CẦU CHẤT LƯỢNG",
      access: "TRẠNG THÁI TRUY CẬP",
      payment: "THANH TOÁN",
      market: "THỊ TRƯỜNG",
      ports: "CẢNG ƯU TIÊN",
    },
  },
  ar: {
    eyebrow: "دليل المشترين الدوليين",
    title: "اعثر على مشترين متوافقين مع قدرات مصنعك.",
    description: "استكشف ملفات المشترين حسب الدولة ومتطلبات المنتج وسياق الشراء. تساعد MISO JAPAN المصانع المؤهلة على تحديد الفرص المناسبة وإدارة التواصل محليًا.",
    action: "اطلب من MISO JAPAN التواصل",
    catalogueTitle: "دليل المشترين الدوليين",
    catalogueDescription: "600 ملف مشتري موثوق في مجال الخشب الرقائقي والمنتجات الخشبية",
    countryLabel: "تصفية حسب الدولة",
    featuredCountry: "الهند",
    featuredCountryType: "دليل المشترين",
    statsLabel: "ملفات المشترين",
    statsDetail: "مصنفة حسب متطلبات الشراء",
    overviewAria: "نظرة عامة على دليل المشترين",
    coverPageLabel: "صفحة الدليل",
    perPageLabel: "مشترون / صفحة",
    directoryAria: "البحث وتصفية المشترين",
    lookupLabel: "البحث في ملفات المشترين",
    lookupTitle: "اعثر على المتطلبات المناسبة قبل مطابقة المصنع",
    clearFilters: "مسح الفلاتر",
    searchLabel: "بحث",
    searchPlaceholder: "رمز المشتري، المنتج، الاستخدام، السوق...",
    productLabel: "المنتج الرئيسي",
    allProducts: "كل المنتجات",
    paymentLabel: "طريقة الدفع",
    allPayments: "كل طرق الدفع",
    marketLabel: "السوق",
    allMarkets: "كل الأسواق",
    resultsPrefix: "عرض",
    resultsMiddle: "من أصل",
    resultsSuffix: "ملفًا",
    filteredStatus: "تم تطبيق الفلاتر",
    allStatus: "كل الملفات المصنفة",
    emptyTitle: "لا يوجد ملف مشترٍ مطابق",
    emptyDescription: "جرّب كلمة بحث أخرى أو أزل بعض الفلاتر.",
    emptyAction: "عرض كل الملفات",
    paginationAria: "ترقيم صفحات دليل المشترين",
    previousPage: "الصفحة السابقة",
    nextPage: "الصفحة التالية",
    pageLabel: "صفحة",
    categoryAria: "فئات المشترين",
    categories: ["المستوردون", "الموزعون", "موزعو الخشب الرقائقي / الألواح", "مصنعو الأثاث", "المستخدمون الصناعيون", "التجار"],
    landmarkAria: "رسم توضيحي لتاج محل في الهند",
    card: {
      buyerId: "معرّف المشتري",
      layerOne: "المستوى 1 - إشارة المنتج",
      layerOneQuestion: "ماذا يحتاج المشتري؟",
      mainProduct: "المنتج الرئيسي",
      core: "القلب",
      glue: "الغراء",
      layerTwo: "المستوى 2 - سياق الشراء",
      layerTwoQuestion: "كيف يشتري المشتري؟",
      needs: "ملف المتطلبات",
      buying: "نمط الشراء",
      application: "الاستخدام النهائي",
      layerThree: "المستوى 3 - ملاءمة المصنع",
      layerThreeQuestion: "هل مصنعك مناسب؟",
      capacity: "الطاقة الإنتاجية",
      quality: "متطلبات الجودة",
      access: "حالة الوصول",
      payment: "الدفع",
      market: "السوق",
      ports: "الميناء المفضل",
    },
  },
} as const;

function BuyerIcon({ name }: { name: BuyerIconName }) {
  const props = { size: 18, strokeWidth: 1.65, "aria-hidden": true } as const;

  switch (name) {
    case "cart":
      return <ShoppingCart {...props} />;
    case "clipboard":
      return <ClipboardList {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "users":
      return <UsersRound {...props} />;
    case "building":
      return <Building2 {...props} />;
    case "badge":
      return <BadgeCheck {...props} />;
    case "globe":
      return <Globe2 {...props} />;
    default:
      return <Factory {...props} />;
  }
}

function CountryMark() {
  return <span className="buyer-country-mark" aria-hidden="true"><BuyerIcon name="globe" /></span>;
}

function IndiaLandmark({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg className="buyer-landmark" viewBox="0 0 360 120" role="img" aria-label={ariaLabel}>
      <defs>
        <linearGradient id="buyer-landmark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f3e5d4" />
          <stop offset="1" stopColor="#bd7555" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="#b87757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 108h336" />
        <path d="M29 108V57l9-11 9 11v51M38 45V19M34 23l4-8 4 8M43 108V71h-10v37" />
        <path d="M303 108V57l9-11 9 11v51M312 45V19M308 23l4-8 4 8M317 108V71h-10v37" />
        <path d="M68 108V66h42v42M250 108V66h42v42" />
        <path d="M77 66v-9l12-7 12 7v9M259 66v-9l12-7 12 7v9" />
      </g>
      <g fill="url(#buyer-landmark-fill)" stroke="#a9674e" strokeLinejoin="round" strokeWidth="2">
        <path d="M109 108V55c15-3 27-3 42 0v53Z" />
        <path d="M151 108V42c10-7 48-7 58 0v66Z" />
        <path d="M209 108V55c15-3 27-3 42 0v53Z" />
        <path d="M163 42c5-11 29-11 34 0Z" />
        <path d="M172 28c3-15 13-24 17-24s14 9 17 24c-9-6-25-6-34 0Z" />
        <path d="M187 4V0M180 30c6-4 14-4 20 0M172 54h35v54h-35Z" fill="#f7eee3" />
        <path d="M179 108V79c0-13 21-13 21 0v29" fill="#bd7555" />
        <path d="M122 55c2-10 11-17 16-17s14 7 16 17M238 55c2-10 11-17 16-17s14 7 16 17" fill="#f2dfcc" />
        <path d="M123 55V31M153 55V31M238 55V31M268 55V31" fill="none" />
      </g>
      <g fill="#e9c69e" opacity=".75">
        <path d="M136 91h9v17h-9zM216 91h9v17h-9zM155 72h8v15h-8zM197 72h8v15h-8z" />
      </g>
    </svg>
  );
}

function LayerHeading({ tone, label, question }: { tone: "green" | "blue" | "gold"; label: string; question: string }) {
  return (
    <div className={`buyer-layer-heading buyer-layer-heading-${tone}`}>
      <strong>{label}</strong>
      <span>{question}</span>
    </div>
  );
}

function BuyerList({ items }: { items: string[] }) {
  return (
    <ul className="buyer-bullet-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function BuyerCard({
  buyer,
  locale,
  isSaved,
  onToggleSaved,
  saveLabel,
  savedLabel,
  copy,
}: {
  buyer: BuyerProfile;
  locale: Locale;
  isSaved: boolean;
  onToggleSaved: (id: string) => void;
  saveLabel: string;
  savedLabel: string;
  copy: BuyerCardCopy;
}) {
  const localizedMainProducts = localizeBuyerItems(buyer.mainProduct, locale);
  const localizedCore = localizeBuyerItems(buyer.core, locale);
  const localizedGlue = localizeBuyerItems(buyer.glue, locale);
  const localizedNeeds = localizeBuyerItems(buyer.needs, locale);
  const localizedBuying = localizeBuyerItems(buyer.buying, locale);
  const localizedApplication = localizeBuyerItems(buyer.application, locale);
  const localizedQuality = localizeBuyerItems(buyer.quality, locale);

  return (
    <article className={`buyer-profile buyer-profile-${buyer.number}`}>
      <header className="buyer-profile-header">
        <span className="buyer-profile-number">{buyer.number}</span>
        <strong>{copy.buyerId}: {buyer.id}</strong>
        <span className="buyer-profile-country"><CountryMark /> {localizeBuyerValue(buyer.country, locale)}</span>
        <button
          className={`buyer-save-button${isSaved ? " is-saved" : ""}`}
          type="button"
          aria-label={`${isSaved ? savedLabel : saveLabel}: ${buyer.id}`}
          aria-pressed={isSaved}
          onClick={() => onToggleSaved(buyer.id)}
        >
          <Bookmark size={14} strokeWidth={1.8} fill={isSaved ? "currentColor" : "none"} aria-hidden="true" />
          <span>{isSaved ? savedLabel : saveLabel}</span>
        </button>
      </header>

      <section className="buyer-layer buyer-signal-layer">
        <LayerHeading tone="green" label={copy.layerOne} question={copy.layerOneQuestion} />
        <div className="buyer-signal-grid">
          <div className="buyer-signal-item">
            <BuyerIcon name="factory" />
            <div><span className="buyer-field-label">{copy.mainProduct}</span>{localizedMainProducts.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
          <div className="buyer-signal-item">
            <BuyerIcon name="building" />
            <div><span className="buyer-field-label">{copy.core}</span>{localizedCore.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
          <div className="buyer-signal-item">
            <BuyerIcon name="badge" />
            <div><span className="buyer-field-label">{copy.glue}</span>{localizedGlue.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
        </div>
      </section>

      <section className="buyer-layer buyer-context-layer">
        <LayerHeading tone="blue" label={copy.layerTwo} question={copy.layerTwoQuestion} />
        <div className="buyer-context-grid">
          <div className="buyer-context-column">
            <div className="buyer-context-label"><BuyerIcon name="clipboard" /><strong>{copy.needs}</strong></div>
            <BuyerList items={localizedNeeds} />
          </div>
          <div className="buyer-context-column">
            <div className="buyer-context-label"><BuyerIcon name="cart" /><strong>{copy.buying}</strong></div>
            <BuyerList items={localizedBuying} />
          </div>
          <div className="buyer-context-column buyer-application-column">
            <div className="buyer-context-label"><BuyerIcon name="building" /><strong>{copy.application}</strong></div>
            <p>{localizedApplication.map((line) => <span key={line}>{line}</span>)}</p>
          </div>
        </div>
      </section>

      <section className="buyer-layer buyer-fit-layer">
        <LayerHeading tone="gold" label={copy.layerThree} question={copy.layerThreeQuestion} />
        <div className="buyer-fit-grid">
          <div className="buyer-fit-column">
            <div className="buyer-context-label"><BuyerIcon name="factory" /><strong>{copy.capacity}</strong></div>
            <p className="buyer-fit-value">{localizeBuyerValue(buyer.capacity, locale)}</p>
          </div>
          <div className="buyer-fit-column">
            <div className="buyer-context-label"><BuyerIcon name="clipboard" /><strong>{copy.quality}</strong></div>
            <BuyerList items={localizedQuality} />
          </div>
          <div className="buyer-fit-column buyer-access-column">
            <div className="buyer-context-label"><BuyerIcon name="shield" /><strong>{copy.access}</strong></div>
            <p className="buyer-access-status">{localizeBuyerValue(buyer.access, locale)}</p>
          </div>
        </div>
      </section>

      <footer className="buyer-profile-meta">
        <span><b>{copy.payment}:</b> {localizeBuyerValue(buyer.payment, locale)}</span>
        <span><b>{copy.market}:</b> {localizeBuyerValue(buyer.market, locale)}</span>
        <span><b>{copy.ports}:</b> {localizeBuyerValue(buyer.ports, locale)}</span>
      </footer>
    </article>
  );
}

function CatalogueCategories({ copy }: { copy: BuyerPageCopy }) {
  const icons: BuyerIconName[] = ["users", "building", "badge", "factory", "building", "users"];

  return (
    <nav className="buyer-category-strip" aria-label={copy.categoryAria}>
      {copy.categories.map((label, index) => (
        <span className="buyer-category" key={label}>
          <span className="buyer-category-icon"><BuyerIcon name={icons[index]} /></span>
          <strong>{label}</strong>
        </span>
      ))}
    </nav>
  );
}

export function BuyerCatalogue({ locale, profiles }: { locale: Locale; profiles: BuyerProfile[] }) {
  const vi = locale === "vi";
  const ar = locale === "ar";
  const copy = buyerPageCopy[locale];
  const productOptions = Array.from(new Set(profiles.flatMap((buyer) => buyer.mainProduct)))
    .sort()
    .map((value) => ({ value, label: localizeBuyerValue(value, locale) }));
  const marketOptions = Array.from(new Set(profiles.map((buyer) => buyer.market)))
    .sort()
    .map((value) => ({ value, label: localizeBuyerValue(value, locale) }));
  const paymentOptions = Array.from(new Set(profiles.map((buyer) => buyer.payment)))
    .sort()
    .map((value) => ({ value, label: localizeBuyerValue(value, locale) }));
  const saveLabel = vi ? "Lưu buyer" : ar ? "حفظ المشتري" : "Save buyer";
  const savedLabel = vi ? "Đã lưu" : ar ? "محفوظ" : "Saved";
  const savedBuyersLabel = vi ? "Buyer đã lưu" : ar ? "المشترون المحفوظون" : "Saved buyers";
  const showAllLabel = vi ? "Xem tất cả" : ar ? "عرض الكل" : "Show all";
  const [query, setQuery] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [marketFilter, setMarketFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [savedBuyerIds, setSavedBuyerIds] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const validIds = new Set(profiles.map((buyer) => buyer.id));
      setSavedBuyerIds(readSavedBuyerIds().filter((id) => validIds.has(id)));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [profiles]);

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredProfiles = profiles.filter((buyer) => {
    const searchableValues = [
      buyer.id,
      buyer.country,
      ...buyer.mainProduct,
      ...buyer.core,
      ...buyer.glue,
      ...buyer.needs,
      ...buyer.buying,
      ...buyer.application,
      buyer.capacity,
      ...buyer.quality,
      buyer.access,
      buyer.payment,
      buyer.market,
      buyer.ports,
    ];
    const searchableText = [
      ...searchableValues,
      ...searchableValues.map((value) => localizeBuyerValue(value, locale)),
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!normalizedQuery || searchableText.includes(normalizedQuery)) &&
      (!productFilter || buyer.mainProduct.includes(productFilter)) &&
      (!paymentFilter || buyer.payment === paymentFilter) &&
      (!marketFilter || buyer.market === marketFilter) &&
      (!savedOnly || savedBuyerIds.includes(buyer.id)) &&
      matchesCountryRail(buyer.country, countryFilter)
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProfiles.length / buyerPageSize),
  );
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProfiles = filteredProfiles.slice(
    (safePage - 1) * buyerPageSize,
    safePage * buyerPageSize,
  );
  const paginationItems = getPaginationItems(totalPages, safePage);
  const hasFilters = Boolean(
    query.trim() || productFilter || paymentFilter || marketFilter || countryFilter || savedOnly,
  );
  const toggleSavedBuyer = (id: string) => {
    const next = savedBuyerIds.includes(id)
      ? savedBuyerIds.filter((item) => item !== id)
      : [...savedBuyerIds, id];
    setSavedBuyerIds(next);
    writeSavedBuyerIds(next);
  };
  const clearFilters = () => {
    setQuery("");
    setProductFilter("");
    setPaymentFilter("");
    setMarketFilter("");
    setCountryFilter("");
    setSavedOnly(false);
    setCurrentPage(1);
  };

  return (
    <div className={`buyer-catalogue-page buyer-catalogue-page-${locale}`}>
      <div className="buyer-catalogue-sheet">
        <section className="buyer-page-intro">
          <div className="buyer-page-intro-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
            <a className="button button-primary" href="https://plywood.misojapan.com/factory-registration">
              {copy.action} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="buyer-page-intro-stats" aria-label={copy.overviewAria}>
            <strong>600+</strong>
            <span>{copy.statsLabel}</span>
            <small>{copy.statsDetail}</small>
          </div>
        </section>
        <header className="buyer-catalogue-cover">
          <div className="buyer-cover-copy">
            <h2>{copy.catalogueTitle}</h2>
            <p>{copy.catalogueDescription}</p>
            <div className="buyer-cover-meta"><span>{copy.coverPageLabel} {String(safePage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span><i /> <span>6 {copy.perPageLabel}</span></div>
          </div>
          <IndiaLandmark ariaLabel={copy.landmarkAria} />
          <div className="buyer-cover-stamp"><strong>{copy.featuredCountry}</strong><span>{copy.featuredCountryType}</span></div>
        </header>

        <CatalogueCategories copy={copy} />

        <section className="buyer-directory-tools" aria-label={copy.directoryAria}>
          <div className="buyer-directory-tools-heading">
            <div>
              <span>{copy.lookupLabel}</span>
              <strong>{copy.lookupTitle}</strong>
            </div>
            <button
              className="buyer-filter-clear"
              type="button"
              onClick={clearFilters}
              disabled={!hasFilters}
            >
              {copy.clearFilters}
            </button>
          </div>
          <div className="buyer-filter-controls">
            <label className="buyer-search-field">
              <span>{copy.searchLabel}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder={copy.searchPlaceholder}
              />
              <b aria-hidden="true">⌕</b>
            </label>
            <label>
              <span>{copy.productLabel}</span>
              <select
                value={productFilter}
                onChange={(event) => {
                  setProductFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">{copy.allProducts}</option>
                {productOptions.map((product) => <option key={product.value} value={product.value}>{product.label}</option>)}
              </select>
            </label>
            <label>
              <span>{copy.paymentLabel}</span>
              <select
                value={paymentFilter}
                onChange={(event) => {
                  setPaymentFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">{copy.allPayments}</option>
                {paymentOptions.map((payment) => <option key={payment.value} value={payment.value}>{payment.label}</option>)}
              </select>
            </label>
            <label>
              <span>{copy.marketLabel}</span>
              <select
                value={marketFilter}
                onChange={(event) => {
                  setMarketFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">{copy.allMarkets}</option>
                {marketOptions.map((market) => <option key={market.value} value={market.value}>{market.label}</option>)}
              </select>
            </label>
          </div>
          <div className="buyer-directory-results-bar" aria-live="polite">
            <span>
              {copy.resultsPrefix} <strong>{filteredProfiles.length === 0 ? 0 : (safePage - 1) * buyerPageSize + 1}-{Math.min(safePage * buyerPageSize, filteredProfiles.length)}</strong> {copy.resultsMiddle} <strong>{filteredProfiles.length}</strong> {copy.resultsSuffix}
            </span>
            <span>{hasFilters ? copy.filteredStatus : copy.allStatus}</span>
            <button
              className={`buyer-saved-filter${savedOnly ? " is-active" : ""}`}
              type="button"
              aria-pressed={savedOnly}
              onClick={() => {
                setSavedOnly((value) => !value);
                setCurrentPage(1);
              }}
            >
              <Bookmark size={13} strokeWidth={1.8} fill={savedOnly ? "currentColor" : "none"} aria-hidden="true" />
              {savedOnly ? showAllLabel : savedBuyersLabel} ({savedBuyerIds.length})
            </button>
          </div>
        </section>

        <main className="buyer-profiles-grid" aria-live="polite">
          {paginatedProfiles.map((buyer) => (
            <BuyerCard
              buyer={buyer}
              locale={locale}
              isSaved={savedBuyerIds.includes(buyer.id)}
              onToggleSaved={toggleSavedBuyer}
              saveLabel={saveLabel}
              savedLabel={savedLabel}
              copy={copy.card}
              key={buyer.id}
            />
          ))}
          {paginatedProfiles.length === 0 && (
            <div className="buyer-empty-results">
              <strong>{copy.emptyTitle}</strong>
              <span>{copy.emptyDescription}</span>
              <button type="button" onClick={clearFilters}>{copy.emptyAction}</button>
            </div>
          )}
        </main>

        {filteredProfiles.length > 0 && (
          <nav className="buyer-pagination" aria-label={copy.paginationAria}>
            <button
              type="button"
              aria-label={copy.previousPage}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
            >
              ←
            </button>
            {paginationItems.map((page, index) => page === "ellipsis" ? (
              <span className="buyer-pagination-ellipsis" aria-hidden="true" key={`ellipsis-${index}`}>...</span>
            ) : (
              <button
                className={page === safePage ? "is-active" : ""}
                type="button"
                aria-current={page === safePage ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {String(page).padStart(2, "0")}
              </button>
            ))}
            <button
              type="button"
              aria-label={copy.nextPage}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
            >
              →
            </button>
            <span>{copy.pageLabel} {String(safePage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span>
          </nav>
        )}

      </div>
      <aside className="buyer-market-rail" aria-label={copy.countryLabel}>
        {marketRail.map((market) => {
          const isActive = countryFilter === market.country;
          return (
            <button
              className={`${market.className}${isActive ? " is-active" : ""}`}
              type="button"
              aria-pressed={isActive}
               aria-label={`${copy.countryLabel}: ${vi ? market.label : ar ? market.labelAr : market.labelEn}`}
              onClick={() => {
                setCountryFilter(isActive ? "" : market.country);
                setCurrentPage(1);
              }}
              key={market.country}
            >
              {vi ? market.label : ar ? market.labelAr : market.labelEn}
            </button>
          );
        })}
      </aside>
    </div>
  );
}
