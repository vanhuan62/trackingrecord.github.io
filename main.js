(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _topheroes_topheroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topheroes/topheroes.component */ "./src/app/topheroes/topheroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _model_tracking_record_tracking_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/tracking-record/tracking-record.component */ "./src/app/model/tracking-record/tracking-record.component.ts");
/* harmony import */ var _model_request_record_request_record_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/request-record/request-record.component */ "./src/app/model/request-record/request-record.component.ts");
/* harmony import */ var _model_view_record_view_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/view-record/view-record.component */ "./src/app/model/view-record/view-record.component.ts");
/* harmony import */ var _model_contract_record_contract_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/contract-record/contract-record.component */ "./src/app/model/contract-record/contract-record.component.ts");
/* harmony import */ var _model_plan_record_plan_record_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/plan-record/plan-record.component */ "./src/app/model/plan-record/plan-record.component.ts");
/* harmony import */ var _model_result_record_result_record_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/result-record/result-record.component */ "./src/app/model/result-record/result-record.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'topheroes',
        component: _topheroes_topheroes_component__WEBPACK_IMPORTED_MODULE_3__["TopheroesComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    },
    {
        path: '',
        redirectTo: 'tracking-record',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponent"]
    },
    {
        path: 'tracking-record',
        component: _model_tracking_record_tracking_record_component__WEBPACK_IMPORTED_MODULE_6__["TrackingRecordComponent"]
    },
    {
        path: 'request-record',
        component: _model_request_record_request_record_component__WEBPACK_IMPORTED_MODULE_7__["RequestRecordComponent"]
    },
    {
        path: 'view-record',
        component: _model_view_record_view_record_component__WEBPACK_IMPORTED_MODULE_8__["ViewRecordComponent"]
    },
    {
        path: 'addContract/:id',
        component: _model_contract_record_contract_record_component__WEBPACK_IMPORTED_MODULE_9__["ContractRecordComponent"]
    },
    {
        path: 'addPlan/:id',
        component: _model_plan_record_plan_record_component__WEBPACK_IMPORTED_MODULE_10__["PlanRecordComponent"]
    },
    {
        path: 'addResult/:id',
        component: _model_result_record_result_record_component__WEBPACK_IMPORTED_MODULE_11__["ResultRecordComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background: linear-gradient(to right,#8e9eab,#eef2f3);\r\n    position: fixed;\r\n    z-index: 100;\r\n    width: 100%;\r\n}\r\n.mainbtn{\r\n    margin: .5em;\r\n    font-weight: 400;\r\n    transition: 220ms;\r\n    border-radius: 5px;\r\n}\r\n.mainbtn:hover{\r\n    cursor: pointer;\r\n    color: rgb(117, 117, 228);\r\n    box-shadow: 2px 2px 1px 15px rgba(rgb(190, 190, 190), .9) !important;\r\n}\r\n.router{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 92px;\r\n    left: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <h2>Tour of Heroes</h2>\n    <button class=\"mainbtn\" routerLink=\"/dashboard\"> Dashboard</button>\n    <button class=\"mainbtn\" routerLink=\"/topheroes\"> Top heroes</button>\n    <button class=\"mainbtn\" routerLink=\"/tracking-record\"> Tracking Record </button>\n\n</div>\n<div class=\"router\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'topHero';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _topheroes_topheroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topheroes/topheroes.component */ "./src/app/topheroes/topheroes.component.ts");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatop.service */ "./src/app/datatop.service.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _model_tracking_record_tracking_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/tracking-record/tracking-record.component */ "./src/app/model/tracking-record/tracking-record.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_request_record_request_record_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/request-record/request-record.component */ "./src/app/model/request-record/request-record.component.ts");
/* harmony import */ var _model_view_record_view_record_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/view-record/view-record.component */ "./src/app/model/view-record/view-record.component.ts");
/* harmony import */ var _model_contract_record_contract_record_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/contract-record/contract-record.component */ "./src/app/model/contract-record/contract-record.component.ts");
/* harmony import */ var _model_plan_record_plan_record_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/plan-record/plan-record.component */ "./src/app/model/plan-record/plan-record.component.ts");
/* harmony import */ var _model_result_record_result_record_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/result-record/result-record.component */ "./src/app/model/result-record/result-record.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _topheroes_topheroes_component__WEBPACK_IMPORTED_MODULE_6__["TopheroesComponent"],
                _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__["HeroDetailComponent"],
                _model_tracking_record_tracking_record_component__WEBPACK_IMPORTED_MODULE_9__["TrackingRecordComponent"],
                _model_request_record_request_record_component__WEBPACK_IMPORTED_MODULE_11__["RequestRecordComponent"],
                _model_view_record_view_record_component__WEBPACK_IMPORTED_MODULE_12__["ViewRecordComponent"],
                _model_contract_record_contract_record_component__WEBPACK_IMPORTED_MODULE_13__["ContractRecordComponent"],
                _model_plan_record_plan_record_component__WEBPACK_IMPORTED_MODULE_14__["PlanRecordComponent"],
                _model_result_record_result_record_component__WEBPACK_IMPORTED_MODULE_15__["ResultRecordComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [_datatop_service__WEBPACK_IMPORTED_MODULE_7__["DatatopService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background-image: url(\"https://images.pexels.com/photos/1110670/pexels-photo-1110670.jpeg\");\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\r\n\r\n.container p{\r\n    text-align: center;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.item{\r\n    display: block;\r\n    height: 6em;\r\n    border: 1px solid gray;\r\n    /* background-color: rgba(190, 187, 182, 0.76); */\r\n    background: linear-gradient(#304352, #d7d2cc);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    font-weight: 500;\r\n    font-size: 1.3em;\r\n    box-shadow: 5px 5px 15px grey;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    color: rgb(51, 50, 50);\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <p>Top Heroes</p>\n    <div class=\"row items\">\n      <div class=\"col-md-3\" *ngFor=\"let top of topArr\">\n        <div class=\"item\">{{top}} </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datatop.service */ "./src/app/datatop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService) {
        this.dataService = dataService;
        this.topArr = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var bienlap = 4;
        var lengthArr = this.dataService.getDataTop().length;
        while (lengthArr < 4) {
            bienlap = lengthArr;
            break;
        }
        ;
        for (var i = (lengthArr - 1); i >= (lengthArr <= 3 ? 0 : lengthArr - 4); i--) {
            this.topArr.push(this.dataService.getDataTop()[i].name);
        }
        // console.log('mang', this.dataService.lastestData);
        // // console.log('name:', this.dataService.lastestData[0].name);
        // var lengthArr = this.dataService.lastestData.length;
        // if (lengthArr != 0) {
        //   for (let i = lengthArr - 1; i >= 0; i--) {
        //     this.topArr.push(this.dataService.lastestData[i].name);
        //     console.log('mang', i, this.dataService.lastestData[i].name);
        //   }
        // }
        // console.log(this.topArr);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_datatop_service__WEBPACK_IMPORTED_MODULE_1__["DatatopService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: DATAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAS", function() { return DATAS; });
var DATAS = [
    { name: 'Alex', id: 1 },
    { name: 'Andrew', id: 2 },
    { name: 'Maria', id: 3 },
    { name: 'Mina', id: 4 },
    { name: 'Marry', id: 5 },
];


/***/ }),

/***/ "./src/app/datatop.service.ts":
/*!************************************!*\
  !*** ./src/app/datatop.service.ts ***!
  \************************************/
/*! exports provided: DatatopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatopService", function() { return DatatopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");
/* harmony import */ var _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/patients-data-list */ "./src/app/model/patients-data-list.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ListDataModel } from './model/list-data-model';


var DatatopService = /** @class */ (function () {
    function DatatopService(fb) {
        this.fb = fb;
        this.dataTest = _data__WEBPACK_IMPORTED_MODULE_1__["DATAS"];
        this.lastestData = [];
        this.check = true;
        // patientsFormGroup : FormGroup;
        // dataPatients = ListDataModel;  /* No creat some block, just display block  */
        this.dataPatients = _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__["PatientsDataList"]; /* create some block  */
    }
    DatatopService.prototype.getDataPatients = function () {
        return this.dataPatients;
    };
    DatatopService.prototype.addPatient = function (obj) {
        _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__["PatientsDataList"].push(obj);
        console.log('data: ', _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__["PatientsDataList"]);
    };
    // Find max patient of ID or ID not lien tiep
    DatatopService.prototype.findID = function () {
        var maxID = 1000;
        var stop = false;
        _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__["PatientsDataList"].map(function (obj, i, arr) {
            if (stop == false && Number(obj.yeuCau.idPatient) > maxID) {
                if (i < arr.length - 1 && Number(obj.yeuCau.idPatient) != (Number(arr[i + 1].yeuCau.idPatient) - 1)) {
                    maxID = Number(obj.yeuCau.idPatient);
                    // console.log('here',maxID);
                    stop = true;
                }
                else
                    maxID = Number(obj.yeuCau.idPatient);
            }
        });
        return maxID;
    };
    DatatopService.prototype.findIDofHD = function () {
        var maxID = 2000;
        var stop = false;
        _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__["PatientsDataList"].map(function (obj, i, arr) {
            if (obj.hopDong != null) {
                if (stop == false && Number(obj.hopDong.id) > maxID) {
                    if (i < arr.length - 1 && Number(obj.hopDong.id) != (Number(arr[i + 1].hopDong.id) - 1)) {
                        maxID = Number(obj.hopDong.id);
                        // console.log('here',maxID);
                        stop = true;
                    }
                    else
                        maxID = Number(obj.hopDong.id);
                }
            }
        });
        return maxID;
    };
    DatatopService.prototype.findIDofLK = function () {
        var maxID = 3000;
        var stop = false;
        _model_patients_data_list__WEBPACK_IMPORTED_MODULE_2__["PatientsDataList"].map(function (obj, i, arr) {
            if (obj.lichKham != null) {
                if (stop == false && Number(obj.lichKham.id) > maxID) {
                    // console.log('obj:',arr[i+1].lichKham);
                    if (i < (arr.length - 1) && Number(obj.lichKham.id) > maxID) {
                        maxID = Number(obj.lichKham.id);
                        // console.log('here',maxID);
                        // stop = true;
                    }
                }
            }
        });
        return maxID;
    };
    DatatopService.prototype.getDataTop = function () {
        // console.log(DATAS | JSON);
        return this.dataTest;
    };
    DatatopService.prototype.addData = function (data) {
        this.dataTest.push(data);
    };
    DatatopService.prototype.saveData = function (data, id) {
        // const arrData = this.dataService.getDataTop();
        var index = this.dataTest.findIndex(function (i) { return i.id === parseInt(id); });
        this.dataTest[index] = data;
        // console.log('object:',data);
    };
    DatatopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DatatopService);
    return DatatopService;
}());



/***/ }),

/***/ "./src/app/datatop.ts":
/*!****************************!*\
  !*** ./src/app/datatop.ts ***!
  \****************************/
/*! exports provided: Datatop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datatop", function() { return Datatop; });
var Datatop = /** @class */ (function () {
    function Datatop() {
    }
    return Datatop;
}());



/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background-image: url(\"https://images.pexels.com/photos/220638/pexels-photo-220638.jpeg\");\r\n    width: 100%;\r\n    height: 82.5vh;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\r\n.container{\r\n    width: 150vh;\r\n}\r\n.container>p{\r\n    text-align: center;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n.mainbtn{\r\n    margin: .5em;\r\n    font-weight: 400;\r\n    transition: 220ms;\r\n    border-radius: 5px;\r\n}\r\n.mainbtn:hover{\r\n    cursor: pointer;\r\n    color: rgb(117, 117, 228);\r\n}"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container pt-3\">\n    <div class=\"row justify-content-start\" style=\"height: 40px;\">\n      <div class=\"col-md-4 input-group\">\n        <div class=\"input-group-prepend\">\n          <label class=\"input-group-text\" style=\"height: 38px;\">Id:</label>\n        </div>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oriData.id\">\n        <!-- <button class=\"btn ml-1 mb-1\" (click)=\"clickDel(i)\">Delete</button> -->\n      </div>\n    </div>\n    <div class=\"row justify-content-start\" style=\"height: 40px;\">\n      <div class=\"col-md-4 input-group\">\n        <div class=\"input-group-prepend\">\n          <label class=\"input-group-text\" style=\"height: 38px;\">Name:</label>\n        </div>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oriData.name\">\n        <!-- <button class=\"btn ml-1 mb-1\" (click)=\"clickDel(i)\">Delete</button> -->\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 justify-content-around\">\n        <button class=\"mainbtn col-md-5 col-sm-5\" routerLink=\"/topheroes\"> Back </button>\n        <button class=\"mainbtn col-md-5 col-sm-5\" (click)=\"clickSave()\"  routerLink=\"/topheroes\"> Save </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datatop.service */ "./src/app/datatop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.route.snapshot.paramMap.get('id'));
        this.getId = this.route.snapshot.paramMap.get('id');
        var arrData = this.dataService.getDataTop();
        this.data = arrData.find(function (i) { return i.id === parseInt(_this.getId); });
        var name = this.data.name;
        var id = this.data.id;
        this.oriData = {
            name: name,
            id: id
        };
    };
    // clickBack(){
    //   this.dataService.oriData(this.oriData,parseInt(this.getId));
    // }
    HeroDetailComponent.prototype.clickSave = function () {
        this.oriData.id = Number(this.oriData.id);
        console.log(this.oriData);
        this.dataService.saveData(this.oriData, parseInt(this.getId));
    };
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _datatop_service__WEBPACK_IMPORTED_MODULE_2__["DatatopService"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/contract-record/contract-record.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/model/contract-record/contract-record.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"hopDong\" class=\"container mt-3\">\n\n  <div class=\"block form-group\">\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">ID: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"id\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Số người khám: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"numOfPerson\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Tổng số tiền: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"amountOfMoney\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Đặt cọc: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"deposit\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Ngày đặt cọc: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"depositDate\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Tiền còn lại: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"remainingAmount\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Hạn chót: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"deadline\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Phương thức thanh toán: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"methodOfPay\">\n    </div>\n    \n\n\n  </div>\n  <div class=\"btn_saveNback\">\n    <button [disabled]=\"TnF\" class=\"btn\" (click)=\"submitForm()\" routerLink=\"/tracking-record\"> Save </button>\n    <button class=\"btn ml-4\" routerLink=\"/tracking-record\"> Back </button>\n  </div>\n\n\n  <div *ngFor=\"let err of errArr; let i = index\">\n      <p>{{err}}</p>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/model/contract-record/contract-record.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/model/contract-record/contract-record.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_saveNback {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  width: 8em;\n  transition: 220ms;\n  border: 1px solid #a09d9d;\n  box-shadow: 2px 5px 15px gray; }\n\n.btn:hover {\n  background-color: #5a5454;\n  font-weight: bold;\n  color: aliceblue; }\n"

/***/ }),

/***/ "./src/app/model/contract-record/contract-record.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/model/contract-record/contract-record.component.ts ***!
  \********************************************************************/
/*! exports provided: ContractRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractRecordComponent", function() { return ContractRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datatop.service */ "./src/app/datatop.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractRecordComponent = /** @class */ (function () {
    function ContractRecordComponent(fb, dataService, route) {
        this.fb = fb;
        this.dataService = dataService;
        this.route = route;
        this.errArr = [];
        this.TnF = true;
        this.tienConLai = 0;
        this.errorMess = {
            amountOfMoney: {
                required: 'Tong tien la bat buoc',
            },
            deposit: {
                required: 'Dat coc la bat buoc'
            },
            depositDate: {
                required: 'Ngay dat coc la bat buoc'
            },
            methodOfPay: {
                required: 'Hinh thuc tra tien'
            },
            deadline: {
                required: 'Han cuo la bat buoc'
            },
            numOfPerson: {
                required: 'So nguoi kham la bat buoc'
            }
        };
    }
    ContractRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getId = this.route.snapshot.paramMap.get('id');
        // console.log('id: ',this.getId);
        var patientsArr = this.dataService.getDataPatients();
        this.data = patientsArr.find(function (i) { return Number(i.yeuCau.idPatient) == Number(_this.getId); });
        console.log('data:', this.data);
        this.hopDong = this.fb.group({
            id: this.dataService.findIDofHD() + 1,
            amountOfMoney: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deposit: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            remainingAmount: '',
            depositDate: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deadline: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            methodOfPay: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: 'Đăt cọc',
            numOfPerson: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // this.tienConLai = Number(this.hopDong.get('amountOfMoney').value) - Number(this.hopDong.get('deposit').value);
        // this.hopDong.get('remainingAmount').patchValue(this.tienConLai);
        // console.log('tienthua: ',this.hopDong.get('remainingAmount').value);
        // console.log('typeof: ',typeof Number(this.hopDong.get('amountOfMoney')));
        this.hopDong.valueChanges.subscribe(function (success) {
            console.log('Thanh cong', success);
            _this.getFormErr(success);
        }, function (err) {
            console.log('That bai', err);
        });
    };
    ContractRecordComponent.prototype.getFormErr = function (formValue) {
        this.errArr = [];
        // console.log('success ',formValue);
        for (var control in formValue) {
            console.log('control: ', control);
            var formControl = this.hopDong.get(control);
            if (formControl.errors) {
                // tslint:disable-next-line:forin
                console.log('formcontrol:', formControl);
                for (var errControlName in formControl.errors) {
                    this.errArr.push(this.errorMess[control][errControlName]);
                }
            }
        }
        console.log('err: ', this.errArr);
        if (this.errArr.length == 0)
            this.TnF = false;
        else
            this.TnF = true;
        console.log('tnf: ', this.TnF);
    };
    ContractRecordComponent.prototype.submitForm = function () {
        // const patientObj = new PatientModel();
        var hopDongObj = this.hopDong.value;
        this.data.hopDong = hopDongObj;
        this.data.yeuCau.status = 'Xong';
        // console.log('datalist: ',);
        // this.dataService.addPatient(patientObj);
    };
    ContractRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contract-record',
            template: __webpack_require__(/*! ./contract-record.component.html */ "./src/app/model/contract-record/contract-record.component.html"),
            styles: [__webpack_require__(/*! ./contract-record.component.scss */ "./src/app/model/contract-record/contract-record.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _datatop_service__WEBPACK_IMPORTED_MODULE_2__["DatatopService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContractRecordComponent);
    return ContractRecordComponent;
}());



/***/ }),

/***/ "./src/app/model/patient-model.ts":
/*!****************************************!*\
  !*** ./src/app/model/patient-model.ts ***!
  \****************************************/
/*! exports provided: PatientModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModel", function() { return PatientModel; });
var PatientModel = /** @class */ (function () {
    function PatientModel() {
    }
    return PatientModel;
}());



/***/ }),

/***/ "./src/app/model/patients-data-list.ts":
/*!*********************************************!*\
  !*** ./src/app/model/patients-data-list.ts ***!
  \*********************************************/
/*! exports provided: PatientsDataList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsDataList", function() { return PatientsDataList; });
var PatientsDataList = [
    // 0
    {
        yeuCau: {
            idPatient: 1000,
            name: 'Nguyen Chi Pheo',
            sinceTime: '01022018',
            place: 'BV Hoan My',
            service: ['Chụp MRI', 'Chụp Xquang', 'Xét nghiệm máu'],
            security: 'low level',
            status: 'Mới',
        },
        hopDong: null,
        lichKham: null,
        ketQua: null
    },
    // 1
    {
        yeuCau: {
            idPatient: 1002,
            name: 'Tran Thi No',
            sinceTime: '01012018',
            place: 'BV Đa Khoa Đà Nẵng',
            service: ['Chụp MRI', 'Chụp Xquang', 'Xét nghiệm máu'],
            security: 'high level',
            status: 'Xong',
        },
        hopDong: {
            id: '2000',
            amountOfMoney: 20000000,
            deposit: 5000000,
            depositDate: '01012018',
            remainingAmount: 15000000,
            deadline: '15012018',
            methodOfPay: 'Cash',
            status: 'Đặt cọc',
            numOfPerson: 1
        },
        lichKham: {
            id: '3000',
            status: 'Đang khám',
            person: [
                {
                    fullName: 'Nguyen Van Teo',
                    birthday: '20102018',
                    add: 'da nang',
                    sex: 'nam',
                    email: 'vanhuan@gmail.com',
                    phone: '01689990716',
                    appointment: 'asatte',
                    service: [{
                            item: 'Xquang',
                            quantity: 1
                        },
                        {
                            item: 'CT',
                            quantity: 1
                        }],
                },
            ],
        },
        ketQua: {
            result: [{ item: 'PASS' }, { item: 'Tái khám sau 1 tuần' }]
        }
    },
    {
        yeuCau: {
            idPatient: 1003,
            name: 'Tran Thi No',
            sinceTime: '01012018',
            place: 'BV Đa Khoa Đà Nẵng',
            service: ['Chụp MRI', 'Chụp Xquang', 'Xét nghiệm máu'],
            security: 'high level',
            status: 'Xong',
        },
        hopDong: {
            id: '2001',
            amountOfMoney: 20000000,
            deposit: 5000000,
            depositDate: '01012018',
            remainingAmount: 15000000,
            deadline: '15012018',
            methodOfPay: 'Cash',
            status: 'Đặt cọc',
            numOfPerson: 2
        },
        lichKham: null,
        ketQua: null,
    },
    {
        yeuCau: {
            idPatient: 1004,
            name: 'Tran Thi No',
            sinceTime: '01012018',
            place: 'BV Đa Khoa Đà Nẵng',
            service: ['Chụp MRI', 'Chụp Xquang', 'Xét nghiệm máu'],
            security: 'high level',
            status: 'Xong',
        },
        hopDong: {
            id: '2004',
            amountOfMoney: 20000000,
            deposit: 5000000,
            depositDate: '01012018',
            remainingAmount: 15000000,
            deadline: '15012018',
            methodOfPay: 'Cash',
            status: 'Đặt cọc',
            numOfPerson: 1
        },
        lichKham: {
            id: '3001',
            status: 'Đang khám',
            person: [
                {
                    fullName: 'Nguyen Van Teo',
                    birthday: '20102018',
                    add: 'da nang',
                    sex: 'nam',
                    email: 'vanhuan@gmail.com',
                    phone: '01689990716',
                    appointment: 'asatte',
                    service: [{
                            item: 'Xquang',
                            quantity: 1
                        },
                        {
                            item: 'CT',
                            quantity: 1
                        }],
                },
            ],
        },
        ketQua: null
    },
];


/***/ }),

/***/ "./src/app/model/plan-record/plan-record.component.html":
/*!**************************************************************!*\
  !*** ./src/app/model/plan-record/plan-record.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"lichKham\" class=\"container mt-3\">\n\n  <div class=\"block form-group\">\n    <div formArrayName=\"person\">\n      <div class=\"mt-1\" *ngFor=\"let isa of personFA.controls; let i = index\" [formGroupName]=\"i\">\n        <div class=\"row mt-4 block_lichKham\" style=\"position: relative\">\n\n          <input type=\"button\" class=\"del_icon\" value=\"x\" (click)=\"delPerson(i)\" *ngIf=\"personFA.controls.length!=1\">\n          <div class=\" col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Họ và tên: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"fullName\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Ngày sinh: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"birthday\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Địa chỉ: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"add\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Giới tính: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"sex\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Email: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"email\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Số điện thoại: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"phone\">\n            </div>\n          </div>\n          <div class=\" col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Lịch hẹn: </div>\n              <input type=\"text\" class=\"col-md form-control\" formControlName=\"appointment\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 star-red col-form-label\">Dich vu: </div>\n              <div class=\"col-md\" formArrayName=\"service\">\n                <div class=\"row\" *ngFor=\"let dichvu of serviceFA(i).controls; let i2 = index\" [formGroupName]=i2>\n\n                  <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"item\">\n\n                  <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"quantity\">\n                  <input type=\"button\" class=\"col-md-1 del_service\" value=\"-\" (click)=\"delService(i,i2)\">\n                </div>\n              </div>\n            </div>\n            <div>\n              <button class=\"col-md-2\" (click)=\"addService(i)\">Add</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"btn_saveNback mt-4\">\n      <button [disabled]=\"TnF\" class=\"btn\" (click)=\"submitForm()\" routerLink=\"/tracking-record\"> Save </button>\n      <button class=\"btn ml-4\" routerLink=\"/tracking-record\"> Back </button>\n      <button class=\"btn ml-4\" (click)=\"addPerson()\"> Add more </button>\n    </div>\n\n\n    <div *ngFor=\"let err of errArr; let i = index\">\n      <p>{{err}}</p>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/model/plan-record/plan-record.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/model/plan-record/plan-record.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del_icon {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  border: 1px solid #b8b5b5; }\n\n.del_service {\n  border: 1px solid #bdbcbc;\n  background-color: #d1da5f;\n  border-radius: 4px; }\n\n.block_lichKham {\n  background-color: #d6d2d2;\n  border-radius: 5px;\n  padding: 25px; }\n\n.btn_saveNback {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  width: 8em;\n  transition: 220ms;\n  border: 1px solid #a09d9d;\n  box-shadow: 2px 5px 15px gray; }\n\n.btn:hover {\n  background-color: #5a5454;\n  font-weight: bold;\n  color: aliceblue; }\n"

/***/ }),

/***/ "./src/app/model/plan-record/plan-record.component.ts":
/*!************************************************************!*\
  !*** ./src/app/model/plan-record/plan-record.component.ts ***!
  \************************************************************/
/*! exports provided: PlanRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanRecordComponent", function() { return PlanRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../datatop.service */ "./src/app/datatop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanRecordComponent = /** @class */ (function () {
    function PlanRecordComponent(fb, dataService, route) {
        this.fb = fb;
        this.dataService = dataService;
        this.route = route;
        this.errArr = [];
        this.errorMess = {
            fullName: { required: 'ten la bat buoc' },
            birthday: { required: 'ngay sinh la bat buoc' },
            sex: { required: 'Giới tính là bắt buộc' },
            email: { required: 'Mail là bắt buộc' },
            phone: { required: 'Sdt la bat buoc' },
            appointment: { required: 'Lich hen la bat buoc' }
        };
    }
    Object.defineProperty(PlanRecordComponent.prototype, "personFA", {
        get: function () {
            return this.lichKham.get('person');
        },
        enumerable: true,
        configurable: true
    });
    ;
    PlanRecordComponent.prototype.serviceFA = function (i) {
        return this.personFA.at(i).get('service');
    };
    ;
    PlanRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getId = this.route.snapshot.paramMap.get('id');
        // console.log('id: ', this.getId);
        var patientsArr = this.dataService.getDataPatients();
        this.data = patientsArr.find(function (i) { return Number(i.yeuCau.idPatient) == Number(_this.getId); });
        // if (this.data.lichKham == null) {
        this.numOfPerson = Number(this.data.hopDong.numOfPerson);
        console.log('data:', this.data);
        this.lichKham = this.fb.group({
            id: this.dataService.findIDofLK() + 1,
            status: 'Mới',
            person: this.fb.array([
                this.fb.group({
                    fullName: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    birthday: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    add: '',
                    sex: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    email: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    phone: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    appointment: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    service: this.fb.array([
                        this.fb.group({
                            item: '',
                            quantity: ''
                        })
                    ])
                })
            ]),
        });
        for (var i = 0; i < this.numOfPerson - 1; i++) {
            this.addPerson();
        }
        console.log('day:', this.personFA);
        console.log('day:', this.serviceFA(0));
    };
    PlanRecordComponent.prototype.initPerson = function () {
        return this.fb.group({
            fullName: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthday: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            add: '',
            sex: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            appointment: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            service: this.fb.array([
                this.fb.group({
                    item: '',
                    quantity: ''
                })
            ])
        });
    };
    PlanRecordComponent.prototype.addPerson = function () {
        var control = this.lichKham.get('person');
        control.push(this.initPerson());
    };
    PlanRecordComponent.prototype.initService = function () {
        return this.fb.group({
            item: '',
            quantity: ''
        });
    };
    PlanRecordComponent.prototype.addService = function (i) {
        // const control = this.lichKham.get('person') as FormArray;
        // const control2 = control.at(i).get('service') as FormArray;
        // console.log('addservice: ',this.serviceFA(i));
        var control = this.serviceFA(i);
        control.push(this.initService());
        console.log('addservice: ', this.serviceFA(i));
    };
    PlanRecordComponent.prototype.getFormErr = function (formControl, formValue) {
        this.errArr = [];
        // console.log('success ',formValue);
        for (var control in formValue) {
            // console.log('control: ', control);
            var formControl1 = formControl.get(control);
            if (formControl1.errors) {
                // tslint:disable-next-line:forin
                // console.log('formcontrol1:', formControl1);
                for (var errControlName in formControl1.errors) {
                    this.errArr.push(this.errorMess[control][errControlName]);
                }
            }
        }
        // console.log('err: ', this.errArr);
        // if (this.errArr.length == 0) this.TnF = false;
        // else this.TnF = true;
        // console.log('tnf: ', this.TnF);
    };
    PlanRecordComponent.prototype.submitForm = function () {
        var lichKhamObj = this.lichKham.value;
        this.data.lichKham = lichKhamObj;
        console.log('lichkham: ', lichKhamObj);
    };
    PlanRecordComponent.prototype.delService = function (i, i2) {
        this.serviceFA(i).removeAt(i2);
    };
    PlanRecordComponent.prototype.delPerson = function (i) {
        this.personFA.removeAt(i);
    };
    PlanRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-record',
            template: __webpack_require__(/*! ./plan-record.component.html */ "./src/app/model/plan-record/plan-record.component.html"),
            styles: [__webpack_require__(/*! ./plan-record.component.scss */ "./src/app/model/plan-record/plan-record.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _datatop_service__WEBPACK_IMPORTED_MODULE_3__["DatatopService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PlanRecordComponent);
    return PlanRecordComponent;
}());



/***/ }),

/***/ "./src/app/model/request-record/request-record.component.html":
/*!********************************************************************!*\
  !*** ./src/app/model/request-record/request-record.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"yeuCauFormGroup\" class=\"container mt-3\">\n\n  <div class=\"block form-group\">\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">ID: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"idPatient\">\n      <!-- <p>{{reactiveForm.get('yeuCau').length-1}}</p> -->\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Name: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"name\">\n      <!-- <p>{{reactiveForm.get('yeuCau').length-1}}</p> -->\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Thoi gian kham: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"sinceTime\">\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Benh vien kham: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"place\">\n    </div>\n    <div formArrayName=\"service\"> Dich vu:\n      <div class=\"row\" *ngFor=\"let dv of servieFA.controls; let i = index\">\n        <div class=\"col-md-2 star-red col-form-label\">Item {{i+1}}: </div>\n        <input type=\"text\" class=\"col-md-4 form-control\" [formControlName]=\"i\">\n        <button class=\"col-md-1\" (click)=\"DelItem(i)\" *ngIf=\"servieFA.length>1\">Del</button>\n      </div>\n    </div>\n    <div>\n      <button (click)=\"addYeuCau()\">Add</button>\n    </div>\n    <div class=\"row mt-1\">\n      <label class=\"col-md-2 star-red col-form-label\">Tinh bao mat: </label>\n      <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"security\">\n    </div>\n  </div>\n\n  <div class=\"btn_saveNback\">\n    <button [disabled]=\"TnF\" class=\"btn\" (click)=\"submitForm()\" routerLink=\"/tracking-record\"> Save </button>\n    <button class=\"btn ml-4\" routerLink=\"/tracking-record\"> Back </button>\n  </div>\n\n  <div *ngFor=\"let err of errArr; let i = index\">\n    <p>{{err}}</p>\n  </div>\n  \n</form>"

/***/ }),

/***/ "./src/app/model/request-record/request-record.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/model/request-record/request-record.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_saveNback {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  width: 8em;\n  transition: 220ms;\n  border: 1px solid #a09d9d;\n  box-shadow: 2px 5px 15px gray; }\n\n.btn:hover {\n  background-color: #5a5454;\n  font-weight: bold;\n  color: aliceblue; }\n"

/***/ }),

/***/ "./src/app/model/request-record/request-record.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/model/request-record/request-record.component.ts ***!
  \******************************************************************/
/*! exports provided: RequestRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRecordComponent", function() { return RequestRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datatop.service */ "./src/app/datatop.service.ts");
/* harmony import */ var _patient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patient-model */ "./src/app/model/patient-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestRecordComponent = /** @class */ (function () {
    function RequestRecordComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.errArr = [];
        this.TnF = true;
        this.errorMess = {
            name: {
                required: 'name la bat buoc',
            },
            sinceTime: {
                required: 'Thoi gian la bat buoc'
            },
            place: {
                required: 'Noi kham la bat buoc'
            }
        };
    }
    Object.defineProperty(RequestRecordComponent.prototype, "servieFA", {
        get: function () {
            return this.yeuCauFormGroup.get('service');
        },
        enumerable: true,
        configurable: true
    });
    ;
    RequestRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yeuCauFormGroup = this.fb.group({
            idPatient: this.dataService.findID() + 1,
            name: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: 'Mới',
            sinceTime: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            place: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            service: this.fb.array([
                this.fb.control('')
            ]),
            security: '',
        });
        // this.addYeuCau();
        this.yeuCauFormGroup.valueChanges.subscribe(function (success) {
            console.log('Thanh cong', success);
            _this.getFormErr(success);
        }, function (err) {
            console.log('That bai', err);
        });
    };
    RequestRecordComponent.prototype.getFormErr = function (formValue) {
        this.errArr = [];
        // console.log('success ',formValue);
        for (var control in formValue) {
            console.log('control: ', control);
            var formControl = this.yeuCauFormGroup.get(control);
            if (formControl.errors) {
                // tslint:disable-next-line:forin
                console.log('formcontrol:', formControl);
                for (var errControlName in formControl.errors) {
                    this.errArr.push(this.errorMess[control][errControlName]);
                }
            }
        }
        console.log('err: ', this.errArr);
        if (this.errArr.length == 0)
            this.TnF = false;
        else
            this.TnF = true;
        console.log('tnf: ', this.TnF);
    };
    RequestRecordComponent.prototype.addYeuCau = function () {
        this.servieFA.push(this.fb.control(''));
    };
    ;
    RequestRecordComponent.prototype.submitForm = function () {
        var patientObj = new _patient_model__WEBPACK_IMPORTED_MODULE_3__["PatientModel"]();
        var yeuCauObj = this.yeuCauFormGroup.value;
        patientObj.yeuCau = yeuCauObj;
        console.log('patientObj', patientObj);
        this.dataService.addPatient(patientObj);
    };
    RequestRecordComponent.prototype.DelItem = function (i) {
        this.servieFA.removeAt(i);
    };
    RequestRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-record',
            template: __webpack_require__(/*! ./request-record.component.html */ "./src/app/model/request-record/request-record.component.html"),
            styles: [__webpack_require__(/*! ./request-record.component.scss */ "./src/app/model/request-record/request-record.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _datatop_service__WEBPACK_IMPORTED_MODULE_2__["DatatopService"]])
    ], RequestRecordComponent);
    return RequestRecordComponent;
}());



/***/ }),

/***/ "./src/app/model/result-record/result-record.component.html":
/*!******************************************************************!*\
  !*** ./src/app/model/result-record/result-record.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"ketQua\" class=\"container mt-3\">\n  <div formArrayName = \"result\">\n    <div class=\"block form-group\" *ngFor=\"let kq of resultFA.controls; let i = index\" [formGroupName]=\"i\">\n      <div class=\"row mt-1\">\n        <label class=\"col-md-2 star-red col-form-label\">Result: {{i +1}} </label>\n        <input type=\"text\" class=\"col-md-5 form-control\" formControlName=\"item\">\n        <button class=\"col-md-1\" (click)=\"delItem(i)\" *ngIf=\"resultFA.length>1\">Del</button>\n      </div>\n    </div>\n  </div>\n  <div>\n    <button (click)=\"addMoreResult()\">Add</button>\n  </div>\n  <div class=\"btn_saveNback\">\n    <button class=\"btn\" (click)=\"submitForm()\" routerLink=\"/tracking-record\"> Save </button>\n    <button class=\"btn ml-4\" routerLink=\"/tracking-record\"> Back </button>    \n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/model/result-record/result-record.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/model/result-record/result-record.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_saveNback {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  width: 8em;\n  transition: 220ms;\n  border: 1px solid #a09d9d;\n  box-shadow: 2px 5px 15px gray; }\n\n.btn:hover {\n  background-color: #5a5454;\n  font-weight: bold;\n  color: aliceblue; }\n"

/***/ }),

/***/ "./src/app/model/result-record/result-record.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/model/result-record/result-record.component.ts ***!
  \****************************************************************/
/*! exports provided: ResultRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultRecordComponent", function() { return ResultRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datatop.service */ "./src/app/datatop.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultRecordComponent = /** @class */ (function () {
    function ResultRecordComponent(route, dataService, fb) {
        this.route = route;
        this.dataService = dataService;
        this.fb = fb;
    }
    Object.defineProperty(ResultRecordComponent.prototype, "resultFA", {
        get: function () {
            return this.ketQua.get('result');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ResultRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getId = this.route.snapshot.paramMap.get('id');
        // console.log('id: ',this.getId);
        var patientsArr = this.dataService.getDataPatients();
        this.data = patientsArr.find(function (i) { return Number(i.yeuCau.idPatient) == Number(_this.getId); });
        // console.log('data:', this.data);
        this.ketQua = this.fb.group({
            result: this.fb.array([])
        });
        this.addMoreResult();
    };
    ResultRecordComponent.prototype.addMoreResult = function () {
        var formControl = this.fb.group({
            item: ''
        });
        this.resultFA.push(formControl);
    };
    ;
    ResultRecordComponent.prototype.delItem = function (i) {
        this.resultFA.removeAt(i);
    };
    ResultRecordComponent.prototype.submitForm = function () {
        // const patientObj = new PatientModel();
        var ketQuaObj = this.ketQua.value;
        this.data.ketQua = ketQuaObj;
        console.log('ketqua data: ', this.data);
        // this.data.lichKham.status = 'Đang khám';
    };
    ResultRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-record',
            template: __webpack_require__(/*! ./result-record.component.html */ "./src/app/model/result-record/result-record.component.html"),
            styles: [__webpack_require__(/*! ./result-record.component.scss */ "./src/app/model/result-record/result-record.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _datatop_service__WEBPACK_IMPORTED_MODULE_2__["DatatopService"],
            _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ResultRecordComponent);
    return ResultRecordComponent;
}());



/***/ }),

/***/ "./src/app/model/tracking-record/tracking-record.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/model/tracking-record/tracking-record.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap mt-3\">\n  <div class=\"row ml-1 mr-1\">\n    <div class=\"col-md-3 d-flex justify-content-around\">\n      <button class=\"btn btn-outline-primary\"> Yêu cầu </button>\n    </div>\n    <div class=\"col-md-3 d-flex justify-content-around\">\n      <button class=\"btn  btn-outline-success\"> Hợp đồng </button>\n    </div>\n    <div class=\"col-md-3 d-flex justify-content-around\">\n      <button class=\"btn btn-outline-info\"> Lịch khám </button>\n    </div>\n    <div class=\"col-md d-flex justify-content-around\">\n      <button class=\"btn btn-outline-dark\"> Kết quả </button>\n    </div>\n  </div>\n  <div class=\"row ml-1 mr-1\">\n    <div class=\"col-md-3 d-flex justify-content-around\">\n      <button class=\"btn btn-outline-warning\" routerLink=\"/request-record\"> Tạo yêu cầu </button>\n    </div>\n    <div class=\"col-md-3 d-flex justify-content-around\">\n      <button class=\"btn btn-outline-warning\" (click)=\"adminMode()\"> Admin </button>\n    </div>\n    <div class=\"col-md-3 d-flex justify-content-around\">\n      <button class=\"btn btn-outline-warning\" (click)=\"guestMode()\"> Guest </button>\n    </div>\n  </div>\n</div>\n<div class=\"main mt-3\">\n  <div class=\"row ml-1 mr-1\" *ngFor=\"let patient of dataPatients; let i = index\">\n    <!-- YC -->\n    <div class=\"col-md-3 block block_HD\" *ngIf=\"checkNotEmpty(patient.yeuCau) \">\n      <div>\n        <div class=\"block-status\">\n          <span class=\"badge badge-success\" *ngIf=\"patient.yeuCau.status == 'Xong'\">{{patient.yeuCau.status}}</span>\n          <span class=\"badge badge-primary\" *ngIf=\"patient.yeuCau.status == 'Mới'\">{{patient.yeuCau.status}}</span>\n        </div>\n        <p class=\"id-bold\">ID : YC-{{patient.yeuCau.idPatient}}</p>\n        <p>Nơi khám bệnh: {{patient.yeuCau.place}}</p>\n        <p>Thời gian khám: {{patient.yeuCau.sinceTime}}</p>\n        <div style=\"font-size: 0.8em\">Dịch vụ khám:\n          <div *ngFor=\" let i of patient.yeuCau.service\">\n            <p>- {{i}}</p>\n          </div>\n\n        </div>\n        <p>Tính bảo mật: {{patient.yeuCau.security}}</p>\n      </div>\n      <div class=\"btn-edit\">\n        <a href=\"#\" style=\"color: black\">Xem</a>\n        <a href=\"#\" *ngIf=\"!checkNotEmpty(patient.hopDong)\">Sửa</a>\n        <a href=\"#\" *ngIf=\"!checkNotEmpty(patient.hopDong)\" style=\"color: tomato\">Hủy</a>\n      </div>\n    </div>\n    <!-- HD -->\n    <ng-template [ngIf]=\"checkNotEmpty(patient.hopDong)\" [ngIfElse]=\"Block_HD\">\n      <div class=\"col-md-3 block block_HD\">\n        <!-- <ng-template #BlockA> -->\n        <div>\n          <div class=\"block-status\">\n            <span class=\"badge badge-warning\">{{patient.hopDong.status}}</span>\n          </div>\n          <p class=\"id-bold\">ID : HD-{{patient.hopDong.id}}</p>\n          <p>Tổng số tiền: {{patient.hopDong.amountOfMoney}}</p>\n          <p>Đặt cọc: {{patient.hopDong.deposit}}</p>\n          <p>Ngày đặt cọc: {{patient.hopDong.depositDate}}</p>\n          <p>Số tiền còn lại: {{patient.hopDong.remainingAmount}}</p>\n          <p>Hạn thành toán: {{patient.hopDong.deadline}}</p>\n          <p>Phương thức thanh toán: {{patient.hopDong.methodOfPay}}</p>\n        </div>\n        <div class=\"btn-edit btn-edit-hs\">\n          <a href=\"#\" style=\"color: black\">Xem</a>\n          <a [routerLink]=\"['/addContract',patient.yeuCau.idPatient]\" *ngIf=\"!checkNotEmpty(patient.lichKham)\">Sửa</a>\n          <a href=\"#\" *ngIf=\"!checkNotEmpty(patient.lichKham)\" style=\"color: tomato\">Hủy</a>\n        </div>\n      </div>\n      <!-- LK -->\n      <ng-template [ngIf]=\"checkNotEmpty(patient.lichKham)\" [ngIfElse]=\"Block_LK\">\n        <div class=\"col-md-3 block  block_HD\">\n          <div>\n            <div class=\"block-status\">\n              <span class=\"badge badge-warning\" *ngIf=\"patient.lichKham.status == 'Đang khám'\">{{patient.lichKham.status}}</span>\n              <span class=\"badge badge-primary\" *ngIf=\"patient.lichKham.status == 'Mới'\">{{patient.lichKham.status}}</span>\n            </div>\n            <p class=\"id-bold\">ID : LK-{{patient.lichKham.id}}</p>\n            <div class=\"row\" *ngFor=\"let nguoi of patient.lichKham.person; let i=index\">\n              <p class=\"col-md-1\">{{i+1}}</p>\n              <p class=\"col-md-6\">{{nguoi.fullName}}</p>\n              <p class=\"col-md-4\">{{nguoi.appointment}}</p>\n            </div>\n          </div>\n          <div class=\"btn-edit btn-edit-hs\">\n            <a href=\"#\" style=\"color: black\">Xem</a>\n            <a type=\"button\" *ngIf=\"patient.lichKham.status !='Đang khám'\" [routerLink]=\"['/addPlan',patient.yeuCau.idPatient]\">Sửa</a>\n            <a href=\"#\" style=\"color: tomato\">Hủy</a>\n          </div>\n        </div>\n        <!-- KQ -->\n        <ng-template [ngIf]=\"checkNotEmpty(patient.ketQua)\" [ngIfElse]=\"Block_KQ\">\n          <div class=\"col-md block\">\n            <div class=\"row\" *ngFor=\"let kq of patient.ketQua.result\">\n              <p class=\"ml-2\">- {{kq.item}}</p>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #Block_KQ>\n          <div class=\"col-md block-add\" *ngIf=\"mode\">\n            <div class=\"add_text\">\n              <input type=\"button\" value=\"+\" class=\"btn add_btn\" [routerLink]=\"['/addResult',patient.yeuCau.idPatient]\">\n            </div>\n          </div>\n        </ng-template>\n      </ng-template>\n      <ng-template #Block_LK>\n        <div class=\"col-md-3 block-add\" *ngIf=\"mode\">\n          <div class=\"add_text\">\n            <input type=\"button\" value=\"+\" class=\"btn add_btn\" [routerLink]=\"['/addPlan',patient.yeuCau.idPatient]\">\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n    <!-- </ng-template> -->\n    <ng-template #Block_HD>\n      <div class=\"col-md-3 block-add\" *ngIf=\"mode\">\n        <div class=\"add_text\">\n          <input type=\"button\" value=\"+\" class=\"btn add_btn\" [routerLink]=\"['/addContract',patient.yeuCau.idPatient]\">\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/model/tracking-record/tracking-record.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/model/tracking-record/tracking-record.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  width: 7em; }\n\n.block > p, .row > p {\n  font-size: 0.8em; }\n\nP {\n  margin-bottom: 0.5em; }\n\n.block {\n  background-color: rgba(236, 241, 233, 0.925);\n  border: 1px solid #bdbbbb;\n  margin: 3px;\n  border-radius: 5px; }\n\n.doctor-date {\n  padding: 0; }\n\n.block-status {\n  position: absolute;\n  top: 2%;\n  right: 5%; }\n\n.block-status .badge {\n  align-items: center;\n  border-radius: 50px;\n  font-weight: 400;\n  padding-bottom: 5px; }\n\n.d-flex {\n  margin: 3px; }\n\n.id-bold {\n  font-weight: bold; }\n\n.btn-edit {\n  display: flex;\n  justify-content: center; }\n\n.btn-edit a {\n  font-size: 0.8em;\n  text-transform: uppercase;\n  margin: 0.5em;\n  font-weight: 450; }\n\n.block_HD {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.add_text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%; }\n\n.add_btn {\n  width: 3em;\n  height: 3em;\n  font-weight: 500;\n  border-radius: 5em;\n  outline: none; }\n\n.add_btn:hover {\n  background-color: rgba(186, 196, 229, 0.897); }\n\n.block-add {\n  background-color: rgba(236, 241, 233, 0.34);\n  border: 1px dotted #bdbbbb;\n  margin: 3px;\n  border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/model/tracking-record/tracking-record.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/model/tracking-record/tracking-record.component.ts ***!
  \********************************************************************/
/*! exports provided: TrackingRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingRecordComponent", function() { return TrackingRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datatop.service */ "./src/app/datatop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackingRecordComponent = /** @class */ (function () {
    function TrackingRecordComponent(listPatientService) {
        this.listPatientService = listPatientService;
        this.mode = 1;
    }
    TrackingRecordComponent.prototype.ngOnInit = function () {
        this.dataPatients = this.listPatientService.getDataPatients();
        // console.log('data: ',typeof this.dataPatients[0].ketQua);
    };
    TrackingRecordComponent.prototype.checkNotEmpty = function (checkObject, index) {
        // return Object.keys(checkObject).length;
        return (checkObject != null);
    };
    TrackingRecordComponent.prototype.adminMode = function () {
        this.mode = 1;
    };
    TrackingRecordComponent.prototype.guestMode = function () {
        this.mode = 0;
    };
    TrackingRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracking-record',
            template: __webpack_require__(/*! ./tracking-record.component.html */ "./src/app/model/tracking-record/tracking-record.component.html"),
            styles: [__webpack_require__(/*! ./tracking-record.component.scss */ "./src/app/model/tracking-record/tracking-record.component.scss")]
        }),
        __metadata("design:paramtypes", [_datatop_service__WEBPACK_IMPORTED_MODULE_1__["DatatopService"]])
    ], TrackingRecordComponent);
    return TrackingRecordComponent;
}());



/***/ }),

/***/ "./src/app/model/view-record/view-record.component.html":
/*!**************************************************************!*\
  !*** ./src/app/model/view-record/view-record.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>view</p>"

/***/ }),

/***/ "./src/app/model/view-record/view-record.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/model/view-record/view-record.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  width: 7em; }\n\n.block > p, .row > p {\n  font-size: 0.8em; }\n\nP {\n  margin-bottom: 0.5em; }\n\n.block {\n  background-color: rgba(236, 241, 233, 0.925);\n  border: 1px solid #bdbbbb;\n  margin: 3px;\n  border-radius: 5px; }\n\n.doctor-date {\n  padding: 0; }\n\n.block-status {\n  position: absolute;\n  top: 2%;\n  right: 5%; }\n\n.block-status .badge {\n  align-items: center;\n  border-radius: 50px;\n  font-weight: 400;\n  padding-bottom: 5px; }\n\n.d-flex {\n  margin: 3px; }\n\n.id-bold {\n  font-weight: bold; }\n\n.btn-edit {\n  display: flex;\n  justify-content: center; }\n\n.btn-edit a {\n  font-size: 0.8em;\n  text-transform: uppercase;\n  margin: 0.5em;\n  font-weight: 450; }\n\n.btn-edit-hs {\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n"

/***/ }),

/***/ "./src/app/model/view-record/view-record.component.ts":
/*!************************************************************!*\
  !*** ./src/app/model/view-record/view-record.component.ts ***!
  \************************************************************/
/*! exports provided: ViewRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRecordComponent", function() { return ViewRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datatop.service */ "./src/app/datatop.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewRecordComponent = /** @class */ (function () {
    function ViewRecordComponent(listPatientService, fb) {
        this.listPatientService = listPatientService;
        this.fb = fb;
    }
    ViewRecordComponent.prototype.ngOnInit = function () {
        this.formGroup = this.fb.group({});
        // this.yeucau.push(this.formGroup.get('yeuCauFormArray'));
        console.log('formgrup: ', this.formGroup);
        var formObj = this.formGroup.getRawValue();
        // let serializedForm = JSON.parse(formObj);
        // console.log('parse: ',this.formGroup);
    };
    ViewRecordComponent.prototype.CheckNotEmpty = function (checkObject, index) {
        // return Object.keys(checkObject).length;
        return (checkObject != null);
    };
    ViewRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-record',
            template: __webpack_require__(/*! ./view-record.component.html */ "./src/app/model/view-record/view-record.component.html"),
            styles: [__webpack_require__(/*! ./view-record.component.scss */ "./src/app/model/view-record/view-record.component.scss")]
        }),
        __metadata("design:paramtypes", [_datatop_service__WEBPACK_IMPORTED_MODULE_1__["DatatopService"],
            _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ViewRecordComponent);
    return ViewRecordComponent;
}());



/***/ }),

/***/ "./src/app/topheroes/topheroes.component.css":
/*!***************************************************!*\
  !*** ./src/app/topheroes/topheroes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background-image: url(\"https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg\");\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n.container{\r\n    width: 150vh;\r\n}\r\n.container>p{\r\n    text-align: center;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n.btn{\r\n    box-shadow: 0 5px 10px grey;\r\n}\r\n.btn:hover{\r\n    cursor: pointer;\r\n    color: rgb(33, 33, 34);\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/topheroes/topheroes.component.html":
/*!****************************************************!*\
  !*** ./src/app/topheroes/topheroes.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <p>\n      Data list:\n    </p>\n    <!-- <input [(ngModel)]=\"i\"> -->\n    <div class=\"row justify-content-start\" *ngFor=\"let data of datalist; let i =index\" style=\"height: 40px;\">\n      <div class=\"col-md-6 input-group\">\n        <div class=\"input-group-prepend\">\n          <label class=\"input-group-text\" style=\"height: 38px;\">{{data.id}}.</label>\n        </div>\n        <p type=\"text\" class=\"form-control\"> {{data.name}}</p>\n        <button class=\"btn ml-1 mb-1\" (click)=\"clickDel(i)\">Delete</button>\n        <button class=\"btn ml-1 mb-1\" [routerLink]=\"['/detail',data.id]\">More detail</button>\n        <!-- <label> {{datalist[i].id}}.</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"datalist[i].name\" /> -->\n        <!-- <div>day ne {{data}}</div> -->\n      </div>\n\n      <!-- \n    <div class=\"col-md-6 input-group\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\" style=\"height: 38px;\">{{datalist[i].id}}.</label>\n      </div>\n      <div class=\"form-control\">{{datalist[i].name}}</div>\n    </div> -->\n    </div>\n\n    <div class=\"row justify-content-start\">\n      <div class=\"col-md-6 input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"dataAdd.name\">\n        <button class=\"btn ml-1 mb-1\" (click)=\"clickAdd()\">Add item</button>\n        <!-- <input type=\"button\" value=\"Add\" (click)=\"clickAdd()\"> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/topheroes/topheroes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/topheroes/topheroes.component.ts ***!
  \**************************************************/
/*! exports provided: TopheroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopheroesComponent", function() { return TopheroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datatop */ "./src/app/datatop.ts");
/* harmony import */ var _datatop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datatop.service */ "./src/app/datatop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopheroesComponent = /** @class */ (function () {
    function TopheroesComponent(dataService) {
        this.dataService = dataService;
        this.dataAdd = new _datatop__WEBPACK_IMPORTED_MODULE_1__["Datatop"];
        this.lastestArr = [];
    }
    TopheroesComponent.prototype.ngOnInit = function () {
        // DATAS.forEach((i,index)=>{
        //   this.datalist[index] = i;
        // });
        // this.datalist = DATAS;
        this.datalist = this.dataService.getDataTop();
        // console.log('arr: ',this.datalist);
    };
    TopheroesComponent.prototype.clickAdd = function () {
        // this.lengthArr = this.datalist.length;
        // this.dataAdd.id = this.lengthArr + 1;
        if (this.dataAdd.name != null) {
            var maxId;
            var arrId = [];
            this.datalist.forEach(function (i, index) {
                arrId.push(i.id);
            });
            arrId.length > 0 ? maxId = Math.max.apply(Math, arrId) : maxId = 0;
            console.log('maxid: ', maxId);
            this.dataAdd.id = maxId + 1;
            this.dataService.addData(this.dataAdd);
            this.dataService.lastestData = this.dataService.lastestData.concat(this.dataAdd);
            this.dataAdd = new _datatop__WEBPACK_IMPORTED_MODULE_1__["Datatop"];
        }
    };
    ;
    TopheroesComponent.prototype.clickDel = function (pos) {
        this.datalist.splice(pos, 1);
    };
    TopheroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topheroes',
            template: __webpack_require__(/*! ./topheroes.component.html */ "./src/app/topheroes/topheroes.component.html"),
            styles: [__webpack_require__(/*! ./topheroes.component.css */ "./src/app/topheroes/topheroes.component.css")]
        }),
        __metadata("design:paramtypes", [_datatop_service__WEBPACK_IMPORTED_MODULE_2__["DatatopService"]])
    ], TopheroesComponent);
    return TopheroesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\topHero\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map