import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ConverterSelector from "./Selector";
import ConverterResult from "./Result";
import Button from "@mui/material/Button";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import useConvert from "@hooks/api/useConvert";
import useConvertHistory from "@hooks/useConvertHistory";
import type Currency from "@_types/currency";
import type { FC } from "react";

const Converter: FC = () => {
  const [amount, setAmount] = useState<number>();
  const [tempFrom, setTempFrom] = useState<Currency | null>(null);
  const [tempTo, setTempTo] = useState<Currency | null>(null);
  const [from, setFrom] = useState<Currency | null>(null);
  const [to, setTo] = useState<Currency | null>(null);
  const { addHistoryLog } = useConvertHistory();
  const { data: { result: rate } = {} } = useConvert(from, to);

  const revertCurrencies = () => {
    setTempFrom(tempTo);
    setTempTo(tempFrom);
  };
  const submit = () => {
    if (amount && tempFrom && tempTo) {
      setTo(tempTo);
      setFrom(tempFrom);
      addHistoryLog({ amount, source: tempFrom, dest: tempTo });
    }
  };
  return (
    <>
      <Box display="flex" gap={3}>
        <TextField
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          label="Amount"
          variant="standard"
          type="number"
          sx={{ minWidth: 200 }}
        />
        <ConverterSelector
          value={tempFrom}
          onChange={setTempFrom}
          label="From"
        />
        <Button
          onClick={revertCurrencies}
          sx={{
            backgroundColor: "background.default",
            minWidth: 50,
            boxShadow: 1,
          }}
        >
          <CompareArrowsIcon />
        </Button>
        <ConverterSelector value={tempTo} onChange={setTempTo} label="To" />
        <Button
          disabled={!Boolean(tempTo && tempFrom && amount)}
          onClick={submit}
          variant="contained"
          sx={{ flexShrink: 0 }}
        >
          Convert
        </Button>
      </Box>
      <ConverterResult
        amount={amount}
        sourceCurrency={from}
        destCurrency={to}
        rate={rate}
      />
    </>
  );
};

export default Converter;
