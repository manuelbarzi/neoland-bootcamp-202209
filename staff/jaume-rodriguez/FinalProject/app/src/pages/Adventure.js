import { useState, useEffect } from 'react'
import retrieveAdventure from '../logic/retrieveAdventure'
import retrieveAdventures from '../logic/retrieveAdventures'
import { useParams } from 'react-router-dom'
import buttonBack from '../img/icon-back.png';
import buttonHome from '../img/icon-home.png';
import { Link } from 'react-router-dom'
import buttonAddStepActive from '../img/button-add-step-active.png';
import buttonAddStep from '../img/button-add-step.png';
import CreateAdventure from '../components/CreateAdventure'

function Adventure() {
    const [adventure, setAdventure] = useState(null)
    const [adventures, setAdventures] = useState(null)
    const [hoverButtonCreate, setHoverButtonCreate] = useState(false)
    const [createAdventureVisible, setCreateAdventureVisible] = useState(false)
    const { adventureId } = useParams()

    useEffect(() => {
        try {
            retrieveAdventure(sessionStorage.token, adventureId)
                .then(adventure => {
                    console.log("adventure", adventure)
                    setAdventure(adventure)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])


    const handleAdventureCreated = () => {
        try {
            retrieveAdventures(sessionStorage.token)
                .then(adventures => {
                    setAdventures(adventures)
                    setCreateAdventureVisible(false)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    const openCreateAdventure = () => setCreateAdventureVisible(true)
    const closeCreateAdventure = () => setCreateAdventureVisible(false)

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center w-96 gap-[16rem] h-[42rem] px-6 py-6">
                    <header className='text-white flex flex-col mt-[0.5rem] '>
                        <Link to="/adventures">
                            <img
                                className='absolute z-10 -mt-[0.1rem] ml-[0.3rem] hover:ml-[0.1rem] duration-100 cursor-pointer'
                                src={buttonBack}
                                Settings
                                alt="back" />
                            <img
                                className='absolute -mt-[1rem] ml-[18.4rem] pt-1 cursor-pointer'
                                src={buttonHome}
                                alt="home" />
                        </Link>
                        <span className='text-blue-400 text-[2rem] ml-[3rem] -mt-[1rem]'>{adventure?.title}</span>
                    </header>
                    <section className='flex flex-col items-center'>
                        {adventure &&
                            <section>
                                {adventure.steps.map(step =>
                                    <div key={step.id} className="text-white">
                                        {step.text}
                                    </div>
                                )}
                            </section>}
                    </section>
                    <div className='flex flex-col items-center'>
                        <img
                            onMouseEnter={() => setHoverButtonCreate(true)}
                            onMouseLeave={() => setHoverButtonCreate(false)}
                            onClick={openCreateAdventure}
                            className='cursor-pointer'
                            src={hoverButtonCreate ? buttonAddStepActive : buttonAddStep}
                            alt="create" />
                    </div>
                    {createAdventureVisible &&
                        <CreateAdventure
                            onCreated={handleAdventureCreated}
                            onClose={closeCreateAdventure} />}
                </div>
            </div>
        </div >
    );
}

export default Adventure