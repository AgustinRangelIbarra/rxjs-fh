import { Observable, Observer, Subject, Subscription } from "rxjs";

const observer: Observer<any> = {
	next: (next) => console.log({ next }),
	error: (error) => console.warn({ error }),
	complete: () => console.info("complete"),
};
const interval$ = new Observable<number>((subs) => {
	console.log("start");
	const intervalId = setInterval(() => subs.next(parseFloat(Math.random().toFixed(2))), 1000);
	return () => {
		console.log("interval exec destroyed");
		console.log("finished interval$");

		clearInterval(intervalId);
	};
});

/*
 * Casteo multiple // Muchas subs sujetas a ese obs
 * Tambien es Observer // Mandar un subject
 * Metodos {next: error: complete}
 */

const subject$: Subject<number> = new Subject<number>();
const subscription: Subscription = interval$.subscribe(subject$);

// const subs1: Subscription = interval$.subscribe({ next: (random) => console.log("subs1", random) });
// const subs2: Subscription = interval$.subscribe({ next: (random) => console.log("subs2", random) });

// ? multicasting
const subs1: Subscription = subject$.subscribe({
	next: (random) => console.log("casted to sub1", { random }),
});
const subs2: Subscription = subject$.subscribe({
	next: (random) => console.log("casted to sub2", { random }),
});

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
	subscription.unsubscribe();
}, 3500);
