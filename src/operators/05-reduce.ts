import { Observable, Observer, Subscription, range, of, from, fromEvent, interval } from "rxjs";
import { filter, map, tap, reduce, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (acc: number, current: number) => acc + current;

const total = numbers.reduce(totalReducer, 0);
console.log({ total });

interval(500)
	.pipe(
		tap((val) => console.log(val)),
		take(10),
		reduce(totalReducer, 0)
	)
	.subscribe({
		next: (obj) => console.log({ obj }),
		error: () => console.log("ERROR"),
		complete: () => console.log("Complete"),
	});
