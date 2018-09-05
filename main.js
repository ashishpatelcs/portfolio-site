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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-me {\n  padding: 100px;\n  width: 99vw;\n  height: 99vh;\n  background: #f5f7fa;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f5f7fa, #c3cfe2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n}\n\n#about-header {\n  color: #79a4eb;\n}\n\nh1 {\n  margin: auto;\n}\n\nhr {\n  width: 50%;\n}\n\n.portrait {\n  border: 5px solid #dee8f7;\n}\n\n.sign {\n  text-align: right;\n}\n\n.badge:hover {\n  color: darkslategrey;\n  background: #eee;\n  border: 1px solid darkslategrey;\n}\n\n.box1 img,.box1:after,.box1:before{width:200px;transition:all .3s ease 0s}\n\n.box1 .icon,.box2,.box3,.box4,.box5 .icon li a{text-align:center}\n\n.box10:after,.box10:before,.box1:after,.box1:before,.box2 .inner-content:after,.box3:after,.box3:before,.box4:before,.box5:after,.box5:before,.box6:after,.box7:after,.box7:before{content:\"\"}\n\n.box1,.box11,.box12,.box13,.box14,.box16,.box17,.box18,.box2,.box20,.box21,.box3,.box4,.box5,.box5 .icon li a,.box6,.box7,.box8{overflow:hidden}\n\n.box1 .title,.box10 .title,.box4 .title,.box7 .title{letter-spacing:1px}\n\n.box3 .post,.box4 .post,.box5 .post,.box7 .post{font-style:italic}\n\nbody{background-color:#f1f1f2}\n\n.mt-30{margin-top:30px}\n\n.mt-40{margin-top:40px}\n\n.mb-30{margin-bottom:30px}\n\n.box1 .icon,.box1 .title{margin:0;position:absolute}\n\n.box1{box-shadow:0 0 3px rgba(0,0,0,.3);position:relative}\n\n.box1:after,.box1:before{height:50%;background:rgba(0,0,0,.5);position:absolute;top:0;left:0;z-index:1;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}\n\n.box1:after{top:auto;bottom:0;-webkit-transform-origin:0 100%;transform-origin:0 100%}\n\n.box1:hover:after,.box1:hover:before{-webkit-transform:rotateZ(0);transform:rotateZ(0)}\n\n.box1 img{height:auto;-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}\n\n.box1:hover img{-webkit-filter:sepia(80%);filter:sepia(80%);-webkit-transform:scale(1.3) rotate(10deg);transform:scale(1.3) rotate(10deg)}\n\n.box1 .title{font-size:19px;font-weight:600;color:#fff;text-transform:uppercase;text-shadow:0 0 1px #111;bottom:10px;left:10px;opacity:0;z-index:2;-webkit-transform:scale(0);transform:scale(0);transition:all .5s ease .2s}\n\n.box1:hover .title{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n\n.box1 .icon{padding:7px 5px;list-style:none;background:#111;border-radius:0 0 0 10px;top:-100%;right:0;z-index:2;transition:all .3s ease .2s}\n\n.box1:hover .icon{top:0}\n\n.box1 .icon li{display:block;margin:10px 0}\n\n.box1 .icon li a{display:block;width:35px;height:35px;line-height:35px;border-radius:10px;font-size:18px;color:#fff;transition:all .3s ease 0s}\n\n.box2 .icon li a,.box3 .icon a:hover,.box4 .icon li a:hover,.box5 .icon li a,.box6 .icon li a{border-radius:50%}\n\n.box1 .icon li a:hover{color:#fff;box-shadow:0 0 10px #000 inset,0 0 0 3px #fff}\n\n@media only screen and (max-width:990px){.box1{margin-bottom:30px}\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"fluid-container about-me\">\n    <div id=\"about-header\" class=\"row about-header\">\n      <h1 >About Me</h1>\n    </div>\n    <hr>\n    <div id=\"content\" class=\"row\">\n        <div class=\"col-md-8\">\n            <p>\n              Hi, My name is Ashish Patel. I am Master of Computer Applications at National Institute of Technology Agartala in India.\n\n              I'm a passionate Full Stack Web Developer with experience in Web Design, HTML, CSS, PHP, Javascript, Angular.js, React.js, Node.js, Express.js, Ruby on Rails, Python and Amazon Web Services. I have good knowledge of algorithms and data structures, Working knowledge of Git, Heroku, Mac OSX, MAMP (Mac) / LAMP (Linux) / WAMP (windows) Stack, and search engine optimisation & marketing.\n\n              I have exceptional problem-solving skills. Currently looking to work as Full Stack Web Developer / Front-end Developer / Back-end Developer / Javascript Developer / PHP Developer / Ruby on Rails Developer.\n            </p>\n\n            <p><strong>Favorite Editor</strong>: <span class=\"badge badge-dark\">Brackets</span>, <span class=\"badge badge-dark\">VS Code</span>, <span class=\"badge badge-dark\">TextWrangler</span></p>\n            <p><strong>My Toolbox</strong>: <span class=\"badge badge-dark\">Codekit</span>, <span class=\"badge badge-dark\">MAMP Pro</span>, <span class=\"badge badge-dark\">Git</span>, <span class=\"badge badge-dark\">Chrome</span>, <span class=\"badge badge-dark\">Macbook Pro</span> </p>\n            <p><strong>Tech Skills</strong>: <span class=\"badge badge-dark\">Vanilla JS</span>, <span class=\"badge badge-dark\">Angular</span>, <span class=\"badge badge-dark\">Node.js</span>, <span class=\"badge badge-dark\">Express.js</span>, <span class=\"badge badge-dark\">PHP</span>, <span class=\"badge badge-dark\">Ruby on Rails</span>, <span class=\"badge badge-dark\">MongoDB</span>, <span class=\"badge badge-dark\">MySQL</span>, <span class=\"badge badge-dark\">HTML5/CSS3</span></p>\n            <p><strong>Non-Geek Stuff</strong>: <span class=\"badge badge-dark\">Hardcore RTS Gamer</span>, <span class=\"badge badge-dark\">Travel Explorer</span></p>\n            <div class=\"sign\">\n                <img width=\"200\" src=\"src/assets/signature.png\" alt=\"ashish patel signature\">\n              <p>Date: {{ current_date }}</p>\n\n          </div>\n            <hr>\n        </div>\n     <div class=\"col-md-4\">\n        <div class=\"box1\">\n            <img class=\"portrait\" src=\"src/assets/ashishpatel.JPG\" alt=\"ashish patel portrait\">\n            <h3 class=\"title\">Ashish Patel</h3>\n            <ul class=\"icon\">\n                <li><a href=\"#\"><i class=\"fa fa-search\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\n            </ul>\n        </div>\n\n\n     </div>\n    </div>\n </div>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.current_date = '';
        var date = new Date();
        this.current_date = '' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.fa-heart {\n  color: hotpink;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n      Made in India with <i class=\"fa fa-heart\"></i> by <a href=\"https://github.com/ashishpatelcs\">Ashish Patel</a>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>-->\n\n<nav class=\"navbar navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"/\">Ashish Patel</a>\n    <div class=\"navbar-expand mr-auto\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Home</a>\n        <a class=\"nav-item nav-link\" href=\"#about-header\">About Me</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Portfolio</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Blog</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Contact</a>\n      </div>\n    </div>\n    <div class=\"navbar-expand ml-auto navbar-nav\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" href=\"https://github.com/ashishpatelcs\" target=\"_blank\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n        <a class=\"nav-item nav-link\" href=\"https://linkedin.com/in/meetashishpatel\" target=\"_blank\">\n          <i class=\"fa fa-linkedin\"></i>\n        </a>\n        <a class=\"nav-item nav-link\" href=\"https://facebook.com/ashishpatelcom\" target=\"_blank\">\n          <i class=\"fa fa-facebook\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Volumes/Files/ng-projs/portfolio-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
