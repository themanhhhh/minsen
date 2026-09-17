"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { factories, getFactoryPublicLabel, getLocalizedPath, type Factory, type Locale } from "@/data/landing-page";
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
  const ar = locale === "ar";
  const missing = vi ? "Chưa cung cấp" : ar ? "غير متوفر" : "Not provided";
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
      label: vi ? "Địa điểm" : ar ? "الموقع" : "Location",
      value: (factory) => factory.location,
    },
    {
      label: vi ? "Sản phẩm" : ar ? "المنتجات" : "Products",
      value: (factory) => factory.products.join(", "),
    },
    {
      label: vi ? "Nguyên liệu và quy cách" : ar ? "المواد والمواصفات" : "Materials and specifications",
      value: (factory) => factory.materialsAndSpecs || factory.materials.join(", ") || missing,
    },
    {
      label: vi ? "Công suất" : ar ? "الطاقة الإنتاجية" : "Capacity",
      value: (factory) => factory.capacity || missing,
    },
    {
      label: vi ? "Thị trường xuất khẩu" : ar ? "أسواق التصدير" : "Export markets",
      value: (factory) => factory.exportMarkets.join(", ") || missing,
    },
    {
      label: vi ? "Chứng nhận" : ar ? "الشهادات" : "Certifications",
      value: (factory) => factory.certifications.join(", ") || missing,
    },
    {
      label: vi ? "Năm thành lập" : ar ? "سنة التأسيس" : "Established",
      value: (factory) => `${factory.establishedYear}`,
    },
    {
      label: vi ? "Nhân sự" : ar ? "القوى العاملة" : "Workforce",
      value: (factory) => factory.workforce || missing,
    },
    {
      label: vi ? "Trạng thái" : ar ? "الحالة" : "Status",
      value: (factory) => factory.misoStatus,
    },
  ];

  return (
    <main className="shortlist-page">
      <section className="shortlist-header">
        <p className="eyebrow eyebrow-light">
          {compareMode
            ? vi
              ? "So sánh nhà máy"
               : ar ? "مقارنة المصانع" : "Factory comparison"
            : vi
              ? "Danh sách sourcing của tôi"
               : ar ? "قائمتي للتوريد" : "My sourcing list"}
        </p>
        <h1>
          {compareMode
            ? vi
              ? "Đặt các lựa chọn cạnh nhau."
               : ar ? "قارن خيارات المصانع." : "Compare your factory options."
            : vi
              ? "Các nhà máy bạn đang cân nhắc."
               : ar ? "المصانع التي تفكر فيها." : "Factories you are considering."}
        </h1>
        <p>
          {compareMode
            ? vi
              ? "So sánh năng lực, thị trường và mức độ phù hợp trước khi yêu cầu MISO JAPAN kết nối."
               : ar ? "قارن القدرات والأسواق والملاءمة قبل أن تطلب من MISO JAPAN تقديمك." : "Compare capability, markets and fit before asking MISO JAPAN to make an introduction."
            : vi
              ? "Gửi danh sách này cho MISO JAPAN để chúng tôi đánh giá và kết nối các lựa chọn phù hợp nhất."
               : ar ? "أرسل هذه القائمة إلى MISO JAPAN وسنقيّم الخيارات الأنسب ونوصلك بها." : "Send this list to MISO JAPAN and we will evaluate and connect the most suitable options."}
        </p>
         <ScrollCue targetId="shortlist-content" label={vi ? "Cuộn để xem danh sách" : ar ? "مرر لعرض القائمة" : "Scroll to view the list"} />
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
               href={getLocalizedPath(locale, "/manufacturers")}
            >
               {vi ? "Khám phá nhà máy" : ar ? "استكشف المصانع" : "Explore manufacturers"}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="compare-toolbar">
              <div>
                <strong>{selected.length}</strong>{" "}
                 {vi ? "nhà máy đang hiển thị" : ar ? "مصانع معروضة" : "factories shown"}
              </div>
              {compareMode && (
                <button type="button" onClick={clearCompare}>
                   {vi ? "Xóa so sánh" : ar ? "مسح المقارنة" : "Clear comparison"}
                </button>
              )}
            </div>
            <div
              className="compare-table"
              role="table"
              aria-label={
                 vi ? "Bảng so sánh nhà máy" : ar ? "جدول مقارنة المصانع" : "Factory comparison table"
              }
            >
              <div className="compare-row compare-heading" role="row">
                 <strong>{vi ? "Tiêu chí" : ar ? "المعايير" : "Criteria"}</strong>
                {selected.map((factory) => (
                  <div className="compare-factory-heading" key={factory.id}>
                     <strong>{getFactoryPublicLabel(locale, factory.id)}</strong>
                    {compareMode && (
                      <button
                        type="button"
                        onClick={() => removeFromCompare(factory.id)}
                          aria-label={`${vi ? "Xóa" : ar ? "إزالة" : "Remove"} ${getFactoryPublicLabel(locale, factory.id)}`}
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
                 href={getLocalizedPath(locale, "/rfq")}
              >
                {vi
                  ? "Yêu cầu MISO JAPAN kết nối"
                   : ar ? "اطلب من MISO JAPAN التواصل" : "Ask MISO JAPAN to connect"}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                className="text-link"
                 href={getLocalizedPath(locale, "/manufacturers")}
              >
                 {vi ? "Tiếp tục chọn nhà máy" : ar ? "مواصلة استكشاف المصانع" : "Continue exploring factories"}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
