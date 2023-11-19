export const percentageFormatter = (percentage?: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(percentage!);
};
