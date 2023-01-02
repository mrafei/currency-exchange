import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Currency from "@_types/currency";
import type { FC } from "react";

type ConverterSelectorProps = {
  label: string;
  value: Currency | null;
  onChange: (value: Currency | null) => void;
};
const ConverterSelector: FC<ConverterSelectorProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <Autocomplete
      fullWidth
      value={value}
      onChange={(event: any, newValue: Currency | null) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField label={label} variant="standard" {...params} />
      )}
      options={Object.values(Currency)}
    />
  );
};
export default ConverterSelector;
