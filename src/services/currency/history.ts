import { historyApi } from "@constants/api";
import Currency from "@_types/currency";

interface Params {
  source: Currency;
  dest: Currency;
  start: string;
  end: string;
}
export default async function currencyHistory(params: Params) {
  return fetch(
    `${historyApi}?base=${params.source}&symbols=${params.dest}&start_date=${params.start}&end_date=${params.end}`
  ).then((res) => res.json());
}
