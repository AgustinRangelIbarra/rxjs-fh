import { Observable, Observer, Subscription, range, of, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10).pipe(
	filter<number>((val, index) => {
		console.log({ index });
		return val % 2 === 1;
	})
);
// .subscribe((val: number) => console.log("On sub", { val }));
interface character {
	type: string;
	name: string;
}

const characters: character[] = [
	{
		type: "Hero",
		name: "Batman",
	},
	{
		type: "Hero",
		name: "Robin",
	},
	{
		type: "Villian",
		name: "Joker",
	},
];

const characters$: Observable<character> = from(characters);
const sub = characters$
	.pipe(filter((character) => character.type !== "Hero"))
	.subscribe((character) => console.log({ character }));

const keyUp$: Observable<string> = fromEvent<KeyboardEvent>(document, "keyup").pipe(
	map<KeyboardEvent, string>((x) => x.code),
	filter((code: string) => code === "Enter")
);
keyUp$.subscribe((val: string) => console.log({ val }));
