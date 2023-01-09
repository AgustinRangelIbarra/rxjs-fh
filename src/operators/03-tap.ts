import { Observable, Observer, Subscription, range, of, from, fromEvent } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

const numbers$ = range(1, 5);

numbers$
	.pipe(
		tap({
			next: (val) => {
				console.log("Before", { val });
			},
			error: () => {},
			complete: () => {},
		}),
		map((val) => val * 10),
		tap({
			next: (value) => console.log({ value }),
			error: () => {},
			complete: () => console.log("Completed"),
		})
	)
	.subscribe((value) => console.log("On sub", { value }));
