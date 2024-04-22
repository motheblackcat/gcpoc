export interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  period: number;
};

export interface Candles {
  data: Candle[];
  timestamp?: Date;
};
