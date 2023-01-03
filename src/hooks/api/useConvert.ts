import { useQuery } from "react-query";
import type Currency from "@_types/currency";
import { convertApi } from "@constants/api";

export default function useConvert(
  source: Currency | null,
  dest: Currency | null
) {
  return useQuery(
    ["convert"],
    () =>
      fetch(`${convertApi}?from=${source}&to=${dest}`).then((res) =>
        res.json()
      ),
    { enabled: Boolean(source && dest) }
  );
}
