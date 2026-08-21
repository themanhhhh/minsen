"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { factories, type Factory, type Locale } from "@/data/landing-page";
import { ScrollCue } from "@/components/ScrollCue";

const shortlistStorageKey = "minsen-shortlist";
const compareStorageKey = "minsen-compare";

function readIds(key: string) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function ShortlistPage({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const [shortlistIds, setShortlistIds] = useState<string[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const queryIds =
        new URLSearchParams(window.location.search)
          .get("compare")
          ?.split(",")
          .filter(Boolean) || [];
      const validQueryIds = queryIds
        .filter((id) => factories.some((factory) => factory.id === id))
        .slice(0, 3);
      setShortlistIds(
        readIds(shortlistStorageKey).filter((id) =>
          factories.some((factory) => factory.id === id),
        ),
      );
      const savedCompareIds = readIds(compareStorageKey)
        .filter((id) => factories.some((factory) => factory.id === id))
        .slice(0, 3);
      const nextCompareIds =
        validQueryIds.length > 0 ? validQueryIds : savedCompareIds;
      setCompareIds(nextCompareIds);
      if (validQueryIds.length > 0)
        window.localStorage.setItem(
          compareStorageKey,
          JSON.stringify(validQueryIds),
        );
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const compareMode = compareIds.length > 0;
  const selectedIds = compareMode ? compareIds : shortlistIds;
  const selected = factories.filter((factory) =>
    selectedIds.includes(factory.id),
  );
  const removeFromCompare = (id: string) => {
    const next = compareIds.filter((item) => item !== id);
    setCompareIds(next);
    window.localStorage.setItem(compareStorageKey, JSON.stringify(next));
  };
  const clearCompare = () => {
    setCompareIds([]);
    window.localStorage.removeItem(compareStorageKey);
  };

  const rows: { label: string; value: (factory: Factory) => string }[] = [
    {
      label: vi ? "Địa điểm" : "Location",
      value: (factory) => factory.location,
    },
    {
      label: vi ? "Sản phẩm" : "Products",
      value: (factory) => factory.products.join(", "),
    },
    {
      label: vi ? "Nguyên liệu lõi" : "Core materials",
      value: (factory) => factory.materials.join(", "),
    },
    {
      label: vi ? "Độ dày" : "Thickness",
      value: (factory) => factory.thicknessRange,
    },
    {
      label: vi ? "Công suất tháng" : "Monthly capacity",
      value: (factory) => factory.monthlyCapacity,
    },
    {
      label: vi ? "Thị trường xuất khẩu" : "Export markets",
      value: (factory) => factory.exportMarkets.join(", "),
    },
    {
      label: vi ? "Chứng nhận" : "Certifications",
      value: (factory) => factory.certifications.join(", "),
    },
    { label: "OEM", value: (factory) => (factory.oem ? "Yes" : "No") },
    {
      label: vi ? "Kinh nghiệm" : "Experience",
      value: (factory) => `${factory.years} years`,
    },
    { label: "Score", value: (factory) => `${factory.score}/5` },
  ];

  return (
    <main className="shortlist-page">
      <section className="shortlist-header">
        <p className="eyebrow eyebrow-light">
          {compareMode
            ? vi
              ? "So sánh nhà máy"
              : "Factory comparison"
            : vi
              ? "Danh sách sourcing của tôi"
              : "My sourcing list"}
        </p>
        <h1>
          {compareMode
            ? vi
              ? "Đặt các lựa chọn cạnh nhau."
              : "Compare your factory options."
            : vi
              ? "Các nhà máy bạn đang cân nhắc."
              : "Factories you are considering."}
        </h1>
        <p>
          {compareMode
            ? vi
              ? "So sánh năng lực, thị trường và mức độ phù hợp trước khi yêu cầu MISO JAPAN kết nối."
              : "Compare capability, markets and fit before asking MISO JAPAN to make an introduction."
            : vi
              ? "Gửi danh sách này cho MISO JAPAN để chúng tôi đánh giá và kết nối các lựa chọn phù hợp nhất."
              : "Send this list to MISO JAPAN and we will evaluate and connect the most suitable options."}
        </p>
        <ScrollCue targetId="shortlist-content" label={vi ? "Cuộn để xem danh sách" : "Scroll to view the list"} />
      </section>
      <section className="shortlist-content" id="shortlist-content">
        {selected.length === 0 ? (
          <div className="empty-results">
            <h2>
              {compareMode
                ? vi
                  ? "Chưa có nhà máy để so sánh"
                  : "No factories to compare"
                : vi
                  ? "Danh sách đang trống"
                  : "Your shortlist is empty"}
            </h2>
            <p>
              {vi
                ? "Hãy khám phá mạng lưới nhà máy và chọn các lựa chọn bạn quan tâm."
                : "Explore the factory network and choose the options you are interested in."}
            </p>
            <Link
              className="button button-primary"
              href={vi ? "/vi/manufacturers" : "/manufacturers"}
            >
              {vi ? "Khám phá nhà máy" : "Explore manufacturers"}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="compare-toolbar">
              <div>
                <strong>{selected.length}</strong>{" "}
                {vi ? "nhà máy đang hiển thị" : "factories shown"}
              </div>
              {compareMode && (
                <button type="button" onClick={clearCompare}>
                  {vi ? "Xóa so sánh" : "Clear comparison"}
                </button>
              )}
            </div>
            <div
              className="compare-table"
              role="table"
              aria-label={
                vi ? "Bảng so sánh nhà máy" : "Factory comparison table"
              }
            >
              <div className="compare-row compare-heading" role="row">
                <strong>{vi ? "Tiêu chí" : "Criteria"}</strong>
                {selected.map((factory) => (
                  <div className="compare-factory-heading" key={factory.id}>
                    <strong>{factory.id}</strong>
                    {compareMode && (
                      <button
                        type="button"
                        onClick={() => removeFromCompare(factory.id)}
                        aria-label={`${vi ? "Xóa" : "Remove"} ${factory.id}`}
                      >
                        ×
                      </button>
                    )}
                    <small>{factory.location}</small>
                  </div>
                ))}
              </div>
              {rows.map((row) => (
                <div className="compare-row" role="row" key={row.label}>
                  <span>{row.label}</span>
                  {selected.map((factory) => (
                    <span key={factory.id}>{row.value(factory)}</span>
                  ))}
                </div>
              ))}
            </div>
            <div className="compare-actions">
              <Link
                className="button button-primary"
                href={vi ? "/vi/rfq" : "/rfq"}
              >
                {vi
                  ? "Yêu cầu MISO JAPAN kết nối"
                  : "Ask MISO JAPAN to connect"}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                className="text-link"
                href={vi ? "/vi/manufacturers" : "/manufacturers"}
              >
                {vi ? "Tiếp tục chọn nhà máy" : "Continue exploring factories"}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
