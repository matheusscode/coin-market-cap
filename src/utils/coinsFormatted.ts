import { CoinProps, CoinsFormattedProps } from "../types";

const DEFAULT_STRING = "";
const DEFAULT_NUMBER = 0;

function getValueOrDefault<T>(value: T | undefined, defaultValue: T): T {
  return value || defaultValue;
}

export const coinsFormatted = (coins: CoinProps[]): CoinsFormattedProps[] => {
  return coins?.map((coin) => ({
    currentPrice: getValueOrDefault(coin?.current_price, DEFAULT_NUMBER),
    fullyDilutedValuation: getValueOrDefault(
      coin?.fully_diluted_valuation,
      DEFAULT_NUMBER
    ),
    high24h: getValueOrDefault(coin?.high_24h, DEFAULT_NUMBER),
    id: getValueOrDefault(coin?.id, DEFAULT_STRING),
    image: getValueOrDefault(coin?.image, DEFAULT_STRING),
    lastUpdated: getValueOrDefault(coin?.last_updated, DEFAULT_STRING),
    low24h: getValueOrDefault(coin?.low_24h, DEFAULT_NUMBER),
    marketCap: getValueOrDefault(coin?.market_cap, DEFAULT_NUMBER),
    marketCapRank: getValueOrDefault(coin?.market_cap_rank, DEFAULT_NUMBER),
    name: getValueOrDefault(coin?.name, DEFAULT_STRING),
    priceChange24h: getValueOrDefault(coin?.price_change_24h, DEFAULT_NUMBER),
    priceChangePercentage24h: getValueOrDefault(
      coin?.price_change_percentage_24h,
      DEFAULT_NUMBER
    ),
    symbol: getValueOrDefault(coin?.symbol, DEFAULT_STRING),
  }));
};
