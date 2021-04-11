import { TestBed } from "@angular/core/testing";

import { QuestionService } from "./question.service";

describe("QuestionService", () => {
	let service: QuestionService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [QuestionService]
		});
		service = TestBed.inject(QuestionService);
	});

	it("should be created", () => {
		void expect(service).toBeTruthy();
	});
});
