import { historyApi } from "@constants/api";
import Currency from "@_types/currency";

interface Params {
  source: Currency;
  dest: Currency;
  start: string;
  end: string;
}
type ResponseType = {
  rates: Record<string, Record<Currency, number>>;
};
export default async function currencyHistory(params: Params) {
  const res = await fetch(
    `${historyApi}?base=${params.source}&symbols=${params.dest}&start_date=${params.start}&end_date=${params.end}`
  ).then((res) => res.json());
  return res as ResponseType;
}
