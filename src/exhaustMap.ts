import { interval, fromEvent } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");

const example$ = clicks$.pipe(
  exhaustMap(() => {
    return interval(1000).pipe(take(3));
  })
);

example$.subscribe((v) => console.log(v));
