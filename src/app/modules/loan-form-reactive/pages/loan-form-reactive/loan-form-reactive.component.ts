/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
	Component,
	OnInit,
	OnDestroy,
	Injectable,
	Inject,
	OnChanges
} from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuestionService } from "../../../shared/services/question.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Step } from "../../../shared/classes/step";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

declare global {
	interface Window {
		gapi: any;
	}
}
export class googleApiWindow extends Window {
	gapi: any;
}
window.gapi = window.gapi || {};

@Injectable({
	providedIn: "root"
})
@Component({
	selector: "app-loan-form-reactive",
	templateUrl: "./loan-form-reactive.component.html",
	styleUrls: ["./loan-form-reactive.component.scss"],
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: { showError: true }
		},
		QuestionService
	]
})
export class LoanFormReactiveComponent implements OnInit, OnDestroy, OnChanges {
	private ngUnsubscribe = new Subject();
	youtubeLinkFirstPart = "https://www.youtube.com/watch?v=";
	loaded = false;
	gapiLoaded = false;
	form: FormGroup;
	foundVideosArray = [];
	iframeUrls = [];
	titlesArray = [];
	projects =  [{name: "youtube-mp3-downloader-310317", apiKey: "AIzaSyCBdENLaNBmlzLO8pOkW6U0fB1ck8ZZfmw"},
	{name: "youtube-downloader-310313", apiKey: "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw"}, {name: "yelp-camp-final-192619", apiKey: "AIzaSyAxR0JLrvXg7JG9vw4ZIsNrRRpj_1s3anQ"},
	{name: "antano-projektas-1527270489554", apiKey: "AIzaSyBysEdNbj0M6ukqvcUz6C9cZETj4BbXWNk"}, {name: "my-project-1516388874589", apiKey: "AIzaSyD72RK3MzzkeKT7qtejBjieqXiWcBOC0N4"}];
	

	constructor(
		@Inject(googleApiWindow) public window: googleApiWindow,
		public _formBuilder: FormBuilder,
		public questionService: QuestionService,
		private sanitizer: DomSanitizer,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			if (params['projects'] && JSON.parse(params['projects'])) {
				this.projects=  JSON.parse(params['projects']);
			}
		});
		this.authenticate()?.then(this.loadClient());
		this.form = this._formBuilder.group({
			search: [null, Validators.required],
			editableSearchArray: this._formBuilder.array([]),
			numberToTrimFromStart: [0],
			whatCharacterToTrim: [""],
			searchArray: this._formBuilder.array([]),
			incorrectArray: this._formBuilder.array([])
		});

	}
	get editableSearchArray() {
		return <FormArray>this.form.get("editableSearchArray");
	}
	get searchArray() {
		return <FormArray>this.form.get("searchArray");
	}

	authenticate() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this.window.gapi.auth2
			?.getAuthInstance()
			?.signIn({
				scope: "https://www.googleapis.com/auth/youtube.force-ssl"
			})
			.then(
				function () {
					console.log("Sign-in successful");
				},
				function (err: unknown) {
					console.error("Error signing in", err);
				}
			);
	}

	loadClient() {
		this.window.gapi.client.setApiKey(
			this.projects.find(p => p.name === localStorage.getItem("project"))?.apiKey || "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw"
		);
		//a.popliauskis
		return this.window.gapi.client
			?.load(
				"https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
			)
			?.then(
				function () {
					console.log("GAPI client loaded for API");
				},
				function (err: any) {
					console.error("Error loading GAPI client for API", err);
				}
			);
	}

	search() {
		for (let i = 0; i < this.form.value.searchArray.length; i++) {
			this.questionService
				.getVideoId(this.form.value.searchArray[i].searchValue)
				.pipe(takeUntil(this.ngUnsubscribe))
				.subscribe((resp: any) => {
					if (resp) {
						this.questionService
							.getVideoTitleById(resp.items[0].id.videoId)
							.pipe(takeUntil(this.ngUnsubscribe))
							.subscribe((res: any) => {
								console.log({window: this.window.location.href})
								console.log({windowIncludes: this.window.location.href.includes("localhost")})
								let url =  (this.window.location.href.includes("localhost") ? "" : "youtube-mp3-downloader/docs/") + "assets/loader.html/?url=" +
									this.youtubeLinkFirstPart +
									resp.items[0].id.videoId +
									"&f=mp3&color=64c896&youtubeVideoId=" +resp.items[0].id.videoId;
								console.log({url})
								let sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
									url
								);
								this.foundVideosArray.push({
									title: res.items[0].snippet.title,
									videoId: resp.items[0].id.videoId,
									iframeUrl: sanitizedUrl,
									searchedValue: this.form.value.searchArray[
										i
									].searchValue
								});
								setTimeout(function () {
									if (
										this.form?.value?.searchArray?.length -
											1 ==
										i
									) {
										console.log(this.foundVideosArray);
										let searchlist = this.form.get(
											"searchArray"
										) as FormArray;
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
		let list = this.form.get("editableSearchArray") as FormArray;
		let numberToTrimFromStart = this.form.value.numberToTrimFromStart;
		for (let i = 0; i < list.controls.length; i++) {
			list.at(i)
				.get("searchValue")
				.patchValue(
					list
						.at(i)
						.get("searchValue")
						.value.substring(numberToTrimFromStart)
				);
		}
	}

	trimCharacter() {
		let list = this.form.get("editableSearchArray") as FormArray;
		let whatCharacterToTrim = this.form.value.whatCharacterToTrim;
		for (let i = 0; i < list.controls.length; i++) {
			list.at(i)
				.get("searchValue")
				.patchValue(
					list
						.at(i)
						.get("searchValue")
						.value.replace(whatCharacterToTrim, "")
				);
		}
	}

	addToSearchArray() {
		let editableList = this.form.get("editableSearchArray") as FormArray;
		let searchlist = this.form.get("searchArray") as FormArray;

		for (let i = 0; i < editableList.controls.length; i++) {
			searchlist.push(
				this._formBuilder.group({
					searchValue: [editableList.at(i).get("searchValue").value]
				})
			);
		}
		editableList.clear();
		this.form.get("search").patchValue(null);
	}

	submit() {
		let enteredSearchArray = this.form.getRawValue().search.split("\n");
		let editableSearchArray = <FormArray>(
			this.form.controls.editableSearchArray
		);
		enteredSearchArray.forEach((search) => {
			editableSearchArray.push(
				this._formBuilder.group({
					searchValue: [search]
				})
			);
		});
	}

	deleteEditableSearchItem(i: number) {
		(this.form.get("editableSearchArray") as FormArray).removeAt(i);
	}

	deleteSearchItem(i: number) {
		(this.form.get("searchArray") as FormArray).removeAt(i);
	}

	moveToIncorrectList(i: number) {
		let incorrectArray = this.form.get("incorrectArray") as FormArray;
		incorrectArray.push(
			this._formBuilder.group({
				searchValue: [this.form.value.searchArray[i].searchValue]
			})
		);
		(this.form.get("searchArray") as FormArray).removeAt(i);
		this.foundVideosArray.splice(i, 1);
		// this.iframeUrls.splice(i, 1);
		// this.titlesArray.splice(i, 1);
		console.log(this.form.getRawValue());
	}

	deleteFound(i: number) {
		this.foundVideosArray.splice(i, 1);
		// this.iframeUrls.splice(i, 1);
		// this.titlesArray.splice(i, 1);
	}

	deleteIncorrect(i: number) {
		(this.form.get("incorrectArray") as FormArray).removeAt(i);
	}

	ngOnDestroy(): void {
		// prevent memory leak when component destroyed
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	ngOnChanges():void {
		console.log("changes")
	}

	//TODO
	// 1.on additional search push to foundVideoArray, not make new foundVideoArray
	// 2.make download all button
	// make delete all buttons
}
