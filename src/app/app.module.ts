import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./modules/core/core.module";
import { SharedModule } from "./modules/shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { googleApiWindow } from "./modules/loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		BrowserAnimationsModule
	],
	providers: [{ provide: googleApiWindow, useValue: window }],
	bootstrap: [AppComponent]
})
export class AppModule {}
