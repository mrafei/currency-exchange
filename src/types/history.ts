import type Currency from "@_types/currency";

export type HistoryItemType = {
  id: string;
  date: string;
  source: Currency;
  dest: Currency;
  amount: number;
};
