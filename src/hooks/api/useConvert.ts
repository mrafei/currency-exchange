import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { convertApi } from "@constants/api";
import useConvertHistory from "@hooks/useConvertHistory";
import type { HistoryItemType } from "@_types/history";

type DataType = Omit<HistoryItemType, "id" | "date">;

export default function useConvert() {
  const [data, _setData] = useState<DataType>();
  const { source, dest, amount } = data || {};
  const { addHistoryLog } = useConvertHistory();

  const logHistory = useCallback(() => {
    if (amount && source && dest) addHistoryLog({ amount, source, dest });
  }, [amount, source, dest]);

  const res = useQuery(
    "convert",
    async () => {
      const res = await fetch(`${convertApi}?from=${source}&to=${dest}`).then(
        (res) => res.json()
      );
      logHistory();
      return res;
    },
    { enabled: Boolean(source && dest), cacheTime: 1000 }
  );

  const submit = useCallback((data: DataType) => {
    _setData(data);
  }, []);

  return { ...res, submit };
}
