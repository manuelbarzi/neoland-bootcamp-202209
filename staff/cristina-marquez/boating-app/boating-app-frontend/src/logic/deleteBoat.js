import axios from "axios";

async function deleteBoat(boatId) {

    const response = await axios.delete(`http://localhost:8080/boats/${boatId}`)
    return response.data


}

export default deleteBoat