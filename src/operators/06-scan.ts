import { Observable, Observer, Subscription, range, of, from, fromEvent, interval } from "rxjs";
import { filter, map, tap, reduce, take, scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];
const totalAccumulator = (acc: number, current: number) => acc + current;

// from(numbers).pipe(reduce(totalAccumulator, 0)).subscribe(console.log);

// from(numbers).pipe(scan(totalAccumulator, 0)).subscribe(console.log);

// * REDUX -> Global state mngmnt

interface User {
	id?: string;
	authenticated?: boolean;
	token?: string;
	age?: number;
}

const users: User[] = [
	{
		id: "arangel",
		authenticated: false,
		token: null,
		// age: 10,
	},
	{
		id: "asdrangel",
		authenticated: true,
		token: "ASDF",
		// age: 10,
	},
	{
		id: "3245rangel",
		authenticated: true,
		token: "1234",
		// age: 10,
	},
];

const state$: Observable<any> = from(users).pipe(
	scan<User, User>(
		(acc, current) => {
			return { ...acc, ...current };
		},
		{ age: 33 }
	)
);

const id$: Observable<User> = state$.pipe(map((state) => state));

id$.subscribe(console.log);
