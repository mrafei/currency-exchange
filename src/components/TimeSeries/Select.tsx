import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { FC } from "react";

type TimeSeriesSelectType = {
  duration: number;
  setDuration: (duration: number) => void;
};

const options = [7, 14, 30];
const TimeSeriesSelect: FC<TimeSeriesSelectType> = ({
  duration,
  setDuration,
}) => {
  return (
    <Select
      value={duration}
      onChange={(e) => setDuration(Number(e.target.value))}
      variant="standard"
      sx={{ width: 200 }}
    >
      {options.map((option) => (
        <MenuItem value={option}>{option} days</MenuItem>
      ))}
    </Select>
  );
};

export default TimeSeriesSelect;
