import { CoinDetailsProps, CoinsDetailsFormattedProps } from "../types";

const DEFAULT_STRING = "";
const DEFAULT_NUMBER = 0;

function getValueOrDefault<T>(value: T | undefined, defaultValue: T): T {
  return value || defaultValue;
}

export const coinsDetailsFormatted = (
  coinDetails?: CoinDetailsProps
): CoinsDetailsFormattedProps => {
  return {
    icon: getValueOrDefault(coinDetails?.image?.small, DEFAULT_STRING),
    name: getValueOrDefault(coinDetails?.name, DEFAULT_STRING),
    rank: getValueOrDefault(coinDetails?.market_cap_rank, DEFAULT_NUMBER),
    symbol: getValueOrDefault(coinDetails?.symbol, DEFAULT_STRING),
    priceBRL: getValueOrDefault(
      coinDetails?.market_data?.current_price?.brl,
      DEFAULT_NUMBER
    ),
    priceChange24h: getValueOrDefault(
      coinDetails?.market_data?.price_change_percentage_24h,
      DEFAULT_NUMBER
    ),
    change24hInBTC: getValueOrDefault(
      coinDetails?.market_data?.price_change_percentage_24h_in_currency?.btc,
      DEFAULT_NUMBER
    ),
    change24hInETH: getValueOrDefault(
      coinDetails?.market_data?.price_change_percentage_24h_in_currency?.eth,
      DEFAULT_NUMBER
    ),
    subscribers: getValueOrDefault(
      coinDetails?.developer_data?.subscribers,
      DEFAULT_NUMBER
    ),
    stars: getValueOrDefault(
      coinDetails?.developer_data?.stars,
      DEFAULT_NUMBER
    ),
    forks: getValueOrDefault(
      coinDetails?.developer_data?.forks,
      DEFAULT_NUMBER
    ),
  };
};
