import { Chart, registerables } from 'chart.js';
import { Asset } from 'src/app/interface/assets.interface';
import { Candle } from 'src/app/interface/candles.interface';
import { Rate } from 'src/app/interface/rates.interface';
import { CoincapService } from 'src/app/services/coincap.service';
import { LoadingService } from 'src/app/services/loading.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

Chart.register(...registerables);
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  assetId: string;
  rateId: string;
  rate: Rate;
  asset: Asset;
  data: number[];
  noData: boolean;

  constructor(private activatedRoute: ActivatedRoute, private loadingService: LoadingService, private coinCapService: CoincapService) { }

  async ngOnInit() {
    this.loadingService.present();

    /* TODO: Use localstorage to keep asset / rate? */
    this.assetId = this.activatedRoute.snapshot.params.assetId;
    this.rateId = this.activatedRoute.snapshot.params.rateId;

    this.rate = await this.coinCapService.getRate(this.rateId);
    this.asset = await this.coinCapService.getAsset(this.assetId);

    /* TODO: Dynamic prices made with websocket ADD visual queue */
    if (this.asset && this.rate) {
      const { marketCapUsd, volumeUsd24Hr, priceUsd } = this.asset;
      const { rateUsd } = this.rate;
      this.asset = {
        ...this.asset,
        marketCapUsd: marketCapUsd * rateUsd,
        volumeUsd24Hr: volumeUsd24Hr * rateUsd,
        priceUsd: priceUsd * rateUsd
      };

      const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${this.asset.id}`);
      pricesWs.onmessage = (msg) => {
        this.asset.priceUsd = JSON.parse(msg.data)[this.asset.id] * rateUsd;
      };
    }

    /* TODO: Chart.js implementation is not NG compliant */
    /* TODO: Add failsafe for errors */
    /* TODO: Fix non working for usd-coin & check config (details) */
    /* TODO: Move graph to its own component */
    const candles = await this.coinCapService.getCandles(this.assetId);
    console.log(candles);
    if (document.getElementById('chart') && candles) {
      const labels = candles.map((candle: Candle) => new Date(candle.period).toLocaleDateString());
      const data = candles.map((candle: Candle) => candle.open);
      this.noData = data.length <= 0;

      /* TODO: Add 24h graphs */
      /* TODO: Check low values SHIBA INU */
      const ctx = (document.getElementById('chart') as HTMLCanvasElement).getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: 'white',
            borderColor: 'white'
          }]
        },
        options: {
          plugins: { legend: { display: false } }
        }
      });
    }

    this.loadingService.dismiss();
  }
}
