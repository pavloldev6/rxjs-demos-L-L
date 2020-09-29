import { fromEvent, of, throwError } from "rxjs";
import { catchError, concatMap } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");

clicks$
  .pipe(
    concatMap(() => {
      return error.pipe(
        // catchError((err) => {
        //   console.log("An error occured");
        //   return of({ message: "Errors happen" });
        // })
      );
    })
  )
  .subscribe((v) => console.log(v));

  const error = throwError("Error");
