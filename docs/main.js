(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/details/details.component */ 6547);
/* harmony import */ var _pages_market_market_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/market/market.component */ 1871);





const routes = [
    {
        path: 'market',
        component: _pages_market_market_component__WEBPACK_IMPORTED_MODULE_1__.MarketComponent
    },
    {
        path: 'details/:assetId/:rateId',
        component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let AppComponent = class AppComponent {
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/details/details.component */ 6547);
/* harmony import */ var _pages_market_market_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/market/market.component */ 1871);
/* harmony import */ var _shared_no_content_no_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/no-content/no-content.component */ 4779);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_market_market_component__WEBPACK_IMPORTED_MODULE_3__.MarketComponent, _pages_details_details_component__WEBPACK_IMPORTED_MODULE_2__.DetailsComponent, _shared_no_content_no_content_component__WEBPACK_IMPORTED_MODULE_4__.NoContentComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6547:
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.component.html?ngResource */ 1466);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 177);
/* harmony import */ var src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/coincap.service */ 5319);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_1__.registerables);
let DetailsComponent = class DetailsComponent {
    constructor(activatedRoute, loadingService, coinCapService) {
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.coinCapService = coinCapService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingService.present();
            /* TODO: Use localstorage to keep asset / rate? */
            this.assetId = this.activatedRoute.snapshot.params.assetId;
            this.rateId = this.activatedRoute.snapshot.params.rateId;
            this.rate = yield this.coinCapService.getRate(this.rateId);
            this.asset = yield this.coinCapService.getAsset(this.assetId);
            /* TODO: Dynamic prices made with websocket ADD visual queue */
            if (this.asset && this.rate) {
                const { marketCapUsd, volumeUsd24Hr, priceUsd } = this.asset;
                const { rateUsd } = this.rate;
                this.asset = Object.assign(Object.assign({}, this.asset), { marketCapUsd: marketCapUsd * rateUsd, volumeUsd24Hr: volumeUsd24Hr * rateUsd, priceUsd: priceUsd * rateUsd });
                const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${this.asset.id}`);
                pricesWs.onmessage = (msg) => {
                    this.asset.priceUsd = JSON.parse(msg.data)[this.asset.id] * rateUsd;
                };
            }
            /* TODO: Chart.js implementation is not NG compliant */
            /* TODO: Add failsafe for errors */
            /* TODO: Fix non working for usd-coin & check config (details) */
            /* TODO: Move graph to its own component */
            const candles = yield this.coinCapService.getCandles(this.assetId);
            console.log(candles);
            if (document.getElementById('chart') && candles) {
                const labels = candles.map((candle) => new Date(candle.period).toLocaleDateString());
                const data = candles.map((candle) => candle.open);
                this.noData = data.length <= 0;
                /* TODO: Add 24h graphs */
                /* TODO: Check low values SHIBA INU */
                const ctx = document.getElementById('chart').getContext('2d');
                const chart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(ctx, {
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
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_2__.CoincapService }
];
DetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-details',
        template: _details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], DetailsComponent);



/***/ }),

/***/ 1871:
/*!**************************************************!*\
  !*** ./src/app/pages/market/market.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketComponent": () => (/* binding */ MarketComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _market_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./market.component.html?ngResource */ 1344);
/* harmony import */ var src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/coincap.service */ 5319);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let MarketComponent = class MarketComponent {
    constructor(loadingService, coinCapService) {
        this.loadingService = loadingService;
        this.coinCapService = coinCapService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // this.loadingService.present();
            /* TODO: Add load more crypto / pagination feature */
            const limit = 10;
            this.assets = yield this.coinCapService.getAssets(limit);
            this.searchedAssets = JSON.parse(JSON.stringify(this.assets));
            /* TODO: Dynamic prices made with websocket ADD visual queue */
            if (this.assets) {
                const ids = this.assets.map((asset) => asset.id).toString();
                const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${ids}`);
                pricesWs.onmessage = (msg) => {
                    this.searchedAssets.map((asset) => asset.priceUsd = JSON.parse(msg.data)[asset.id] ? (JSON.parse(msg.data)[asset.id] * this.selectedRate.rateUsd) : asset.priceUsd);
                };
            }
            this.rates = yield this.coinCapService.getRates(['USD', 'EUR']);
            if (this.rates) {
                this.selectedRate = this.rates.find((rate) => rate.symbol === 'USD');
            }
        });
    }
    updateSearch(searchInput) {
        if (searchInput) {
            const formatedSearchInput = searchInput.toLowerCase();
            this.searchedAssets = [...this.assets.filter((asset) => asset.id.includes(formatedSearchInput))];
        }
        else {
            this.searchedAssets = JSON.parse(JSON.stringify(this.assets));
        }
    }
    /* TODO: Fix rate updates on search */
    updateRates(rateSymbol) {
        if (this.rates) {
            this.selectedRate = this.rates.find((rate) => rate.symbol === rateSymbol);
            this.searchedAssets.map((asset, index) => asset.priceUsd = this.assets[index].priceUsd);
            this.searchedAssets.map((asset) => asset.priceUsd = asset.priceUsd * this.selectedRate.rateUsd);
        }
    }
};
MarketComponent.ctorParameters = () => [
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: src_app_services_coincap_service__WEBPACK_IMPORTED_MODULE_1__.CoincapService }
];
MarketComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-market',
        template: _market_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], MarketComponent);



/***/ }),

/***/ 5319:
/*!*********************************************!*\
  !*** ./src/app/services/coincap.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoincapService": () => (/* binding */ CoincapService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let CoincapService = class CoincapService {
    /** Get all assets from CoinCap API  */
    getAssets(limit) {
        return fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
            .then((res) => res.json())
            .then((body) => body.data)
            .catch(() => null);
    }
    /** Get one asset from CoinCap API, the difference only being the added explorer link */
    getAsset(id) {
        return fetch(`https://api.coincap.io/v2/assets/${id}`)
            .then((res) => res.json())
            .then((body) => body.data)
            .catch(() => null);
    }
    /** Get all rates from CoinCap API */
    getRates(symbols) {
        return fetch('https://api.coincap.io/v2/rates')
            .then((res) => res.json())
            .then((body) => body.data)
            .then((rates) => rates.filter((rate) => symbols.includes(rate.symbol)))
            .catch(err => console.log('ERROR ON GET RATES', err));
    }
    /** Get one rate from CoinCap API, there is no difference with getting all rates */
    getRate(id) {
        return fetch(`https://api.coincap.io/v2/rates/${id}`)
            .then((res) => res.json())
            .then((body) => body.data)
            .catch(() => null);
    }
    /** Get historical data on a market with a 1 day interval on a week and prices based on usd-coin  */
    // TODO: Fix usd-coin used as a base instead of usd / eur (fiat)
    getCandles(id) {
        const now = new Date().getTime();
        const lastWeek = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7).getTime();
        console.log(new Date(now), new Date(lastWeek));
        return fetch(`https://api.coincap.io/v2/candles?exchange=poloniex&interval=d1&baseId=${id}&quoteId=usd-coin&start=${lastWeek}&end=${now}`)
            .then((res) => res.json())
            .then((body) => body.data)
            .catch(err => console.log('ERROR ON GET CANDLES', err));
    }
};
CoincapService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CoincapService);



/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                duration: 3000
            });
            yield loading.present();
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 4779:
/*!***********************************************************!*\
  !*** ./src/app/shared/no-content/no-content.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoContentComponent": () => (/* binding */ NoContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _no_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-content.component.html?ngResource */ 5838);
/* harmony import */ var _no_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-content.component.scss?ngResource */ 6483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NoContentComponent = class NoContentComponent {
};
NoContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-no-content',
        template: _no_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_no_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoContentComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
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
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6483:
/*!************************************************************************!*\
  !*** ./src/app/shared/no-content/no-content.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 1466:
/*!*****************************************************************!*\
  !*** ./src/app/pages/details/details.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"asset\">\n      <div class=\"d-flex ion-justify-content-center ion-align-items-center\">\n        <img class=\"ion-padding-end\" src=\"https://assets.coincap.io/assets/icons/{{ asset.symbol | lowercase }}@2x.png\" height=\"25px\"\n          alt=\"{{ asset.name }}\">\n        <ion-label>{{ asset.name }}</ion-label>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"icon.name = icon.name === 'star-outline' ? 'star' : 'star-outline'\">\n        <ion-icon #icon name=\"star-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid *ngIf=\"asset\">\n    <ion-row class=\"ion-padding-bottom\">\n      <ion-col>\n        <canvas id=\"chart\"></canvas>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"noData\" class=\"ion-padding-bottom\">\n      <ion-col>\n        <ion-item color=\"none\" lines=\"none\">\n          <ion-icon slot=\"start\" name=\"alert-circle-outline\" size=\"large\"></ion-icon>\n          <ion-label>NO HISTORICAL DATA</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Rank</ion-col>\n      <ion-col size=\"6\">{{ asset.rank }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Symbol</ion-col>\n      <ion-col size=\"6\">{{ asset.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Current Supply</ion-col>\n      <ion-col size=\"6\">\n        {{ asset.supply | number }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Max Supply</ion-col>\n      <ion-col size=\"6\">\n        {{ (asset.maxSupply) ? (asset.maxSupply | number) : 'No max supply'}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Market Cap</ion-col>\n      <ion-col size=\"6\">{{ asset.marketCapUsd | currency: rate.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Volume 24H</ion-col>\n      <ion-col size=\"6\">{{ asset.volumeUsd24Hr | currency: rate.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Price</ion-col>\n      <ion-col size=\"6\">{{ asset.priceUsd | currency: rate.symbol }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Variation 24H</ion-col>\n      <ion-col size=\"6\">\n        <ion-text [color]=\"asset.changePercent24Hr > 0 ? 'success' : 'danger'\">\n          {{ asset.changePercent24Hr | number: '1.0-2'  }}%\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Volume Average 24H</ion-col>\n      <ion-col size=\"6\">{{ asset.vwap24Hr | number }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Explorer</ion-col>\n      <ion-col size=\"6\"><a href=\"{{ asset.explorer }}\" target=\"_blank\">{{ asset.explorer }}</a></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-no-content *ngIf=\"asset === null\"></app-no-content>\n\n</ion-content>\n";

/***/ }),

/***/ 1344:
/*!***************************************************************!*\
  !*** ./src/app/pages/market/market.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Market</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid *ngIf=\"assets\">\n    <!-- TODO: Link rate selector -->\n    <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n      <ion-col>\n        <ion-searchbar #search placeholder=\"Search asset by name\" show-clear-button=\"always\" (ionChange)=\"updateSearch(search.value)\"></ion-searchbar>\n      </ion-col>\n      <ion-col *ngIf=\"rates\" size=\"4\">\n        <ion-select #select aria-label=\"rate\" value=\"USD\" (ionChange)=\"updateRates(select.value)\">\n          <ion-select-option *ngFor=\"let rate of rates\" [value]=\"rate.symbol\">\n            {{ rate.symbol }} {{ rate.currencySymbol }}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center ion-padding-bottom\">\n      <ion-col size=\"1\"><b>#</b></ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col><b>NAME</b></ion-col>\n      <ion-col><b>PRICE</b></ion-col>\n      <ion-col size=\"2\"><b>V~ 24h</b></ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let asset of searchedAssets\" routerLink=\"/details/{{ asset.id }}/{{ selectedRate ? selectedRate.id : 'united-states-dollar' }}\" class=\"ion-text-center ion-align-items-center ion-padding-bottom\">\n      <ion-col size=\"1\">{{ asset.rank }} </ion-col>\n      <ion-col size=\"1\">\n        <ion-img src=\"https://assets.coincap.io/assets/icons/{{ asset.symbol | lowercase }}@2x.png\" alt=\"{{ asset.name }}\"></ion-img>\n      </ion-col>\n      <ion-col>{{ asset.name }} ({{ asset.symbol }})</ion-col>\n      <ion-col>{{ asset.priceUsd | currency: selectedRate ? selectedRate.currencySymbol : 'USD' }}</ion-col>\n      <ion-col size=\"2\">\n        <ion-text [color]=\"asset.changePercent24Hr > 0 ? 'success' : 'danger'\">\n          {{ asset.changePercent24Hr | number: '1.0-2' }}%\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-no-content *ngIf=\"assets === null\"></app-no-content>\n\n</ion-content>";

/***/ }),

/***/ 5838:
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
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map