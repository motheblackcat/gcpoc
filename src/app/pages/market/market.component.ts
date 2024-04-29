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
  selectedRate: Rate;

  constructor(private loadingService: LoadingService, private coinCapService: CoincapService) { }

  async ngOnInit() {
    // this.loadingService.present();

    /* TODO: Add load more crypto / pagination feature */
    const limit = 10;
    this.assets = await this.coinCapService.getAssets(limit);
    this.searchedAssets = JSON.parse(JSON.stringify(this.assets));

    /* TODO: Dynamic prices made with websocket ADD visual queue */
    if (this.assets) {
      const ids = this.assets.map((asset: Asset) => asset.id).toString();
      const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${ids}`);
      pricesWs.onmessage = (msg) => {
        this.searchedAssets.map((asset: Asset) =>
          asset.priceUsd = JSON.parse(msg.data)[asset.id] ? (JSON.parse(msg.data)[asset.id] * this.selectedRate.rateUsd) : asset.priceUsd);
      };
    }

    this.rates = await this.coinCapService.getRates(['USD', 'EUR']);
    if (this.rates) {
      this.selectedRate = this.rates.find((rate: Rate) => rate.symbol === 'USD');
    }
  }

  updateSearch(searchInput: string) {
    if (searchInput) {
      const formatedSearchInput = searchInput.toLowerCase();
      this.searchedAssets = [...this.assets.filter((asset: Asset) => asset.id.includes(formatedSearchInput))];
    } else {
      this.searchedAssets = JSON.parse(JSON.stringify(this.assets));
    }
  }

  /* TODO: Fix rate updates on search */
  updateRates(rateSymbol: string) {
    if (this.rates) {
      this.selectedRate = this.rates.find((rate: Rate) => rate.symbol === rateSymbol);
      this.searchedAssets.map((asset: Asset, index: number) => asset.priceUsd = this.assets[index].priceUsd);
      this.searchedAssets.map((asset: Asset) => asset.priceUsd = asset.priceUsd * this.selectedRate.rateUsd);
    }
  }
}
