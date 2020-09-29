
import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const source = of("fabpot", "andrew", "taylorotwell");

const example = source.pipe(
  mergeMap((username) =>
    ajax.getJSON(`https://api.github.com/users/${username}`)
  )
);

example.subscribe((data) => console.log(data));