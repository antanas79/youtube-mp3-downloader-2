import { Component, ElementRef, Input, OnInit } from "@angular/core";

interface IResult {
	income: number;
	contactMethod: number;
	contact: number | string;
	amount: number;
}
//@ts-ignore
declare var $:JQueryStatic;

@Component({
	selector: "app-loader",
	templateUrl: "./loader.component.html",
	styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
	@Input() passedUrl: string;
	buttonTitle: string;
	link_now;
	format: string;
	youtubeVideoId: string;
	progress: number;
	downloadUrl= "";
	constructor(private elementRef:ElementRef) {
		//do nothing
	}

	
	ngOnInit(): void {	
		//@ts-ignore
		console.log({url: this.passedUrl.changingThisBreaksApplicationSecurity})
		//@ts-ignore
		this.link_now = new URL(this.passedUrl.changingThisBreaksApplicationSecurity);
		this.youtubeVideoId = this.link_now.searchParams.get("youtubeVideoId");
		this.format = this.link_now.searchParams.get("f");
		this.buttonTitle = this.link_now;
		this.download()
	}
	
	 download() {
		fetch("https://loader.to/ajax/download.php?button=1&start=" + 1 + "&end=" + 1 + "&format=" + this.format + "&url=" + encodeURIComponent(this.link_now), { headers: {
			'Accept': 'application/json',
		}, mode: "no-cors"}).then(response => response.json())
		.then(response => this.showProgressAndSetDownloadUrl(response.id))
	}

	 showProgressAndSetDownloadUrl(i) {
		fetch("https://loader.to/ajax/progress.php?id=" + i, { headers: {
			'Accept': 'application/json',
		}, mode: "no-cors"}).then(response => response.json())
		.then(response => {
			console.log({response})
			this.progress = response.progress / 10;
			if (response.download_url != null && response.success == 1) {
				window.parent.postMessage({ youtubeVideoId: this.youtubeVideoId, downloaded: true}, "*")
				this.downloadUrl = response.download_url;			
				return;
			}
			//@ts-ignore
			setTimeout(this.showProgressAndSetDownloadUrl(i), 750);
		}).
		catch((e) =>  //@ts-ignore
		setTimeout(this.showProgressAndSetDownloadUrl(i), 750))
		
	}
}
