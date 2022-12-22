import axios from 'axios';

async function getUserBookings() {

    const response = await axios.get('http://localhost:8080/bookings')
    return response.data

}

export default getUserBookings