import { timer, interval } from "rxjs";
import { take, concatMap } from "rxjs/operators";


const source$ = timer(0, 1500);

const example$ = source$.pipe(
  take(2),
  concatMap(() => {
    return interval(1000).pipe(take(3));
  })
);

example$.subscribe((v) => console.log(v));