import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";
import { SafePipe } from './pipe/safe.pipe';


@NgModule({
	declarations: [SafePipe],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
		MatInputModule,
		MatButtonModule,
		MatListModule,
		MatSelectModule,
		MatFormFieldModule,
		HttpClientModule
	],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
		MatInputModule,
		MatButtonModule,
		MatListModule,
		MatSelectModule,
		MatFormFieldModule,
		SafePipe
	]
})
export class SharedModule {}
