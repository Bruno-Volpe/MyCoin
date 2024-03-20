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

export type { Coin, CoinDetail, CoinDetailHistory }
  