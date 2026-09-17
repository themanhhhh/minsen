const savedBuyerCookieName = "minsen-saved-buyers";
const savedBuyerCookieMaxAge = 60 * 60 * 24 * 365;
const maxBuyerSequence = 600;

function buyerIdToSequence(id: string) {
  const match = /^MJB-IN-(\d{4})$/.exec(id);
  return match ? Number(match[1]) : null;
}

function sequenceToBuyerId(sequence: number) {
  return `MJB-IN-${String(sequence).padStart(4, "0")}`;
}

function encodeSavedBuyerIds(ids: string[]) {
  const sequences = Array.from(
    new Set(ids.flatMap((id) => {
      const sequence = buyerIdToSequence(id);
      return sequence === null ? [] : [sequence];
    })),
  ).sort((left, right) => left - right);
  const ranges: string[] = [];

  for (const sequence of sequences) {
    const previous = ranges.at(-1);
    if (!previous) {
      ranges.push(String(sequence));
      continue;
    }

    const [start, end = start] = previous.split("-").map(Number);
    if (sequence === end + 1) {
      ranges[ranges.length - 1] = `${start}-${sequence}`;
    } else {
      ranges.push(String(sequence));
    }
  }

  return ranges.join(",");
}

function decodeSavedBuyerIds(value: string) {
  const sequences = value.split(",").flatMap((range) => {
    const [startValue, endValue = startValue] = range.split("-");
    const start = Number(startValue);
    const end = Number(endValue);

    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end > maxBuyerSequence) {
      return [];
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  });

  return Array.from(new Set(sequences)).map(sequenceToBuyerId);
}

export function readSavedFactoryIds() {
  try {
    const value = JSON.parse(window.localStorage.getItem("minsen-shortlist") || "[]");
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function readSavedBuyerIds() {
  try {
    const cookie = document.cookie
      .split(/;\s*/)
      .find((item) => item.startsWith(`${savedBuyerCookieName}=`));
    return cookie ? decodeSavedBuyerIds(decodeURIComponent(cookie.slice(savedBuyerCookieName.length + 1))) : [];
  } catch {
    return [];
  }
}

export function writeSavedBuyerIds(ids: string[]) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${savedBuyerCookieName}=${encodeURIComponent(encodeSavedBuyerIds(ids))}; Max-Age=${savedBuyerCookieMaxAge}; Path=/; SameSite=Lax${secure}`;
}
