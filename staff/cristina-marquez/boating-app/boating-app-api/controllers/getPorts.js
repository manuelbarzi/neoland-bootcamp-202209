const getPorts = require("../logic/getPorts");

module.exports = async (req, res) => {
  try {
    const ports = await getPorts();
    res.status(200).send(ports);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
