import { useCallback, useState } from "react";
import useConvertHistory from "@hooks/useConvertHistory";
import CurrencyServices from "@services/currency";
import type { HistoryItemType } from "@_types/history";

type DataType = Omit<HistoryItemType, "id" | "date">;

export default function useConvert() {
  const [rate, setRate] = useState<number>();
  const { addHistoryLog } = useConvertHistory();

  const submit = useCallback(
    async (data: DataType) => {
      const { source, dest, amount } = data || {};
      const res = await CurrencyServices.convert({ dest, source });
      setRate(res?.["result"]);
      addHistoryLog({ amount, source, dest });
    },
    [addHistoryLog]
  );

  return { data: rate, submit };
}
