
import { of } from "rxjs";
import { concatMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const source = of("fabpot", "andrew", "taylorotwell");

const example = source.pipe(
  concatMap((username) =>
    ajax.getJSON(`https://api.github.com/users/${username}`)
  )
);

example.subscribe((data) => console.log(data));