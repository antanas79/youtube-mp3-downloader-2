import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoanFormReactiveComponent } from "./pages/loan-form-reactive/loan-form-reactive.component";

const routes: Routes = [
	{
		path: "",
		component: LoanFormReactiveComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LoanFormReactiveRoutingModule {}
