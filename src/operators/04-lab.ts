import { Observable, Observer, Subscription, range, of, from, fromEvent } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

const text = document.createElement("div");
text.innerHTML = `
	<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste quo omnis quisquam at,
			eaque fugiat consequatur eius labore unde. Ex voluptatum quae est dolor fuga voluptatem
			dolorum, deleniti atque!
		</div>
		<br />
		<br />
		<div>
			Cumque, iusto ea! Deleniti eveniet officiis harum facere quisquam numquam, rerum similique
			dolore blanditiis ea beatae dolorum ipsa mollitia quae id quia expedita delectus temporibus
			consequuntur eos iste. Eius, exercitationem!
		</div>
		<br />
		<br />
		<div>
			Voluptatem soluta iste sunt eaque, eveniet quibusdam excepturi, earum est, id nisi odio iure
			velit! Et vel soluta fugiat, consequuntur necessitatibus numquam quisquam, veniam illo
			expedita eum temporibus deserunt praesentium?
		</div>
		<br />
		<br />
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste quo omnis quisquam at,
			eaque fugiat consequatur eius labore unde. Ex voluptatum quae est dolor fuga voluptatem
			dolorum, deleniti atque!
		</div>
		<br />
		<br />
		<div>
			Cumque, iusto ea! Deleniti eveniet officiis harum facere quisquam numquam, rerum similique
			dolore blanditiis ea beatae dolorum ipsa mollitia quae id quia expedita delectus temporibus
			consequuntur eos iste. Eius, exercitationem!
		</div>
		<br />
		<br />
		<div>
			Voluptatem soluta iste sunt eaque, eveniet quibusdam excepturi, earum est, id nisi odio iure
			velit! Et vel soluta fugiat, consequuntur necessitatibus numquam quisquam, veniam illo
			expedita eum temporibus deserunt praesentium?
		</div>
		<br />
		<br />
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste quo omnis quisquam at,
			eaque fugiat consequatur eius labore unde. Ex voluptatum quae est dolor fuga voluptatem
			dolorum, deleniti atque!
		</div>
		<br />
		<br />
		<div>
			Cumque, iusto ea! Deleniti eveniet officiis harum facere quisquam numquam, rerum similique
			dolore blanditiis ea beatae dolorum ipsa mollitia quae id quia expedita delectus temporibus
			consequuntur eos iste. Eius, exercitationem!
		</div>
		<br />
		<br />
		<div>
			Voluptatem soluta iste sunt eaque, eveniet quibusdam excepturi, earum est, id nisi odio iure
			velit! Et vel soluta fugiat, consequuntur necessitatibus numquam quisquam, veniam illo
			expedita eum temporibus deserunt praesentium?
		</div>
		<br />
		<br />
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste quo omnis quisquam at,
			eaque fugiat consequatur eius labore unde. Ex voluptatum quae est dolor fuga voluptatem
			dolorum, deleniti atque!
		</div>
		<br />
		<br />
		<div>
			Cumque, iusto ea! Deleniti eveniet officiis harum facere quisquam numquam, rerum similique
			dolore blanditiis ea beatae dolorum ipsa mollitia quae id quia expedita delectus temporibus
			consequuntur eos iste. Eius, exercitationem!
		</div>
		<br />
		<br />
		<div>
			Voluptatem soluta iste sunt eaque, eveniet quibusdam excepturi, earum est, id nisi odio iure
			velit! Et vel soluta fugiat, consequuntur necessitatibus numquam quisquam, veniam illo
			expedita eum temporibus deserunt praesentium?
		</div>
		<br />
		<br />`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const getScrollPercentage = (event: any): number => {
	const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
	console.log({ scrollTop, scrollHeight, clientHeight });
	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// ? STREAMS

const scroll$: Observable<Event> = fromEvent(document, "scroll");
const progressBar$: Observable<number> = scroll$.pipe(
	map((event: Event) => getScrollPercentage(event)),
	tap((x) => console.log(x))
);

progressBar$.subscribe((progress: number) => (progressBar.style.width = `${progress}%`));
