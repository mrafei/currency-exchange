import { LineChart, Line, Legend, Tooltip, YAxis, XAxis } from "recharts";
import useTheme from "@mui/material/styles/useTheme";
import type { FC } from "react";

type TimeSeriesRateChartProps = {
  rates: Record<string, number>;
};
const TimeSeriesRateChart: FC<TimeSeriesRateChartProps> = ({ rates }) => {
  const theme = useTheme();
  const chartData = Object.entries(rates).map(([date, rate]) => ({
    name: date,
    rate,
  }));
  return (
    <LineChart width={500} height={400} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="rate"
        stroke={theme.palette.primary.main}
      />
    </LineChart>
  );
};

export default TimeSeriesRateChart;
