import axios from "axios";

async function deleteBooking(bookingId) {

    const response = await axios.delete(`http://localhost:8080/bookings/${bookingId}`)
    return response.data


}

export default deleteBooking
