"use client";

import Link from "next/link";
import Image from "next/image";
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

export function FactoryDirectory({ locale }: { locale: Locale }) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [shortlist, setShortlist] = useState<string[]>([]);
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
          "Khám phá các hồ sơ mẫu trong mạng lưới sản xuất. MISO JAPAN sẽ qualification và kết nối nhà cung cấp phù hợp qua quy trình kiểm soát riêng.",
        filter: "Bộ lọc",
        results: "hồ sơ phù hợp",
        shortlist: "đã lưu",
        compare: "So sánh",
        match: "Yêu cầu MISO JAPAN kết nối",
        save: "Lưu",
        saved: "Đã lưu",
        add: "So sánh",
      }
    : {
        eyebrow: "Manufacturing network",
        title: "Find the right capability for your requirement.",
        description:
          "Explore sample profiles from our manufacturing network. MISO JAPAN qualifies and connects suitable suppliers through its control process.",
        filter: "Filters",
        results: "matching profiles",
        shortlist: "saved",
        compare: "Compare",
        match: "Ask MISO JAPAN to connect",
        save: "Save",
        saved: "Saved",
        add: "Compare",
      };
  const toggleFilter = (group: keyof Filters, value: string) =>
    setFilters((current) => ({
      ...current,
      [group]: current[group].includes(value)
        ? current[group].filter((item) => item !== value)
        : [...current[group], value],
    }));
  const matches = (factory: Factory) =>
    (filters.products.length === 0 ||
      filters.products.some((item) => factory.products.includes(item))) &&
    (filters.materials.length === 0 ||
      filters.materials.some((item) => factory.materials.includes(item))) &&
    (filters.regions.length === 0 ||
      filters.regions.includes(factory.region)) &&
    (filters.markets.length === 0 ||
      filters.markets.some((item) => factory.exportMarkets.includes(item)));
  const filtered = factories.filter(matches);
  const comparedFactories = factories.filter((factory) => compare.includes(factory.id));
  const comparisonRows: { label: string; value: (factory: Factory) => string }[] = [
    { label: vi ? "Địa điểm" : "Location", value: (factory) => factory.location },
    { label: vi ? "Sản phẩm" : "Products", value: (factory) => factory.products.slice(0, 3).join(", ") },
    { label: vi ? "Công suất" : "Capacity", value: (factory) => factory.monthlyCapacity },
    { label: vi ? "Thị trường" : "Markets", value: (factory) => factory.exportMarkets.slice(0, 3).join(", ") },
    { label: "Score", value: (factory) => `${factory.score}/5` },
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
  const factoryImage = (id: string) =>
    (
      ({
        "VN-PW-018": "/images/factories/vn-pw-018/exterior.jpg",
        "VN-PW-038": "/images/factories/vn-pw-038/exterior.jpg",
        "VN-PW-052": "/images/factories/vn-pw-052/exterior.jpg",
      }) as Record<string, string>
    )[id];
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
  return (
    <>
      <Header locale={locale} />
      <main className="directory-page">
        <section className="directory-hero">
          <div>
            <p className="eyebrow eyebrow-light">{labels.eyebrow}</p>
            <h1>{labels.title}</h1>
            <p>{labels.description}</p>
          </div>
          <div className="directory-count">
            <strong>230+</strong>
            <span>{vi ? "hồ sơ trong mạng lưới" : "network profiles"}</span>
          </div>
          <ScrollCue targetId="directory-content" label={vi ? "Cuộn để khám phá nhà máy" : "Scroll to explore factories"} />
        </section>
        <section className="directory-content" id="directory-content">
          <aside className="factory-filters">
            <div className="filter-heading">
              <strong>{labels.filter}</strong>
              <button type="button" onClick={() => setFilters(emptyFilters)}>
                Clear all
              </button>
            </div>
            {filterGroup(
              vi ? "Sản phẩm" : "Product",
              "products",
              factoryFilterOptions.products,
            )}
            {filterGroup(
              vi ? "Nguyên liệu" : "Core material",
              "materials",
              factoryFilterOptions.materials,
            )}
            {filterGroup(
              vi ? "Khu vực" : "Location",
              "regions",
              factoryFilterOptions.regions,
            )}
            {filterGroup(
              vi ? "Thị trường xuất khẩu" : "Export market",
              "markets",
              factoryFilterOptions.markets,
            )}
          </aside>
          <div className="directory-results">
            <div className="directory-toolbar">
              <p>
                <strong>{filtered.length}</strong> {labels.results}
              </p>
              <span>
                {shortlist.length} {labels.shortlist}
              </span>
            </div>
            <div className="factory-grid">
              {filtered.map((factory) => (
                <article className="factory-card" key={factory.id}>
                  <div className="factory-card-top">
                    <span className="factory-id">{factory.id}</span>
                    <span className="qualification-badge">
                      {vi ? "Hồ sơ mẫu" : "Sample profile"}
                    </span>
                  </div>
                  <div className="factory-placeholder" aria-hidden="true">
                    {factoryImage(factory.id) && (
                      <Image
                        src={factoryImage(factory.id)!}
                        alt={`${factory.id} factory`}
                        fill
                        sizes="(max-width: 820px) 100vw, 50vw"
                      />
                    )}
                    <span>VN</span>
                    <strong>{factory.region}</strong>
                  </div>
                  <p className="factory-location">{factory.location}</p>
                  <h2>
                    {vi
                      ? "Đối tác sản xuất plywood"
                      : "Wood manufacturing partner"}
                  </h2>
                  <div className="factory-tags">
                    {factory.products.slice(0, 3).map((product) => (
                      <span key={product}>{product}</span>
                    ))}
                  </div>
                  <dl>
                    <div>
                      <dt>{vi ? "Nguyên liệu" : "Core"}</dt>
                      <dd>{factory.materials.join(" · ")}</dd>
                    </div>
                    <div>
                      <dt>
                        {vi ? "Năng lực tham khảo" : "Reference capacity"}
                      </dt>
                      <dd>{factory.monthlyCapacity}</dd>
                    </div>
                  </dl>
                  <div className="factory-actions">
                    <Link
                      href={`${vi ? "/vi" : ""}/manufacturers/${factory.id.toLowerCase()}`}
                    >
                      {labels.match} <span aria-hidden="true">↗</span>
                    </Link>
                    <button
                      type="button"
                      className={
                        shortlist.includes(factory.id) ? "is-saved" : ""
                      }
                      onClick={() => toggleShortlist(factory.id)}
                    >
                      {shortlist.includes(factory.id) ? "★" : "☆"}{" "}
                      {shortlist.includes(factory.id)
                        ? labels.saved
                        : labels.save}
                    </button>
                    <button
                      type="button"
                      className={compare.includes(factory.id) ? "is-saved" : ""}
                      onClick={() => toggleCompare(factory.id)}
                      aria-pressed={compare.includes(factory.id)}
                      disabled={!compare.includes(factory.id) && compare.length >= 3}
                    >
                      {compare.includes(factory.id) ? "✓ " : "+ "}{compare.includes(factory.id) ? (vi ? "Đã chọn" : "Selected") : labels.add}
                    </button>
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
