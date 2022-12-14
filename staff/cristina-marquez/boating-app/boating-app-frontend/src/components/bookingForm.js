import { useState } from 'react';
import createBooking from "../logic/createBooking";
import updateBooking from "../logic/updateBooking"

function BookingForm({ onUpdate, boats, ports, onDiscard, bookingInfo }) {

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()


    const saveForm = async (event) => {
        event.preventDefault();

        const form = event.target

        const bookingFormInfo = {
            startDate,
            endDate,
            portId: form.port.value,
            boatId: form.boat.value,
        }

        try {
            if (bookingInfo) {
                await updateBooking(bookingInfo._id, bookingFormInfo)

            } else {
                await createBooking(bookingFormInfo)
            }

            onUpdate()
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <div className="flex justify-center min-w-full">
            <div className="block p-6 rounded-lg shadow-lg bg-white min-w-full">
                <form onSubmit={saveForm} >
                    <div className="flex justify-center">
                        <div className="flex-col w-1/2 mr-4">
                            <div className="form-group mb-6">
                                <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                                    <input type="date"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Select a date" data-mdb-toggle="datepicker"
                                        defaultValue={bookingInfo ? bookingInfo.startDate : ""}
                                        onChange={(e) => { setStartDate(e.target.value) }} />
                                    <label htmlFor="floatingInput" className="text-gray-700">Select arrival date</label>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                                    <input type="date"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Select a date" data-mdb-toggle="datepicker"
                                        defaultValue={bookingInfo ? bookingInfo.endDate : ""}
                                        onChange={(e) => { setEndDate(e.target.value) }} />
                                    <label htmlFor="floatingInput" className="text-gray-700">Select departure date</label>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="portInput" className="form-label inline-block mb-2 text-gray-700">Where would you like to stay?</label>
                                <select className="form-select appearance-none block
                            w-full px-3 py-1.5 text-base font-normal
                            text-gray-700  bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300 rounded transition
                            ease-in-out  m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="portInput"
                                    name="port"
                                    aria-label="Port selector"
                                    defaultValue={bookingInfo ? bookingInfo.port : ""}
                                    disabled={bookingInfo}>
                                    {ports.map(port => (
                                        <option key={port._id} value={port._id}> {port.name}</option>)
                                    )}
                                </select>
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="userBoatInput" className="form-label inline-block mb-2 text-gray-700">Which boat are you travelling with?</label>
                                <select className="form-select appearance-none
                            block w-full
                            px-3  py-1.5
                            text-base  font-normal
                            text-gray-700 bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300  rounded   transition
                            ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="userBoatInput"
                                    name="boat"
                                    aria-label="Boat selector"
                                    defaultValue={bookingInfo ? bookingInfo.boat : ""}
                                    disabled={!!bookingInfo}>
                                    {boats.map(boat => (
                                        <option key={boat._id} value={boat._id}> {boat.name}</option>)
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="flex-col w-1/2"></div>
                    </div>
                    <div className='flex justify-end w-full'>
                        <button type="button"
                            className="px-6 py-2.5 bg-darkblue text-white font-medium text-xs leading-tight uppercase 
                            rounded shadow-md hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={onDiscard}>
                            Discard
                        </button>
                        <button type="submit"
                            className="px-6 py-2.5 ml-2 bg-midgreen text-white font-medium text-xs leading-tight uppercase 
                            rounded shadow-md hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                            {bookingInfo ? 'Save changes' : 'Confirm booking'}
                        </button>
                    </div>
                </form>

            </div >
        </div >

    )

}

export default BookingForm