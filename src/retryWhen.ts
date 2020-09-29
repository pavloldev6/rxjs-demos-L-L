import { interval, timer } from "rxjs";
import { delayWhen, map, retryWhen, tap } from "rxjs/operators";

const source$ = interval(1000);

const example$ = source$.pipe(
  map(val => {
    if (val > 3) {
      throw val;
    }
    return val;
  }),
  retryWhen((errors) => {
    return errors.pipe(
      tap((val) => console.log(`Value ${val} was too high`)),
      // restart in 3 seconds
      delayWhen((val: number) => timer(val * 1000))
    );
  })
);
example$.subscribe((val) => console.log(val));