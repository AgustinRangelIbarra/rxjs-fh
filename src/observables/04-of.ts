import { Observable, Observer, Subject, Subscription, of } from "rxjs";

const observer: Observer<any> = {
	next: (next) => console.log({ next }),
	error: (error) => console.warn({ error }),
	complete: () => console.info("complete"),
};

const obs$: Observable<number> = of(1, 2, 3, 4, ...[6, 3, 45, 6]);

console.log("START obs$");
obs$.subscribe({
	next: (next) => console.log({ next }),
	error: null,
	complete: () => console.log("COMPLETED"),
});
console.log("FINISHED obs$");
