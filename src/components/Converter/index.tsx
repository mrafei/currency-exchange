import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ConverterSelect from "./Select";
import ConverterResult from "./Result";
import TimeSeries from "@components/TimeSeries";
import useConvert from "@hooks/api/useConvert";
import type { FC } from "react";

const Converter: FC = () => {
  const { data, submit, to, from, setTo, setFrom, amount, setAmount, revert } =
    useConvert();

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
          onClick={revert}
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
