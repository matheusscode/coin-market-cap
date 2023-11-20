import { currencyFormatter } from "./currencyFormatter";

export const formatMonetaryValue = (value: number) => {
  if (value >= 1_000_000_000) {
    return `R$ ${(value / 1_000_000_000).toFixed(2)} bi`;
  } else if (value >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toFixed(2)} mi`;
  } else {
    return currencyFormatter(value);
  }
};
