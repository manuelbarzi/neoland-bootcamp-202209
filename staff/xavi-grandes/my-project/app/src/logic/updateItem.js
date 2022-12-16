export default function (itemId, title, quantity, amount) {
  if (typeof itemId !== "string") throw new TypeError("itemId is not a string");
  if (!itemId.length) throw new Error("itemId is empty");
  if (typeof title !== "string") throw new TypeError("title is not a string");
  if (!title.length) throw new Error("title is empty");
  if (typeof quantity !== "string") throw new TypeError("quantity is not a string");
  if (typeof amount !== "string") throw new TypeError("amount is not a string");


  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const { status, responseText: json } = xhr;

      if (status >= 500) {
        const { error } = JSON.parse(json);

        reject(new Error(error));

        return;
      }

      resolve();
    };

    xhr.open("PATCH", `http://localhost/items/${itemId}`);
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { title, quantity, amount }
    const json = JSON.stringify(payload)

    xhr.send(json)
  });
}
