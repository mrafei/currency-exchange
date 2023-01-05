import { useQuery } from "react-query";
import CurrencyServices from "@services/currency";
import type Currency from "@_types/currency";
import DateUtils from "@utils/date";

const rx = /(\d+)-(\d+)-(\d+)/;
const DATE_FORMAT = {
  appendTime: false,
  separator: { date: "-" },
};
export default function useTimeSeries(
  source: Currency,
  dest: Currency,
  duration = 0
) {
  const end = DateUtils.date(DATE_FORMAT).date.replace(rx, "$3-$1-$2");
  const start = DateUtils.date({
    ...DATE_FORMAT,
    addition: -duration,
  }).date.replace(rx, "$3-$1-$2");
  const query = useQuery(["timeSeries", source, dest, duration], () =>
    CurrencyServices.history({ source, dest, end, start })
  );
  return {
    ...query,
    data: Object.fromEntries(
      Object.entries(query.data?.rates || {}).map(([date, item]) => [
        date.replace(rx, "$3/$2/$1"),
        item?.[dest],
      ])
    ),
  };
}
