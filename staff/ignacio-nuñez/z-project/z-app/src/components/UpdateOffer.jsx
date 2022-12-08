import { useState, useEffect } from 'react'
import updateOffer from '../logic/updateOffer'

function UpdateOffer({ className, userInfo, offerToUpdate, onUpdateOffer, onUpdateOfferClose }) {
    const [user, setUser] = useState(userInfo)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style = ''
    })

    const updateOfferHandler = event => {
        event.preventDefault()

        const { title: { value: title }, description: { value: description }, photo: { value: photo },
            languages: { value: languages }, studies: { value: studies }, experiences: { value: experiences } } = event.target

        try {
            updateOffer(offerToUpdate.id, offerToUpdate.user, sessionStorage.token, title, description, photo, languages, studies, experiences)
                .then(() => onUpdateOffer())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    const closeOfferHandler = () => {
        onUpdateOfferClose()
    }

    const onFocusTextArea = event => {
        var offerContent = event.target.value

        event.target.value = ''

        event.target.value = offerContent
    }

    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closeOfferHandler}>
        <div onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-2/6 h-4/6 bg-white border-2 p-4 rounded-xl ${className ? className : ""}`}>
            <div className="flex flex-col items-center">
                <div className="grid w-full items-center grid-cols-12">
                    <span className="font-bold text-xl w-fit col-start-6 col-end-9">Update Offer</span>
                    <button className="border-2 w-fit h-fit justify-self-end col-start-12 col-end-13 px-2 py-1 rounded-xl" onClick={closeOfferHandler}>X</button>
                </div>
                <hr className="w-full mt-3.5" />
                <input name="title" id="title" type="text" className="outline-none self-start font-medium text-lg mt-2 w-full" defaultValue={offerToUpdate?.title} />
                <form className="flex flex-col items-center w-full mt-2 gap-2" onSubmit={updateOfferHandler}>
                    <textarea onFocus={onFocusTextArea} defaultValue={offerToUpdate?.description} autoFocus name="offer" id="offer" className="resize-none outline-none rounded-xl w-full" rows="2"></textarea>
                    <h3>Work Experiences: </h3>
                    {offerToUpdate?.experiences.map(experience => {
                        return <section key={experience._id}>
                            <label htmlFor="position" className="self-start">Position: </label>
                            <input type="text" name="position" id="position" defaultValue={experience.position} />
                            <label htmlFor="industry" className="self-start">Industry: </label>
                            <input type="text" name="industry" id="industry" defaultValue={experience.industry} />
                            <label htmlFor="years" className="self-start">Years: </label>
                            <input type="text" name="years" id="years" defaultValue={experience.years} />
                        </section>
                    })}
                    {offerToUpdate?.languages.map(language => {
                        return <section key={language._id}>
                            <label htmlFor="language" className="self-start">Language:</label>
                            <input type="text" name="language" id="language" defaultValue={language.language} />
                            <label htmlFor="level" className="self-start">Level:</label>
                            <input type="text" name="level" id="level" defaultValue={language.level} />
                        </section>
                    })}
                    <h3 className="self-start">Studies:</h3>
                    {offerToUpdate?.studies.map(study => {
                        return <section key={study._id}>
                            <input type="text" name="study" id="study" defaultValue={study.title} />
                        </section>
                    })}
                    <button className="bg-emerald-200 w-full h-10 mt-2 rounded-lg ">Update</button>
                </form>
            </div>
        </div>
    </div>
}

export default UpdateOffer