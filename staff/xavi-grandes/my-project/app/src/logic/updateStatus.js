import { errors } from "com";

const { FormatError, UnexpectedError, AuthError, NotFoundError } = errors;

export default function (itemId, itemStatus) {
  if (typeof itemId !== "string") throw new TypeError("itemId is not a string");
  if (!itemId.length) throw new Error("itemId is empty");
  if (typeof itemStatus !== "string") throw new TypeError("itemStatus is not a string");
  if (!itemStatus.length) throw new Error("itemStatus is empty");

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const { status, responseText: json } = xhr;

      if (status === 200) {
        const lists = JSON.parse(json);

        resolve(lists);
      } else if (status === 400) {
        const { error } = JSON.parse(json);

        if (error.includes("is not a")) reject(new TypeError(error));
        else if (error.includes("empty")) reject(new FormatError(error));
      } else if (status === 401) {
        const { error } = JSON.parse(json);

        reject(new AuthError(error));
      } else if (status === 404) {
        const { error } = JSON.parse(json);

        reject(new NotFoundError(error));
      } else if (status < 500) reject(new UnexpectedError("client error"));
      else reject(new UnexpectedError("server error"));
    };

    xhr.open("PATCH", `http://localhost/items/${itemId}/${itemStatus}`);

    xhr.send();
  });
}
