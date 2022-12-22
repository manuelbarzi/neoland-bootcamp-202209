import { useState, useEffect } from 'react'
import playQuest from '../logic/playQuest'
import retrieveMainRandomQuest from '../logic/retrieveMainRandomQuest'
import retrieveUser from '../logic/retrieveUser'
import bgDailyQuest from '../img/bg-dailyquest.png';
import buttonDone from '../img/button-done.png';
import buttonDoneActive from '../img/button-done-active.png';
import buttonPlayQuest from '../img/button-play-quest.png';
import buttonPlayQuestActive from '../img/button-play-quest-active.png';
import buttonExit from '../img/button-exit.png';
import buttonExitActive from '../img/button-exit-active.png';
import GAME_CONSTANTS from '../shared/constants';

function DailyQuest({ onClose }) {
    const [dailyQuest, setDailyQuest] = useState(null)
    const [user, setUser] = useState(null)
    const [hoverButtonDone, setHoverButtonDone] = useState(false)
    const [hoverButtonPlayQuest, setHoverButtonPlayQuest] = useState(false)
    const [hoverButtonExit, setHoverButtonExit] = useState(false)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    function isReadyToPlayQuest() {
        if (!user) {
            return false
        }

        const currentTimeMilliseconds = Date.now()
        const timeLapsed = currentTimeMilliseconds - user.lastQuestPlayedTime

        return timeLapsed >= GAME_CONSTANTS.dailyQuestCooldown;
    }

    function handlePlayQuest() {
        retrieveMainRandomQuest(sessionStorage.token)
            .then(quest => {
                setDailyQuest(quest)
                playQuest(sessionStorage.token, quest.id)
            })
    };

    return (
        <section className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden z-10" onClick={onClose}>
            <div className="flex flex-col justify-center" onClick={event => event.stopPropagation()}>
                <div className=''>
                    <img
                        className=''
                        src={bgDailyQuest}
                        alt="dailyQuest" />
                </div>

                {dailyQuest &&
                    [
                        <span className='absolute z-10 text-lime-400 ml-[3rem] mt-[12.4rem] text-center w-[16rem] h-[4.5rem] bg-inherit'>
                            {dailyQuest?.text}
                        </span>
                        ,
                        <img
                            src={hoverButtonDone ? buttonDoneActive : buttonDone}
                            alt="dailyQuest"
                            className='absolute z-10 ml-[6.55rem] mt-[23rem] cursor-pointer'
                            onMouseEnter={() => setHoverButtonDone(true)}
                            onMouseLeave={() => setHoverButtonDone(false)}
                            onClick={() => onClose()}
                        />
                    ]
                }

                {!dailyQuest &&
                    (isReadyToPlayQuest()
                        ? <img
                            src={hoverButtonPlayQuest ? buttonPlayQuestActive : buttonPlayQuest}
                            alt="dailyQuest"
                            className='absolute z-10 ml-[6.55rem] mt-[23rem] cursor-pointer'
                            onMouseEnter={() => setHoverButtonPlayQuest(true)}
                            onMouseLeave={() => setHoverButtonPlayQuest(false)}
                            onClick={handlePlayQuest}
                        />
                        :
                        [
                            <span key="text-not-ready" className='absolute z-10 text-rose-300 ml-[3rem] mt-[11.70rem] text-center w-[16rem] h-[4.5rem] bg-inherit'>
                                You are not ready yet to take on your next quest
                            </span>
                            ,
                            <img key="button-close"
                                src={hoverButtonExit ? buttonExitActive : buttonExit}
                                alt="dailyQuest"
                                className='absolute z-10 ml-[6.55rem] mt-[23rem] cursor-pointer'
                                onMouseEnter={() => setHoverButtonExit(true)}
                                onMouseLeave={() => setHoverButtonExit(false)}
                                onClick={() => onClose()}
                            />
                        ]
                    )
                }
            </div>
        </section >
    );
}

export default DailyQuest