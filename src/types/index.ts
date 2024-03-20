interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null; // ROI is null according to the provided data
    last_updated: string;
}

interface CoinDetail {
    id: string;
    symbol: string;
    name: string;
    web_slug: string;
    asset_platform_id: string | null;
    platforms: { [key: string]: string };
    detail_platforms: { [key: string]: { decimal_place: number | null; contract_address: string } };
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    preview_listing: boolean;
    public_notice: string | null;
    description: { en: string };
    image: {
      thumb: string;
      small: string;
      large: string;
    };
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    watchlist_portfolio_users: number;
    market_cap_rank: number;
}  

interface CoinDetailHistory {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}

export type { Coin, CoinDetail, CoinDetailHistory }
  