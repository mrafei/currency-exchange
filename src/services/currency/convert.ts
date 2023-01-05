import { convertApi } from "@constants/api";
import type Currency from "@_types/currency";

interface Params {
  source: Currency;
  dest: Currency;
}
export default async function convertCurrency(params: Params) {
  return fetch(`${convertApi}?from=${params.source}&to=${params.dest}`).then(
    (res) => res.json()
  );
}
