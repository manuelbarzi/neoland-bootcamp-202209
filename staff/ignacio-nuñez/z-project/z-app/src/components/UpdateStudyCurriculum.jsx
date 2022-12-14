import { useState, useEffect, useContext } from 'react'
import updateCurriculum from '../logic/updateCurriculum'
import errorHandling from '../utils/errorHandling'
import Button from './Button'
import { Context } from './Context'

function UpdateStudyCurriculum({ className, onUpdateStudyCurriculumClose, onUpdateStudyCurriculum, curriculumStudyData }) {
    const [studies, setStudies] = useState(curriculumStudyData.studies)

    const { showAlert } = useContext(Context)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style = ''
    })

    const updateStudyCurriculumHandler = event => {
        event.preventDefault()

        let studies = []

        if (event.target.study) {
            if (!event.target.study.value) {
                for (let i = 0; i < event.target.study.length; i++) {
                    const title = event.target.study[i].value

                    studies.push({ title })
                }
            } else {
                const { study: { value: title } } = event.target

                studies.push({ title })
            }
        }
        try {
            updateCurriculum(sessionStorage.token, curriculumStudyData.curriculumId, curriculumStudyData.curriculumUserId, { studies })
                .then(() => onUpdateStudyCurriculum())
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })

        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const closeStudyCurriculumHandler = () => {
        onUpdateStudyCurriculumClose()
    }

    const handleNewStudy = () => {
        setStudies(studies => {
            const studiesCopy = [...studies]

            studiesCopy.push({ title: '', id: Date.now() })

            return studiesCopy
        })
    }

    const handleDeleteStudy = (id) => {
        setStudies(studies => {
            const studiesCopy = [...studies]

            const index = studiesCopy.findIndex(study => study.id === id)

            studiesCopy.splice(index, 1)

            return studiesCopy
        })
    }

    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closeStudyCurriculumHandler}>
        <article onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-[95%] h-fit bg-white border-2 p-4 rounded-xl ${className ? className : ""}`}>
            <div className="flex flex-col items-center">
                <div className="grid w-full items-center grid-cols-12">
                    <span className="font-bold text-xl w-fit col-start-2 col-end-11">Update Studies</span>
                    <button className="border-2 w-fit h-fit justify-self-end col-start-12 col-end-13 px-2 py-1 rounded-xl" onClick={closeStudyCurriculumHandler}>X</button>
                </div>
                <hr className="w-full mt-3.5" />
                <form onSubmit={updateStudyCurriculumHandler} className="flex flex-col items-center w-full mt-2 gap-2">
                    <h3 className='font-semibold self-start'>Studies: </h3>
                    {studies?.map(study => {
                        return <div key={study.id} className="w-full self-start flex flex-col">
                            <div className='flex p-1'>
                                <textarea type="text" name="study" id="study" className="resize-none outline-none w-full" placeholder='Put a study here' defaultValue={study?.title}></textarea>
                                <Button type="button" className="bg-red-300" onClick={() => handleDeleteStudy(study.id)}>Delete</Button>
                            </div>
                            <hr className="w-full" />
                        </div>
                    })}
                    <div className='flex justify-between gap-4 mt-5 w-full'>
                        <Button className="text-md bg-emerald-200 w-1/2" type="button" onClick={handleNewStudy}>New Study</Button>
                        <Button className="text-md bg-green-400 w-1/2">Save Changes</Button>
                    </div>
                </form>
            </div>
        </article>
    </div>
}
export default UpdateStudyCurriculum