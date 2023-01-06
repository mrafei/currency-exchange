import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { FC } from "react";

type TimeSeriesRadioType = {
  display: string;
  setDisplay: (type: string) => void;
};

const options = ["Table", "Chart"];
const TimeSeriesRadio: FC<TimeSeriesRadioType> = ({ display, setDisplay }) => {
  return (
    <RadioGroup
      row
      value={display}
      onChange={(e) => setDisplay(e.target.value)}
    >
      {options.map((option) => (
        <FormControlLabel value={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  );
};

export default TimeSeriesRadio;
