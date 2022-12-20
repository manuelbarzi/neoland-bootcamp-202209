import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrieveAdventure from '../logic/retrieveAdventure'
import playAdventure from '../logic/playAdventure'
import AdventureStep from '../components/AdventureStep'
import { useParams } from 'react-router-dom'
import bgAdventureReward from '../img/bg-adventure-reward.png';
import buttonBack from '../img/icon-back.png';
import buttonPlayStep from '../img/button-play-step.png';
import buttonPlayStepDisabled from '../img/button-play-step-disabled.png';
import buttonPlayStepView from '../img/button-play-step-view.png';
import bgAdventureStep from '../img/bg-adventure-step.png';
import { Link } from 'react-router-dom'
import buttonAddStepActive from '../img/button-add-step-active.png';
import buttonAddStep from '../img/button-add-step.png';
import CreateAdventureStep from '../components/CreateAdventureStep'
import GAME_CONSTANTS from '../shared/constants';
import { format } from 'timeago.js'

function Adventure() {
    const [user, setUser] = useState(null)
    const [adventure, setAdventure] = useState(null)
    const [hoverButtonCreate, setHoverButtonCreate] = useState(false)
    const [createAdventureStepVisible, setCreateAdventureStepVisible] = useState(false)
    const [adventureStepVisible, setAdventureStepVisible] = useState(-1)
    const { adventureId } = useParams()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

            retrieveAdventure(sessionStorage.token, adventureId)
                .then(adventure => setAdventure(adventure))
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [adventureId])



    function getStepsCompleted() {
        if (!user) {
            return 0
        }

        const adventureData = user.adventuresPlayed.find(adventurePlayed => adventurePlayed.adventure === adventureId)
        return adventureData?.stepsCompleted ?? 0
    }

    function isUserOwnerOfAdventure() {
        if (!user || !adventure) {
            return false;
        }
        return adventure.creator.id === user.id
    }

    function isReadyToPlayAdventureStep() {
        if (!user) {
            return false
        }

        const currentTimeMilliseconds = Date.now()
        const adventureData = user.adventuresPlayed.find(adventurePlayed => adventurePlayed.adventure === adventureId)
        const lastStepPlayedTime = adventureData?.lastStepPlayedTime ?? 0
        const timeLapsed = currentTimeMilliseconds - lastStepPlayedTime
        return timeLapsed >= GAME_CONSTANTS.dailyQuestCooldown;
    }

    function getNextPlayDate() {
        if (!user) {
            return 0
        }

        const adventureData = user.adventuresPlayed.find(adventurePlayed => adventurePlayed.adventure === adventureId)
        const lastStepPlayedTime = adventureData?.lastStepPlayedTime ?? 0
        return lastStepPlayedTime + GAME_CONSTANTS.dailyQuestCooldown;
    }

    const playAdventureStep = i => {
        setAdventureStepVisible(i)
        try {
            playAdventure(sessionStorage.token, adventureId)
                .catch(error => alert(error.message));

        } catch (error) {
            alert(error.message)
        }
    }
    const viewAdventureStep = i => setAdventureStepVisible(i);
    const closeAdventureStep = () => {
        setAdventureStepVisible(-1)
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message));
        } catch (error) {
            alert(error.message)
        }
    }

    const openCreateAdventureStep = () => setCreateAdventureStepVisible(true)
    const closeCreateAdventureStep = () => setCreateAdventureStepVisible(false)
    const handleAdventureCreatedStep = () => {
        try {
            retrieveAdventure(sessionStorage.token, adventureId)
                .then(adventure => {
                    setAdventure(adventure)
                    setCreateAdventureStepVisible(false)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center gap-[2rem]">
                    <header className='text-white flex flex-row items-start justify-center'>
                        <Link to="/adventures">
                            <img
                                className='cursor-pointer absolute -ml-[3rem] mt-[0.9rem]'
                                src={buttonBack}
                                alt="back" />
                        </Link>
                        <span className='text-blue-400 text-[2rem]'>{adventure?.title}</span>
                    </header>
                    <section className=''>
                        {adventure &&
                            <section className='flex flex-col h-[27rem] w-[21.813rem] ml-[1rem] bg-inherit justify-start items-center overflow-y-scroll scrollbar overscroll-contain '>
                                {adventure.steps.map((step, i) =>
                                    [

                                        <div key={step._id} className="text-white mt-[0.7rem] flex flex-col relative">
                                            <span className="text-white absolute ml-[5.1rem] mt-[0.65rem]">
                                                Step {i + 1}
                                            </span>
                                            <img
                                                className=''
                                                src={bgAdventureStep}
                                                alt="bgAdventureStep" />
                                            {getStepsCompleted() > i &&
                                                <img
                                                    className='w-[7.375rem] -mt-[3.7rem] ml-[12.7rem] cursor-pointer'
                                                    src={buttonPlayStepView}
                                                    alt="buttonPlayStepView"
                                                    onClick={() => viewAdventureStep(i)} />
                                            }

                                            <span className='text-gray-400 absolute mt-10 ml-[5.1rem] text-[0.7rem] text-left w-[12.3rem]'>
                                                {getStepsCompleted() === i ? (
                                                    (isReadyToPlayAdventureStep()
                                                        ? 'Step available'
                                                        : 'Available ' + format(getNextPlayDate(), 'en-EN', { minInterval: 3, })
                                                    ))
                                                    : (getStepsCompleted() > i
                                                        ? 'Completed'
                                                        : 'Play previous steps first'
                                                    )
                                                }
                                            </span>

                                            {getStepsCompleted() === i && isReadyToPlayAdventureStep() &&
                                                <img
                                                    className='w-[7.375rem] -mt-[3.7rem] ml-[12.7rem] cursor-pointer'
                                                    src={buttonPlayStep}
                                                    alt="buttonPlayStep"
                                                    onClick={() => playAdventureStep(i)} />
                                            }
                                            {getStepsCompleted() === i && !isReadyToPlayAdventureStep() &&
                                                <img
                                                    className='w-[7.375rem] -mt-[3.7rem] ml-[12.7rem]'
                                                    src={buttonPlayStepDisabled}
                                                    alt="buttonPlayStepDisabled" />
                                            }
                                        </div>
                                    ]
                                )}
                            </section>}
                    </section>
                    {isUserOwnerOfAdventure() &&
                        <div className='flex flex-col items-center mt-[1rem]'>
                            <img
                                onMouseEnter={() => setHoverButtonCreate(true)}
                                onMouseLeave={() => setHoverButtonCreate(false)}
                                onClick={openCreateAdventureStep}
                                className='cursor-pointer'
                                src={hoverButtonCreate ? buttonAddStepActive : buttonAddStep}
                                alt="create" />
                        </div>
                    }
                    {adventureStepVisible >= 0 &&
                        <AdventureStep
                            stepNumber={adventureStepVisible}
                            onClose={closeAdventureStep} />}
                    {createAdventureStepVisible &&
                        <CreateAdventureStep
                            adventureId={adventureId}
                            onCreated={handleAdventureCreatedStep}
                            onClose={closeCreateAdventureStep} />}
                </div>
            </div>
        </div >
    );
}

export default Adventure