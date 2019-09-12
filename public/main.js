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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _view_productos_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/productos/productos.component */ "./src/app/view/productos/productos.component.ts");
/* harmony import */ var _view_especiales_especiales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/especiales/especiales.component */ "./src/app/view/especiales/especiales.component.ts");
/* harmony import */ var _view_descripciones_descripciones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/descripciones/descripciones.component */ "./src/app/view/descripciones/descripciones.component.ts");
/* harmony import */ var _view_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/contactenos/contactenos.component */ "./src/app/view/contactenos/contactenos.component.ts");
/* harmony import */ var _view_reglas_reglas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/reglas/reglas.component */ "./src/app/view/reglas/reglas.component.ts");









var routes = [
    { path: '', component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'productos', component: _view_productos_productos_component__WEBPACK_IMPORTED_MODULE_4__["ProductosComponent"] },
    { path: 'especiales', component: _view_especiales_especiales_component__WEBPACK_IMPORTED_MODULE_5__["EspecialesComponent"] },
    { path: 'descripciones', component: _view_descripciones_descripciones_component__WEBPACK_IMPORTED_MODULE_6__["DescripcionesComponent"] },
    { path: 'contactenos', component: _view_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_7__["ContactenosComponent"] },
    { path: 'reglas', component: _view_reglas_reglas_component__WEBPACK_IMPORTED_MODULE_8__["ReglasComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"caja\">\n  <div class=\"row\" id=\"cabecera\">\n      <div class=\"col-lg-4\">\n          <img src=\"assets/img/logo.png\" alt=\"logo\" id=\"logo\">\n      </div>\n      <div class=\"col-lg-4\" style=\"margin-top: 60px\" id=\"buscador\">\n          <form class=\"form-inline my-2 my-lg-0\">\n              <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n              <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n          </form>\n      </div>\n      <div class=\"col-lg-4\">\n          <div class=\"row\">\n              <div class=\"col-lg-12\" id=\"hog\">\n                  <a href=\"#\">HOME</a> / <a href=\"#\">LOGIN</a>\n              </div>\n              <div class=\"row\" id=\"callup\">\n                  <div class=\"col-lg-8\">\n                      <p>Call Us:</p>\n                      <p>(800) 2345-6789</p>  \n                  </div>\n                  <div class=\"col-lg-4\">\n                      <div class=\"cart text-center\" text>\n                          <p id=\"numero\">0</p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"row menu\">\n      <div class=\"col-lg-2 men\"><a href=\"#\" routerLink=\"/\">HOME</a></div>\n      <div class=\"col-lg-2 men\"><a href=\"#\" routerLink=\"/productos\">PRODUCTOS</a></div>\n      <div class=\"col-lg-2 men\"><a href=\"#\" routerLink=\"/especiales\">ESPECIALES</a></div>\n      <div class=\"col-lg-2 men\"><a href=\"#\" routerLink=\"/descripciones\">DESCRIPCIONES</a></div>\n      <div class=\"col-lg-2 men\"><a href=\"#\" routerLink=\"/contactenos\">CONTACTENOS</a></div>\n      <div class=\"col-lg-2 men\"><a href=\"#\" routerLink=\"/reglas\">REGLAS</a></div>\n  </div>\n  <div class=\"row\" id=\"middle\">\n      \n          <div class=\"col-lg-3\">\n                  <div class=\"list-group\">\n                          <a href=\"#\" class=\"list-group-item list-group-item-action active\">CALIDAD\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">ESTANDAR\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">CON INSCRIPCIONES\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">DE ASPCETO PROPICIO\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">DE ASPCETO HEROICO\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">DE ASPCETO GENUINO\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">CON AUTOGRAFO\n                          </a>\n                          <a href=\"#\" class=\"list-group-item list-group-item-action\">DE ASPCETO CONGELADO\n                          </a>\n                  </div>\n          </div>\n\n      <div class=\"col-lg-2\">\n              <div class=\"list-group\">\n                      <a href=\"#\" class=\"list-group-item list-group-item-action active\">RAREZA\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">ANCESTRAL\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">ESTACIONAL\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">ARCANO\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">LEGENDARIO\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">INMORTAL\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">MITICO\n                      </a>\n                      <a href=\"#\" class=\"list-group-item list-group-item-action\">RARO\n                      </a>\n              </div>\n      </div>\n      \n      <div class=\"col-lg-7\" id=\"compendios\">\n              <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                      <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n                      </ol>\n                      <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                          <img class=\"d-block w-100\" src=\"assets/img/slide1.jpg\" alt=\"First slide\">\n                        </div>\n                        <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"assets/img/slide2.jpg\" alt=\"Second slide\">\n                        </div>\n                        <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"assets/img/slide3.jpg\" alt=\"Third slide\">\n                        </div>\n                        <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"assets/img/slide4.jpeg\" alt=\"fourth slide\">\n                        </div>\n                        <div class=\"carousel-item\">\n                          <img class=\"d-block w-100\" src=\"assets/img/slide5.png\" alt=\"fisth slide\">\n                        </div>\n                      </div>\n                      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                      </a>\n                      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                      </a>\n              </div>\n      </div>\n  </div>\n\n  <router-outlet></router-outlet>\n\n  <div class=\"banner\">\n      <img src=\"assets/img/banner.jpg\" alt=\"banner\">\n  </div>\n\n  <div class=\"row\" id=\"footer\">\n          <div class=\"col-lg-3\">\n              <div class=\"list-group\">\n                  \n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">HOME\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">PRODUCTOS\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">ESPECIALES\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">DESCRIPCIONES\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">CONTACTENOS\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">REGLAS\n                </a>\n          </div>\n      </div>\n          <div class=\"col-lg-3\">\n              <div class=\"list-group\">\n                  \n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">MY ACCOUNT\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">SITE MAP\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">FACEBOOK\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">TWITTER\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">GOOGLE\n                  </a>\n                  <a href=\"#\" class=\"list-group-item list-group-item-action\">INSTAGRAM\n                </a>\n          </div>\n          </div>\n          <div class=\"col-lg-5\" id=\"log\" style=\"color:white\">\n              <img src=\"assets/img/logo.png\" alt=\"logo\" logob>\n              <br>\n              <p id=\"callu\">\n                  Call Us: (800) 2345-6789\n              </p>\n          </div>\n      </div>\n      <div class=\"derechos\">\n          <p>COPYRIHT © 2019 ITEMS STORE. POWERED BY @JOSCAR / DERECHOS RESERVADOS</p>\n      </div>\n</div>\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DotaStore';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _view_productos_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/productos/productos.component */ "./src/app/view/productos/productos.component.ts");
/* harmony import */ var _view_especiales_especiales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/especiales/especiales.component */ "./src/app/view/especiales/especiales.component.ts");
/* harmony import */ var _view_descripciones_descripciones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/descripciones/descripciones.component */ "./src/app/view/descripciones/descripciones.component.ts");
/* harmony import */ var _view_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/contactenos/contactenos.component */ "./src/app/view/contactenos/contactenos.component.ts");
/* harmony import */ var _view_reglas_reglas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/reglas/reglas.component */ "./src/app/view/reglas/reglas.component.ts");
/* harmony import */ var _view_productos_producto_add_producto_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/productos/producto-add/producto-add.component */ "./src/app/view/productos/producto-add/producto-add.component.ts");
/* harmony import */ var _view_productos_producto_list_producto_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/productos/producto-list/producto-list.component */ "./src/app/view/productos/producto-list/producto-list.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _view_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _view_productos_productos_component__WEBPACK_IMPORTED_MODULE_6__["ProductosComponent"],
                _view_especiales_especiales_component__WEBPACK_IMPORTED_MODULE_7__["EspecialesComponent"],
                _view_descripciones_descripciones_component__WEBPACK_IMPORTED_MODULE_8__["DescripcionesComponent"],
                _view_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_9__["ContactenosComponent"],
                _view_reglas_reglas_component__WEBPACK_IMPORTED_MODULE_10__["ReglasComponent"],
                _view_productos_producto_add_producto_add_component__WEBPACK_IMPORTED_MODULE_11__["ProductoAddComponent"],
                _view_productos_producto_list_producto_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"] //Para usar la base de datos de firebase
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/view/contactenos/contactenos.component.css":
/*!************************************************************!*\
  !*** ./src/app/view/contactenos/contactenos.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY29udGFjdGVub3MvY29udGFjdGVub3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/contactenos/contactenos.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view/contactenos/contactenos.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactenos works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/contactenos/contactenos.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/contactenos/contactenos.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactenosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactenosComponent", function() { return ContactenosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactenosComponent = /** @class */ (function () {
    function ContactenosComponent() {
    }
    ContactenosComponent.prototype.ngOnInit = function () {
    };
    ContactenosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactenos',
            template: __webpack_require__(/*! ./contactenos.component.html */ "./src/app/view/contactenos/contactenos.component.html"),
            styles: [__webpack_require__(/*! ./contactenos.component.css */ "./src/app/view/contactenos/contactenos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactenosComponent);
    return ContactenosComponent;
}());



/***/ }),

/***/ "./src/app/view/descripciones/descripciones.component.css":
/*!****************************************************************!*\
  !*** ./src/app/view/descripciones/descripciones.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZGVzY3JpcGNpb25lcy9kZXNjcmlwY2lvbmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/descripciones/descripciones.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/view/descripciones/descripciones.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  descripciones works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/descripciones/descripciones.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/descripciones/descripciones.component.ts ***!
  \***************************************************************/
/*! exports provided: DescripcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripcionesComponent", function() { return DescripcionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescripcionesComponent = /** @class */ (function () {
    function DescripcionesComponent() {
    }
    DescripcionesComponent.prototype.ngOnInit = function () {
    };
    DescripcionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descripciones',
            template: __webpack_require__(/*! ./descripciones.component.html */ "./src/app/view/descripciones/descripciones.component.html"),
            styles: [__webpack_require__(/*! ./descripciones.component.css */ "./src/app/view/descripciones/descripciones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescripcionesComponent);
    return DescripcionesComponent;
}());



/***/ }),

/***/ "./src/app/view/especiales/especiales.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/especiales/especiales.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZXNwZWNpYWxlcy9lc3BlY2lhbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/especiales/especiales.component.html":
/*!***********************************************************!*\
  !*** ./src/app/view/especiales/especiales.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-6\" class=\"item\">\n    <img src=\"assets/img/s1.png\" alt=\"06\">\n          <br>\n          <p>Subscripcion plus</p>\n          <button>1 mes</button>\n          <button>6 meses</button>\n          <button>1 año</button>\n  </div>\n  <div class=\"col-lg-6\" class=\"item\">\n    <img src=\"assets/img/s2.png\" alt=\"06\">\n          <p>Pack de rebajas</p>\n          <button>1 </button>\n          <button>50</button>\n          <button>100</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view/especiales/especiales.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/especiales/especiales.component.ts ***!
  \*********************************************************/
/*! exports provided: EspecialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecialesComponent", function() { return EspecialesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EspecialesComponent = /** @class */ (function () {
    function EspecialesComponent() {
    }
    EspecialesComponent.prototype.ngOnInit = function () {
    };
    EspecialesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-especiales',
            template: __webpack_require__(/*! ./especiales.component.html */ "./src/app/view/especiales/especiales.component.html"),
            styles: [__webpack_require__(/*! ./especiales.component.css */ "./src/app/view/especiales/especiales.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EspecialesComponent);
    return EspecialesComponent;
}());



/***/ }),

/***/ "./src/app/view/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/view/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"col-lg-12 medio\">\n    <p>Productos Destacados</p>\n</div>\n\n<div class=\"productos\">\n        <div class=\"item\">\n            <img src=\"assets/img/01.gif\" alt=\"01\">\n            <br>\n            <p>$125</p>\n            <p>Arcano de Phantom Assassin</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/02.gif\" alt=\"02\">\n            <br>\n            <p>$120</p>\n            <p>Arcano de Legion Comander</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/03.gif\" alt=\"03\">\n            <br>\n            <p>$120</p>\n            <p>Arcano de Shadow Fiend</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/04.gif\" alt=\"04\">\n            <br>\n            <p>$110</p>\n            <p>Arcano de Lina</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/05.png\" alt=\"05\">\n            <br>\n            <p>$1100</p>\n            <p>Espadon Quebradizo</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/06.png\" alt=\"06\">\n            <br>\n            <p>$1200</p>\n            <p>Diabolic Aspect</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/07.png\" alt=\"07\">\n            <br>\n            <p>$1300</p>\n            <p>Golden Ornithomancer Mantle</p>\n            <button>Agregar</button>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/img/08.png\" alt=\"08\">\n            <br>\n            <p>$1400</p>\n            <p>Axe of Phractos</p>\n            <button>Agregar</button>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/view/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/view/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/view/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/productos/producto-add/producto-add.component.css":
/*!************************************************************************!*\
  !*** ./src/app/view/productos/producto-add/producto-add.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcHJvZHVjdG9zL3Byb2R1Y3RvLWFkZC9wcm9kdWN0by1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/productos/producto-add/producto-add.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/view/productos/producto-add/producto-add.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  producto-add works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/productos/producto-add/producto-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view/productos/producto-add/producto-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoAddComponent", function() { return ProductoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductoAddComponent = /** @class */ (function () {
    function ProductoAddComponent() {
    }
    ProductoAddComponent.prototype.ngOnInit = function () {
    };
    ProductoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-add',
            template: __webpack_require__(/*! ./producto-add.component.html */ "./src/app/view/productos/producto-add/producto-add.component.html"),
            styles: [__webpack_require__(/*! ./producto-add.component.css */ "./src/app/view/productos/producto-add/producto-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductoAddComponent);
    return ProductoAddComponent;
}());



/***/ }),

/***/ "./src/app/view/productos/producto-list/producto-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/view/productos/producto-list/producto-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcHJvZHVjdG9zL3Byb2R1Y3RvLWxpc3QvcHJvZHVjdG8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/productos/producto-list/producto-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/view/productos/producto-list/producto-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  producto-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/productos/producto-list/producto-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view/productos/producto-list/producto-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoListComponent", function() { return ProductoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductoListComponent = /** @class */ (function () {
    function ProductoListComponent() {
    }
    ProductoListComponent.prototype.ngOnInit = function () {
    };
    ProductoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-list',
            template: __webpack_require__(/*! ./producto-list.component.html */ "./src/app/view/productos/producto-list/producto-list.component.html"),
            styles: [__webpack_require__(/*! ./producto-list.component.css */ "./src/app/view/productos/producto-list/producto-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductoListComponent);
    return ProductoListComponent;
}());



/***/ }),

/***/ "./src/app/view/productos/productos.component.css":
/*!********************************************************!*\
  !*** ./src/app/view/productos/productos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/productos/productos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/view/productos/productos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 medio\">\n  <p>Productos</p>\n</div>\n\n<div class=\"productos\">\n      <div class=\"item\">\n          <img src=\"assets/img/f1.jpg\" alt=\"01\">\n          <br>\n          <p>$25</p>\n          <p>Funko POP Jugger</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/f2.jpg\" alt=\"02\">\n          <br>\n          <p>$25</p>\n          <p>Funko POP Assassin</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/f3.jpg\" alt=\"03\">\n          <br>\n          <p>$25</p>\n          <p>Funko POP bara</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/f4.jpg\" alt=\"04\">\n          <br>\n          <p>$25</p>\n          <p>Funko POP Pudge</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/l1.jpg\" alt=\"05\">\n          <br>\n          <p>$10</p>\n          <p>Llavero Vanguard</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/l2.jpg\" alt=\"06\">\n          <br>\n          <p>$10</p>\n          <p>Llavero Aegis</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/l3.jpg\" alt=\"07\">\n          <br>\n          <p>$10</p>\n          <p>Llavero Sven</p>\n          <button>Agregar</button>\n      </div>\n      <div class=\"item\">\n          <img src=\"assets/img/l4.jpg\" alt=\"08\">\n          <br>\n          <p>$10</p>\n          <p>Llavero Aghanim</p>\n          <button>Agregar</button>\n      </div>\n    <div class=\"item\">\n        <img src=\"assets/img/05.png\" alt=\"05\">\n        <br>\n        <p>$1100</p>\n        <p>Espadon Quebradizo</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/06.png\" alt=\"06\">\n        <br>\n        <p>$1200</p>\n        <p>Diabolic Aspect</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/07.png\" alt=\"07\">\n        <br>\n        <p>$1300</p>\n        <p>Golden Ornithomancer Mantle</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/08.png\" alt=\"08\">\n        <br>\n        <p>$1400</p>\n        <p>Axe of Phractos</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/01.gif\" alt=\"01\">\n        <br>\n        <p>$125</p>\n        <p>Arcano de Phantom Assassin</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/02.gif\" alt=\"02\">\n        <br>\n        <p>$120</p>\n        <p>Arcano de Legion Comander</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/03.gif\" alt=\"03\">\n        <br>\n        <p>$120</p>\n        <p>Arcano de Shadow Fiend</p>\n        <button>Agregar</button>\n    </div>\n    <div class=\"item\">\n        <img src=\"assets/img/04.gif\" alt=\"04\">\n        <br>\n        <p>$110</p>\n        <p>Arcano de Lina</p>\n        <button>Agregar</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/view/productos/productos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/productos/productos.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductosComponent = /** @class */ (function () {
    function ProductosComponent() {
    }
    ProductosComponent.prototype.ngOnInit = function () {
    };
    ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos',
            template: __webpack_require__(/*! ./productos.component.html */ "./src/app/view/productos/productos.component.html"),
            styles: [__webpack_require__(/*! ./productos.component.css */ "./src/app/view/productos/productos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/app/view/reglas/reglas.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/reglas/reglas.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcmVnbGFzL3JlZ2xhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/reglas/reglas.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/reglas/reglas.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reglas works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/reglas/reglas.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/reglas/reglas.component.ts ***!
  \*************************************************/
/*! exports provided: ReglasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglasComponent", function() { return ReglasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReglasComponent = /** @class */ (function () {
    function ReglasComponent() {
    }
    ReglasComponent.prototype.ngOnInit = function () {
    };
    ReglasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reglas',
            template: __webpack_require__(/*! ./reglas.component.html */ "./src/app/view/reglas/reglas.component.html"),
            styles: [__webpack_require__(/*! ./reglas.component.css */ "./src/app/view/reglas/reglas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReglasComponent);
    return ReglasComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyAgukgwsjt9Tb2pJ7dHfLe-NpgI0mJ6UGU",
        authDomain: "dotastorejc.firebaseapp.com",
        databaseURL: "https://dotastorejc.firebaseio.com",
        projectId: "dotastorejc",
        storageBucket: "",
        messagingSenderId: "438827907682",
        appId: "1:438827907682:web:4fac2666ece6bae5"
    }
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\LP1\DotaStore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map