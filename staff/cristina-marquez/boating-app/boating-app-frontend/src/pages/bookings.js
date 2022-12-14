import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";
import boatslist from "../logic/boatslist"
import BookingsList from "../components/bookingsList";
import getUserBookings from "../logic/bookingsList";
import BookingForm from "../components/bookingForm";

function Bookings() {

    // As long as we don't use a global store, we need to fetch ports and boats again
    const [ports, setPorts] = useState([])
    const [boats, setBoats] = useState([])
    const [isBookingFormVisible, setIsBookingFormVisible] = useState(false)
    const [editableBookingInfo, setEditableBookingInfo] = useState(false)
    const [bookings, setBookings] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const fetchedPorts = await getPorts()
            const fetchedBoats = await boatslist()
            const fetchedBookings = await getUserBookings()

            setPorts(fetchedPorts)
            setBoats(fetchedBoats)
            setBookings(fetchedBookings)

        }
        fetchData()
    }, [])

    const triggerNewBookingCreation = (event) => {
        event.preventDefault()
        setIsBookingFormVisible(true)
    }

    const hideForm = (event) => {
        event.preventDefault()
        setIsBookingFormVisible(false)
        setEditableBookingInfo(null)

    }

    const onUpdateBookingRequest = (bookingId) => {
        console.log('Received update event for boat', bookingId)
        setEditableBookingInfo(bookings.find(booking => booking._id === bookingId))
        setIsBookingFormVisible(true)
    }

    const refreshBookings = async () => {
        const refreshedBookings = await getUserBookings()
        setBookings(refreshedBookings)
        setIsBookingFormVisible(null)
    }

    return (
        <main className="w-screen min-h-screen bg-bone pt-10 flex justify-center">
            <div className="flex flex-col items-center w-11/12">

                <div className="w-full">

                    <h2 className="mb-4">Your bookings</h2>

                    <BookingsList bookingsList={bookings} ports={ports} boats={boats} onUpdate={refreshBookings} onUpdateBookingRequest={onUpdateBookingRequest} ></BookingsList>

                </div>
                {!isBookingFormVisible &&
                    <div className='flex w-full justify-end'>
                        <button className="px-3 py-1.5 mt-4 bg-midgreen text-bone 
                                font-medium text-xs leading-tight uppercase rounded shadow-md
                                hover:bg-blue-700 hover:shadow-lg" onClick={triggerNewBookingCreation}>
                            Add new booking to my list
                        </button>
                    </div>
                }

                {isBookingFormVisible &&
                    <div className='flex w-11/12 my-10'>
                        <BookingForm boats={boats} ports={ports} onUpdate={refreshBookings} bookingInfo={editableBookingInfo} onDiscard={hideForm}></BookingForm>
                    </div>}
            </div>

        </main>
    )
}

export default Bookings