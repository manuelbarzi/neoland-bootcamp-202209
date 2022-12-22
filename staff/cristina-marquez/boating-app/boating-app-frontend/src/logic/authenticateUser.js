import axios from "axios";

async function authenticateUser(authenticationData) {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth",
      authenticationData
    );
    return response.data;
  } catch (error) {
    if (error.response?.data) {
      throw new Error(error.response.data.message);
    }
  }
}

export default authenticateUser;
