import fs from "node:fs";
import path from "node:path";

export type BuyerProfile = {
  number: string;
  id: string;
  country: string;
  mainProduct: string[];
  core: string[];
  glue: string[];
  needs: string[];
  buying: string[];
  application: string[];
  capacity: string;
  quality: string[];
  access: string;
  payment: string;
  market: string;
  ports: string;
};

const sourceFile = path.join(process.cwd(), "Tong_hop_Danh_sach_600_Buyer.md");
let cachedProfiles: BuyerProfile[] | undefined;

function linesFromCell(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseBuyerRow(row: string, index: number): BuyerProfile {
  const cells = row
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());

  if (cells.length !== 14 || !cells[0]) {
    throw new Error(`Invalid buyer row at index ${index + 1}`);
  }

  return {
    number: String(index + 1).padStart(2, "0"),
    id: cells[0],
    country: cells[1],
    mainProduct: linesFromCell(cells[2]),
    core: linesFromCell(cells[3]),
    glue: linesFromCell(cells[4]),
    needs: linesFromCell(cells[5]),
    buying: linesFromCell(cells[6]),
    application: linesFromCell(cells[7]),
    capacity: cells[8],
    quality: linesFromCell(cells[9]),
    access: cells[10],
    payment: cells[11],
    market: cells[12],
    ports: cells[13],
  };
}

export function getBuyerProfiles() {
  if (cachedProfiles) {
    return cachedProfiles;
  }

  const source = fs.readFileSync(sourceFile, "utf8");
  const rows = source
    .split(/\r?\n/)
    .filter((row) => /^\| MJB-IN-/.test(row));

  if (rows.length !== 600) {
    throw new Error(`Expected 600 buyer rows, found ${rows.length}`);
  }

  cachedProfiles = rows.map(parseBuyerRow);
  return cachedProfiles;
}
