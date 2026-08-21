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
export function FactoryDirectory({ locale }: { locale: Locale }) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setShortlist(
          JSON.parse(window.localStorage.getItem("minsen-shortlist") || "[]"),
        );
      } catch {
        setShortlist([]);
      }
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
  const toggleShortlist = (id: string) => {
    const next = shortlist.includes(id)
      ? shortlist.filter((item) => item !== id)
      : [...shortlist, id];
    setShortlist(next);
    window.localStorage.setItem("minsen-shortlist", JSON.stringify(next));
  };
  const toggleCompare = (id: string) =>
    setCompare((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : current.length < 3
          ? [...current, id]
          : current,
    );
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
        </section>
        <section className="directory-content">
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
                    >
                      + {labels.add}
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
        {compare.length > 0 && (
          <div className="compare-bar">
            <strong>
              {compare.length} {labels.compare}
            </strong>
            <div>
              {compare.map((id) => (
                <span key={id}>{id}</span>
              ))}
            </div>
            <Link href={`${vi ? "/vi" : ""}/shortlist`}>
              {labels.compare} ↗
            </Link>
          </div>
        )}
      </main>
      <Footer locale={locale} />
    </>
  );
}
