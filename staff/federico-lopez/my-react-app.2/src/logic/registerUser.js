import {
  IS_EMAIL_REGEX,
  HAS_SPACES_REGEX,
  IS_ALPHABETICAL_REGEX,
} from "../utils/regex";

/**
 * Registers a user against API
 *
 * @param {string} name The user name
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {callback} callback The callback to attend the result
 */
function registerUser(name, email, password, callback) {
  if (typeof name !== "string") throw new Error("name is not a string");
  if (!IS_ALPHABETICAL_REGEX.test(name))
    throw new Error("name is not alphabetical");

  if (typeof email !== "string") throw new Error("email is not a string");
  if (!IS_EMAIL_REGEX.test(email)) throw new Error("email is not valid");

  if (typeof password !== "string") throw new Error("password is not a string");
  if (password.length < 8) throw new Error("password length is less than 8");
  if (HAS_SPACES_REGEX.test(password)) throw new Error("password has spaces");

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const { status, responseText: json } = xhr;

    if (status >= 500) {
      // parseamos el json del body de la response
      // del objeto resultante nos quedamos con la propiedad error y lo asignamos a la variable error
      // la variable error ahora contiene un string
      const { error } = JSON.parse(json);

      // creamos una instancia de error cuya propiedad message será el string que contenía la varible error
      const errorToUseAsArgumentOfCallback = new Error(error);

      // llamamos a la callback y le pasamos por parámetro la instancia de error arriba creada
      callback(errorToUseAsArgumentOfCallback);

      return;
    }

    callback(null);
  };

  xhr.onerror = () => callback(new Error("connection error"));

  xhr.open("POST", "http://localhost/users");
  xhr.setRequestHeader("Content-Type", "application/json");

  const payload = { name, email, password };

  const json = JSON.stringify(payload);

  xhr.send(json);
}

/**
 * Attends the result of the register
 *
 * @callback callback
 *
 * @param {Error} error The authentication error
 */

export default registerUser;
