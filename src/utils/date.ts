const now = () => {
  const date = new Date();
  const formatted = date
    .toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      hourCycle: "h24",
      minute: "2-digit",
    })
    .replace(",", " @");
  return { date: formatted, exact: date.toISOString() };
};
const DateUtils = { now };
export default DateUtils;
