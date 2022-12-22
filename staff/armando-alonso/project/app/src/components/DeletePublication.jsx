import deletePost from '../logic/deletePost'
import getOnePublication from '../logic/getOnePublication'
import log from '../utils/coolog'
import 'tw-elements'
import { useState, useEffect } from 'react';

function DeleteThisPublication({ publicationId, onDeleted, onClose }) {
    log.info('Registro -> render')

    const [publication, setPublicacion] = useState('')

    useEffect(() => {
        try {
            getOnePublication(sessionStorage.userId, publicationId, (error, publication) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPublicacion(publication)

            })
        } catch (error) {
            alert(error.message)
        }
    }, [publicationId])

    

    const confirmDeletePublication = event => {
        log.info('Delete -> Delete')

        event.preventDefault()

        try {
            deletePost( sessionStorage.userId, publicationId )
                .then(() => onDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
            <div className="flex basis-9/12 px-6 pb-8 text-gray-800">
                {/* <!-- Modal --> */}
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                        ¿Estas seguro de Borrar esta Publicación?
                        </h5>
                        <button type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        <div key={publicationId} className="flex flex-col w-full">
                            <div className="flex w-full justify-center">
                            <img
                                className="w-full p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={publication.img}
                                alt=""
                            />
                            <div className="w-full p-2 flex">
                            <div className="flex flex-col basis-5/6">
                                <h5 className="flex text-gray-900 text-m">{publication.title}</h5>
                                <p className="flex text-gray-600 text-xs">{publication.resume}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" onClick={confirmDeletePublication}
                        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal">Delete</button>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close"
                        className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Cerrar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default DeleteThisPublication