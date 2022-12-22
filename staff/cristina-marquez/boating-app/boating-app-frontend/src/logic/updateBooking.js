import axios from "axios";

async function updateBooking(bookingId, bookingInfo) {

    const response = await axios.patch(`http://localhost:8080/bookings/${bookingId}`, bookingInfo)
    return response.data

}

export default updateBooking