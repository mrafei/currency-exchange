import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeSeriesSelect from "./Select";
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
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h2">Exchange History</Typography>
      <Box
        display="flex"
        gap={4}
        width="50%"
        alignItems="center"
        justifyContent="space-between"
      >
        <TimeSeriesSelect duration={duration} setDuration={setDuration} />
        <Box mr={3}></Box>
      </Box>
      <Box display="flex" gap={3} alignItems="start">
        <TimeSeriesRateTable rates={rates} />
        <TimeSeriesStatisticsTable rates={rates} />
      </Box>
    </Box>
  );
};

export default TimeSeries;
