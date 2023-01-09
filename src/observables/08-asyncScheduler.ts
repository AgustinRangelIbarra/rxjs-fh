import { Subscription, asyncScheduler } from "rxjs";

// setTimeout(() => {}, 2000);
// setInterval(() => {}, 4000);

// const greet2 = (val) => console.warn({ val });
// asyncScheduler.schedule(greet2, 4000, { name: "asdf" });

const subs: Subscription = asyncScheduler.schedule(
	function (state) {
		console.log({ state });
		this.schedule(state + 1, 500);
	},
	3000,
	0
);

asyncScheduler.schedule(() => subs.unsubscribe(), 5000);
