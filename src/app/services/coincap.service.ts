import { Injectable } from '@angular/core';

import { Asset, Assets } from '../interface/assets.interface';
import { Candle, Candles } from '../interface/candles.interface';
import { Rate, Rates } from '../interface/rates.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoincapService {
  /** Get all assets from CoinCap API  */
  getAssets(limit: number): Promise<any> {
    return fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
      .then((res: Response) => res.json())
      .then((body: Assets) => body.data)
      .catch(() => null);
  }

  /** Get one asset from CoinCap API, the difference only being the added explorer link */
  getAsset(id: string): Promise<null | Asset> {
    return fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then((res: Response) => res.json())
      .then((body: { data: Asset }) => body.data)
      .catch(() => null);
  }

  /** Get all rates from CoinCap API */
  getRates(): Promise<void | Rate[]> {
    return fetch('https://api.coincap.io/v2/rates')
      .then((res: Response) => res.json())
      .then((body: Rates) => body.data)
      .catch(err => console.log('ERROR ON GET RATES', err));
  }

  /** Get one rate from CoinCap API, there is no difference with getting all rates */
  getRate(id: string): Promise<null | Rate> {
    return fetch(`https://api.coincap.io/v2/rates/${id}`)
      .then((res: Response) => res.json())
      .then((body: { data: Rate }) => body.data)
      .catch(() => null);
  }

  /** Get historical data on a market with a 1 day interval on a week and prices based on usd-coin  */
  // TODO: Fix usd-coin used as a base instead of selectedRate
  getCandles(id: string): Promise<void | Candle[]> {
    const now = new Date().getTime();
    const lastWeek = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7).getTime();
    return fetch(`https://api.coincap.io/v2/candles?exchange=poloniex&interval=d1&baseId=${id}&quoteId=usd-coin&start=${lastWeek}&end=${now}`)
      .then((res: Response) => res.json())
      .then((body: Candles) => body.data)
      .catch(err => console.log('ERROR ON GET CANDLES', err));
  }
}
