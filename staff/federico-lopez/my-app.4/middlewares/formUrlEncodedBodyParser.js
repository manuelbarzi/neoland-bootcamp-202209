function formUrlEncodedBodyParser(req, res, next) {
  let content = "";

  req.on("data", (chunk) => (content += chunk.toString()));

  req.on("end", () => {
    // email=wendy%40darling.com&password=123123123

    const body = content.split("&").reduce((_body, keyValue) => {
      const [key, value] = keyValue.split("=");

      value.replace("%40", "@");

      _body[key] = value;

      return _body;
    }, {});

    req.body = body;

    next();
  });
}

module.exports = formUrlEncodedBodyParser;
