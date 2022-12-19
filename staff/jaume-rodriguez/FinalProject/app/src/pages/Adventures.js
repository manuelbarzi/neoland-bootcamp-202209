import { useState, useEffect } from 'react'
import retrieveAdventures from '../logic/retrieveAdventures'
import DeleteAdventure from '../components/DeleteAdventure'
import CreateAdventure from '../components/CreateAdventure'
import buttonBack from '../img/icon-back.png';
import buttonNext from '../img/button-next.png';
import buttonPrevious from '../img/button-previous.png';
import buttonCreateActive from '../img/button-create-active.png';
import buttonCreate from '../img/button-create.png';
import buttonAddAdventure from '../img/button-add-adventure.png';
import buttonDelete from '../img/icon-delete.png';
import adventureMainOne from '../img/adventure-main-one.png';
import { Link } from 'react-router-dom'
import extractSubFromToken from '../utils/extractSubFromToken'

function Adventures() {
    const userId = extractSubFromToken(sessionStorage.token)
    const [adventures, setAdventures] = useState(null)
    const [hoverButtonCreate, setHoverButtonCreate] = useState(false)
    const [adventureIdToDelete, setAdventureIdToDelete] = useState()
    const [createAdventureVisible, setCreateAdventureVisible] = useState(false)
    const [visibleAdventureIndex, setVisibleAdventureIndex] = useState(0)

    useEffect(() => {
        try {
            retrieveAdventures(sessionStorage.token)
                .then(adventures => {
                    setAdventures(adventures)
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
    const handleAdventureDeleted = () => {
        try {
            retrieveAdventures(sessionStorage.token)
                .then(adventures => {
                    setAdventures(adventures)
                    setAdventureIdToDelete()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    const openDeleteAdventure = adventureId => setAdventureIdToDelete(adventureId)
    const closeDeleteAdventure = () => setAdventureIdToDelete()
    const openCreateAdventure = () => setCreateAdventureVisible(true)
    const closeCreateAdventure = () => setCreateAdventureVisible(false)


    const modifyVisibleAdventureIndex = (indexModification) => {
        let newIndex = visibleAdventureIndex + indexModification;
        if (newIndex < 0) {
            newIndex = adventures.length - 1;
        } else if (newIndex >= adventures.length) {
            newIndex = 0;
        }
        setVisibleAdventureIndex(newIndex);
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center w-96 h-[42rem] gap-[16rem] py-6">
                    <header className='text-white flex flex-col mt-[0.5rem] '>
                        <Link to="/">
                            <img
                                className='absolute z-10 -mt-[0.1rem] hover:-ml-[0.2rem]  duration-100 cursor-pointer'
                                src={buttonBack}
                                Settings
                                alt="back" />
                        </Link>
                        <span className=' text-[2rem] ml-[3rem] -mt-[1rem]'>Adventures</span>
                    </header>
                    <section className='flex flex-col items-center justify-center '>
                        {adventures && adventures.length > 0 &&
                            <section className='flex flex-row justify-center absolute items-center -ml-[0.2rem]'>
                                <div>
                                    {adventures[visibleAdventureIndex].creator.id === userId &&
                                        <img
                                            className='absolute ml-[11.2rem] mt-[1.3rem] cursor-pointer'
                                            src={buttonDelete}
                                            Settings
                                            alt="delete"
                                            onClick={() => openDeleteAdventure(adventures[visibleAdventureIndex].id)} />}
                                    {adventures[visibleAdventureIndex].isMainAdventure === "main"
                                        ?
                                        < span
                                            className='absolute text-white text-[2.2rem] ml-[2.5rem] mt-[18rem]'>Main
                                        </span>
                                        : < span
                                            className='absolute text-white text-[2.2rem] ml-[2.5rem] mt-[18rem]'>World
                                        </span>}
                                    <span className='absolute text-white text-[1.2rem] ml-[2.5rem] mt-[20.8rem]'>{adventures[visibleAdventureIndex].title}</span>
                                    <Link to={`/adventures/${adventures[visibleAdventureIndex].id}`}>
                                        <img
                                            key={adventures[visibleAdventureIndex].id}
                                            className='cursor-pointer'
                                            src={adventureMainOne}
                                            alt="home" />
                                    </Link>
                                </div>
                            </section>}
                        {(!adventures || adventures.length === 0) &&
                            <section className='flex empty-adventures flex-row justify-center absolute -mt-[12.5rem]'>
                                <img
                                    className=''
                                    onClick={openCreateAdventure}
                                    src={buttonAddAdventure}
                                    alt="addAdventure" />
                            </section>}
                    </section>
                    <button
                        onClick={() => modifyVisibleAdventureIndex(-1)}
                        className="absolute text-white ml-[0.8rem]">
                        <img
                            className=''
                            src={buttonPrevious}
                            alt="next" />
                    </button>
                    <button
                        onClick={() => modifyVisibleAdventureIndex(+1)}
                        className="absolute text-white ml-[20em]">
                        <img
                            className=''
                            src={buttonNext}
                            alt="next" />
                    </button>
                    <section>
                        <div className='flex flex-col items-center'>
                            <img
                                onMouseEnter={() => setHoverButtonCreate(true)}
                                onMouseLeave={() => setHoverButtonCreate(false)}
                                onClick={openCreateAdventure}
                                className='cursor-pointer'
                                src={hoverButtonCreate ? buttonCreateActive : buttonCreate}
                                alt="create" />
                        </div>
                        {adventureIdToDelete != null &&
                            <DeleteAdventure
                                adventureId={adventureIdToDelete}
                                onDeleted={handleAdventureDeleted}
                                onClose={closeDeleteAdventure} />}
                    </section>
                    {createAdventureVisible &&
                        <CreateAdventure
                            onCreated={handleAdventureCreated}
                            onClose={closeCreateAdventure} />}
                </div>
            </div>
        </div >
    );
}

export default Adventures