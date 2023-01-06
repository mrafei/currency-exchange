import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useConvertHistory from "@hooks/useConvertHistory";
import CurrencyServices from "@services/currency";
import type Currency from "@_types/currency";

export default function useConvert() {
  const [params] = useSearchParams();
  const { addHistoryLog } = useConvertHistory();

  const [amount, setAmount] = useState<number>(Number(params.get("amount")));
  const [from, setFrom] = useState<Currency | null>(
    params.get("source") as Currency
  );
  const [to, setTo] = useState<Currency | null>(params.get("dest") as Currency);
  const [rate, setRate] = useState<number>();

  const submit = useCallback(() => {
    if (to && from) {
      CurrencyServices.convert({ dest: to, source: from }).then((res) => {
        setRate(res?.["result"]);
        addHistoryLog({ amount, source: from, dest: to });
      });
    }
  }, [addHistoryLog]);
  const revert = useCallback(() => {
    setFrom(to);
    setTo(from);
  }, [to, from]);
  useEffect(submit, []);

  return {
    data: rate,
    submit,
    to,
    setTo,
    from,
    setFrom,
    amount,
    setAmount,
    revert,
  };
}
