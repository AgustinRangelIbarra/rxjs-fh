import { Observable, fromEvent, mapTo, pluck, range } from "rxjs";
import { map } from "rxjs";

/* range(1, 5)
	.pipe(map<number, string>((value: number) => (value * 10).toString()))
	.subscribe((val: string) => {
		console.log({ val });
	}); */

const keyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, "keyup");
// const keyPipeMap$: Observable<string> = keyUp$.pipe(map<KeyboardEvent, string>((val) => val.code));
// const keyPipePluck$: Observable<any> = keyUp$.pipe(pluck("target", "baseURI"));
// const keyPipeMapTo$: Observable<string> = keyUp$.pipe(mapTo<KeyboardEvent, string>("pressed"));

keyUp$.subscribe((val: any) => console.log({ val }));
