(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/details/details.component */ 3251);
/* harmony import */ var _pages_market_market_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/market/market.component */ 5673);





// TODO: Fix routing
const routes = [{
  path: 'market',
  component: _pages_market_market_component__WEBPACK_IMPORTED_MODULE_1__.MarketComponent
}, {
  path: 'details/:assetId/:rateId',
  component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent
}, {
  path: '**',
  redirectTo: 'market',
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: 'market',
  pathMatch: 'full'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let AppComponent = class AppComponent {};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/details/details.component */ 3251);
/* harmony import */ var _pages_market_market_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/market/market.component */ 5673);
/* harmony import */ var _shared_no_content_no_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/no-content/no-content.component */ 2112);










let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_market_market_component__WEBPACK_IMPORTED_MODULE_3__.MarketComponent, _pages_details_details_component__WEBPACK_IMPORTED_MODULE_2__.DetailsComponent, _shared_no_content_no_content_component__WEBPACK_IMPORTED_MODULE_4__.NoContentComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 3251:
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsComponent: () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.component.html?ngResource */ 4057);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 7291);
/* harmony import */ var src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coincap.service */ 961);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 7038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);








chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_2__.registerables);
let DetailsComponent = class DetailsComponent {
  constructor(activatedRoute, loadingService, coinCapService) {
    this.activatedRoute = activatedRoute;
    this.loadingService = loadingService;
    this.coinCapService = coinCapService;
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.loadingService.present();
      /* TODO: Use localstorage to keep asset / rate? */
      _this.assetId = _this.activatedRoute.snapshot.params.assetId;
      _this.rateId = _this.activatedRoute.snapshot.params.rateId;
      _this.rate = yield _this.coinCapService.getRate(_this.rateId);
      _this.asset = yield _this.coinCapService.getAsset(_this.assetId);
      /* TODO: Dynamic prices made with websocket ADD visual queue */
      if (_this.asset && _this.rate) {
        const {
          marketCapUsd,
          volumeUsd24Hr,
          priceUsd
        } = _this.asset;
        const {
          rateUsd
        } = _this.rate;
        _this.asset = {
          ..._this.asset,
          marketCapUsd: marketCapUsd * rateUsd,
          volumeUsd24Hr: volumeUsd24Hr * rateUsd,
          priceUsd: priceUsd * rateUsd
        };
        const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${_this.asset.id}`);
        pricesWs.onmessage = msg => {
          _this.asset.priceUsd = JSON.parse(msg.data)[_this.asset.id] / rateUsd;
        };
      }
      /* TODO: Chart.js implementation is not NG compliant */
      /* TODO: Add failsafe for errors */
      /* TODO: Fix non working for usd-coin & check config (details) */
      /* TODO: Move graph to its own component */
      const candles = yield _this.coinCapService.getCandles(_this.assetId);
      if (document.getElementById('chart') && candles) {
        const labels = candles.map(candle => new Date(candle.period).toLocaleDateString());
        const data = candles.map(candle => candle.open);
        /* TODO: Add 24h graphs */
        /* TODO: Check low values SHIBA INU */
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(ctx, {
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
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_3__.CoincapService
  }];
};
DetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-details',
  template: _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], DetailsComponent);


/***/ }),

/***/ 5673:
/*!**************************************************!*\
  !*** ./src/app/pages/market/market.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketComponent: () => (/* binding */ MarketComponent)
/* harmony export */ });
/* harmony import */ var D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _market_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./market.component.html?ngResource */ 8351);
/* harmony import */ var src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/coincap.service */ 961);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ 7038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);






let MarketComponent = class MarketComponent {
  constructor(loadingService, coinCapService) {
    this.loadingService = loadingService;
    this.coinCapService = coinCapService;
    this.defaultRate = 'EUR';
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.loadingService.present();
      /* TODO: Add load more crypto / pagination feature */
      const limit = 10;
      _this.assets = yield _this.coinCapService.getAssets(limit);
      _this.rates = yield _this.coinCapService.getRates();
      if (_this.rates) {
        _this.ratesList = _this.rates.map(rate => ({
          id: rate.id.replace(/-/g, ' '),
          symbol: rate.symbol
        })).sort((a, b) => a.symbol.localeCompare(b.symbol));
        _this.selectedRate = _this.rates.find(rate => rate.symbol === _this.defaultRate);
      }
      /* TODO: Add visual queue when a price updates from the websocket */
      if (_this.assets) {
        _this.searchedAssets = _this.assets.map(asset => ({
          ...asset,
          priceUsd: asset.priceUsd / _this.selectedRate.rateUsd
        }));
        const ids = _this.assets.map(asset => asset.id);
        const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${ids}`);
        pricesWs.onmessage = msg => {
          const dataObject = JSON.parse(msg.data);
          _this.searchedAssets.map(asset => {
            if (dataObject[asset.id]) {
              asset.priceUsd = dataObject[asset.id] / _this.selectedRate.rateUsd;
            }
          });
        };
      }
    })();
  }
  updateSearch(searchInput) {
    if (searchInput) {
      const formatedSearchInput = searchInput.toLowerCase();
      this.searchedAssets = this.assets.filter(asset => asset.id.includes(formatedSearchInput) || asset.symbol.toLowerCase().includes(formatedSearchInput));
    } else {
      this.searchedAssets = this.assets;
    }
  }
  updateRates(rateSymbol) {
    if (this.rates) {
      this.selectedRate = this.rates.find(rate => rate.symbol === rateSymbol);
      this.searchedAssets = this.assets.map(asset => ({
        ...asset,
        priceUsd: asset.priceUsd / this.selectedRate.rateUsd
      }));
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
  }, {
    type: src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_2__.CoincapService
  }];
};
MarketComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-market',
  template: _market_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], MarketComponent);


/***/ }),

/***/ 961:
/*!*********************************************!*\
  !*** ./src/app/services/coincap.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoincapService: () => (/* binding */ CoincapService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let CoincapService = class CoincapService {
  /** Get all assets from CoinCap API  */
  getAssets(limit) {
    return fetch(`https://api.coincap.io/v2/assets?limit=${limit}`).then(res => res.json()).then(body => body.data).catch(() => null);
  }
  /** Get one asset from CoinCap API, the difference only being the added explorer link */
  getAsset(id) {
    return fetch(`https://api.coincap.io/v2/assets/${id}`).then(res => res.json()).then(body => body.data).catch(() => null);
  }
  /** Get all rates from CoinCap API */
  getRates() {
    return fetch('https://api.coincap.io/v2/rates').then(res => res.json()).then(body => body.data).catch(err => console.log('ERROR ON GET RATES', err));
  }
  /** Get one rate from CoinCap API, there is no difference with getting all rates */
  getRate(id) {
    return fetch(`https://api.coincap.io/v2/rates/${id}`).then(res => res.json()).then(body => body.data).catch(() => null);
  }
  /** Get historical data on a market with a 1 day interval on a week and prices based on usd-coin  */
  // TODO: Fix usd-coin used as a base instead of selectedRate
  getCandles(id) {
    const now = new Date().getTime();
    const lastWeek = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7).getTime();
    return fetch(`https://api.coincap.io/v2/candles?exchange=poloniex&interval=d1&baseId=${id}&quoteId=usd-coin&start=${lastWeek}&end=${now}`).then(res => res.json()).then(body => body.data).catch(err => console.log('ERROR ON GET CANDLES', err));
  }
};
CoincapService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], CoincapService);


/***/ }),

/***/ 7038:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 5995);




let LoadingService = class LoadingService {
  constructor(loadingController) {
    this.loadingController = loadingController;
  }
  present() {
    var _this = this;
    return (0,D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Loading...',
        duration: 3000
      });
      yield loading.present();
    })();
  }
  dismiss() {
    var _this2 = this;
    return (0,D_Works_Dev_Apps_gcpoc_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loadingController.dismiss();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
  }];
};
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LoadingService);


/***/ }),

/***/ 2112:
/*!***********************************************************!*\
  !*** ./src/app/shared/no-content/no-content.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoContentComponent: () => (/* binding */ NoContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _no_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-content.component.html?ngResource */ 1488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let NoContentComponent = class NoContentComponent {};
NoContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-no-content',
  template: _no_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], NoContentComponent);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		2244,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		3970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		437,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		9073,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		1018,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 4057:
/*!*****************************************************************!*\
  !*** ./src/app/pages/details/details.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <!-- TODO: Fix data check (no need for ngIf if check is made with routing) -->\n    <ion-title *ngIf=\"asset\">\n      <div class=\"d-flex ion-align-items-center\">\n        <img class=\"ion-padding-end\" src=\"https://assets.coincap.io/assets/icons/{{ asset.symbol | lowercase }}@2x.png\" height=\"25px\" alt=\"{{ asset.name }}\">\n        {{ asset.name }}\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid *ngIf=\"asset\">\n    <ion-row *ngIf=\"data\" class=\"ion-padding-bottom\">\n      <ion-col>\n        <canvas id=\"chart\"></canvas>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!data\" class=\"ion-padding-bottom\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"alert-circle-outline\" size=\"large\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>NO HISTORICAL DATA</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Rank</ion-col>\n      <ion-col>{{ asset.rank }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Symbol</ion-col>\n      <ion-col>{{ asset.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Current Supply</ion-col>\n      <ion-col>\n        {{ asset.supply | number }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Max Supply</ion-col>\n      <ion-col>\n        {{ asset.maxSupply ? (asset.maxSupply | number) : 'No max supply'}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Market Cap</ion-col>\n      <ion-col>{{ asset.marketCapUsd | currency: rate.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Volume 24H</ion-col>\n      <ion-col>{{ asset.volumeUsd24Hr | currency: rate.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Price</ion-col>\n      <ion-col>{{ asset.priceUsd | currency: rate.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Variation 24H</ion-col>\n      <ion-col>\n        <ion-text [color]=\"asset.changePercent24Hr > 0 ? 'success' : 'danger'\">\n          {{ asset.changePercent24Hr | number: '1.0-2' }}%\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Volume Average 24H</ion-col>\n      <ion-col>{{ asset.vwap24Hr | number }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Explorer</ion-col>\n      <ion-col><a href=\"{{ asset.explorer }}\" target=\"_blank\">{{ asset.explorer }}</a></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-no-content *ngIf=\"!asset\"></app-no-content>\n\n</ion-content>";

/***/ }),

/***/ 8351:
/*!***************************************************************!*\
  !*** ./src/app/pages/market/market.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Crypto Market Top 10</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid *ngIf=\"assets\">\n    <!-- TODO: Link rate selector -->\n    <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n      <ion-col>\n        <ion-searchbar #search placeholder=\"Search asset by name\" show-clear-button=\"always\" (ionChange)=\"updateSearch(search.value)\"></ion-searchbar>\n      </ion-col>\n      <ion-col *ngIf=\"rates\" size=\"2\">\n        <ion-select #select aria-label=\"rate\" [value]=\"defaultRate\" interface=\"popover\" (ionChange)=\"updateRates(select.value)\">\n          <ion-select-option *ngFor=\"let rate of ratesList\" [value]=\"rate.symbol\">\n            {{ rate.symbol }} ({{ rate.id }})\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center ion-padding-bottom\">\n      <ion-col size=\"1\"><b>#</b></ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col><b>NAME</b></ion-col>\n      <ion-col><b>PRICE</b></ion-col>\n      <ion-col size=\"2\"><b>V~ 24h</b></ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let asset of searchedAssets\" routerLink=\"/details/{{ asset.id }}/{{ selectedRate.id }}\" class=\"ion-text-center ion-align-items-center ion-padding-bottom\">\n      <ion-col size=\"1\">{{ asset.rank }}</ion-col>\n      <ion-col size=\"1\">\n        <ion-img src=\"https://assets.coincap.io/assets/icons/{{ asset.symbol | lowercase }}@2x.png\" alt=\"{{ asset.name }}\"></ion-img>\n      </ion-col>\n      <ion-col>{{ asset.name }} ({{ asset.symbol }})</ion-col>\n      <ion-col>{{ asset.priceUsd | currency: selectedRate.currencySymbol }}</ion-col>\n      <ion-col size=\"2\">\n        <ion-text [color]=\"asset.changePercent24Hr > 0 ? 'success' : 'danger'\">\n          {{ asset.changePercent24Hr | number: '1.0-2' }}%\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-no-content *ngIf=\"assets === null\"></app-no-content>\n\n</ion-content>";

/***/ }),

/***/ 1488:
/*!************************************************************************!*\
  !*** ./src/app/shared/no-content/no-content.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex ion-align-items-center h100\">\n  <ion-grid class=\"ion-text-center\">\n    <ion-row>\n      <ion-col>\n        <ion-icon name=\"alert-circle-outline\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Oops! It seems that something went wrong, try again or contact us.</ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map