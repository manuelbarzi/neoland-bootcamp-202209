import { errors } from "com";

const { FormatError, UnexpectedError, AuthError, NotFoundError } = errors;

export default function (itemId, itemStatus) {
  if (typeof itemId !== "string") throw new TypeError("itemId is not a string");
  if (!itemId.length) throw new Error("itemId is empty");
  if (typeof itemStatus !== "boolean") throw new TypeError("itemStatus is not a boolean");

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const { status, responseText: json } = xhr;

      if (status >= 500) {
        const { error } = JSON.parse(json)

        reject(new Error(error))

        return
    }

    resolve()
}

    xhr.open("PATCH", `http://localhost/items/${itemId}/${itemStatus}`);

    xhr.send();
  });
}
