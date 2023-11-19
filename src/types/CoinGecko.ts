export interface GCoinProps {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface SpecificCoinPros {
  id: string;
  symbol: string;
  name: string;
  market_data: MarketData;
  market_cap_rank: number;
  developer_data: DeveloperData;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
}

export interface MarketData {
  current_price: CurrentPrice;
  price_change_percentage_24h: number;
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
