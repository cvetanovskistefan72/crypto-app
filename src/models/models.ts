export interface CryptoListProps {
  cryptoList: CryptoItem[];
  getCryptoItem: Function;
  loading: boolean;
}

export interface CryptoItem {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  marketCap: number;
  priceChange1d: number;
}

export interface CryptoChartProps {
  chartData: Array<number[]>;
  selectedRange: string;
}
