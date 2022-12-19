import { useState, useEffect } from 'react'
import retrieveAdventure from '../logic/retrieveAdventure'
import { useParams } from 'react-router-dom'
import bgAdventureReward from '../img/bg-adventure-reward.png';
import buttonBack from '../img/icon-back.png';
import buttonHome from '../img/icon-home.png';
import buttonPlayStep from '../img/button-play-step.png';
import bgAdventureStep from '../img/bg-adventure-step.png';
import { Link } from 'react-router-dom'
import buttonAddStepActive from '../img/button-add-step-active.png';
import buttonAddStep from '../img/button-add-step.png';
import CreateAdventureStep from '../components/CreateAdventureStep'

function Adventure() {
    const [adventure, setAdventure] = useState(null)
    const [hoverButtonCreate, setHoverButtonCreate] = useState(false)
    const [createAdventureStepVisible, setCreateAdventureStepVisible] = useState(false)
    const { adventureId } = useParams()

    useEffect(() => {
        console.log("useEffect");
        try {
            retrieveAdventure(sessionStorage.token, adventureId)
                .then(adventure => {
                    setAdventure(adventure)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [adventureId])


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


    const openCreateAdventureStep = () => setCreateAdventureStepVisible(true)
    const closeCreateAdventureStep = () => setCreateAdventureStepVisible(false)

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center w-96 gap-[2.8rem] h-[42rem]">
                    <header className='text-white flex flex-col mt-[0.5rem] '>
                        <Link to="/adventures">
                            <img
                                className='absolute z-10 -mt-[0.1rem] hover:-ml-[0.2rem] duration-100 cursor-pointer'
                                src={buttonBack}
                                alt="back" />
                        </Link>
                        <Link to="/">
                            <img
                                className='absolute -mt-[1rem] ml-[20rem] pt-1 cursor-pointer'
                                src={buttonHome}
                                alt="home" />
                        </Link>
                        <span className='text-yellow-400 text-[2rem] ml-[3rem] -mt-[1rem]'>{adventure?.title}</span>
                    </header>
                    <section className='flex flex-col items-center'>
                        {adventure &&
                            <section className='flex flex-col -mt-[0.6rem] h-[27rem] w-[24rem] bg-inherit justify-start items-center overflow-y-scroll scrollbar overscroll-contain '>
                                <img
                                    className=''
                                    src={bgAdventureReward}
                                    alt="bgAdventureReward" />
                                {adventure.steps.map(step =>
                                    <div key={step.id} className="text-white mt-[0.7rem] flex flex-col">
                                        <img
                                            className=''
                                            src={bgAdventureStep}
                                            alt="bgAdventureStep" />
                                        <img
                                            className='w-[7.375rem] -mt-[3.7rem] ml-[14rem]'
                                            src={buttonPlayStep}
                                            alt="bgAdventureStep" />
                                    </div>
                                )}
                            </section>}
                    </section>
                    <div className='flex flex-col items-center'>
                        <img
                            onMouseEnter={() => setHoverButtonCreate(true)}
                            onMouseLeave={() => setHoverButtonCreate(false)}
                            onClick={openCreateAdventureStep}
                            className='cursor-pointer'
                            src={hoverButtonCreate ? buttonAddStepActive : buttonAddStep}
                            alt="create" />
                    </div>
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