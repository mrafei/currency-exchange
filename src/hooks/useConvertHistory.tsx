import { useState } from "react";
import type Currency from "@_types/currency";
const HISTORY_KEY = "HISTORY_KEY";
type HistoryItem = {
  date: string;
  source: Currency;
  dest: Currency;
  amount: number;
};
export default function useConvertHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(
    JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]")
  );
  const addHistoryLog = (item: Omit<HistoryItem, "date">) => {
    const newHistory = [...history, { ...item, date: new Date().toString() }];
    setHistory(newHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
  };
  return { history, addHistoryLog };
}
