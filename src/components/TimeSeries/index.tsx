import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
  const { data: rates } = useTimeSeries(source, dest, duration);
  if (Object.keys(rates)?.length)
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h2">Exchange History</Typography>
        <TimeSeriesSelector duration={duration} setDuration={setDuration} />
        <Box display="flex" gap={3} alignItems="start">
          <TimeSeriesRateTable rates={rates} />
          <TimeSeriesStatisticsTable rates={rates} />
        </Box>
      </Box>
    );
  return null;
};

export default TimeSeries;
