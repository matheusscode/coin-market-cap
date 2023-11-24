export const currencyFormatter = (
  amount: number = 0,
  currency: string = "brl"
) => {
  const currencyCode = currency.toUpperCase();
  const userLocale = navigator.language || "pt-br";

  return new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};
