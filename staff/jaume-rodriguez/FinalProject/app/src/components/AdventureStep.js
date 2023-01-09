import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import retrieveAdventure from '../logic/retrieveAdventure'
import bgAdventureStepPlayed from '../img/bg-adventure-step-played.png';
import buttonExit from '../img/button-exit.png';
import buttonExitActive from '../img/button-exit-active.png';

function AdventureStep({ stepNumber, onClose }) {
    const [adventure, setAdventure] = useState(null)
    const [hoverButtonExit, setHoverButtonExit] = useState(false)
    const { adventureId } = useParams()

    useEffect(() => {
        try {
            retrieveAdventure(sessionStorage.token, adventureId)
                .then(adventure => {
                    setAdventure(adventure)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [adventureId])

    return (
        <section
            className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden z-10"
            onClick={onClose}>
            <div className="flex flex-col justify-center" onClick={event => event.stopPropagation()}>
                <div className=''>
                    <img
                        className=''
                        src={bgAdventureStepPlayed}
                        alt="dailyQuest" />
                </div>

                {adventure != null && stepNumber != null &&
                    [
                        <span className='absolute z-10 text-lime-400 ml-[3rem] mt-[11.70rem] text-center w-[16rem] h-[4.5rem] bg-inherit'>
                            {adventure.steps[stepNumber]?.text}
                        </span>
                        ,
                        <img
                            src={hoverButtonExit ? buttonExitActive : buttonExit}
                            alt="exitButton"
                            className='absolute z-10 ml-[6.55rem] mt-[23rem] cursor-pointer'
                            onMouseEnter={() => setHoverButtonExit(true)}
                            onMouseLeave={() => setHoverButtonExit(false)}
                            onClick={() => onClose()}
                        />
                    ]
                }
            </div>
        </section >
    );
}

export default AdventureStep