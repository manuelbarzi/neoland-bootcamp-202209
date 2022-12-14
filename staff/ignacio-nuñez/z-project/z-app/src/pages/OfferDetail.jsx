import { useState, useEffect, useContext } from 'react'
import NavBar from '../components/NavBar'
import { format } from 'timeago.js'
import { useParams, Link } from "react-router-dom"
import retrieveOfferDetail from '../logic/retrieveOfferDetail'
import { Context } from "../components/Context"
import updateOffer from '../logic/updateOffer'
import UpdateLanguageOffer from '../components/UpdateLanguageOffer'
import UpdateExperienceOffer from '../components/UpdateExperienceOffer'
import UpdateStudyOffer from '../components/UpdateStudyOffer'
import UpdateKnowledgeOffer from '../components/UpdateKnowledgeOffer'
import Button from '../components/Button'
import UpdateSalaryOffer from '../components/UpdateSalaryOffer'
import errorHandling from '../utils/errorHandling'

function OfferDetail() {
    const [offer, setOffer] = useState()
    const [updatingLanguage, setUpdatingLanguage] = useState()
    const [updatingExperience, setUpdatingExperience] = useState()
    const [updatingStudy, setUpdatingStudy] = useState()
    const [updatingKnowledge, setUpdatingKnowledge] = useState()
    const [updatingSalary, setUpdatingSalary] = useState()

    const { user, showAlert } = useContext(Context)
    const { offerId } = useParams()

    useEffect(() => {
        if (user) {
            retrieveOffer()
        }
    }, [user])

    const retrieveOffer = () => {
        try {
            retrieveOfferDetail(sessionStorage.token, offerId, user.id)
                .then(offerDetail => setOffer(offerDetail))
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)

                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)

            showAlert(errorMessage, type)
        }
    }

    let titleTimeoutId

    const updateOfferTitle = event => {
        const { target: { value: title } } = event

        if (titleTimeoutId) clearTimeout(titleTimeoutId)

        try {
            titleTimeoutId = setTimeout(() => {
                updateOffer(sessionStorage.token, offerId, user.id, { title })
                    .catch(error => {
                        const { errorMessage, type } = errorHandling(error)
                        showAlert(errorMessage, type)
                    })
            }, 500)
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    let descriptionTimeoutId

    const updateOfferDescription = event => {
        const { target: { value: description } } = event

        if (descriptionTimeoutId) clearTimeout(descriptionTimeoutId)

        try {
            descriptionTimeoutId = setTimeout(() => {
                updateOffer(sessionStorage.token, offerId, user.id, { description })
                    .catch(error => {
                        const { errorMessage, type } = errorHandling(error)
                        showAlert(errorMessage, type)
                    })
            }, 500)
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    let locationTimeoutId

    const updateOfferLocation = event => {
        const { target: { value: location } } = event

        if (locationTimeoutId) clearTimeout(locationTimeoutId)

        try {
            locationTimeoutId = setTimeout(() => {
                updateOffer(sessionStorage.token, offerId, user.id, { location })
                    .catch(error => {
                        const { errorMessage, type } = errorHandling(error)
                        showAlert(errorMessage, type)
                    })
            }, 500)
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const updateOfferModality = event => {
        const { target: { value: modality } } = event

        try {
            updateOffer(sessionStorage.token, offerId, user.id, { modality })
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)

                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const updateOfferWorkTime = event => {
        const { target: { value: workTime } } = event

        try {
            updateOffer(sessionStorage.token, offerId, user.id, { workTime })
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const onLanguageClick = (offerId, offerUserId, languages) => {
        setUpdatingLanguage({ offerId, offerUserId, languages })
    }

    const onUpdateLanguageOffer = () => {
        setUpdatingLanguage()
        retrieveOffer()
    }

    const onUpdateLanguageOfferClose = () => {
        setUpdatingLanguage()
    }

    const onExperienceClick = (offerId, offerUserId, experiences) => {
        setUpdatingExperience({ offerId, offerUserId, experiences })
    }

    const onUpdateExperienceOffer = () => {
        setUpdatingExperience()
        retrieveOffer()
    }

    const onUpdateExperienceOfferClose = () => {
        setUpdatingExperience()
    }

    const onStudyClick = (offerId, offerUserId, studies) => {
        setUpdatingStudy({ offerId, offerUserId, studies })
    }

    const onUpdateStudyOffer = () => {
        setUpdatingStudy()
        retrieveOffer()
    }

    const onUpdateStudyOfferClose = () => {
        setUpdatingStudy()
    }

    const onKnowledgeClick = (offerId, offerUserId, knowledges) => {
        setUpdatingKnowledge({ offerId, offerUserId, knowledges })
    }

    const onUpdateKnowledgeOffer = () => {
        setUpdatingKnowledge()
        retrieveOffer()
    }

    const onUpdateKnowledgeOfferClose = () => {
        setUpdatingKnowledge()
    }

    const onSalaryClick = (offerId, offerUserId, salary) => {
        setUpdatingSalary({ offerId, offerUserId, salary })
    }

    const onUpdateSalaryOffer = () => {
        setUpdatingSalary()
        retrieveOffer()
    }

    const onUpdateSalaryOfferClose = () => {
        setUpdatingSalary()
    }

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-24">
                <section className="flex items-center flex-col p-2">
                    <article className="flex flex-col gap-2 shadow-sm shadow-slate-600 bg-emerald-200 mt-3.5 border-2 w-full rounded-xl">
                        <div className="flex justify-between z-10 p-2 mt-1">
                            {offer?.published ?
                                <h2 name='title' id='title' className='bg-emerald-200 p-2 border-2 font-semibold rounded-lg'>{offer?.title}</h2> :
                                <textarea onChange={updateOfferTitle} name='title' maxLength="25" id='title' rows='1' className='bg-emerald-200 p-2 border-2 font-semibold resize-none outline-none rounded-lg' defaultValue={offer?.title}></textarea>
                            }
                            <img className="w-1/5 text-xs p-2" src={offer?.photo} alt="company logo" />
                        </div>
                        <div className='flex flex-col gap-2 bg-white p-2'>
                            <div className=' rounded-lg bg-emerald-50 p-2'>
                                <div className='flex gap-6 justify-between'>
                                    {offer?.published ?
                                        <span className="text-md w-1/2 block py-2.5 px-0 text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 capitalize">{offer?.workTime ? offer.workTime : 'Work time'}</span> :
                                        <select onChange={updateOfferWorkTime} name="workTime" id="workTime" defaultValue={offer?.workTime ? offer.workTime : 'select'}
                                            className="text-md w-1/2 block py-2.5 px-0 text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option disabled hidden value="select">Work Time</option>
                                            <option value="part time">Part time</option>
                                            <option value="full time">Full time</option>
                                        </select>
                                    }
                                    {offer?.published ?
                                        <span className="text-md w-1/2 block py-2.5 px-0 text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 capitalize">{offer?.modality ? offer.modality : 'Modality'}</span> :
                                        <select onChange={updateOfferModality} name="modality" id="modality" defaultValue={offer?.modality ? offer.modality : 'select'}
                                            className="text-md w-1/2 block py-2.5 px-0 text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option disabled hidden value="select">Modality</option>
                                            <option value="remote">Remote</option>
                                            <option value="hybrid">Hybrid</option>
                                            <option value="face-to-face">Face-to-face</option>
                                        </select>
                                    }
                                </div>
                                <div className='flex gap-6 mt-2'>
                                    <div onClick={() => { return offer?.published ? null : onSalaryClick(offer.id, offer.user, offer.salary) }}
                                        className='flex justify-center w-1/2 cursor-pointer border rounded-md'>
                                        <div className='text-md text-gray-700 flex justify-start p-1 gap-2 w-full'>
                                            <span>Salary:</span>
                                            <div>
                                                <span>{offer?.salary?.salary ? offer.salary.salary : '-Salary-'} </span>
                                                <span>{offer?.salary?.currency}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {offer?.published ?
                                        <span className="text-md w-1/2 block py-2.5 px-0 text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 capitalize">{offer?.location ? offer.location : 'Location'}</span> :
                                        <input onChange={updateOfferLocation} defaultValue={offer?.location} type="text" placeholder='Location' className='w-1/2 p-1 outline-none rounded-md bg-emerald-50' />
                                    }
                                </div>
                            </div>
                            <div className='bg-slate-100 p-2 rounded-lg'>
                                <h3 className='font-semibold'>Description:</h3>
                                {offer?.published ?
                                    <p name='description' id='description' className='ml-1'>{offer?.description}</p> :
                                    <textarea onChange={updateOfferDescription} maxLength="140" rows='3' name='description' id='description' className='w-full font-medium resize-none outline-none bg-slate-100 rounded-lg' placeholder='Description' defaultValue={offer?.description}></textarea>
                                }
                            </div>
                            <div onClick={() => { return offer.published ? null : onExperienceClick(offer.id, offer.user, offer.experiences) }} className="cursor-pointer rounded-lg bg-emerald-50 p-2">
                                <h2 className='font-semibold'>Experiences: </h2>
                                {!offer?.experiences.length && <span> Not Experiences Requireds</span>}
                                <ul className='flex flex-col gap-2'>
                                    {offer?.experiences.map(experience => {
                                        return <li key={experience.id}>
                                            <h3>-Position: {experience.position}</h3>
                                            <span className='ml-2'>{experience.years} years of experience</span>
                                            {/* <h4>Industry: {experience.industry}</h4> */}
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <div onClick={() => { return offer.published ? null : onStudyClick(offer.id, offer.user, offer.studies) }} className="cursor-pointer rounded-lg bg-slate-100 p-2">
                                    <h2 className='font-semibold'>Studies:</h2>
                                    {!offer?.studies?.length ? <span>Not Studies Required</span> :
                                        offer?.studies.map(study => {
                                            return <div key={study.id}>
                                                <h3>{study.title}</h3>
                                            </div>
                                        })}
                                </div>
                            </div>
                            <div onClick={() => { return offer.published ? null : onKnowledgeClick(offer.id, offer.user, offer.knowledges) }} className="cursor-pointer rounded-lg bg-emerald-50 p-2">
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
                            <div onClick={() =>{return offer.published ? null :  onLanguageClick(offer.id, offer.user, offer.languages)}} className="cursor-pointer rounded-lg bg-slate-100 p-2">
                                <h2 className='font-semibold'>Languages:</h2>
                                {!offer?.languages?.length ? <span>Not Languages Required</span> :
                                    <div className="flex flex-wrap">
                                        {offer?.languages.map(language => {
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
                        <div className='w-full z-10 flex justify-between p-2'>
                            <Link to='/user/profile' className='w-1/3'><Button className='bg-emerald-300 w-full'>Go Back</Button></Link>
                            <p className="self-end p-2">{format(offer?.createDate)}</p>
                        </div>
                    </article>
                </section>
                {updatingExperience &&
                    <UpdateExperienceOffer
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateExperienceOfferClose={onUpdateExperienceOfferClose}
                        offerExperienceData={updatingExperience}
                        onUpdateExperienceOffer={onUpdateExperienceOffer}
                    />
                }
                {updatingLanguage &&
                    <UpdateLanguageOffer
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateLanguageOfferClose={onUpdateLanguageOfferClose}
                        offerLanguageData={updatingLanguage}
                        onUpdateLanguageOffer={onUpdateLanguageOffer}
                    />
                }
                {updatingStudy &&
                    <UpdateStudyOffer
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateStudyOfferClose={onUpdateStudyOfferClose}
                        offerStudyData={updatingStudy}
                        onUpdateStudyOffer={onUpdateStudyOffer}
                    />
                }
                {updatingKnowledge &&
                    <UpdateKnowledgeOffer
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateKnowledgeOfferClose={onUpdateKnowledgeOfferClose}
                        offerKnowledgeData={updatingKnowledge}
                        onUpdateKnowledgeOffer={onUpdateKnowledgeOffer}
                    />
                }
                {updatingSalary &&
                    <UpdateSalaryOffer
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateSalaryOfferClose={onUpdateSalaryOfferClose}
                        offerSalaryData={updatingSalary}
                        onUpdateSalaryOffer={onUpdateSalaryOffer}
                    />
                }
            </div>
        </div>
    </main >
}
export default OfferDetail