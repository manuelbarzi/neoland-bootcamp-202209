import getOnePublication from '../logic/getOnePublication'
import updatePost from '../logic/updatePost'
import TextAreaE from '../components/TextAreaE'
import log from '../utils/coolog'
import 'tw-elements'
import { useState, useEffect } from 'react';

function EditPublication({ onNavigateFromEditToHome, updateEditState, onNavigateToCreate }) {
    log.info('Edit -> render')

    const [publication, setPublicacion] = useState('');
    const [textvalue, setTextValue] = useState()
    const [updateState, setupdateState] = useState()
    const [topic, setTopic] = useState()


    useEffect(() => {
        try {
            getOnePublication(sessionStorage.userId, window.publicationId, (error, publication) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPublicacion(publication)
                setupdateState(updateEditState)
                setTextValue(publication.text)
                setTopic(publication.topic)

            })
        } catch (error) {
            alert(error.message)
        }
    }, [updateEditState])


    const handleEditPublication = event => {
        log.info('CreateNews -> handleCreateNews')

        event.preventDefault()

        const { title: { value: title }, resume: { value: resume }, text: { value: text }, topic: { value: topic }, visibility: { value: visibility } } = event.target

        try {
            updatePost( sessionStorage.userId, window.publicationId, title, resume, text, topic, visibility)
                .then(() => {
                    alert('Publicación actualizada correctamente')
                    updateEditState('update')
                    onNavigateToCreate()})
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return (
                <div className="flex basis-9/12 px-6 mb-8 text-gray-800">
                    <form className="flex flex-col w-full ml-10" onSubmit={handleEditPublication}>
                        <div className="flex w-full justify-center items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                            <p className="text-center font-semibold mx-4 mb-0">Editar Noticia</p>
                        </div>
                        {/* <!-- Title input --> */}
                        <div className="mb-6">
                            <label htmlFor='title'>Título</label>
                            <input defaultValue={publication.title} id="title" type="title" className="flex form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="title" />
                        </div>
                        {/* <!-- Resume input --> */}
                        <div className="mb-6">
                            <label htmlFor='resume'>Resume</label>
                            <input defaultValue={publication.resume} id="resume" type="resume" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="title" />
                        </div>
                        {/* <!-- Surname input --> */}
                        <div className="mb-6">
                            <label htmlFor='text'>Texto</label>
                            <input id="text" type="text" value={textvalue} className="form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Texto" />
                            <TextAreaE textcontainer={setTextValue} />
                        </div>

                        {/* <!-- Direction input --> */}
                        <div className="mb-6">
                            <label htmlFor='topic'>Topic</label>
                            <select value={topic} id="topic" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="topic">
                                <option value="sanidad">Sanidad</option>
                                <option value="cultura">Cultura</option>
                                <option value="vandalismo">Vandalismo</option>
                                <option value="medio-ambiente">Medio-Ambiente</option>
                                <option value="transporte">Transporte</option>
                                <option value="energia">Energia</option>
                                <option value="deportes">Deportes</option>
                                <option value="turismo">Turismo</option>
                                <option value="seguridad">Seguridad</option>
                                <option value="emergencias">Emergencias</option>
                                <option value="movilidad">Movilidad</option>
                                <option value="hacienda">Hacienda</option>
                                <option value="personal">Personal</option>
                                <option value="obras">Obras</option>
                                <option value="equipamiento">Equipamiento</option>
                                <option value="vivienda">Vivienda</option>
                                <option value="economia">Economia</option>
                                <option value="innovacion">Innovacion</option>
                                <option value="empleo">Empleo</option>
                                <option value="igualdad">Igualdad</option>
                                <option value="urbanismo">urbanismo</option>
                                <option value="educacion">educacion</option>
                            </select>
                        </div>
                        {/* <!-- Postal Code input --> */}
                        <div className="mb-6">
                            <label htmlFor='visibility'>Visibility</label>
                            <select id="visibility"  defaultValue={publication.visibility} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="visibility">
                                <option value="public">public</option>
                                <option value="private">private</option>
                            </select>
                        </div>
                        <div className="text-center lg:text-left">
                            <button className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Actualizar Noticia</button>
                            <a href="#" className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out" onClick={onNavigateFromEditToHome}> Go Home</a>
                        </div>
                    </form>
                </div>




    )
}

export default EditPublication