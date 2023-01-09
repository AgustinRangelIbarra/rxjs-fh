import { interval, timer, Observable, Observer, take } from "rxjs";

const observer: Observer<any> = {
	next: (next) => console.log({ next }),
	error: (error) => console.log({ error }),
	complete: () => console.log("Complete"),
};

const interval$: Observable<number> = interval(500);
const take4$: Observable<number> = interval$.pipe(take(10));
// const timer$: Observable<number> = timer(2000);
// const timer$: Observable<number> = timer(10000, 1000);

const todayIn5: Date = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5); // now
const timer$: Observable<number> = timer(todayIn5);

console.log("START");
// take4$.subscribe(observer);
timer$.subscribe(observer);
console.log("FINISH");
