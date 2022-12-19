import axios from "axios";

async function getPorts(getWeather = false) {
  let url = "http://localhost:8080/ports";
  if (getWeather) {
    url = url + "?weather=true";
  }
  const response = await axios.get(url);
  return response.data;
}

export default getPorts;
