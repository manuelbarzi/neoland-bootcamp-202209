import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrieveMyAdventures from '../logic/retrieveMyAdventures'
import DeleteAdventure from '../components/DeleteAdventure'
import CreateAdventure from '../components/CreateAdventure'
import buttonBack from '../img/icon-back.png';
import buttonNext from '../img/button-next.png';
import buttonPrevious from '../img/button-previous.png';
import buttonCreate from '../img/button-create.png';
import buttonCreateNonMoney from '../img/button-create-nonmoney.png';
import buttonAddAdventure from '../img/button-add-adventure.png';
import buttonDelete from '../img/icon-delete.png';
import iconUniqueParticipants from '../img/icon-unique-participants.png';
import iconRewardCreator1 from '../img/icon-reward-creator-1.png';
import iconRewardCreator2 from '../img/icon-reward-creator-2.png';
import iconRewardCreator3 from '../img/icon-reward-creator-3.png';
import iconRewardCreator4 from '../img/icon-reward-creator-4.png';
import adventureMainOne from '../img/adventure-main-one.png';
import adventureWorldOne from '../img/adventure-world-one.png';
import { Link } from 'react-router-dom'
import extractSubFromToken from '../utils/extractSubFromToken'
import alertErrorMoney from '../img/error-money.png';

function UserAdventures() {
    const userId = extractSubFromToken(sessionStorage.token)
    const [user, setUser] = useState(null)
    const [adventures, setAdventures] = useState(null)
    const [adventureIdToDelete, setAdventureIdToDelete] = useState()
    const [createAdventureVisible, setCreateAdventureVisible] = useState(false)
    const [visibleAdventureIndex, setVisibleAdventureIndex] = useState(0)
    const [showErrorMoney, setErrorMoney] = useState(false);

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

            retrieveMyAdventures(sessionStorage.token)
                .then(adventures => {
                    setAdventures(adventures)
                })
                .catch(error => alert(error.message))

        } catch (error) { alert(error.message) }
    }, [])

    const HandlerShowErrorMoney = () => {
        setErrorMoney(true)
        setTimeout(() => {
            setErrorMoney(false);
        }, 3000);
    }

    const handleAdventureCreated = () => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

            retrieveMyAdventures(sessionStorage.token)
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
            retrieveMyAdventures(sessionStorage.token)
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
                        <Link to="/adventures">
                            <img
                                className='cursor-pointer absolute -ml-[3rem] mt-[0.9rem]'
                                src={buttonBack}
                                alt="home" />
                        </Link>
                        <span className=' text-orange-200 text-[2rem]'>My Adventures</span>
                    </header>
                    <section className='flex flex-col h-[27rem] w-[21.813rem] bg-inherit items-center'>
                        {adventures && adventures.length > 0 &&
                            <section className='text-white mt-[0.7rem] flex flex-col relative'>
                                <div>
                                    <span className='absolute text-white bg-black/60 p-1 rounded ml-[2rem] mt-[2.65rem]'>
                                        @{adventures[visibleAdventureIndex].creator.name}
                                    </span>
                                    <img
                                        className='absolute ml-[2.4rem] mt-[20.85rem]'
                                        src={iconUniqueParticipants}
                                        alt="iconUniqueParticipants" />
                                    <span className='absolute text-white ml-[4rem] mt-[21rem]'>
                                        {adventures[visibleAdventureIndex].uniquePlayersPlaying}
                                    </span>
                                    {adventures[visibleAdventureIndex].creator.id === userId &&
                                        <img
                                            className='absolute ml-[11.7rem] mt-[2.55rem] cursor-pointer'
                                            src={buttonDelete}
                                            alt="delete"
                                            onClick={() => openDeleteAdventure(adventures[visibleAdventureIndex].id)} />}
                                    {adventures[visibleAdventureIndex].isMainAdventure === "main"
                                        ?
                                        <span className='absolute text-orange-200 w-[11.3rem] h-[5.2rem]  text-[1.4rem] ml-[2.4rem] mt-[15rem] items-start flex'>
                                            {adventures[visibleAdventureIndex].title}
                                        </span>

                                        :
                                        <span className='absolute text-blue-200 w-[11.3rem] h-[5.2rem]  text-[1.4rem] ml-[2.4rem] mt-[15rem] items-start flex'>
                                            {adventures[visibleAdventureIndex].title}
                                        </span>
                                    }
                                    <span className='absolute text-white stroke-black text-right w-[4rem] text-[1rem] ml-[7.3rem] mt-[21rem]'>
                                        {adventures[visibleAdventureIndex].goldCollected}
                                    </span>
                                    {adventures[visibleAdventureIndex].goldCollected <= 500
                                        ?
                                        <img
                                            className='absolute text-[1.2rem] ml-[11.2rem] mt-[19.75rem]'
                                            src={iconRewardCreator1}
                                            alt="iconRewardCreator1" />
                                        :
                                        adventures[visibleAdventureIndex].goldCollected <= 1500
                                            ?
                                            <img
                                                className='absolute text-[1.2rem] ml-[11.2rem] mt-[19.75rem]'
                                                src={iconRewardCreator2}
                                                alt="iconRewardCreator2" />
                                            :
                                            adventures[visibleAdventureIndex].goldCollected <= 3000
                                                ?
                                                <img
                                                    className='absolute text-[1.2rem] ml-[11.2rem] mt-[19.75rem]'
                                                    src={iconRewardCreator3}
                                                    alt="iconRewardCreator3" />
                                                :
                                                <img
                                                    className='absolute text-[1.2rem] ml-[11.2rem] mt-[19.75rem]'
                                                    src={iconRewardCreator4}
                                                    alt="iconRewardCreator4" />
                                    }
                                    <Link to={`/adventures/${adventures[visibleAdventureIndex].id}`}>
                                        {adventures[visibleAdventureIndex].isMainAdventure === "main"
                                            ?
                                            <img
                                                key={adventures[visibleAdventureIndex].id}
                                                className='cursor-pointer mt-2'
                                                src={adventureMainOne}
                                                alt="adventures" />
                                            :
                                            <img
                                                key={adventures[visibleAdventureIndex].id}
                                                className='cursor-pointer mt-2'
                                                src={adventureWorldOne}
                                                alt="adventures" />}
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
                            {user &&
                                (user.gold >= 1000
                                    ? <img
                                        onClick={openCreateAdventure}
                                        className='cursor-pointer'
                                        src={buttonCreate}
                                        alt="create" />
                                    : <img
                                        className='cursor-pointer'
                                        src={buttonCreateNonMoney}
                                        alt="create"
                                        onClick={() => HandlerShowErrorMoney()}
                                    />)}
                        </div>
                        {adventureIdToDelete != null &&
                            <DeleteAdventure
                                adventureId={adventureIdToDelete}
                                onDeleted={handleAdventureDeleted}
                                onClose={closeDeleteAdventure} />}
                    </section>
                    <img
                        className={`square absolute flex self-center -mt-[5rem] opacity-0 duration-300 pointer-events-none ${showErrorMoney ? 'opacity-100 ' : ''}`}
                        src={alertErrorMoney}
                        alt="alertErrorMoney" />
                    {createAdventureVisible &&
                        <CreateAdventure
                            onCreated={handleAdventureCreated}
                            onClose={closeCreateAdventure} />}
                </div>
            </div >
        </div >
    );
}

export default UserAdventures