import { useState, useEffect } from 'react'
import retrieveAdventures from '../logic/retrieveAdventures'
import DeleteAdventure from '../components/DeleteAdventure'
import CreateAdventure from '../components/CreateAdventure'
import buttonHome from '../img/icon-home.png';
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
        setVisibleAdventureIndex(Math.max(0, visibleAdventureIndex - 1));
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
            <div className="relative flex flex-grow font-alata h-full flex-col justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center gap-[2rem]">
                    <header className='text-white flex flex-row items-start justify-center'>
                        <Link to="/">
                            <img
                                className='cursor-pointer absolute ml-[13rem]'
                                src={buttonHome}
                                alt="home" />
                        </Link>
                        <span className=' text-yellow-400 text-[2rem]'>Adventures</span>
                    </header>
                    <section className='flex flex-col h-[27rem] w-[21.813rem] bg-inherit items-center'>
                        {adventures && adventures.length > 0 &&
                            <section className='text-white mt-[0.7rem] flex flex-col relative'>
                                <div>
                                    {adventures[visibleAdventureIndex].creator.id === userId &&
                                        <img
                                            className='absolute ml-[11.2rem] mt-[1.85rem] cursor-pointer'
                                            src={buttonDelete}
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
                                            className='cursor-pointer mt-2'
                                            src={adventureMainOne}
                                            alt="adventures" />
                                    </Link>
                                </div>
                            </section>}
                        {(!adventures || adventures.length === 0) &&
                            <section className='text-white mt-[0.7rem] flex flex-col relative'>
                                <img
                                    className=''
                                    onClick={openCreateAdventure}
                                    src={buttonAddAdventure}
                                    alt="addAdventure" />
                            </section>}
                    </section>
                    <button
                        onClick={() => modifyVisibleAdventureIndex(-1)}
                        className="absolute text-white">
                        <img
                            className=''
                            src={buttonPrevious}
                            alt="next" />
                    </button>
                    <button
                        onClick={() => modifyVisibleAdventureIndex(+1)}
                        className="absolute text-white ml-[18.9rem]">
                        <img
                            className=''
                            src={buttonNext}
                            alt="next" />
                    </button>
                    <section>
                        <div className='flex flex-col items-center mt-[1rem]'>
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
            </div >
        </div >
    );
}

export default Adventures