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

/***/ "./src/app/aboutpage/aboutpage-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/aboutpage/aboutpage-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutpageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageRoutingModule", function() { return AboutpageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AboutpageRoutingModule = /** @class */ (function () {
    function AboutpageRoutingModule() {
    }
    AboutpageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutpageRoutingModule);
    return AboutpageRoutingModule;
}());



/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0cGFnZS9hYm91dHBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.ts ***!
  \**************************************************/
/*! exports provided: AboutpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageComponent", function() { return AboutpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutpageComponent = /** @class */ (function () {
    function AboutpageComponent() {
    }
    AboutpageComponent.prototype.ngOnInit = function () {
    };
    AboutpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutpage',
            template: __webpack_require__(/*! ./aboutpage.component.html */ "./src/app/aboutpage/aboutpage.component.html"),
            styles: [__webpack_require__(/*! ./aboutpage.component.css */ "./src/app/aboutpage/aboutpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutpageComponent);
    return AboutpageComponent;
}());



/***/ }),

/***/ "./src/app/aboutpage/aboutpage.module.ts":
/*!***********************************************!*\
  !*** ./src/app/aboutpage/aboutpage.module.ts ***!
  \***********************************************/
/*! exports provided: AboutpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageModule", function() { return AboutpageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _aboutpage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutpage-routing.module */ "./src/app/aboutpage/aboutpage-routing.module.ts");




var AboutpageModule = /** @class */ (function () {
    function AboutpageModule() {
    }
    AboutpageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _aboutpage_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutpageRoutingModule"]
            ]
        })
    ], AboutpageModule);
    return AboutpageModule;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "./src/app/aboutpage/aboutpage.component.ts");
/* harmony import */ var _interestspage_interestspage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interestspage/interestspage.component */ "./src/app/interestspage/interestspage.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");









var appRoutes = [
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_5__["AboutpageComponent"] },
    { path: 'interests', component: _interestspage_interestspage_component__WEBPACK_IMPORTED_MODULE_6__["InterestspageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
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

module.exports = "Menu, div, router-outlet,appBody,Footer{\r\n\tpadding:0px;\r\n\tmargin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJNZW51LCBkaXYsIHJvdXRlci1vdXRsZXQsYXBwQm9keSxGb290ZXJ7XHJcblx0cGFkZGluZzowcHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<Menu></Menu>\n<section id=\"appbody\">\n\t<router-outlet></router-outlet>\n</section>\n<Footer id=\"footerLocation\"></Footer>"

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
        this.title = 'angularBlog';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pagemenu_pagemenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagemenu/pagemenu.component */ "./src/app/pagemenu/pagemenu.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "./src/app/aboutpage/aboutpage.component.ts");
/* harmony import */ var _interestspage_interestspage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interestspage/interestspage.component */ "./src/app/interestspage/interestspage.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _aboutpage_aboutpage_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aboutpage/aboutpage.module */ "./src/app/aboutpage/aboutpage.module.ts");
/* harmony import */ var _interestspage_interestspage_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interestspage/interestspage.module */ "./src/app/interestspage/interestspage.module.ts");
/* harmony import */ var _pagefooter_pagefooter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagefooter/pagefooter.component */ "./src/app/pagefooter/pagefooter.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pagemenu_pagemenu_component__WEBPACK_IMPORTED_MODULE_6__["PagemenuComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_8__["AboutpageComponent"],
                _interestspage_interestspage_component__WEBPACK_IMPORTED_MODULE_9__["InterestspageComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _pagefooter_pagefooter_component__WEBPACK_IMPORTED_MODULE_14__["PagefooterComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_11__["HomepageModule"],
                _aboutpage_aboutpage_module__WEBPACK_IMPORTED_MODULE_12__["AboutpageModule"],
                _interestspage_interestspage_module__WEBPACK_IMPORTED_MODULE_13__["InterestspageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sideMenu{\r\n\tbackground-color: #B0B0B0;\r\n\tposition: static;\r\n\tleft: 0px;\r\n\ttop: static;\r\n\twidth: 80px;\r\n\tmin-height: 100px;\r\n\theight:70vh;\r\n}\r\n.blogNameMenu {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: none;\r\n\theight: inherit;\r\n\twidth: inherit;\r\n}\r\n.blogNameMenu li{\r\n\tcolor: #003171;\t\r\n\theight: 40px;\r\n\twidth: inherit;\r\n\tdisplay: inline-block;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n.blogNameMenu .selected{\r\n\tbackground-color: #707070;\r\n}\r\n.blogLogo{\r\n\theight: inherit;\r\n\twidth: inherit;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n#mainBlogArea{\r\n\tposition: absolute;\r\n\tleft: 80px;\r\n\ttop: 20vh;\r\n\tbackground-image: \"../../assets/images/blog/defaultBlogBackground.png\";\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\theight: inherit;\r\n\tbackground-repeat: repeat;\r\n\twidth: calc(100vw - 80px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osY0FBYztDQUNkLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2Qsc0JBQW1CO0lBQW5CLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFNBQVM7Q0FDVCxzRUFBc0U7Q0FDdEUsc0JBQW1CO0lBQW5CLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGVNZW51e1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNCMEIwQjA7XHJcblx0cG9zaXRpb246IHN0YXRpYztcclxuXHRsZWZ0OiAwcHg7XHJcblx0dG9wOiBzdGF0aWM7XHJcblx0d2lkdGg6IDgwcHg7XHJcblx0bWluLWhlaWdodDogMTAwcHg7XHJcblx0aGVpZ2h0Ojcwdmg7XHJcbn1cclxuLmJsb2dOYW1lTWVudSB7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRoZWlnaHQ6IGluaGVyaXQ7XHJcblx0d2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuLmJsb2dOYW1lTWVudSBsaXtcclxuXHRjb2xvcjogIzAwMzE3MTtcdFxyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogaW5oZXJpdDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcbi5ibG9nTmFtZU1lbnUgLnNlbGVjdGVke1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmJsb2dMb2dve1xyXG5cdGhlaWdodDogaW5oZXJpdDtcclxuXHR3aWR0aDogaW5oZXJpdDtcclxuXHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG4jbWFpbkJsb2dBcmVhe1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA4MHB4O1xyXG5cdHRvcDogMjB2aDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmxvZy9kZWZhdWx0QmxvZ0JhY2tncm91bmQucG5nXCI7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHRoZWlnaHQ6IGluaGVyaXQ7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuXHR3aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"sideMenu\">\n\t<ul class=\"blogNameMenu\">\n\t\t<li *ngFor=\"let blogTopic of blogMessages\" [class.selected]=\"blogTopic.blogName === selectedBlog\" (click)=\"blogSelected(blogTopic.blogName)\">\n\t\t\t<img class=\"blogLogo\" id=\"{{blogTopic.blogName}}\" name=\"{{blogTopic.blogName}}\" src=\"{{blogTopic.blogIconLocation}}\" alt=\"logo\">\n\t\t</li>\n\t</ul>\n</section>\n\n<!--\nAssumption: - incoming message info is sorted by date already\n\t\t\t- incoming data structure once converted into an object, is the same as seen in mock object \n\n-->\n<section id=\"mainBlogArea\" *ngIf=\"selectedBlog\">\n\t<ng-container *ngFor=\"let blogTopic of blogMessages\" >\n\t\t<ng-container *ngIf=\"blogTopic.blogName === selectedBlog\" >\n\t\t\t<section *ngFor=\"let message of blogTopic.messages\">\n\t\t\t\t<!--  <img class=\"personIcon\" src=\"{{message.userID.image}}\" alt=\"personLogo\"> -->\n\t\t\t\t{{message.message}}\n\t\t\t</section>\n\t\t</ng-container>\n\t</ng-container>\n\t\n</section>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-blog */ "./src/app/blog/mock-blog.ts");



var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.blogMessages = _mock_blog__WEBPACK_IMPORTED_MODULE_2__["BLOGMESSAGELIST"];
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent.prototype.blogSelected = function (blogName) {
        this.selectedBlog = blogName;
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/mock-blog.ts":
/*!***********************************!*\
  !*** ./src/app/blog/mock-blog.ts ***!
  \***********************************/
/*! exports provided: BLOGMESSAGELIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOGMESSAGELIST", function() { return BLOGMESSAGELIST; });
var BLOGMESSAGELIST = [
    { blogName: "django", blogIconLocation: "assets/images/programLanguages/django.svg", messages: [
            { messageCreationTime: "21:04:2019:13:14:49", message: "hello", userID: 1 },
            { messageCreationTime: "21:04:2019:13:15:01", message: "hi stranger", userID: 0 },
            { messageCreationTime: "21:04:2019:13:15:13", message: "Nice to meet you!", userID: 1 },
            { messageCreationTime: "22:04:2019:13:15:31", message: "did you get that project done?", userID: 0 },
            { messageCreationTime: "23:04:2019:13:15:45", message: "NO!!!!", userID: 1 }
        ] },
    { blogName: "html5", blogIconLocation: "assets/images/programLanguages/HTML5.png", messages: [
            { messageCreationTime: "21:04:2019:13:14:49", message: "hello", userID: 1 },
            { messageCreationTime: "21:04:2019:13:15:01", message: "hi stranger", userID: 0 }
        ] }
];


/***/ }),

/***/ "./src/app/homepage/homepage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var HomepageRoutingModule = /** @class */ (function () {
    function HomepageRoutingModule() {
    }
    HomepageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomepageRoutingModule);
    return HomepageRoutingModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  homepage works!\n</p>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage-routing.module */ "./src/app/homepage/homepage-routing.module.ts");




var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageRoutingModule"]
            ]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/interestspage/interestspage-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/interestspage/interestspage-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InterestspageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestspageRoutingModule", function() { return InterestspageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var InterestspageRoutingModule = /** @class */ (function () {
    function InterestspageRoutingModule() {
    }
    InterestspageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InterestspageRoutingModule);
    return InterestspageRoutingModule;
}());



/***/ }),

/***/ "./src/app/interestspage/interestspage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/interestspage/interestspage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pastProgrammingLanguages{\r\n\theight:20vh;\r\n\twidth: 20vw;\r\n\tmax-height: 200px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n}\r\n#imageGrouping{\r\n\tbackground-color: #CDCDCD;\r\n\tmargin: 0px 10px;\r\n\tborder-radius: 8px;\r\n\tpadding-top: 10px;\r\n\ttext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJlc3RzcGFnZS9pbnRlcmVzdHNwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJlc3RzcGFnZS9pbnRlcmVzdHNwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzdFByb2dyYW1taW5nTGFuZ3VhZ2Vze1xyXG5cdGhlaWdodDoyMHZoO1xyXG5cdHdpZHRoOiAyMHZ3O1xyXG5cdG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuI2ltYWdlR3JvdXBpbmd7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcclxuXHRtYXJnaW46IDBweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interestspage/interestspage.component.html":
/*!************************************************************!*\
  !*** ./src/app/interestspage/interestspage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"imageGrouping\">\n\t<ng-container *ngFor=\"let image of imageList\">\n\t\t<img class=\"pastProgrammingLanguages\" src={{image.fileLocation}} alt={{image.name}} >\n\t</ng-container>\n\t<img class=\"pastProgrammingLanguages\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</section>"

/***/ }),

/***/ "./src/app/interestspage/interestspage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/interestspage/interestspage.component.ts ***!
  \**********************************************************/
/*! exports provided: InterestspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestspageComponent", function() { return InterestspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_imageDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-imageDB */ "./src/app/interestspage/mock-imageDB.ts");



var InterestspageComponent = /** @class */ (function () {
    function InterestspageComponent() {
        this.imageList = _mock_imageDB__WEBPACK_IMPORTED_MODULE_2__["IMAGESOFPROGRAMMINGPAST"];
    }
    InterestspageComponent.prototype.ngOnInit = function () {
    };
    InterestspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interestspage',
            template: __webpack_require__(/*! ./interestspage.component.html */ "./src/app/interestspage/interestspage.component.html"),
            styles: [__webpack_require__(/*! ./interestspage.component.css */ "./src/app/interestspage/interestspage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterestspageComponent);
    return InterestspageComponent;
}());



/***/ }),

/***/ "./src/app/interestspage/interestspage.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/interestspage/interestspage.module.ts ***!
  \*******************************************************/
/*! exports provided: InterestspageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestspageModule", function() { return InterestspageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _interestspage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interestspage-routing.module */ "./src/app/interestspage/interestspage-routing.module.ts");




var InterestspageModule = /** @class */ (function () {
    function InterestspageModule() {
    }
    InterestspageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _interestspage_routing_module__WEBPACK_IMPORTED_MODULE_3__["InterestspageRoutingModule"]
            ]
        })
    ], InterestspageModule);
    return InterestspageModule;
}());



/***/ }),

/***/ "./src/app/interestspage/mock-imageDB.ts":
/*!***********************************************!*\
  !*** ./src/app/interestspage/mock-imageDB.ts ***!
  \***********************************************/
/*! exports provided: IMAGESOFPROGRAMMINGPAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGESOFPROGRAMMINGPAST", function() { return IMAGESOFPROGRAMMINGPAST; });
var fileDir = 'assets/images/programLanguages/';
var IMAGESOFPROGRAMMINGPAST = [
    { name: "HTML5 logo", fileLocation: fileDir + "HTML5.png" },
    { name: "CSS 3 logo", fileLocation: fileDir + "CSS3.svg" },
    { name: "JQuery logo", fileLocation: fileDir + "jquery.png" },
    { name: "PHP logo", fileLocation: fileDir + "php.png" },
    { name: "AJAX logo", fileLocation: fileDir + "AJAX.png" },
    { name: "Django logo", fileLocation: fileDir + "django.svg" },
    { name: "MySQL logo", fileLocation: fileDir + "Mysql-dolphin.png" },
    { name: "PostgreSQL logo", fileLocation: fileDir + "postgres.svg" }
];


/***/ }),

/***/ "./src/app/mock-menu.ts":
/*!******************************!*\
  !*** ./src/app/mock-menu.ts ***!
  \******************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
var MENUITEMS = [
    { name: "home", urlLink: "#/!" },
    { name: "about", urlLink: "#!about" },
    { name: "interests", urlLink: "#!interests" },
    { name: "blog", urlLink: "#!blog" }
];


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pagefooter/pagefooter.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagefooter/pagefooter.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leftDiv{\r\n\ttext-align:center;\r\n\t\r\n}\r\n#rightDiv{\r\n\tfloat:right;\r\n\t\r\n}\r\n#pageFooter{\r\n\tposition: absolute;\r\n\theight: 60px;\r\n\tbottom: 5px;\r\n\twidth: 100vw;\r\n\tvertical-align: text-bottom;\r\n\toverflow:hidden;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZWZvb3Rlci9wYWdlZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7O0FBRWxCO0FBQ0E7Q0FDQyxXQUFXOztBQUVaO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlZm9vdGVyL3BhZ2Vmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsZWZ0RGl2e1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFxyXG59XHJcbiNyaWdodERpdntcclxuXHRmbG9hdDpyaWdodDtcclxuXHRcclxufVxyXG5cclxuI3BhZ2VGb290ZXJ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRib3R0b206IDVweDtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pagefooter/pagefooter.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagefooter/pagefooter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pageFooter\">\n\t<section id=\"leftDiv\">\n\t\t<p>\n\t\t\tDeveloper: <b>Christian Koback</b>\n\t\t\t<br />\n\t\t\tchris_koback@hotmail.com\n\t\t</p>\n\t</section>\n\t<section id=\"rightDiv\">\n\t</section>\n</section>\n"

/***/ }),

/***/ "./src/app/pagefooter/pagefooter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagefooter/pagefooter.component.ts ***!
  \****************************************************/
/*! exports provided: PagefooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagefooterComponent", function() { return PagefooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagefooterComponent = /** @class */ (function () {
    function PagefooterComponent() {
    }
    PagefooterComponent.prototype.ngOnInit = function () {
    };
    PagefooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Footer',
            template: __webpack_require__(/*! ./pagefooter.component.html */ "./src/app/pagefooter/pagefooter.component.html"),
            styles: [__webpack_require__(/*! ./pagefooter.component.css */ "./src/app/pagefooter/pagefooter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagefooterComponent);
    return PagefooterComponent;
}());



/***/ }),

/***/ "./src/app/pagemenu/pagemenu.component.css":
/*!*************************************************!*\
  !*** ./src/app/pagemenu/pagemenu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navMenu{\r\n\theight: 20vh;\r\n\t\r\n}\r\n#navOptions{\r\n\tpadding-top: 20px;\r\n}\r\n@media only screen and (max-width: 600px){\r\n\t#navMenu{\r\n\t\theight: 30px;\r\n\t}\r\n\t#navOptions{\r\n\t\tpadding-top: 20px;\r\n\t}\r\n}\r\n#coolButtons{\r\n\tposition:absolute;\r\n\ttop: 25px;\r\n\tright: 10px;\r\n}\r\n#coolButtons * {\r\n\tmargin-right: 5px;\r\n}\r\n#logo{\r\n\tbackground-repeat: no-repeat;\r\n\tfloat: left;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\theight: inherit;\r\n}\r\n.menuOption{\r\n\tpadding: 0px 5px 0px 5px;\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\n#signUp{\r\n\tborder:none;\r\n\tbackground-color: white;\r\n\tcolor: inherit;\r\n}\r\n#logIn{\r\n\tbackground-color: #0000ee;\r\n\tborder: none;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZW1lbnUvcGFnZW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7O0FBRWI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0M7RUFDQyxZQUFZO0NBQ2I7Q0FDQTtFQUNDLGlCQUFpQjtDQUNsQjtBQUNEO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsU0FBUztDQUNULFdBQVc7QUFDWjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsV0FBVztDQUNYLHNCQUFtQjtJQUFuQixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIsY0FBYztBQUNmO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VtZW51L3BhZ2VtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2TWVudXtcclxuXHRoZWlnaHQ6IDIwdmg7XHJcblx0XHJcbn1cclxuI25hdk9wdGlvbnN7XHJcblx0cGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcblx0I25hdk1lbnV7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0fVxyXG5cdCNuYXZPcHRpb25ze1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcHg7XHJcblx0fVxyXG59XHJcbiNjb29sQnV0dG9uc3tcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR0b3A6IDI1cHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcbn1cclxuI2Nvb2xCdXR0b25zICoge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiNsb2dve1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHRoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuLm1lbnVPcHRpb257XHJcblx0cGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4jc2lnblVwe1xyXG5cdGJvcmRlcjpub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbiNsb2dJbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGVlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pagemenu/pagemenu.component.html":
/*!**************************************************!*\
  !*** ./src/app/pagemenu/pagemenu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"navMenu\">\n\t<img id=\"logo\" src=\"assets/images/menu/logo.png\" alt=\"\" >\n\t<nav id=\"navOptions\">\n\t\t<ng-container *ngFor=\"let menuItem of menuList\">\n\t\t\t<a routerLink=\"/{{menuItem.name}}\" class=\"menuOption\" routerLinkActive=\"active\">{{menuItem.name | titlecase}}</a>\n\t\t</ng-container>\n\t</nav>\n\t<section id=\"coolButtons\">\n\t\t<button id=\"signUp\">Sign Up</button>\n\t\t<button id=\"logIn\">Log In</button>\n\t</section>\n</section>\n"

/***/ }),

/***/ "./src/app/pagemenu/pagemenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/pagemenu/pagemenu.component.ts ***!
  \************************************************/
/*! exports provided: PagemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagemenuComponent", function() { return PagemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-menu */ "./src/app/mock-menu.ts");



var PagemenuComponent = /** @class */ (function () {
    function PagemenuComponent() {
        this.menuList = _mock_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"];
    }
    PagemenuComponent.prototype.ngOnInit = function () {
    };
    PagemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Menu',
            template: __webpack_require__(/*! ./pagemenu.component.html */ "./src/app/pagemenu/pagemenu.component.html"),
            styles: [__webpack_require__(/*! ./pagemenu.component.css */ "./src/app/pagemenu/pagemenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagemenuComponent);
    return PagemenuComponent;
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

module.exports = __webpack_require__(/*! C:\Users\chris\Documents\projects\websites\electron_angular\angularBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map