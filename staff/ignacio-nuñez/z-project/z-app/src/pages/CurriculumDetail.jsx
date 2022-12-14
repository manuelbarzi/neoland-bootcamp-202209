import { useState, useEffect, useContext } from 'react'
import NavBar from '../components/NavBar'
import { format } from 'timeago.js'
import { useParams, Link } from "react-router-dom"
import retrieveCurriculumDetail from '../logic/retrieveCurriculumDetail'
import { Context } from "../components/Context"
import updateCurriculum from '../logic/updateCurriculum'
import UpdateLanguageCurriculum from '../components/UpdateLanguageCurriculum'
import UpdateExperienceCurriculum from '../components/UpdateExperienceCurriculum'
import UpdateStudyCurriculum from '../components/UpdateStudyCurriculum'
import UpdateKnowledgeCurriculum from '../components/UpdateKnowledgeCurriculum'
import Button from '../components/Button'
import errorHandling from '../utils/errorHandling'

function CurriculumDetail() {
    const [curriculum, setCurriculum] = useState()
    const [updatingLanguage, setUpdatingLanguage] = useState()
    const [updatingExperience, setUpdatingExperience] = useState()
    const [updatingStudy, setUpdatingStudy] = useState()
    const [updatingKnowledge, setUpdatingKnowledge] = useState()

    const { user, showAlert } = useContext(Context)
    const { curriculumId } = useParams()

    useEffect(() => {
        if (user) {
            retrieveCurriculum()
        }
    }, [user])

    const retrieveCurriculum = () => {
        try {
            retrieveCurriculumDetail(sessionStorage.token, curriculumId, user.id)
                .then(curriculumDetail => setCurriculum(curriculumDetail))
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

    const updateCurriculumTitle = event => {
        const { target: { value: title } } = event

        if (titleTimeoutId) clearTimeout(titleTimeoutId)

        try {
            titleTimeoutId = setTimeout(() => {
                updateCurriculum(sessionStorage.token, curriculumId, user.id, { title })
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

    const updateCurriculumDescription = event => {
        const { target: { value: description } } = event

        if (descriptionTimeoutId) clearTimeout(descriptionTimeoutId)

        try {
            descriptionTimeoutId = setTimeout(() => {
                updateCurriculum(sessionStorage.token, curriculumId, user.id, { description })
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

    const updateCurriculumLocation = event => {
        const { target: { value: location } } = event

        if (locationTimeoutId) clearTimeout(locationTimeoutId)

        try {
            locationTimeoutId = setTimeout(() => {
                updateCurriculum(sessionStorage.token, curriculumId, user.id, { location })
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

    const updateCurriculumModality = event => {
        const { target: { value: modality } } = event

        try {
            updateCurriculum(sessionStorage.token, curriculumId, user.id, { modality })
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)

                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const updateCurriculumWorkTime = event => {
        const { target: { value: workTime } } = event

        try {
            updateCurriculum(sessionStorage.token, curriculumId, user.id, { workTime })
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const onLanguageClick = (curriculumId, curriculumUserId, languages) => {
        setUpdatingLanguage({ curriculumId, curriculumUserId, languages })
    }

    const onUpdateLanguageCurriculum = () => {
        setUpdatingLanguage()
        retrieveCurriculum()
    }

    const onUpdateLanguageCurriculumClose = () => {
        setUpdatingLanguage()
    }

    const onExperienceClick = (curriculumId, curriculumUserId, experiences) => {
        setUpdatingExperience({ curriculumId, curriculumUserId, experiences })
    }

    const onUpdateExperienceCurriculum = () => {
        setUpdatingExperience()
        retrieveCurriculum()
    }

    const onUpdateExperienceCurriculumClose = () => {
        setUpdatingExperience()
    }

    const onStudyClick = (curriculumId, curriculumUserId, studies) => {
        setUpdatingStudy({ curriculumId, curriculumUserId, studies })
    }

    const onUpdateStudyCurriculum = () => {
        setUpdatingStudy()
        retrieveCurriculum()
    }

    const onUpdateStudyCurriculumClose = () => {
        setUpdatingStudy()
    }

    const onKnowledgeClick = (curriculumId, curriculumUserId, knowledges) => {
        setUpdatingKnowledge({ curriculumId, curriculumUserId, knowledges })
    }

    const onUpdateKnowledgeCurriculum = () => {
        setUpdatingKnowledge()
        retrieveCurriculum()
    }

    const onUpdateKnowledgeCurriculumClose = () => {
        setUpdatingKnowledge()
    }

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-24">
                <section className="flex items-center flex-col p-2">
                    <article className="flex flex-col gap-2 shadow-sm shadow-slate-600 bg-emerald-200 mt-3.5 border-2 w-full rounded-xl">
                        <div className="flex justify-between z-10 p-2 mt-1">
                            {curriculum?.published ?
                                <h2 name='title' id='title' className='bg-emerald-200 p-2 border-2 font-semibold rounded-lg'>{curriculum?.title}</h2> :
                                <textarea onChange={updateCurriculumTitle} name='title' maxLength="25" id='title' rows='1' className='bg-emerald-200 p-2 border-2 font-semibold resize-none outline-none rounded-lg' defaultValue={curriculum?.title}></textarea>
                            }
                            <img className="w-1/5 text-xs p-2" src={curriculum?.photo} alt="worker logo" />
                        </div>
                        <div className='flex flex-col gap-2 bg-white p-2'>
                            <div className=' rounded-lg bg-emerald-50 p-2'>
                                <div className='flex gap-6 justify-between'>
                                </div>
                                <div className='flex gap-6 mt-2'>
                                <h2 className='font-semibold'>Location:</h2>
                                    {curriculum?.published ?
                                        <span className="text-md w-1/2 block py-2.5 px-0 text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 capitalize">{curriculum?.location ? curriculum.location : 'Location'}</span> :
                                        <input onChange={updateCurriculumLocation} defaultValue={curriculum?.location} type="text" placeholder='Location' className='w-1/2 p-1 outline-none rounded-md bg-emerald-50' />
                                    }
                                </div>
                            </div>
                            <div className='bg-slate-100 p-2 rounded-lg'>
                                <h3 className='font-semibold'>Description:</h3>
                                {curriculum?.published ?
                                    <p name='description' id='description' className='ml-1'>{curriculum?.description}</p> :
                                    <textarea onChange={updateCurriculumDescription} maxLength="140" rows='3' name='description' id='description' className='w-full font-medium resize-none outline-none bg-slate-100 rounded-lg' placeholder='Put a description' defaultValue={curriculum?.description}></textarea>
                                }
                            </div>
                            <div onClick={() => { return curriculum.published ? null : onExperienceClick(curriculum.id, curriculum.user, curriculum.experiences) }} className="cursor-pointer rounded-lg bg-emerald-50 p-2">
                                <h2 className='font-semibold'>Experiences: </h2>
                                {!curriculum?.experiences.length && <span> Not Experiences Requireds</span>}
                                <ul className='flex flex-col gap-2'>
                                    {curriculum?.experiences.map(experience => {
                                        return <li key={experience.id}>
                                            <h3>-Position: {experience.position}</h3>
                                            <span className='ml-2'>{experience.years} years of experience</span>
                                            {/* <h4>Industry: {experience.industry}</h4> */}
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <div onClick={() => { return curriculum.published ? null : onStudyClick(curriculum.id, curriculum.user, curriculum.studies) }} className="cursor-pointer rounded-lg bg-slate-100 p-2">
                                    <h2 className='font-semibold'>Studies:</h2>
                                    {!curriculum?.studies?.length ? <span>Not Studies Required</span> :
                                        curriculum?.studies.map(study => {
                                            return <div key={study.id}>
                                                <h3>{study.title}</h3>
                                            </div>
                                        })}
                                </div>
                            </div>
                            <div onClick={() => { return curriculum.published ? null : onKnowledgeClick(curriculum.id, curriculum.user, curriculum.knowledges) }} className="cursor-pointer rounded-lg bg-emerald-50 p-2">
                                <h2 className='font-semibold'>Knowledges:</h2>
                                {!curriculum?.knowledges?.length ? <span> Not Knowledges Required </span> :
                                    <ul className="flex flex-wrap gap-2">
                                        {curriculum?.knowledges.map(knowledge => {
                                            return <li key={knowledge.id} className="max-w-[45%] text-sm flex border flex-col gap-1 rounded-xl p-1">
                                                <span>{knowledge.title}</span>
                                                <span>Level: <span className='capitalize'>{knowledge.level}</span></span>
                                            </li>
                                        })}
                                    </ul>
                                }
                            </div>
                            <div onClick={() => { return curriculum.published ? null : onLanguageClick(curriculum.id, curriculum.user, curriculum.languages) }} className="cursor-pointer rounded-lg bg-slate-100 p-2">
                                <h2 className='font-semibold'>Languages:</h2>
                                {!curriculum?.languages?.length ? <span>Not Languages Required</span> :
                                    <div className="flex flex-wrap">
                                        {curriculum?.languages.map(language => {
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
                            <p className="self-end p-2">{format(curriculum?.createDate)}</p>
                        </div>
                    </article>
                </section>
                {updatingExperience &&
                    <UpdateExperienceCurriculum
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateExperienceCurriculumClose={onUpdateExperienceCurriculumClose}
                        curriculumExperienceData={updatingExperience}
                        onUpdateExperienceCurriculum={onUpdateExperienceCurriculum}
                    />
                }
                {updatingLanguage &&
                    <UpdateLanguageCurriculum
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateLanguageCurriculumClose={onUpdateLanguageCurriculumClose}
                        curriculumLanguageData={updatingLanguage}
                        onUpdateLanguageCurriculum={onUpdateLanguageCurriculum}
                    />
                }
                {updatingStudy &&
                    <UpdateStudyCurriculum
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateStudyCurriculumClose={onUpdateStudyCurriculumClose}
                        curriculumStudyData={updatingStudy}
                        onUpdateStudyCurriculum={onUpdateStudyCurriculum}
                    />
                }
                {updatingKnowledge &&
                    <UpdateKnowledgeCurriculum
                        className={"inset-x-[2.5%] inset-y-[15%] absolute"}
                        onUpdateKnowledgeCurriculumClose={onUpdateKnowledgeCurriculumClose}
                        curriculumKnowledgeData={updatingKnowledge}
                        onUpdateKnowledgeCurriculum={onUpdateKnowledgeCurriculum}
                    />
                }
            </div>
        </div>
    </main >
}
export default CurriculumDetail