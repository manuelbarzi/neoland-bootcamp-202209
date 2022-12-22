import axios from "axios";

async function createBooking(bookingInfo) {

    const response = await axios.post('http://localhost:8080/bookings', bookingInfo)
    return response.data


}

export default createBooking