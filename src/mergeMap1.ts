import { timer, interval } from "rxjs";
import { mergeMap, take, map } from "rxjs/operators";

const source$ = timer(0, 1500).pipe(
  map(v => `timer ${v}`)
);

const example$ = source$.pipe(
  take(2),
  mergeMap((val) => {
    return interval(1000).pipe(
      take(3),
      map(v => `${val} interval ${v}`));
  })
);

example$.subscribe((v) => console.log(v));
