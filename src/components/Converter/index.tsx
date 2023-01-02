import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ConverterSelector from "./Selector";
import ConverterResult from "./Result";
import Button from "@mui/material/Button";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import type Currency from "@_types/currency";
import type { FC } from "react";

const Converter: FC = () => {
  const [amount, setAmount] = useState<number>();
  const [from, setFrom] = useState<Currency | null>(null);
  const [to, setTo] = useState<Currency | null>(null);

  const revertCurrencies = () => {
    setFrom(to);
    setTo(from);
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
        <ConverterSelector value={from} onChange={setFrom} label="From" />
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
        <ConverterSelector value={to} onChange={setTo} label="To" />
        <Button variant="contained" sx={{ flexShrink: 0 }}>
          Convert
        </Button>
      </Box>
      <ConverterResult
        amount={amount}
        sourceCurrency={from}
        destCurrency={to}
        rate={1.1}
      />
    </>
  );
};

export default Converter;
