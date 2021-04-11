import { Component, Input } from "@angular/core";

interface IResult {
	income: number;
	contactMethod: number;
	contact: number | string;
	amount: number;
}

@Component({
	selector: "app-summary",
	templateUrl: "./summary.component.html",
	styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent {
	@Input() text: string;
	@Input() data: IResult;
	@Input() isEmail: boolean;
	constructor() {
		//do nothing
	}
}
