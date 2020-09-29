import { getUsers, showUsers } from "./utils";
import { fromEvent, of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, map, shareReplay, switchMap } from "rxjs/operators";

const searchInput = document.getElementById("search-user-box");

const users$ = getUsers().pipe(
  map(result => result.data),
  catchError(() => of([])),
  shareReplay()
);
const searchQuery$ = fromEvent(searchInput, "keyup").pipe(
  map((e) => e.target.value)
);

searchQuery$
  .pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((searchValue) => {
      return users$.pipe(
        map((users) => {
          return users.filter((u: any) =>
            `${u.first_name} ${u.last_name}`.toUpperCase().includes(searchValue.toUpperCase())
          );
        })
      );
    })
  )
  .subscribe((result) => showUsers(result));

