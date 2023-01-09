import { Observable, Observer, fromEvent } from "rxjs";

// * DOM Events

const src1$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, "click");
const src2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, "keyup");

const observer: Observer<any> = {
	next: (nextVal) => console.log({ next: nextVal }),
	error: (error) => console.log({ error }),
	complete: () => console.log("COMPLETED"),
};

src1$.subscribe(({ x, y }) => console.log({ x, y }));
src2$.subscribe((event) => console.log(event.key));
