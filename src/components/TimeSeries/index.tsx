import { useState } from "react";
import Box from "@mui/material/Box";
import TimeSeriesSelector from "./Selector";
import TimeSeriesStatisticsTable from "./Tables/Statistics";
import TimeSeriesRateTable from "./Tables/Rate";
import useTimeSeries from "@hooks/api/useTimeSeries";
import type { FC } from "react";
import type Currency from "@_types/currency";

type TimeSeriesProps = {
  source: Currency;
  dest: Currency;
};
const TimeSeries: FC<TimeSeriesProps> = ({ source, dest }) => {
  const [duration, setDuration] = useState<number>(7);
  const { data } = useTimeSeries(source, dest, duration);

  return (
    <Box>
      <TimeSeriesSelector duration={duration} setDuration={setDuration} />
      <Box display="flex">
        <TimeSeriesRateTable />
        <TimeSeriesStatisticsTable />
      </Box>
    </Box>
  );
};

export default TimeSeries;
