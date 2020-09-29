import { timer, interval } from "rxjs";
import { switchMap, take } from "rxjs/operators";

const source$ = timer(0, 2500);

const example$ = source$.pipe(
  take(2),
  switchMap(() => {
    return interval(1000).pipe(take(3));
  })
);

example$.subscribe((v) => console.log(v));
