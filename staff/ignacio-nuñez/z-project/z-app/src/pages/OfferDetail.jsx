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

function OfferDetail() {
    const [offer, setOffer] = useState()
    const [updatingLanguage, setUpdatingLanguage] = useState()
    const [updatingExperience, setUpdatingExperience] = useState()
    const [updatingStudy, setUpdatingStudy] = useState()
    const [updatingKnowledge, setUpdatingKnowledge] = useState()

    const { user } = useContext(Context)
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
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    let titleTimeoutId

    const updateOfferTitle = event => {
        const { target: { value: title } } = event

        if (titleTimeoutId) clearTimeout(titleTimeoutId)

        try {
            titleTimeoutId = setTimeout(() => {
                updateOffer(sessionStorage.token, offerId, user.id, { title })
            }, 500)
        } catch (error) {
            alert(error.message)
        }
    }

    let descriptionTimeoutId

    const updateOfferDescription = event => {
        const { target: { value: description } } = event

        if (descriptionTimeoutId) clearTimeout(descriptionTimeoutId)

        try {
            descriptionTimeoutId = setTimeout(() => {
                updateOffer(sessionStorage.token, offerId, user.id, { description })
            }, 500)
        } catch (error) {
            alert(error.message)
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

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <section className="flex items-center flex-col p-2">
                    <article className="flex flex-col gap-2 shadow-sm shadow-slate-600 bg-emerald-200 mt-3.5 border-2 w-full rounded-xl">
                        <div className="flex justify-between z-10 p-2 mt-1">
                            <textarea onChange={updateOfferTitle} name='title' id='title' className='bg-emerald-200 p-2 border-2 font-semibold resize-none outline-none rounded-lg' defaultValue={offer?.title}></textarea>
                            <img className="w-1/5 text-xs p-2" src={offer?.photo} alt="company logo" />
                        </div>
                        <div className='flex flex-col gap-2 bg-white p-2'>
                        <textarea onChange={updateOfferDescription} name='description' id='description' className='font-medium resize-none outline-none bg-slate-100 p-2 rounded-lg' defaultValue={offer?.description}></textarea>
                        <div onClick={() => onExperienceClick(offer.id, offer.user, offer.experiences)} className="cursor-pointer rounded-lg bg-emerald-50 p-2">
                            <h2 className='font-semibold'>Experiences: {!offer?.experiences.length && 'Not Experiences Requireds'}</h2>
                            {offer?.experiences.map(experience => {
                                return <div key={experience.id}>
                                    <h3>Position: {experience.position}</h3>
                                    <h4>Industry: {experience.industry}</h4>
                                    <span>{experience.years} years of experience</span>
                                </div>
                            })}
                        </div>
                        <div>
                            <div onClick={() => onStudyClick(offer.id, offer.user, offer.studies)} className="cursor-pointer rounded-lg bg-slate-100 p-2">
                                <h2 className='font-semibold'>Studies:</h2>
                                {!offer?.studies?.length ? <span>Not Studies Required</span> :
                                    offer?.studies.map(study => {
                                        return <div key={study.id}>
                                            <h3>{study.title}</h3>
                                        </div>
                                    })}
                            </div>
                        </div>
                        <div onClick={() => onKnowledgeClick(offer.id, offer.user, offer.knowledges)} className="cursor-pointer rounded-lg bg-emerald-50 p-2">
                            <h2 className='font-semibold'>Knowledges:</h2>
                            {!offer?.knowledges?.length ? <span> Not Knowledges Required </span> :
                                <div className="flex flex-wrap">
                                    {offer?.knowledges.map(knowledge => {
                                        return <div key={knowledge.id} className="flex gap-1 w-full">
                                            <span>{knowledge.title}: </span>
                                            <span>{knowledge.level}</span>
                                        </div>
                                    })}
                                </div>
                            }
                        </div>
                        <div onClick={() => onLanguageClick(offer.id, offer.user, offer.languages)} className="cursor-pointer rounded-lg bg-slate-100 p-2">
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
                        <div className='w-full z-10 flex justify-between p-2 mt-2'>
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
            </div>
        </div>
    </main>
}
export default OfferDetail