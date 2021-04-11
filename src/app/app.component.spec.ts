/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
	beforeEach(
		waitForAsync(() => {
			void TestBed.configureTestingModule({
				imports: [RouterTestingModule],
				declarations: [AppComponent]
			}).compileComponents();
		})
	);

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		void expect(app).toBeTruthy();
	});

	it(`should have as title 'youtube-mp3-downloader'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		void expect(app.title).toEqual("youtube-mp3-downloader");
	});
});
