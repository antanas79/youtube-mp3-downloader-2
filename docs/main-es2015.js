(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antanas/Downloads/youtube-mp3-downloader/src/main.ts */"zUnb");


/***/ }),

/***/ "6ZYd":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "isrl");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "STPy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/safe.pipe */ "QU/F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]] }); })();


/***/ }),

/***/ "JlfH":
/*!************************************************!*\
  !*** ./src/app/modules/shared/classes/step.ts ***!
  \************************************************/
/*! exports provided: Step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
class Step {
    constructor(options = {}) {
        var _a;
        this.label = (_a = options.label) !== null && _a !== void 0 ? _a : "";
        this.key = options.key;
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.isEditable = options.isEditable;
        this.questions = options.questions;
        this.text = options.text;
    }
}


/***/ }),

/***/ "Oxbd":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/services/question.service.ts ***!
  \*************************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _classes_question_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/question-dropdown */ "tKVC");
/* harmony import */ var _classes_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/step */ "JlfH");
/* harmony import */ var _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/question-textbox */ "n562");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _loan_form_reactive_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component */ "UjCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class QuestionService {
    constructor(
    // @Inject(googleApiWindow) public window: googleApiWindow,
    route, http) {
        this.route = route;
        this.http = http;
        this.projects = _loan_form_reactive_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_4__["defaultProjects"];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['projects'] && JSON.parse(params['projects'])) {
                this.projects = JSON.parse(params['projects']);
            }
        });
    }
    getLoanStepsWithQuestions() {
        const steps = [
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 0,
                isEditable: true,
                label: "Income",
                questions: [
                    new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                        key: "income",
                        label: "Income",
                        placeholder: "Monthy Income After Taxes (EUR)",
                        required: true,
                        type: "number",
                        value: null
                    })
                ]
            }),
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 1,
                isEditable: true,
                label: "Contact Method",
                questions: [
                    new _classes_question_dropdown__WEBPACK_IMPORTED_MODULE_0__["DropdownQuestion"]({
                        key: "contactMethod",
                        label: "Contact method",
                        placeholder: "Contact method",
                        required: true,
                        options: [
                            { key: "none", value: 0, label: "Select one" },
                            { key: "phone", value: 1, label: "Phone call" },
                            { key: "email", value: 2, label: "Email" },
                            { key: "sms", value: 3, label: "SMS" }
                        ],
                        value: 0
                    })
                ]
            }),
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 2,
                isEditable: true,
                label: "Contact",
                questions: [
                    new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                        key: "contact",
                        label: "Phone number",
                        placeholder: "Enter phone (+370)",
                        required: true,
                        value: null,
                        type: "number"
                    })
                ]
            }),
            new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
                required: true,
                order: 3,
                isEditable: true,
                label: "Amount",
                questions: [
                    new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                        key: "amount",
                        label: "Loan amount",
                        placeholder: "Loan Amount (EUR)",
                        type: "number",
                        required: true,
                        value: null,
                        order: 3
                    })
                ]
            })
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(steps.sort((a, b) => a.order - b.order));
    }
    getVideoId(q) {
        var _a;
        return this.http.get('https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=' + q + '&key=' + ((_a = this.projects.find(p => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey));
    }
    getVideoTitleById(id) {
        var _a;
        return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + ((_a = this.projects.find(p => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey));
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac });


/***/ }),

/***/ "QU/F":
/*!**************************************************!*\
  !*** ./src/app/modules/shared/pipe/safe.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


/**
 * Sanitize HTML
 */
class SafePipe {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ "STPy":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() {
        //do nothing
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [[1, "content-container"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\n  background: #ebe7ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LDIzMSwyMzYpO1xufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/header/header.component */ "STPy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/core/footer/footer.component */ "isrl");




class AppComponent {
    constructor() {
        this.title = "youtube-mp3-downloader";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "content-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_modules_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _modules_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UjCR":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: googleApiWindow, defaultProjects, LoanFormReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleApiWindow", function() { return googleApiWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjects", function() { return defaultProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormReactiveComponent", function() { return LoanFormReactiveComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/question.service */ "Oxbd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/loader/loader.component */ "iYg1");















function LoanFormReactiveComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.trimStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.trimCharacter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Trim character");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " EDITABLE SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoanFormReactiveComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_tr_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.deleteEditableSearchItem(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r9, " -- ");
} }
function LoanFormReactiveComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.addToSearchArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add to search array");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoanFormReactiveComponent_div_13_div_2_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_13_div_2_tr_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r18.deleteSearchItem(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r17, " -- ");
} }
function LoanFormReactiveComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoanFormReactiveComponent_div_13_div_2_tr_1_Template, 9, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_13_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.searchArray.controls);
} }
function LoanFormReactiveComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " EDITED SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoanFormReactiveComponent_div_13_div_2_Template, 6, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.form.value.searchArray.length > 0);
} }
function LoanFormReactiveComponent_ng_container_14_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_ng_container_14_div_13_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.moveToIncorrectList(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Move To Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_ng_container_14_div_13_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r28.deleteFound(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("passedUrl", ctx_r22.foundVideosArray[i_r25].iframeUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r22.youtubeLinkFirstPart, "", ctx_r22.foundVideosArray[i_r25].videoId, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.foundVideosArray[i_r25].searchedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r22.foundVideosArray[i_r25].title, " ");
} }
function LoanFormReactiveComponent_ng_container_14_div_14_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r31);
} }
function LoanFormReactiveComponent_ng_container_14_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " INCORRECT SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoanFormReactiveComponent_ng_container_14_div_14_tr_2_Template, 4, 1, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r23.form.value.incorrectArray);
} }
function LoanFormReactiveComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " FOUND VIDEOS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Searched item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Found youtube item title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Move/delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LoanFormReactiveComponent_ng_container_14_div_13_Template, 13, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoanFormReactiveComponent_ng_container_14_div_14_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.foundVideosArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.form.value.incorrectArray.length > 0);
} }
class googleApiWindow extends Window {
}
window.gapi = window.gapi || {};
const defaultProjects = [{ name: "youtube-mp3-downloader-392415", apiKey: "AIzaSyBTqkGKqxG1HWRPf7E7c4FSdWjBlIaWVZw" },
    { name: "youtube-downloader-310313", apiKey: "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw" }];
class LoanFormReactiveComponent {
    constructor(window, _formBuilder, questionService, sanitizer, route) {
        this.window = window;
        this._formBuilder = _formBuilder;
        this.questionService = questionService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.youtubeLinkFirstPart = "https://www.youtube.com/watch?v=";
        this.loaded = false;
        this.gapiLoaded = false;
        this.foundVideosArray = [];
        this.iframeUrls = [];
        this.titlesArray = [];
        this.projects = defaultProjects;
    }
    ngOnInit() {
        var _a;
        this.route.queryParams.subscribe(params => {
            if (params['projects'] && JSON.parse(params['projects'])) {
                this.projects = JSON.parse(params['projects']);
            }
        });
        (_a = this.authenticate()) === null || _a === void 0 ? void 0 : _a.then(this.loadClient());
        this.form = this._formBuilder.group({
            search: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            editableSearchArray: this._formBuilder.array([]),
            numberToTrimFromStart: [0],
            whatCharacterToTrim: [""],
            searchArray: this._formBuilder.array([]),
            incorrectArray: this._formBuilder.array([])
        });
    }
    get editableSearchArray() {
        return this.form.get("editableSearchArray");
    }
    get searchArray() {
        return this.form.get("searchArray");
    }
    authenticate() {
        var _a, _b, _c;
        console.log({ apiKey: (_a = this.projects.find(p => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (_c = (_b = this.window.gapi.auth2) === null || _b === void 0 ? void 0 : _b.getAuthInstance()) === null || _c === void 0 ? void 0 : _c.signIn({
            scope: "https://www.googleapis.com/auth/youtube.force-ssl"
        }).then(function () {
            console.log("Sign-in successful");
        }, function (err) {
            console.error("Error signing in", err);
        });
    }
    loadClient() {
        var _a, _b, _c, _d;
        this.window.gapi.client.setApiKey(((_a = this.projects.find(p => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey) || "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw");
        console.log({ apiKey: (_b = this.projects.find(p => p.name === localStorage.getItem("project"))) === null || _b === void 0 ? void 0 : _b.apiKey });
        //a.popliauskis
        return (_d = (_c = this.window.gapi.client) === null || _c === void 0 ? void 0 : _c.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")) === null || _d === void 0 ? void 0 : _d.then(function () {
            console.log("GAPI client loaded for API");
        }, function (err) {
            console.error("Error loading GAPI client for API", err);
        });
    }
    search() {
        for (let i = 0; i < this.form.value.searchArray.length; i++) {
            this.questionService
                .getVideoId(this.form.value.searchArray[i].searchValue)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
                .subscribe((resp) => {
                if (resp) {
                    this.questionService
                        .getVideoTitleById(resp.items[0].id.videoId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
                        .subscribe((res) => {
                        console.log({ window: this.window.location.href });
                        console.log({ windowIncludes: this.window.location.href.includes("localhost") });
                        let url = this.youtubeLinkFirstPart +
                            resp.items[0].id.videoId +
                            "&f=mp3&color=64c896&youtubeVideoId=" + resp.items[0].id.videoId;
                        console.log({ url });
                        let sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                        this.foundVideosArray.push({
                            title: res.items[0].snippet.title,
                            videoId: resp.items[0].id.videoId,
                            iframeUrl: sanitizedUrl,
                            searchedValue: this.form.value.searchArray[i].searchValue
                        });
                        setTimeout(function () {
                            var _a, _b, _c;
                            if (((_c = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.searchArray) === null || _c === void 0 ? void 0 : _c.length) -
                                1 ==
                                i) {
                                console.log(this.foundVideosArray);
                                let searchlist = this.form.get("searchArray");
                                searchlist.clear();
                                this.loaded = true;
                            }
                        }, 5000);
                    });
                }
            });
        }
    }
    trimStart() {
        let list = this.form.get("editableSearchArray");
        let numberToTrimFromStart = this.form.value.numberToTrimFromStart;
        for (let i = 0; i < list.controls.length; i++) {
            list.at(i)
                .get("searchValue")
                .patchValue(list
                .at(i)
                .get("searchValue")
                .value.substring(numberToTrimFromStart));
        }
    }
    trimCharacter() {
        let list = this.form.get("editableSearchArray");
        let whatCharacterToTrim = this.form.value.whatCharacterToTrim;
        for (let i = 0; i < list.controls.length; i++) {
            list.at(i)
                .get("searchValue")
                .patchValue(list
                .at(i)
                .get("searchValue")
                .value.replace(whatCharacterToTrim, ""));
        }
    }
    addToSearchArray() {
        let editableList = this.form.get("editableSearchArray");
        let searchlist = this.form.get("searchArray");
        for (let i = 0; i < editableList.controls.length; i++) {
            searchlist.push(this._formBuilder.group({
                searchValue: [editableList.at(i).get("searchValue").value]
            }));
        }
        editableList.clear();
        this.form.get("search").patchValue(null);
    }
    submit() {
        let enteredSearchArray = this.form.getRawValue().search.split("\n");
        let editableSearchArray = (this.form.controls.editableSearchArray);
        enteredSearchArray.forEach((search) => {
            editableSearchArray.push(this._formBuilder.group({
                searchValue: [search]
            }));
        });
    }
    deleteEditableSearchItem(i) {
        this.form.get("editableSearchArray").removeAt(i);
    }
    deleteSearchItem(i) {
        this.form.get("searchArray").removeAt(i);
    }
    moveToIncorrectList(i) {
        let incorrectArray = this.form.get("incorrectArray");
        incorrectArray.push(this._formBuilder.group({
            searchValue: [this.form.value.searchArray[i].searchValue]
        }));
        this.form.get("searchArray").removeAt(i);
        this.foundVideosArray.splice(i, 1);
        // this.iframeUrls.splice(i, 1);
        // this.titlesArray.splice(i, 1);
        console.log(this.form.getRawValue());
    }
    deleteFound(i) {
        this.foundVideosArray.splice(i, 1);
        // this.iframeUrls.splice(i, 1);
        // this.titlesArray.splice(i, 1);
    }
    deleteIncorrect(i) {
        this.form.get("incorrectArray").removeAt(i);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnChanges() {
        console.log("changes");
    }
}
LoanFormReactiveComponent.ɵfac = function LoanFormReactiveComponent_Factory(t) { return new (t || LoanFormReactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](googleApiWindow), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
LoanFormReactiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoanFormReactiveComponent, selectors: [["app-loan-form-reactive"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            },
            _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 6, consts: [[1, "col-12", "p-0", "d-flex", "flex-wrap", 3, "formGroup"], [1, "col-6", "p-0"], ["matInput", "", "formControlName", "search"], ["mat-button", "", "type", "submit", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "col-6 p-0", 4, "ngIf"], ["matInput", "", "formControlName", "numberToTrimFromStart", "type", "number", "placeholder", "How many chars to trim from start"], ["mat-button", "", 3, "click"], ["matInput", "", "formControlName", "whatCharacterToTrim", "type", "text", "placeholder", "What character to trim"], ["formArrayName", "editableSearchArray"], [3, "formGroupName"], ["matInput", "", "formControlName", "searchValue", "type", "text"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"], ["formArrayName", "searchArray"], [1, "d-flex", "col-12", "p-0"], [1, "border-top", "border-bottom", "mb-2", "d-flex", "align-items-center", "col-12", "p-0"], [1, "col-3"], ["class", "d-flex col-12 p-0", 4, "ngFor", "ngForOf"], ["class", "mt-3 pt-3", 4, "ngIf"], [3, "passedUrl"], ["target", "_blank", 1, "col-3", 3, "href"], [1, "col-3", "d-flex"], ["mat-raised-button", "", "color", "accent", 1, "mr-1", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mt-3", "pt-3"], ["formArrayName", "incorrectArray"], ["formControlName", "searchValue"]], template: function LoanFormReactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_Template_button_click_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoanFormReactiveComponent_div_9_Template, 15, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoanFormReactiveComponent_tr_10_Template, 9, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, LoanFormReactiveComponent_button_12_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LoanFormReactiveComponent_div_13_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoanFormReactiveComponent_ng_container_14_Template, 15, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editableSearchArray.controls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.editableSearchArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.editableSearchArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.searchArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.foundVideosArray.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWZvcm0tcmVhY3RpdmUuY29tcG9uZW50LnNjc3MifQ== */"] });
LoanFormReactiveComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: LoanFormReactiveComponent, factory: LoanFormReactiveComponent.ɵfac, providedIn: "root" });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/core.module */ "6ZYd");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_loan_form_reactive_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component */ "UjCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [{ provide: _modules_loan_form_reactive_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_6__["googleApiWindow"], useValue: window }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _modules_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _modules_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "dLIH":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/classes/question-base.ts ***!
  \*********************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
class QuestionBase {
    constructor(options = {}) {
        this.value = options.value;
        this.key = options.key || "";
        this.placeholder = options.placeholder || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        this.type = options.type || "";
        this.options = options.options || [];
    }
}


/***/ }),

/***/ "iYg1":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/components/loader/loader.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function LoaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Downloaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.youtubeVideoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LoaderComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.downloadUrl = "";
        //do nothing
    }
    ngOnInit() {
        //@ts-ignore
        console.log({ url: this.passedUrl.changingThisBreaksApplicationSecurity });
        //@ts-ignore
        this.link_now = new URL(this.passedUrl.changingThisBreaksApplicationSecurity);
        this.youtubeVideoId = this.link_now.searchParams.get("youtubeVideoId");
        this.format = this.link_now.searchParams.get("f");
        this.buttonTitle = this.link_now;
        this.download();
    }
    download() {
        fetch("https://loader.to/ajax/download.php?button=1&start=" + 1 + "&end=" + 1 + "&format=" + this.format + "&url=" + encodeURIComponent(this.link_now), { headers: {
                'Accept': 'application/json',
            }, }).then(response => response.json())
            .then(response => this.showProgressAndSetDownloadUrl(response.id));
    }
    showProgressAndSetDownloadUrl(i) {
        fetch("https://loader.to/ajax/progress.php?id=" + i, { headers: {
                'Accept': 'application/json',
            } }).then(response => response.json())
            .then(response => {
            console.log({ response });
            this.progress = response.progress / 10;
            if (response.download_url != null && response.success == 1) {
                window.parent.postMessage({ youtubeVideoId: this.youtubeVideoId, downloaded: true }, "*");
                this.downloadUrl = response.download_url;
                return;
            }
            //@ts-ignore
            setTimeout(this.showProgressAndSetDownloadUrl(i), 750);
        }).
            catch((e) => //@ts-ignore
         setTimeout(this.showProgressAndSetDownloadUrl(i), 750));
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { passedUrl: "passedUrl" }, decls: 4, vars: 2, consts: [["id", "downloadButton", 2, "color", "red"], [4, "ngIf"], ["id", "download", 2, "margin", "0 auto", "display", "flex", "align-self", "center", 3, "id", "href"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoaderComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Download progress ", ctx.progress || 0, " / 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: black;\n  font-size: 24px;\n}\n\n@media (max-height: 150px) and (max-width: 400px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media (max-width: 200px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1em;\n  border-radius: 2px;\n  border: 0;\n  font-family: \"Open Sans\", sans-serif;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.progress-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1em;\n  color: #fff !important;\n  text-decoration: none !important;\n  line-height: 1;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 1px 1px #ccc;\n  border-radius: 2px;\n  cursor: pointer;\n  background-color: #64c896;\n}\n\n#downloadButton[_ngcontent-%COMP%]:hover   .progress-button[_ngcontent-%COMP%] {\n  filter: brightness(95%);\n}\n\n.progress-button.in-progress[_ngcontent-%COMP%], .progress-button.finished[_ngcontent-%COMP%] {\n  color: transparent !important;\n}\n\n.progress-button.in-progress[_ngcontent-%COMP%]:after, .progress-button.finished[_ngcontent-%COMP%]:after {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  padding-top: inherit;\n  color: #fff !important;\n  left: 0;\n}\n\n.progress-button.in-progress[_ngcontent-%COMP%]:after {\n  content: attr(data-loading);\n}\n\n.progress-button.finished[_ngcontent-%COMP%]:after {\n  content: attr(data-finished);\n}\n\n.progress-button[_ngcontent-%COMP%]   .tz-bar[_ngcontent-%COMP%] {\n  background-color: #4e9672;\n  height: 3px;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  position: absolute;\n  z-index: 1;\n  border-radius: 0 0 2px 2px;\n  transition: width 0.5s, height 0.5s;\n}\n\n.progress-button[_ngcontent-%COMP%]   .tz-bar.background-horizontal[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n}\n\n.progress-button[_ngcontent-%COMP%]   .tz-bar.background-vertical[_ngcontent-%COMP%] {\n  height: 0;\n  top: 0;\n  width: 100%;\n  border-radius: 2px;\n}\n\n.buttonTitle[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n  margin-top: 4px;\n}\n\n#container[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n}\n\n#container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n}\n\n#percentageText[_ngcontent-%COMP%] {\n  width: 95%;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  z-index: 3;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  background-color: #f1f1f1;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: #ccc;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #4caf50;\n  width: 0%;\n}\n\n.grecaptcha-badge[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFQyxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFEOztBQUdBO0VBQ0Msb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFEOztBQUdBO0VBQ0M7SUFDQyxlQUFBO0VBQUE7QUFDRjs7QUFHQTtFQUNDO0lBQ0MsZUFBQTtFQURBOztFQUlEO0lBQ0MsYUFBQTtFQURBO0FBQ0Y7O0FBSUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUZEOztBQUtBO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFGRDs7QUFLQTtFQUNDLHVCQUFBO0FBRkQ7O0FBS0E7O0VBRUMsNkJBQUE7QUFGRDs7QUFLQTs7RUFFQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBRkQ7O0FBS0E7RUFDQywyQkFBQTtBQUZEOztBQUtBO0VBQ0MsNEJBQUE7QUFGRDs7QUFLQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBR0EsbUNBQUE7QUFGRDs7QUFLQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQUZEOztBQUtBO0VBQ0MsU0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGRDs7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQUZEOztBQUtBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBRkQ7O0FBS0E7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFGRDs7QUFLQTtFQUNDLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBRkQ7O0FBS0E7RUFDQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFGRDs7QUFLQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFGRDs7QUFLQTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGRDs7QUFLQTtFQUNDLGtCQUFBO0FBRkQiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5odG1sLFxuYm9keSB7XG5cdGhlaWdodDogMTAwJTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OjE1MHB4KSBhbmQgKG1heC13aWR0aDo0MDBweCkge1xuXHRib2R5IHtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MjAwcHgpIHtcblx0Ym9keSB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cblx0c3ZnIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbmJ1dHRvbiB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2dyZXNzLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udC1zaXplOiAxZW07XG5cdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuXHRsaW5lLWhlaWdodDogMTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCAjY2NjO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY0Yzg5Njtcbn1cblxuI2Rvd25sb2FkQnV0dG9uOmhvdmVyIC5wcm9ncmVzcy1idXR0b24ge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoOTUlKTtcbn1cblxuLnByb2dyZXNzLWJ1dHRvbi5pbi1wcm9ncmVzcyxcbi5wcm9ncmVzcy1idXR0b24uZmluaXNoZWQge1xuXHRjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzLWJ1dHRvbi5pbi1wcm9ncmVzczphZnRlcixcbi5wcm9ncmVzcy1idXR0b24uZmluaXNoZWQ6YWZ0ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRwYWRkaW5nLXRvcDogaW5oZXJpdDtcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0bGVmdDogMDtcbn1cblxuLnByb2dyZXNzLWJ1dHRvbi5pbi1wcm9ncmVzczphZnRlciB7XG5cdGNvbnRlbnQ6IGF0dHIoZGF0YS1sb2FkaW5nKTtcbn1cblxuLnByb2dyZXNzLWJ1dHRvbi5maW5pc2hlZDphZnRlciB7XG5cdGNvbnRlbnQ6IGF0dHIoZGF0YS1maW5pc2hlZCk7XG59XG5cbi5wcm9ncmVzcy1idXR0b24gLnR6LWJhciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZTk2NzI7XG5cdGhlaWdodDogM3B4O1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG5cdGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzO1xuXHQtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzO1xuXHR0cmFuc2l0aW9uOiB3aWR0aCAwLjVzLCBoZWlnaHQgMC41cztcbn1cblxuLnByb2dyZXNzLWJ1dHRvbiAudHotYmFyLmJhY2tncm91bmQtaG9yaXpvbnRhbCB7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uIC50ei1iYXIuYmFja2dyb3VuZC12ZXJ0aWNhbCB7XG5cdGhlaWdodDogMDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnV0dG9uVGl0bGUge1xuXHRmb250LXNpemU6IDAuNWVtO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG5cbiNjb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lcjpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbiNwZXJjZW50YWdlVGV4dCB7XG5cdHdpZHRoOiA5NSU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR6LWluZGV4OiAzO1xufVxuXG4uaGVhZGVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDE7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNHB4O1xuXHRiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcblx0aGVpZ2h0OiA0cHg7XG5cdGJhY2tncm91bmQ6ICM0Y2FmNTA7XG5cdHdpZHRoOiAwJTtcbn1cblxuLmdyZWNhcHRjaGEtYmFkZ2Uge1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */"] });


/***/ }),

/***/ "isrl":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        //do nothing
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "content-container"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background: #ebe7ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0FBQ0QiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcblx0YmFja2dyb3VuZDogcmdiKDIzNSwgMjMxLCAyMzYpO1xufVxuIl19 */"] });


/***/ }),

/***/ "n562":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/classes/question-textbox.ts ***!
  \************************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "dLIH");

class TextboxQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = "textbox";
    }
}


/***/ }),

/***/ "tKVC":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/classes/question-dropdown.ts ***!
  \*************************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "dLIH");

class DropdownQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = "dropdown";
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: "",
        loadChildren: () => __webpack_require__.e(/*! import() | modules-loan-form-reactive-loan-form-reactive-module */ "modules-loan-form-reactive-loan-form-reactive-module").then(__webpack_require__.bind(null, /*! ./modules/loan-form-reactive/loan-form-reactive.module */ "SJsF")).then((m) => m.LoanFormReactiveModule),
        data: {
            title: "Form page"
        }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: "legacy" })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map