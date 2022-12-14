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
            <div className="flex items-center flex-col mt-20">
                <section className="flex items-center flex-col p-2">
                    {offers?.length ? offers.map(offer => {
                        return <article key={offer.id} className="flex flex-col gap-2 shadow-sm shadow-slate-600 bg-emerald-200 mt-3.5 border-2 w-full rounded-xl">
                            <div className="flex justify-between z-10 p-2 mt-1">
                                <h2 className='bg-emerald-200 p-2 border-2 font-semibold resize-none outline-none rounded-lg'>{offer.title}</h2>
                                <img className="w-1/5 text-xs p-2" src={offer.photo} alt="company logo" />
                            </div>
                            <div className='flex flex-col gap-2 bg-white p-2'>
                                <div className=' rounded-lg bg-emerald-50 p-2'>
                                    <div className='flex gap-6 justify-between'>
                                        <div className='flex justify-center w-1/2  border rounded-md'>
                                            <span className="text-md w-1/2 py-2.5 text-gray-700 bg-transparent border-0 border-gray-200 capitalize">{offer?.workTime ? offer.workTime : 'Work time'}</span>
                                        </div>
                                        <div className='flex justify-center w-1/2  border rounded-md'>
                                            <span className="text-md w-1/2 py-2.5 text-gray-700 bg-transparent border-0 border-gray-200 capitalize">{offer?.modality ? offer.modality : 'Modality'}</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-6 mt-2'>
                                        <div className='flex justify-center items-center w-1/2  border rounded-md'>
                                            <div className='text-md text-gray-700 flex p-1 gap-2'>
                                                <span >Salary:</span>
                                                <div>
                                                    <span>{offer?.salary?.salary ? offer.salary.salary : '-Salary-'}</span>
                                                    <span>{offer?.salary?.currency}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center w-1/2  border rounded-md'>
                                            <span className="text-md w-1/2 py-2.5 px-0 text-gray-700 bg-transparent border-0 border-gray-200 capitalize">{offer?.location ? offer.location : 'Location'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-slate-100 p-2 rounded-lg'>
                                    <h3 className='font-semibold'>Description:</h3>
                                    <p className='ml-1'>{offer?.description}</p>

                                </div>
                                <div className="rounded-lg bg-emerald-50 p-2">
                                    <h2 className='font-semibold'>Experiences: {!offer.experiences.length && 'Not Experiences Requireds'}</h2>
                                    {offer.experiences.map(experience => {
                                        return <div key={experience.id}>
                                            <h3>Position: {experience.position}</h3>
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
                                <div className=" rounded-lg bg-emerald-50 p-2">
                                <h2 className='font-semibold'>Knowledges:</h2>
                                {!offer?.knowledges?.length ? <span> Not Knowledges Required </span> :
                                    <ul className="flex flex-wrap gap-2">
                                        {offer?.knowledges.map(knowledge => {
                                            return <li key={knowledge.id} className="max-w-[45%] text-sm flex border flex-col gap-1 rounded-xl p-1">
                                                <span>{knowledge.title}</span>
                                                <span>Level: <span className='capitalize'>{knowledge.level}</span></span>
                                            </li>
                                        })}
                                    </ul>
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
                            </div>
                            <div className='z-10 flex justify-between gap-2 p-1 mb-2'>
                                <Button className="text-lg font-semibold bg-red-400 w-1/3">X</Button>
                                <p className="self-end text-sm p-1">{format(offer.createDate)}</p>
                                <Button className="text-lg font-semibold bg-green-400 w-1/3">Yes</Button>
                            </div>
                        </article>
                    }) : <div>
                        <h3>There is not published offers yet</h3>
                    </div>
                    }
                </section>
            </div>
        </div>
    </main>
}

export default PublishedOffers