import axios from "axios";

async function registerBoat(boatInfo) {

    const response = await axios.post('http://localhost:8080/boats', boatInfo)
    return response.data


}

export default registerBoat