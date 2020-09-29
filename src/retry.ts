import { interval, of, throwError } from "rxjs";
import { mergeMap, retry } from "rxjs/operators";

const source$ = interval(1000);

const example$ = source$.pipe(
  mergeMap(val => {
    if (val > 2) {
      return throwError("Error occured");
    }
    return of(val);
  }),
  retry(2)
);
example$.subscribe({
  next: (val) => console.log(val),
  error: (val) => console.log(`${val} retried 2 times and quit`)
});