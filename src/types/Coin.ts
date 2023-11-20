export interface CoinProps {
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_rank: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  symbol: string;
}

export interface CoinDetailsProps {
  id: string;
  symbol: string;
  name: string;
  market_data: MarketData;
  market_cap_rank: number;
  developer_data: DeveloperData;
  price_change_percentage_24h_in_currency: {
    brl: number;
    btc: number;
    eth: number;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
}

export interface MarketData {
  current_price: CurrentPrice;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: {
    btc: number;
    eth: number;
  };
}

export interface CurrentPrice {
  brl: number;
  btc: number;
  eth: number;
}

export interface DeveloperData {
  subscribers: number;
  stars: number;
  forks: number;
}

export interface CoinsFormattedProps {
  currentPrice: number;
  fullyDilutedValuation: number;
  high24h: number;
  id: string;
  image: string;
  lastUpdated: string;
  low24h: number;
  marketCap: number;
  marketCapRank: number;
  name: string;
  priceChange24h: number;
  priceChangePercentage24h: number;
  symbol: string;
}

export interface CoinsDetailsFormattedProps {
  icon: string;
  name: string;
  rank: number;
  symbol: string;
  priceBRL: number;
  priceChange24h: number;
  change24hInBTC: number;
  change24hInETH: number;
  subscribers: number;
  stars: number;
  forks: number;
}
