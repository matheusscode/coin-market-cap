import { currencyFormatter } from "./currencyFormatter";

export const formatMonetaryValue = (value: number, currency: string) => {
  const initialCurrency = currency;

  const currencySymbol =
    initialCurrency === "aud" || initialCurrency === "usd" ? "$" : "R$";

  if (value >= 1_000_000_000) {
    return `${currencySymbol} ${(value / 1_000_000_000).toFixed(2)} bi`;
  }

  if (value >= 1_000_000) {
    return `${currencySymbol} ${(value / 1_000_000).toFixed(2)} mi`;
  }

  return currencyFormatter(value, initialCurrency);
};
