import { range, of, Observable, asyncScheduler } from "rxjs";

const src1$: Observable<number> = range(1, 5, asyncScheduler);

console.log("START");
src1$.subscribe((next) => {
	console.log({ next });
});
console.log("FINISH");
