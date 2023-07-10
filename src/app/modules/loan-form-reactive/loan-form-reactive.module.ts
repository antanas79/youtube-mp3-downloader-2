import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoanFormReactiveRoutingModule } from "./loan-form-reactive-routing.module";
import { googleApiWindow, LoanFormReactiveComponent } from "./pages/loan-form-reactive/loan-form-reactive.component";
import { SharedModule } from "../shared/shared.module";
import { SummaryComponent } from "./components/summary/summary.component";
import { IntroComponent } from "./components/intro/intro.component";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
	declarations: [LoanFormReactiveComponent, SummaryComponent, IntroComponent, LoaderComponent],
	imports: [CommonModule, SharedModule, LoanFormReactiveRoutingModule],
	providers: [{ provide: googleApiWindow, useValue: window }]
})
export class LoanFormReactiveModule {}
