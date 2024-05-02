import { Rate } from 'src/app/interface/rates.interface';
import { CoincapService } from 'src/app/services/coincap.service';
import { LoadingService } from 'src/app/services/loading.service';

import { Component, OnInit } from '@angular/core';

import { Asset } from '../../interface/assets.interface';

@Component({
  selector: 'app-market',
  templateUrl: 'market.component.html'
})
export class MarketComponent implements OnInit {
  assets: Asset[];
  searchedAssets: Asset[];
  rates: void | Rate[];
  ratesList: { id: string, symbol: string }[];
  selectedRate: Rate;
  defaultRate = 'EUR'

  constructor(private loadingService: LoadingService, private coinCapService: CoincapService) { }

  async ngOnInit() {
    // this.loadingService.present();

    /* TODO: Add load more crypto / pagination feature */
    const limit = 10;
    this.assets = await this.coinCapService.getAssets(limit);
    this.rates = await this.coinCapService.getRates();

    if (this.rates) {
      this.ratesList = this.rates.map((rate: Rate) => ({ id: rate.id.replace(/-/g, ' '), symbol: rate.symbol })).sort((a, b) => a.symbol.localeCompare(b.symbol));
      this.selectedRate = this.rates.find((rate: Rate) => rate.symbol === this.defaultRate);
    }

    /* TODO: Add visual queue when a price updates from the websocket */
    if (this.assets) {
      this.searchedAssets = this.assets.map((asset: Asset) => ({ ...asset, priceUsd: asset.priceUsd / this.selectedRate.rateUsd }));

      const ids = this.assets.map((asset: Asset) => asset.id);
      const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${ids}`);

      pricesWs.onmessage = (msg) => {
        const dataObject = JSON.parse(msg.data);

        this.searchedAssets.map((asset: Asset) => {
          if (dataObject[asset.id]) {
            asset.priceUsd = dataObject[asset.id] / this.selectedRate.rateUsd;
          }
        });
      };
    }
  }

  updateSearch(searchInput: string) {
    if (searchInput) {
      const formatedSearchInput = searchInput.toLowerCase();
      this.searchedAssets = this.assets.filter((asset: Asset) => asset.id.includes(formatedSearchInput) || asset.symbol.toLowerCase().includes(formatedSearchInput));
    } else {
      this.searchedAssets = this.assets;
    }
  }

  updateRates(rateSymbol: string) {
    if (this.rates) {
      this.selectedRate = this.rates.find((rate: Rate) => rate.symbol === rateSymbol);
      this.searchedAssets = this.assets.map((asset: Asset) => ({ ...asset, priceUsd: asset.priceUsd / this.selectedRate.rateUsd }));
    }
  }
}
