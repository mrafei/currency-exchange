import { useState } from "react";
import DateUtils from "@utils/date";
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
  const addHistoryLog = (item: Omit<HistoryItemType, "date" | "id">) => {
    const { date, exact } = DateUtils.now();
    _updateHistory([...history, { ...item, date, id: exact }]);
  };

  const removeHistoryLog = (id: HistoryItemType["id"]) => {
    _updateHistory(history.filter((item) => item.id !== id));
  };

  return { history, addHistoryLog, removeHistoryLog };
}
