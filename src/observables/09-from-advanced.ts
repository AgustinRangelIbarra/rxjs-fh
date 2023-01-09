import { of, from, Observer, Observable, Subscription } from "rxjs";

/* 
? of => toma argumentos y genera una secuencia 
? from => array, promise, iterable, observable
*/

const observer: Observer<any> = {
	next: (next) => console.log({ next }),
	error: (error) => console.log({ error }),
	complete: () => console.log("complete"),
};

const myGen = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const iterable = myGen();
from(iterable).subscribe(observer);

/* 
const src$: Observable<Response> = from(fetch("https://api.github.com/users/klerith"));
src$.subscribe(async (response: Response) => {
	const data = await response.json();
	console.log({ data });
});
 */
