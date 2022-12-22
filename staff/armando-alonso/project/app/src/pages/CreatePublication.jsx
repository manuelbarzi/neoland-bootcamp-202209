import createPost from '../logic/createPost'
import TextAreaM from '../components/TextAreaM'
import log from '../utils/coolog'
import { Link } from 'react-router-dom'
import 'tw-elements'
import { useState } from 'react';

function PageCreateNews({ onNavigateFromCreateToHome, updateCreateState }) {
    log.info('Registro -> render')

    const [textvalue, setTextValue] = useState()

    const handleCreatedNews = event => {
        log.info('CreateNews -> handleCreateNews')

        event.preventDefault()

        const { title: { value: title }, resume: { value: resume }, text: { value: text }, topic: { value: topic }, visibility: { value: visibility },municipio: { value: municipio }, img: { value: img } } = event.target

        try {
            createPost( sessionStorage.userId, title, resume, text, topic, visibility, municipio, img)
                .then(() => {
                    alert('Post creado satisfactoriamente')
                    event.target.reset()
                    updateCreateState('news')})
                .catch(error => alert(error.message))  
        } catch (error) {
            alert(error.message)
        }
    }

    return (
            <div className="flex basis-9/12 px-6 pb-8 text-gray-800">
                <form  className="flex flex-col ml-10 w-full" onSubmit={handleCreatedNews}>
                    <div className="flex w-full justify-center items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                        <p className="text-center font-semibold mx-4 mb-0">Crear Noticia</p>
                    </div>
                    {/* <!-- Title input --> */}
                    <div className="mb-6">
                        <label htmlFor='title'>Título</label>
                        <input id="title" type="title" className="flex form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="title" />
                    </div>
                    {/* <!-- Resume input --> */}
                    <div className="mb-6">
                        <label htmlFor='resume'>Resume</label>
                        <input id="resume" type="resume" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Resume" />
                    </div>
                    {/* <!-- Surname input --> */}
                    <div className="mb-6">
                        <label htmlFor='text'>Texto</label>
                        <input id="text" type="text" value={textvalue} className="hidden form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Texto" />
                        <TextAreaM textcontainer={setTextValue}/>
                    </div>

                    <div className="flex gap-2">
                    <div className="flex flex-wrap mb-6 basis-1/2">
                        <label htmlFor='topic'>Topic</label>
                        <select id="topic" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="topic">
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
                    <div className="flex flex-wrap mb-6 basis-1/2">
                        <label htmlFor='visibility'>Visibility</label>
                        <select id="visibility" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="visibility">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-wrap mb-6 basis-1/2">
                            <label htmlFor='municipio'>Municipio</label>
                            <select id="municipio" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="municipio">
                                <option value="serranillos">Serranillos del Valle</option>
                                <option value="grinon">Griñon</option>
                            </select>
                        </div>
                        <div className="flex flex-wrap mb-6 basis-1/2">
                        <label htmlFor='img'>Img</label>
                        <input id="img" type="text" className="flex form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="img" />
                    </div>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor='post'></label>
                        <select id="post" className="hidden w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="post">
                            <option value="noticia"></option>
                        </select>
                    </div>
                    <div className="text-center lg:text-left">
                        <button className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Crear Noticia</button>
                        <Link to='/' href="#" className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out" onClick={onNavigateFromCreateToHome}> Go Home</Link>
                    </div>
                </form>
            </div>

    )
}

export default PageCreateNews