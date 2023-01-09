import { Observer, map, of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { takeLast } from "rxjs/internal/operators/takeLast";

const nums: number[] = [1, 2, 3, 4, 5];
const numbers$: Observable<number> = of(...nums);

const observer: Observer<string> = {
	next: (value) => console.log({ value }),
	error: (error) => console.warn({ error }),
	complete: () => console.info("complete"),
};

const obs$: Observable<string> = new Observable<string>((subscriber) => {
	subscriber.next("hola");
	subscriber.next("mundo1");
	subscriber.next("mundo1");
	subscriber.next("mundo3");
	subscriber.complete();
	subscriber.error("ERROR");
	subscriber.next("mundo4");
});

// !
// obs$.subscribe(observer);
// obs$.pipe(takeLast(2)).subscribe(observer);

// !
obs$.pipe(distinctUntilChanged()).subscribe({
	// * observer object
	next: (nextResponse: string) => {
		console.log({ nextResponse });
	},
	error: (error) => console.warn("error", error),
	complete: () => console.info("complete"),
});

// !
numbers$
	.pipe(
		map((x) => x + 10),
		takeLast(1)
	)
	.subscribe({
		next: (itemInStream) => {
			console.log("item", itemInStream);
		},
		error: () => console.warn("error"),
		complete: () => console.info("complete subscription"),
	});
