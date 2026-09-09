"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  CalendarDays,
  ClipboardList,
  Factory as FactoryIcon,
  Globe2,
  Info,
  MapPin,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  factories,
  factoryFilterOptions,
  type Factory,
  type Locale,
} from "@/data/landing-page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollCue } from "@/components/ScrollCue";

type Filters = {
  products: string[];
  materials: string[];
  regions: string[];
  markets: string[];
};
const emptyFilters: Filters = {
  products: [],
  materials: [],
  regions: [],
  markets: [],
};
const shortlistStorageKey = "minsen-shortlist";
const compareStorageKey = "minsen-compare";

function readIds(key: string) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function FactoryDirectory({ locale, initialProduct }: { locale: Locale; initialProduct?: string }) {
  const initialFilters = initialProduct && factoryFilterOptions.products.includes(initialProduct)
    ? { ...emptyFilters, products: [initialProduct] }
    : emptyFilters;
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(initialFilters);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShortlist(readIds(shortlistStorageKey));
      setCompare(readIds(compareStorageKey).filter((id) => factories.some((factory) => factory.id === id)).slice(0, 3));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  const vi = locale === "vi";
  const labels = vi
    ? {
        eyebrow: "Mạng lưới sản xuất",
        title: "Tìm năng lực phù hợp cho yêu cầu của bạn.",
        description:
          "Khám phá 7 hồ sơ nhà sản xuất được cung cấp trong dữ liệu thực tế. MISO JAPAN sẽ tiếp tục qualification và kết nối bạn với nhà cung cấp phù hợp.",
        filter: "BỘ LỌC",
        results: "hồ sơ phù hợp",
        shortlist: "đã lưu",
        compare: "So sánh",
        match: "Yêu cầu MISO JAPAN kết nối",
        profileDetails: "Xem chi tiết hồ sơ",
        save: "Lưu",
        saved: "Đã lưu",
        add: "So sánh",
        productCategory: "Danh mục sản phẩm",
        coreMaterial: "Vật liệu lõi",
        location: "Khu vực (Việt Nam)",
        exportMarket: "Thị trường xuất khẩu",
        allRegions: "Tất cả khu vực",
        allMarkets: "Tất cả thị trường",
        applyFilters: "Áp dụng bộ lọc",
        factoryType: "Tên công ty",
        manufacturer: "Nhà sản xuất",
        capacity: "Công suất sản xuất",
        established: "Thành lập",
        markets: "Thị trường xuất khẩu",
        certifications: "Chứng nhận",
        status: "Trạng thái MISO JAPAN",
        qualificationPending: "Đang chờ qualification",
        disclaimer: "Các hồ sơ dưới đây sử dụng thông tin do doanh nghiệp cung cấp và đang chờ MISO JAPAN qualification.",
      }
    : {
        eyebrow: "MANUFACTURING NETWORK",
        title: "Find the right capability for your requirement.",
        description:
          "Explore 7 manufacturer profiles from submitted company data. MISO JAPAN will continue qualification and connect you with suitable suppliers.",
        filter: "FILTERS",
        results: "matching profiles",
        shortlist: "saved",
        compare: "Compare",
        match: "Ask MISO JAPAN to connect",
        profileDetails: "View profile details",
        save: "Save",
        saved: "Saved",
        add: "Compare",
        productCategory: "PRODUCT CATEGORY",
        coreMaterial: "CORE MATERIAL",
        location: "LOCATION (VIETNAM)",
        exportMarket: "EXPORT MARKETS",
        allRegions: "All regions",
        allMarkets: "All markets",
        applyFilters: "Apply filters",
        factoryType: "Company name",
        manufacturer: "Manufacturer",
        capacity: "Production capacity",
        established: "Established",
        markets: "Export markets",
        certifications: "Certifications",
        status: "MISO JAPAN status",
        qualificationPending: "Qualification pending",
        disclaimer: "Profiles use company-submitted information and remain pending MISO JAPAN qualification.",
      };
  const missing = vi ? "Chưa cung cấp" : "Not provided";
  const toggleFilter = (group: keyof Filters, value: string) =>
    setFilters((current) => ({
      ...current,
      [group]: current[group].includes(value)
        ? current[group].filter((item) => item !== value)
        : [...current[group], value],
    }));
  const matches = (factory: Factory) =>
    (appliedFilters.products.length === 0 ||
      appliedFilters.products.some((item) =>
        item === "Other Wood Products"
          ? factory.products.some(
              (product) =>
                !factoryFilterOptions.products
                  .filter((option) => option !== "Other Wood Products")
                  .includes(product),
            )
          : factory.products.includes(item),
      )) &&
    (appliedFilters.materials.length === 0 ||
      appliedFilters.materials.some((item) =>
        item === "Other"
          ? factory.materials.some(
              (material) =>
                !factoryFilterOptions.materials
                  .filter((option) => option !== "Other")
                  .includes(material),
            )
          : factory.materials.includes(item),
      )) &&
    (appliedFilters.regions.length === 0 ||
      appliedFilters.regions.includes(factory.region)) &&
    (appliedFilters.markets.length === 0 ||
      appliedFilters.markets.some((item) => factory.exportMarkets.includes(item)));
  const filtered = factories.filter(
    (factory) => (!savedOnly || shortlist.includes(factory.id)) && matches(factory),
  );
  const comparedFactories = factories.filter((factory) => compare.includes(factory.id));
  const comparisonRows: { label: string; value: (factory: Factory) => string }[] = [
    { label: vi ? "Địa điểm" : "Location", value: (factory) => factory.location },
    { label: vi ? "Sản phẩm" : "Products", value: (factory) => factory.products.slice(0, 3).join(", ") },
    { label: vi ? "Công suất" : "Capacity", value: (factory) => factory.capacity || missing },
    { label: vi ? "Thị trường" : "Markets", value: (factory) => factory.exportMarkets.slice(0, 3).join(", ") || missing },
    { label: vi ? "Trạng thái" : "Status", value: (factory) => factory.misoStatus },
  ];
  const toggleShortlist = (id: string) => {
    const next = shortlist.includes(id)
      ? shortlist.filter((item) => item !== id)
      : [...shortlist, id];
    setShortlist(next);
    window.localStorage.setItem(shortlistStorageKey, JSON.stringify(next));
  };
  const toggleCompare = (id: string) => {
    const next = compare.includes(id)
      ? compare.filter((item) => item !== id)
      : compare.length < 3
        ? [...compare, id]
        : compare;
    setCompare(next);
    window.localStorage.setItem(compareStorageKey, JSON.stringify(next));
    window.setTimeout(() => document.getElementById("compare-preview")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };
  const clearCompare = () => {
    setCompare([]);
    window.localStorage.removeItem(compareStorageKey);
  };
  const clearFilters = () => {
    setFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
    setSavedOnly(false);
  };
  const filterGroup = (
    title: string,
    group: keyof Filters,
    options: string[],
  ) => (
    <fieldset className="factory-filter-group">
      <legend>{title}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={filters[group].includes(option)}
            onChange={() => toggleFilter(group, option)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
  const filterSelect = (
    title: string,
    group: "regions" | "markets",
    options: string[],
    allLabel: string,
  ) => (
    <fieldset className="factory-filter-select-group">
      <legend>{title}</legend>
      <select
        value={filters[group][0] ?? ""}
        onChange={(event) =>
          setFilters((current) => ({
            ...current,
            [group]: event.target.value ? [event.target.value] : [],
          }))
        }
      >
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </fieldset>
  );
  return (
    <>
      <Header locale={locale} />
      <main className="directory-page">
        <section className="directory-hero">
          <div>
            <p className="eyebrow eyebrow-light">{labels.eyebrow}</p>
            <h1>{labels.title}</h1>
            <p>{labels.description}</p>
            <div className="directory-features">
              <div>
                <ShieldCheck size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <strong>{vi ? "Dữ liệu doanh nghiệp cung cấp" : "Company-submitted data"}</strong>
                  <small>{vi ? "Thông tin được công khai đúng theo tài liệu nguồn." : "Information published from submitted source files."}</small>
                </span>
              </div>
              <div>
                <ClipboardList size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <strong>{vi ? "Quy trình có cấu trúc" : "Structured control process"}</strong>
                  <small>{vi ? "12 control gate từ yêu cầu đến xuất hàng." : "12 control gates from inquiry to shipment."}</small>
                </span>
              </div>
              <div>
                <UsersRound size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <strong>{vi ? "Một đầu mối chịu trách nhiệm" : "One accountable partner"}</strong>
                  <small>{vi ? "Một đội ngũ, một trách nhiệm cho đơn hàng." : "One team, one responsibility for your order."}</small>
                </span>
              </div>
            </div>
          </div>
           <div className="directory-count">
             <strong>{factories.length}</strong>
             <span>{vi ? "HỒ SƠ CÔNG KHAI" : "PUBLIC PROFILES"}</span>
             <small>{vi ? "Mạng lưới đa dạng tại Việt Nam" : "Wide & diversified network across Vietnam"}</small>
          </div>
          <ScrollCue targetId="directory-content" label={vi ? "Cuộn để khám phá nhà máy" : "Scroll to explore factories"} />
        </section>
        <section className="directory-content" id="directory-content">
          <aside className="factory-filters">
            <div className="filter-heading">
              <strong>{labels.filter}</strong>
              <button type="button" onClick={clearFilters}>
                {vi ? "Xóa tất cả" : "Clear all"}
              </button>
            </div>
            <label className="factory-saved-filter">
              <input
                type="checkbox"
                checked={savedOnly}
                onChange={(event) => setSavedOnly(event.target.checked)}
              />
              <Bookmark size={14} strokeWidth={1.7} aria-hidden="true" />
              {vi ? "Chỉ nhà máy đã lưu" : "Saved factories only"}
            </label>
            {filterGroup(
              labels.productCategory,
              "products",
              factoryFilterOptions.products,
            )}
            {filterGroup(
              labels.coreMaterial,
              "materials",
              factoryFilterOptions.materials,
            )}
            {filterSelect(labels.location, "regions", factoryFilterOptions.regions, labels.allRegions)}
            {filterSelect(labels.exportMarket, "markets", factoryFilterOptions.markets, labels.allMarkets)}
            <button className="apply-filters-button" type="button" onClick={() => setAppliedFilters(filters)}>
              {labels.applyFilters}
            </button>
          </aside>
          <div className="directory-results">
            <div className="directory-toolbar">
              <p>
                <strong>{filtered.length}</strong> {labels.results}
              </p>
              <span className="saved-count"><Bookmark size={16} strokeWidth={1.7} aria-hidden="true" /> {shortlist.length} {labels.shortlist}</span>
            </div>
            <div className="factory-grid">
              {filtered.map((factory) => (
                <article className="factory-card" key={factory.id}>
                  <div className="factory-card-top">
                    <span className="factory-id">{factory.id}</span>
                     <span className="qualification-badge">{factory.misoStatus}</span>
                  </div>
                  <Link
                    className="factory-placeholder"
                    href={`${vi ? "/vi" : ""}/manufacturers/${factory.slug}`}
                    aria-label={`${vi ? "Xem hồ sơ" : "View profile"}: ${factory.id}`}
                  >
                     {factory.imagePath && (
                       <Image
                         src={factory.imagePath}
                        alt={`${factory.id} factory`}
                        fill
                        sizes="(max-width: 820px) 100vw, 50vw"
                      />
                    )}
                     <span className="factory-image-status">{factory.imagePath ? "VN" : vi ? "CHƯA CÓ ẢNH" : "IMAGE PENDING"}</span>
                     <strong>{factory.location.split(",")[0]}</strong>
                  </Link>
                  <p className="factory-location"><MapPin size={13} strokeWidth={2} aria-hidden="true" />{factory.location}</p>
                   <h2>{vi ? factory.companyNameVi : factory.displayName}</h2>
                  <div className="factory-tags">
                    {factory.products.slice(0, 3).map((product) => (
                      <span key={product}>{product}</span>
                    ))}
                  </div>
                  <div className="factory-details">
                     <div><FactoryIcon size={14} strokeWidth={1.7} aria-hidden="true" /><span><small>{labels.factoryType}</small><strong>{vi ? factory.companyNameVi : factory.companyNameEn}</strong></span></div>
                     <div><ClipboardList size={14} strokeWidth={1.7} aria-hidden="true" /><span><small>{labels.capacity}</small><strong>{factory.capacity || missing}</strong></span></div>
                     <div><CalendarDays size={14} strokeWidth={1.7} aria-hidden="true" /><span><small>{labels.established}</small><strong>{factory.establishedYear}</strong></span></div>
                     <div><Globe2 size={14} strokeWidth={1.7} aria-hidden="true" /><span><small>{labels.markets}</small><strong>{factory.exportMarkets.slice(0, 3).join(", ") || missing}</strong></span></div>
                     <div><BadgeCheck size={14} strokeWidth={1.7} aria-hidden="true" /><span><small>{labels.certifications}</small><strong>{factory.certifications.join(", ") || missing}</strong></span></div>
                     <div><ShieldCheck size={14} strokeWidth={1.7} aria-hidden="true" /><span><small>{labels.status}</small><strong className="is-pending">{vi ? "Đang chờ qualification" : factory.misoStatus}</strong></span></div>
                  </div>
                  <div className="factory-actions">
                    <Link
                      className="factory-profile-link"
                      href={`${vi ? "/vi" : ""}/manufacturers/${factory.slug}`}
                    >
                      {labels.profileDetails} <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
                    </Link>
                    <Link
                      className="factory-connect-button"
                      href={`${vi ? "/vi" : ""}/rfq?factory=${factory.id}`}
                    >
                      {labels.match} <span aria-hidden="true">↗</span>
                    </Link>
                    <div className="factory-card-utilities">
                    <button
                      type="button"
                      className={`factory-action-button ${
                        shortlist.includes(factory.id) ? "is-saved" : ""
                      }`}
                      onClick={() => toggleShortlist(factory.id)}
                    >
                      <Bookmark size={14} strokeWidth={1.7} fill={shortlist.includes(factory.id) ? "currentColor" : "none"} aria-hidden="true" />
                      {shortlist.includes(factory.id)
                        ? labels.saved
                        : labels.save}
                    </button>
                    <button
                      type="button"
                      className={`factory-action-button ${compare.includes(factory.id) ? "is-compared" : ""}`}
                      onClick={() => toggleCompare(factory.id)}
                      aria-pressed={compare.includes(factory.id)}
                      disabled={!compare.includes(factory.id) && compare.length >= 3}
                    >
                      {compare.includes(factory.id) ? "✓ " : "+ "}{compare.includes(factory.id) ? (vi ? "Đã chọn" : "Selected") : labels.add}
                    </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="empty-results">
                {vi
                  ? "Chưa có hồ sơ phù hợp. Hãy gửi RFQ để MISO JAPAN tìm giúp bạn."
                  : "No profiles match these filters. Submit an RFQ and let MISO JAPAN search for you."}
              </div>
            )}
          </div>
        </section>
        <div className="directory-disclaimer">
          <Info size={17} strokeWidth={1.7} aria-hidden="true" />
          <span>{labels.disclaimer}</span>
        </div>
        {comparedFactories.length > 0 && (
          <section className="directory-inline-compare" id="compare-preview">
            <div className="inline-compare-heading">
              <div><p className="eyebrow">{vi ? "So sánh nhanh" : "Quick comparison"}</p><h2>{vi ? "Đặt các lựa chọn cạnh nhau." : "Compare your factory options."}</h2></div>
              <Link className="button button-primary" href={`${vi ? "/vi" : ""}/shortlist?compare=${encodeURIComponent(compare.join(","))}`}>{vi ? "Mở bảng đầy đủ" : "Open full comparison"} <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="compare-table" role="table" aria-label={vi ? "So sánh nhanh nhà máy" : "Quick factory comparison"}>
              <div className="compare-row compare-heading" role="row"><strong>{vi ? "Tiêu chí" : "Criteria"}</strong>{comparedFactories.map((factory) => <div className="compare-factory-heading" key={factory.id}><strong>{factory.id}</strong><small>{factory.location}</small></div>)}</div>
              {comparisonRows.map((row) => <div className="compare-row" role="row" key={row.label}><span>{row.label}</span>{comparedFactories.map((factory) => <span key={factory.id}>{row.value(factory)}</span>)}</div>)}
            </div>
          </section>
        )}
        {compare.length > 0 && (
          <div className="compare-bar">
            <div><strong>{compare.length}/3</strong><span>{vi ? "nhà máy đã chọn" : "factories selected"}</span></div>
            <div className="compare-bar-factories">
              {compare.map((id) => (
                <span key={id}>{id}</span>
              ))}
            </div>
            <button type="button" onClick={clearCompare}>{vi ? "Xóa" : "Clear"}</button>
            <Link className="button button-primary" href={`${vi ? "/vi" : ""}/shortlist?compare=${encodeURIComponent(compare.join(","))}`}>{labels.compare} <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </main>
      <Footer locale={locale} />
    </>
  );
}
