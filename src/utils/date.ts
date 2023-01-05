type SeparatorType = { date?: string; hour?: string };
type DateOptionsType = {
  addition?: number;
  appendTime?: boolean;
  separator?: SeparatorType;
};
const DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

const _format = (date: string, options: DateOptionsType) => {
  const { separator = { date: "/", hour: " @" } } = options;

  let res = date;
  if (separator.date) res = res.replaceAll("/", separator.date);
  if (separator.hour) res = res.replaceAll(",", separator.hour);
  return res;
};

const date = (params: DateOptionsType = {}) => {
  const { addition = 0, appendTime = true, separator } = params;
  const date = new Date();
  date.setDate(date.getDate() + addition);

  const formatted = _format(
    date.toLocaleDateString(undefined, {
      ...DATE_TIME_FORMAT,
      ...(appendTime
        ? { hour: "2-digit", hourCycle: "h24", minute: "2-digit" }
        : {}),
    }),
    { separator }
  );
  return { date: formatted, exact: date.toISOString() };
};

const DateUtils = { date };
export default DateUtils;
