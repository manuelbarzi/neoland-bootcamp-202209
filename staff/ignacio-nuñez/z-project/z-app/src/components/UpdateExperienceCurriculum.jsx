import { useState, useEffect, useContext } from 'react'
import updateCurriculum from '../logic/updateCurriculum'
import errorHandling from '../utils/errorHandling'
import Button from './Button'
import { Context } from './Context'

function UpdateExperienceCurriculum({ className, onUpdateExperienceCurriculumClose, onUpdateExperienceCurriculum, curriculumExperienceData }) {
    const [experiences, setExperiences] = useState(curriculumExperienceData.experiences)

    const { showAlert } = useContext(Context)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style = ''
    })

    const updateExperienceCurriculumHandler = event => {
        event.preventDefault()

        let experiences = []

        if (event.target.position) {
            if (!event.target.position.value) {
                for (let i = 0; i < event.target.position.length; i++) {
                    const position = event.target.position[i].value
                    const years = event.target.years[i].value

                    experiences.push({ position, years })
                }
            } else {
                const { position: { value: position }, years: { value: years } } = event.target

                experiences.push({ position, years })
            }
        }
        try {
            updateCurriculum(sessionStorage.token, curriculumExperienceData.curriculumId, curriculumExperienceData.curriculumUserId, { experiences })
                .then(() => onUpdateExperienceCurriculum())
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })

        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const closeExperienceCurriculumHandler = () => {
        onUpdateExperienceCurriculumClose()
    }

    const handleNewExperience = () => {
        setExperiences(experiences => {
            const experiencesCopy = [...experiences]

            experiencesCopy.push({ idustry: "", position: "", years: "", id: Date.now() })

            return experiencesCopy
        })
    }

    const handleDeleteExperience = (id) => {
        setExperiences(experiences => {
            const experiencesCopy = [...experiences]

            const index = experiencesCopy.findIndex(experience => experience.id === id)

            experiencesCopy.splice(index, 1)

            return experiencesCopy
        })
    }

    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closeExperienceCurriculumHandler}>
        <article onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-[95%] h-fit bg-white border-2 p-4 rounded-xl ${className ? className : ""}`}>
            <div className="flex flex-col items-center">
                <div className="grid w-full items-center grid-cols-12">
                    <span className="font-bold text-xl w-fit col-start-2 col-end-11">Update Experiences</span>
                    <button className="border-2 w-fit h-fit justify-self-end col-start-12 col-end-13 px-2 py-1 rounded-xl" onClick={closeExperienceCurriculumHandler}>X</button>
                </div>
                <hr className="w-full mt-3.5" />
                <form onSubmit={updateExperienceCurriculumHandler} className="flex flex-col items-center w-full mt-2 gap-2">
                    <h3 className='font-semibold self-start'>Work Experiences: </h3>
                    {experiences?.map(experience => {
                        return <div key={experience.id} className="w-full self-start flex flex-col">
                            <div>
                                <label htmlFor="position" className="self-start font-semibold">Position: </label>
                                <input type="text" name="position" id="position" className="outline-none" placeholder='Position' defaultValue={experience.position} />
                            </div>
                            <div className='flex'>
                                <div>
                                    <label htmlFor="years" className="self-start h-full font-semibold">Years: </label>
                                    <input type="text" name="years" id="years" className="outline-none w-1/2" placeholder='Years' defaultValue={experience.years} />
                                </div>
                                <Button type="button" className="bg-red-300" onClick={() => handleDeleteExperience(experience.id)}>Delete</Button>
                            </div>
                        </div>
                    })}
                    <div className='flex justify-between gap-4 mt-5 w-full'>
                        <Button className="text-md bg-emerald-200 w-1/2" type="button" onClick={handleNewExperience}>New Experience</Button>
                        <Button className="text-md bg-green-400 w-1/2">Save Changes</Button>
                    </div>
                </form>
            </div>
        </article>
    </div>
}
export default UpdateExperienceCurriculum