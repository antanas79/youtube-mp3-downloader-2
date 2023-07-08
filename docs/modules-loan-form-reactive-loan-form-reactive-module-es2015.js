(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-loan-form-reactive-loan-form-reactive-module"],{

/***/ "26uG":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/loan-form-reactive-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LoanFormReactiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormReactiveRoutingModule", function() { return LoanFormReactiveRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/loan-form-reactive/loan-form-reactive.component */ "UjCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: "",
        component: _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_1__["LoanFormReactiveComponent"]
    }
];
class LoanFormReactiveRoutingModule {
}
LoanFormReactiveRoutingModule.ɵfac = function LoanFormReactiveRoutingModule_Factory(t) { return new (t || LoanFormReactiveRoutingModule)(); };
LoanFormReactiveRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoanFormReactiveRoutingModule });
LoanFormReactiveRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoanFormReactiveRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "SJsF":
/*!*************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/loan-form-reactive.module.ts ***!
  \*************************************************************************/
/*! exports provided: LoanFormReactiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormReactiveModule", function() { return LoanFormReactiveModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loan_form_reactive_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-form-reactive-routing.module */ "26uG");
/* harmony import */ var _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/loan-form-reactive/loan-form-reactive.component */ "UjCR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/summary/summary.component */ "yKco");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intro/intro.component */ "jP/x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class LoanFormReactiveModule {
}
LoanFormReactiveModule.ɵfac = function LoanFormReactiveModule_Factory(t) { return new (t || LoanFormReactiveModule)(); };
LoanFormReactiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LoanFormReactiveModule });
LoanFormReactiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [{ provide: _pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_2__["googleApiWindow"], useValue: window }], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _loan_form_reactive_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoanFormReactiveRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LoanFormReactiveModule, { declarations: [_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_2__["LoanFormReactiveComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__["SummaryComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _loan_form_reactive_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoanFormReactiveRoutingModule"]] }); })();


/***/ }),

/***/ "jP/x":
/*!********************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/components/intro/intro.component.ts ***!
  \********************************************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IntroComponent {
    constructor() {
        //do nothing
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], inputs: { text: "text" }, decls: 3, vars: 1, template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "yKco":
/*!************************************************************************************!*\
  !*** ./src/app/modules/loan-form-reactive/components/summary/summary.component.ts ***!
  \************************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SummaryComponent_div_3_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data[2].contact, " ");
} }
function SummaryComponent_div_3_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+370) ", ctx_r2.data[2].contact == null ? null : ctx_r2.data[2].contact.slice(0, 3), " ", ctx_r2.data[2].contact == null ? null : ctx_r2.data[2].contact.slice(3, 8), " ");
} }
function SummaryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Monthly Income:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loan Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SummaryComponent_div_3_span_16_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SummaryComponent_div_3_span_17_Template, 2, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.data[0].income, " (EUR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isEmail ? "Email" : "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.data[3].amount, " (EUR)");
} }
class SummaryComponent {
    constructor() {
        //do nothing
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], inputs: { text: "text", data: "data", isEmail: "isEmail" }, decls: 4, vars: 2, consts: [["class", "d-flex col-12 col-md-6 p-0", 4, "ngIf"], [1, "d-flex", "col-12", "col-md-6", "p-0"], [1, "d-flex", "flex-column", "first", "pl-0", "pr-3"], [1, "py-2"], [1, "d-flex", "flex-column", "second", "p-0"], [1, "py-2", "text-overflow-hidden"], [4, "ngIf"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryComponent_div_3_Template, 20, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".first[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.second[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n  max-width: calc(100% - 120px);\n}\n\n.text-overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FBQ0Q7O0FBQ0E7RUFDQyx5QkFBQTtFQUNBLDZCQUFBO0FBRUQ7O0FBQ0E7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFRCIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0IHtcblx0d2lkdGg6IDEyMHB4O1xufVxuLnNlY29uZCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG5cdG1heC13aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xufVxuXG4udGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=modules-loan-form-reactive-loan-form-reactive-module-es2015.js.map