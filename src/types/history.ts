import type Currency from "@_types/currency";

export type HistoryItemType = {
  date: string;
  source: Currency;
  dest: Currency;
  amount: number;
};