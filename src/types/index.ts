interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
}

interface CoinDetail {
    id: string;
    symbol: string;
    name: string;
    description: { en: string };
    image: {
      thumb: string;
      small: string;
      large: string;
    };
}

interface CoinDetailHistory {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}

interface CoinDetails {
    id: string;
    symbol: string;
    name: string;
    description: Record<string, string>;
    image: {
      thumb: string;
      small: string;
      large: string;
    };
    market_data: {
        current_price: {
            brl: number;
        };
        market_cap: {
            brl: number;
        };
        total_volume: {
            brl: number;
        };
        high_24h: {
            brl: number;
        };
        low_24h: {
            brl: number;
        };
        price_change_percentage_24h_in_currency: {
            brl: number;
        };
        
        
    };
  }
  

export type { Coin, CoinDetail, CoinDetailHistory, CoinDetails }
  