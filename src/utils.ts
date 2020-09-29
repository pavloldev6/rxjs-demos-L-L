import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export const getUsers = (): Observable<any> => {
  const url = "https://reqres.in/api/users";
  return ajax.getJSON(url, {
    'Cache-Control': 'no-cache'
  });
}

export const showUsers = (users: any) => {
  const appDiv = document.getElementById("app");
  if (appDiv.hasChildNodes()) {
    appDiv.innerHTML = "";
  }
  users.forEach((user: any) => {
    const userContainer = document.createElement("div");
    userContainer.className = "user-box";
    const userElement = document.createElement("figcaption");
    userElement.innerText = `${user.first_name} ${user.last_name}`;
    const avatarElement = document.createElement("img");
    avatarElement.src = user.avatar;
    userContainer.append(avatarElement);
    userContainer.append(userElement);
    appDiv.append(userContainer);
  });
}