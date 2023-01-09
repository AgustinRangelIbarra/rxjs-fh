import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<any> = {
	next: (next) => console.log({ next }),
	error: (error) => console.warn({ error }),
	complete: () => console.info("complete"),
};

const interval$: Observable<number> = new Observable<number>((subscriber) => {
	let counter: number = 0;
	const interval = setInterval(() => {
		subscriber.next(counter);
		console.log({ counter });
		counter++;
	}, 500);

	setTimeout(() => {
		subscriber.complete();
	}, 2000);

	// ? sin return habría memory leaking
	return () => {
		clearInterval(interval);
		console.log("interval destroyed");
	};
});

/* const subscription: Subscription = interval$.subscribe({
	next: (item: number) => console.log("in subcription", { item }),
}); */

const subscription: Subscription = interval$.subscribe(observer);
const subscription1: Subscription = interval$.subscribe(observer);
const subscription2: Subscription = interval$.subscribe(observer);

subscription.add(subscription1);
subscription1.add(subscription2);

setTimeout(() => {
	subscription1.unsubscribe();
	/* subscription.unsubscribe();
	subscription1.unsubscribe();
	subscription2.unsubscribe(); */
}, 3000);
