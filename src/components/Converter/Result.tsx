import Box from "@mui/material/Box";
import NumberUtils from "@utils/number";
import Typography from "@mui/material/Typography";
import type Currency from "@_types/currency";
import type { FC } from "react";

type ConverterResultProps = {
  sourceCurrency: Currency | null;
  destCurrency: Currency | null;
  amount?: number;
  rate?: number;
};
const ConverterResult: FC<ConverterResultProps> = ({
  sourceCurrency,
  destCurrency,
  amount,
  rate,
}) => {
  return (
    <Box
      gap={4}
      minHeight={145}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {rate && amount ? (
        <>
          <Box display="flex" justifyContent="center" gap={1}>
            <>
              <Typography variant="h1" component="span" fontWeight="lighter">
                {NumberUtils.format(amount)} {sourceCurrency}
              </Typography>
              <Typography variant="h1" component="span" fontWeight="lighter">
                =
              </Typography>
              <Typography variant="h1" component="span" color="secondary.main">
                {Math.round(amount * rate)} {destCurrency}
              </Typography>
            </>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography color="text.secondary">
              1 {sourceCurrency} = {rate.toFixed(6)} {destCurrency}
            </Typography>
            <Typography color="text.secondary">
              1 {destCurrency} = {(1 / rate).toFixed(6)} {sourceCurrency}
            </Typography>
          </Box>
        </>
      ) : null}
    </Box>
  );
};
export default ConverterResult;
