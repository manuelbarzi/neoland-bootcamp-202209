import axios from "axios";

async function updateBoat(boatId, boatInfo) {

    const response = await axios.patch(`http://localhost:8080/boats/${boatId}`, boatInfo)
    return response.data


}

export default updateBoat