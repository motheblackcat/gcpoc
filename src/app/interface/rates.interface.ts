export interface Rate {
  id: string;
  symbol: string;
  currencySymbol: null | string;
  type: 'fiat' | 'crypto';
  rateUsd: number;
};

export interface Rates {
  data: Rate[];
  timestamp?: Date;
};
