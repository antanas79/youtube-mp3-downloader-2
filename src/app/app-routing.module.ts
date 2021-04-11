import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import(
				"./modules/loan-form-reactive/loan-form-reactive.module"
			).then((m) => m.LoanFormReactiveModule),
		data: {
			title: "Form page"
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
