export const currencyFormatter = (amount: number, currency: string) => {
  const initialCurrency = currency;

  const currencyCode = initialCurrency.toUpperCase();
  const userLocale = navigator.language || "pt-br";

  return new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};
