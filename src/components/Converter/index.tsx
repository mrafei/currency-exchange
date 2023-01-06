import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ConverterSelect from "./Select";
import ConverterResult from "./Result";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TimeSeries from "@components/TimeSeries";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import useConvert from "@hooks/api/useConvert";
import type Currency from "@_types/currency";
import type { FC } from "react";

const Converter: FC = () => {
  const [params] = useSearchParams();
  const [amount, setAmount] = useState<number>(Number(params.get("amount")));
  const [from, setFrom] = useState<Currency | null>(
    params.get("source") as Currency
  );
  const [to, setTo] = useState<Currency | null>(params.get("dest") as Currency);
  const { data, submit } = useConvert();

  const revertCurrencies = () => {
    setFrom(to);
    setTo(from);
  };
  const _submit = () => {
    if (amount && from && to) {
      submit({ amount, source: from, dest: to });
    }
  };
  useEffect(_submit, []);
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
          autoComplete="off"
          sx={{ minWidth: 200 }}
        />
        <ConverterSelect value={from} onChange={setFrom} label="From" />
        <Button
          onClick={revertCurrencies}
          sx={{
            backgroundColor: "background.paper",
            minWidth: 50,
            boxShadow: 1,
          }}
        >
          <CompareArrowsIcon />
        </Button>
        <ConverterSelect value={to} onChange={setTo} label="To" />
        <Button
          disabled={!Boolean(to && from && amount)}
          onClick={_submit}
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
        rate={data}
      />
      <Box>
        <Divider sx={{ mb: 3 }} />
        {from && to ? <TimeSeries source={from} dest={to} /> : null}
      </Box>
    </>
  );
};

export default Converter;
