/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoanFormReactiveComponent } from "./loan-form-reactive.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("LoanFormReactiveComponent", () => {
	let component: LoanFormReactiveComponent;
	let fixture: ComponentFixture<LoanFormReactiveComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				BrowserAnimationsModule,
				FormsModule,
				MatFormFieldModule,
				MatInputModule,
				MatSelectModule
			],
			declarations: [LoanFormReactiveComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoanFormReactiveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it(`income should not allow text values`, () => {
	// 	const fixture = TestBed.createComponent(LoanFormReactiveComponent);
	// 	fixture.detectChanges();
	// 	void fixture.whenStable().then(() => {
	// 		const input = fixture.debugElement.query(By.css("#income"));
	// 		const el = input.nativeElement;
	// 		el.value = "text";
	// 		el.dispatchEvent(new Event("input"));
	// 		void expect(el.value).toBe("");
	// 	});
	// });

	// it(`income should have ng-invalid class when less than 0 entered`, () => {
	// 	const fixture = TestBed.createComponent(LoanFormReactiveComponent);
	// 	fixture.detectChanges();
	// 	void fixture.whenStable().then(() => {
	// 		const input = fixture.debugElement.query(By.css("#income"));
	// 		const el = input.nativeElement;
	// 		el.click();
	// 		el.value = -22;
	// 		el.dispatchEvent(new Event("input"));
	// 		void expect(input.attributes.class).toContain("ng-invalid");
	// 	});
	// });

	// it(`by default contact field should have number type since it is set as phone input`, () => {
	// 	const fixture = TestBed.createComponent(LoanFormReactiveComponent);
	// 	fixture.detectChanges();
	// 	void fixture.whenStable().then(() => {
	// 		const incomeField = fixture.debugElement.query(By.css("#contact"));
	// 		const typeAttribute = incomeField.attributes.type;
	// 		void expect(typeAttribute).toBe("number");
	// 	});
	// });

	// it(`amount should not allow text values`, () => {
	// 	const fixture = TestBed.createComponent(LoanFormReactiveComponent);
	// 	fixture.detectChanges();
	// 	void fixture.whenStable().then(() => {
	// 		const incomeField = fixture.debugElement.query(By.css("#amount"));
	// 		incomeField.nativeElement.value = "text";
	// 		incomeField.nativeElement.click();
	// 		incomeField.nativeElement.dispatchEvent(new Event("input"));
	// 		fixture.detectChanges();
	// 		void expect(incomeField.nativeElement.value).toBe("");
	// 	});
	// });

	// it(`amount should have ng-invalid class if null entered`, () => {
	// 	const fixture = TestBed.createComponent(LoanFormReactiveComponent);
	// 	fixture.detectChanges();
	// 	void fixture.whenStable().then(() => {
	// 		const incomeField = fixture.debugElement.query(By.css("#amount"));
	// 		incomeField.nativeElement.value = null;
	// 		incomeField.nativeElement.click();
	// 		incomeField.nativeElement.dispatchEvent(new Event("input"));
	// 		fixture.detectChanges();
	// 		const classAtribute = incomeField.attributes.class;
	// 		void expect(classAtribute).toContain("ng-invalid");
	// 	});
	// });

	// it(`amount should have ng-invalid class if 0 entered`, () => {
	// 	const fixture = TestBed.createComponent(LoanFormReactiveComponent);
	// 	fixture.detectChanges();
	// 	void fixture.whenStable().then(() => {
	// 		const incomeField = fixture.debugElement.query(By.css("#amount"));
	// 		incomeField.nativeElement.value = 0;
	// 		incomeField.nativeElement.click();
	// 		incomeField.nativeElement.dispatchEvent(new Event("input"));
	// 		fixture.detectChanges();
	// 		const classAtribute = incomeField.attributes.class;
	// 		void expect(classAtribute).toContain("ng-invalid");
	// 	});
	// });

	// it("should create", () => {
	// 	void expect(component).toBeTruthy();
	// });
});
