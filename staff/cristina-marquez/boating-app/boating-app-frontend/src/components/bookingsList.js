import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import deleteBooking from '../logic/deleteBooking'


function BookingsList({ bookingsList, ports, boats, onUpdate, onUpdateBookingRequest }) {


    let selectedBookingId = null

    const portNameFromId = (portId) => {
        let portName = ''
        ports.forEach(port => {
            if (port._id === portId) {
                portName = port.name
            }
        });
        return portName
    }

    const boatNameFromId = (boatId) => {
        let boatName = ''
        boats.forEach(boat => {
            if (boat._id === boatId) {
                boatName = boat.name
            }
        });
        return boatName
    }


    const confirmDeleteBooking = async (event) => {
        event.preventDefault()

        console.log('Deleting booking', selectedBookingId)
        try {
            await deleteBooking(selectedBookingId)
            await onUpdate()

        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            From
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            To
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Port
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Boat
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookingsList.map(booking => (
                                        <tr key={booking._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {new Date(booking.startDate).toLocaleDateString()}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {new Date(booking.endDate).toLocaleDateString()}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {portNameFromId(booking.port)}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boatNameFromId(booking.boat)}
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center">
                                                <button type="button"
                                                    className="px-6 py-2.5 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    onClick={() => onUpdateBookingRequest(booking._id)}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </button>
                                                <button type="button"
                                                    className="px-6 py-2.5 ml-2 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onClick={() => selectedBookingId = booking._id} ><FontAwesomeIcon icon={faTrashCan} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="confirmDeleteModal" tabIndex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="confirmDeleteModalLabel">Delete booking</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            Are you sure you want to delete this booking?
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                className="px-6 py-2.5  bg-darkblue  text-white font-medium text-xs
                                    leading-tight uppercase rounded shadow-md hover:shadow-lg active:shadow-lg
                                    transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">Close</button>
                            <button type="button"
                                className="px-6 py-2.5 bg-midgreen text-white font-medium text-xs leading-tight uppercase
                                    rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
                                    transition  duration-150 ease-in-out ml-1"
                                data-bs-dismiss="modal"
                                onClick={confirmDeleteBooking}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BookingsList