import { useEffect } from 'react'
import createOffer from '../logic/createOffer'

function CreateOffer({ className, onCreateOffer, onCreateOfferClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style = ''
    })

    const createOfferHandler = event => {
        event.preventDefault()

        const { title: { value: title }, description: { value: description },
            language: { value: language }, level: { value: level }, study: { value: study },
            industry: { value: industry }, position: { value: position }, years: { value: years }
        } = event.target

        const photo = ''

        const languages = [{ language, level }]

        const studies = [{ title: study }]

        const experiences = [{ industry, position, years }]

        try {
            createOffer(sessionStorage.token, { title, description, photo, languages, studies, experiences })
                .then(() => onCreateOffer())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const closeOfferHandler = () => {
        onCreateOfferClose()
    }

    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closeOfferHandler}>
        <article onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-full h-fit bg-white border-2 p-4 rounded-xl ${className ? className : ""}`}>
            <div className="flex flex-col items-center">
                <div className="grid w-full items-center grid-cols-12">
                    <span className="font-bold text-xl w-fit col-start-4 col-end-10">Create Offer</span>
                    <button className="border-2 w-fit h-fit justify-self-end col-start-12 col-end-13 px-2 py-1 rounded-xl" onClick={closeOfferHandler}>X</button>
                </div>
                <hr className="w-full mt-3.5" />
                <form className="flex flex-col items-center w-full mt-2 gap-2" onSubmit={createOfferHandler}>
                    <input name="title" id="title" type="text" className="outline-none font-semibold text-lg mt-2 w-full" placeholder='Title' autoFocus />
                    <textarea name="description" id="description" className="resize-none outline-none rounded-xl w-full" rows="2" placeholder='Description'></textarea>
                    <h3 className='font-semibold self-start'>Work Experiences: </h3>
                    <div className="self-start flex flex-col w-full">
                        <div className='w-full'>
                            <label htmlFor="industry" className="self-start">Industry: </label>
                            <input type="text" name="industry" id="industry" className="outline-none w-full" />
                        </div>
                        <div>
                            <label htmlFor="position" className="self-start">Position: </label>
                            <input type="text" name="position" id="position" className="outline-none" />
                        </div>
                        <div>
                            <label htmlFor="years" className="self-start">Years: </label>
                            <input type="text" name="years" id="years" className="outline-none" />
                        </div>
                    </div>

                    <h3 className='font-semibold self-start'>Languages:</h3>
                    <div className='flex flex-wrap'>
                        <div className="flex self-start w-1/2">
                            <div className='flex flex-col'>
                                <div className='p-2 flex gap-1'>
                                    <select name="language" id="language" defaultValue='select'>
                                        <option disabled hidden value="select">-------</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="English">English</option>
                                        <option value="French">French</option>
                                        <option value="German">German</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Portuguese">Portuguese</option>
                                    </select>
                                    <select name="level" id="level">
                                        <option value="A1">A1</option>
                                        <option value="A2">A2</option>
                                        <option value="B1">B1</option>
                                        <option value="B2">B2</option>
                                        <option value="C1">C1</option>
                                        <option value="C2">C2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className='font-semibold self-start'>Studies:</h3>
                    <div className="self-start">
                        <input type="text" name="study" id="study" className="outline-none" />
                    </div>
                    <button className="bg-emerald-200 w-full h-10 mt-2 rounded-lg ">Create</button>
                </form>
            </div>
        </article>
    </div>
}
export default CreateOffer