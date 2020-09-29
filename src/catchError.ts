import { fromEvent, of, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, concatMap } from "rxjs/operators";

const button = document.createElement("button");
button.textContent = 'Click for error';

const appDiv = document.getElementById("app");
appDiv.prepend(button);

const loadData = fromEvent(button, "click");

loadData
  .pipe(
    concatMap(() => {
      return error.pipe(
        catchError((err) => {
          console.log("An error occured");
          return of({ message: "Errors happen" });
        })
      );
    })
  )
  .subscribe((v) => console.log(v));

  const error = throwError("Error");
