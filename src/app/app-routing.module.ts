import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './pages/details/details.component';
import { MarketComponent } from './pages/market/market.component';

const routes: Routes = [
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'details/:assetId/:rateId',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'market'
  },
  {
    path: '',
    redirectTo: 'market',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
