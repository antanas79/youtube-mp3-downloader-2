/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Inject, Injectable, OnInit } from "@angular/core";
import { DropdownQuestion } from "../classes/question-dropdown";
import { Step } from "../classes/step";
import { TextboxQuestion } from "../classes/question-textbox";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { defaultProjects } from "../../loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component";
import { ActivatedRoute } from "@angular/router";


@Injectable()	
export class QuestionService implements OnInit {

	constructor(
		// @Inject(googleApiWindow) public window: googleApiWindow,
		private route: ActivatedRoute,
	private http: HttpClient) {}
	projects: Array<{name: string; apiKey: string}> = defaultProjects;
	
	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			if (params['projects'] && JSON.parse(params['projects'])) {
				this.projects=  JSON.parse(params['projects']);
			}
		});
	}
	
	getLoanStepsWithQuestions(): Observable<Step[]> {
		const steps: Step[] = [
			new Step({
				required: true,
				order: 0,
				isEditable: true,
				label: "Income",
				questions: [
					new TextboxQuestion({
						key: "income",
						label: "Income",
						placeholder: "Monthy Income After Taxes (EUR)",
						required: true,
						type: "number",
						value: null
					})
				]
			}),
			new Step({
				required: true,
				order: 1,
				isEditable: true,
				label: "Contact Method",
				questions: [
					new DropdownQuestion({
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
			new Step({
				required: true,
				order: 2,
				isEditable: true,
				label: "Contact",
				questions: [
					new TextboxQuestion({
						key: "contact",
						label: "Phone number",
						placeholder: "Enter phone (+370)",
						required: true,
						value: null,
						type: "number"
					})
				]
			}),
			new Step({
				required: true,
				order: 3,
				isEditable: true,
				label: "Amount",
				questions: [
					new TextboxQuestion({
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
		return of(steps.sort((a, b) => a.order - b.order));
	}

	getVideoId(q: string) {
		return this.http.get('https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=' + q + '&key=' + this.projects.find(p => p.name === localStorage.getItem("project"))?.apiKey);
	}

	getVideoTitleById(id: string) {
		return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + this.projects.find(p => p.name === localStorage.getItem("project"))?.apiKey);
	}
}
