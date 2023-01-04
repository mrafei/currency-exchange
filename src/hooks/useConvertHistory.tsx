import { useState } from "react";
import type { HistoryItemType } from "@_types/history";

const HISTORY_KEY = "HISTORY_KEY";

export default function useConvertHistory() {
  const [history, setHistory] = useState<HistoryItemType[]>(
    JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]")
  );

  const _updateHistory = (newHistory: HistoryItemType[]) => {
    setHistory(newHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
  };
  const addHistoryLog = (item: Omit<HistoryItemType, "date">) => {
    _updateHistory([...history, { ...item, date: new Date().toString() }]);
  };

  const removeHistoryLog = (date: HistoryItemType["date"]) => {
    _updateHistory(history.filter((item) => item.date !== date));
  };

  return { history, addHistoryLog, removeHistoryLog };
}
