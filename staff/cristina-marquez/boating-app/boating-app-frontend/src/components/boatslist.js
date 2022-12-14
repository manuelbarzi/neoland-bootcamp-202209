import deleteBoat from '../logic/deleteBoat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'



function BoatsList({ boatsList, onUpdate, onUpdateBoatRequest }) {
    let selectedBoatId = null

    const confirmDeleteBoat = async (event) => {
        event.preventDefault()

        console.log('deleting boat', selectedBoatId)
        try {
            await deleteBoat(selectedBoatId)
            await onUpdate()

        } catch (error) {
            alert(error.message)

        }

    }

    return (
        <>
            <div className="flex flex-col min-w-full">
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Flag
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Register Number
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Sail
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Length
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Beam
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Draft
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {boatsList.map(boat => (
                                        <tr key={boat._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boat.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boat.flag}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boat.regNumber}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {String(boat.sail)}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boat.length}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boat.beam}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boat.draft}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center">
                                                <button type="button"
                                                    className="px-6 py-2.5 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    onClick={() => onUpdateBoatRequest(boat._id)}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </button>
                                                <button type="button"
                                                    className="px-6 py-2.5 ml-2 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onClick={() => selectedBoatId = boat._id} ><FontAwesomeIcon icon={faTrashCan} />
                                                </button>
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
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="confirmDeleteModalLabel">Delete boat</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            Are you sure you want to delete this boat?
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
                                onClick={confirmDeleteBoat}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default BoatsList