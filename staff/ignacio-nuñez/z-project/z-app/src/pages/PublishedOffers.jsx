import { useContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { Context } from "../components/Context"
import retrievePublishedOffers from "../logic/retrievePublishedOffers"
import { format } from 'timeago.js'
import Button from "../components/Button"
import errorHandling from "../utils/errorHandling"

function PublishedOffers() {
    const [offers, setOffers] = useState([])

    const { user, showAlert } = useContext(Context)

    useEffect(() => {
        try {
            retrievePublishedOffers(sessionStorage.token)
                .then(offers => {
                    setOffers(offers)
                })
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }, [])

    const userName = user && user.name

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <section className="flex items-center flex-col p-2">
                    {offers.map(offer => {
                        return <article className="flex flex-col gap-2 shadow-sm shadow-slate-600 bg-emerald-200 mt-3.5 border-2 w-full rounded-xl">
                            <div className="flex justify-between z-10 p-2 mt-1">
                                <h2 className='bg-emerald-200 p-2 border-2 font-semibold resize-none outline-none rounded-lg'>{offer.title}</h2>
                                <img className="w-1/5 text-xs p-2" src={offer.photo} alt="company logo" />
                            </div>
                            <div className='flex flex-col gap-2 bg-white p-2'>
                                <h3 className='font-medium resize-none outline-none bg-slate-100 p-2 rounded-lg'>{offer.description}</h3>
                                <div className="rounded-lg bg-emerald-50 p-2">
                                    <h2 className='font-semibold'>Experiences: {!offer.experiences.length && 'Not Experiences Requireds'}</h2>
                                    {offer.experiences.map(experience => {
                                        return <div key={experience.id}>
                                            <h3>Position: {experience.position}</h3>
                                            <h4>Industry: {experience.industry}</h4>
                                            <span>{experience.years} years of experience</span>
                                        </div>
                                    })}
                                </div>
                                <div>
                                    <div className="rounded-lg bg-slate-100 p-2">
                                        <h2 className='font-semibold'>Studies:</h2>
                                        {!offer.studies?.length ? <span>Not Studies Required</span> :
                                            offer.studies.map(study => {
                                                return <div key={study.id}>
                                                    <h3>{study.title}</h3>
                                                </div>
                                            })}
                                    </div>
                                </div>
                                <div className="rounded-lg bg-emerald-50 p-2">
                                    <h2 className='font-semibold'>Knowledges:</h2>
                                    {!offer.knowledges?.length ? <span> Not Knowledges Required </span> :
                                        <div className="flex flex-wrap">
                                            {offer.knowledges.map(knowledge => {
                                                return <div key={knowledge.id} className="flex gap-1 w-full">
                                                    <span>{knowledge.title}: </span>
                                                    <span>{knowledge.level}</span>
                                                </div>
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className="rounded-lg bg-slate-100 p-2">
                                    <h2 className='font-semibold'>Languages:</h2>
                                    {!offer.languages?.length ? <span>Not Languages Required</span> :
                                        <div className="flex flex-wrap">
                                            {offer.languages.map(language => {
                                                return <div key={language.id} className="flex flex-col w-1/2">
                                                    <div>
                                                        <span>{language.language}: </span>
                                                        <span>{language.level}</span>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    }
                                </div>
                                <p className="self-end p-1">{format(offer.createDate)}</p>
                            </div>
                            <div className='z-10 flex justify-between gap-4 p-1 mb-2'>
                                <Button className="text-lg font-semibold bg-red-400 w-1/2">X</Button>
                                <Button className="text-lg font-semibold bg-green-400 w-1/2">Yes</Button>
                            </div>
                        </article>
                    })}
                </section>
            </div>
        </div>
    </main>
}

export default PublishedOffers