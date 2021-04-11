import { QuestionBase } from "./question-base";

export class Step {
	key: number;
	required: boolean;
	order: number;
	isEditable: boolean;
	questions: QuestionBase<string | number>[];
	label: string;
	text: string;

	constructor(
		options: {
			label?: string;
			key?: number;
			required?: boolean;
			order?: number;
			isEditable?: boolean;
			questions?: QuestionBase<string>[];
			text?: string;
		} = {}
	) {
		this.label = options.label ?? "";
		this.key = options.key;
		this.required = !!options.required;
		this.order = options.order === undefined ? 1 : options.order;
		this.isEditable = options.isEditable;
		this.questions = options.questions;
		this.text = options.text;
	}
}
