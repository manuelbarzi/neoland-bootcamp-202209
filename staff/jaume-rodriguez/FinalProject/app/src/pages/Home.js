import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import iconGold from '../img/icon-gold.png';
import iconCombatPoints from '../img/icon-combat-points.png';
import iconEdit from '../img/icon-edit.png';
import iconCommunity from '../img/icon-community.png';
import iconCommunityActive from '../img/icon-community-active.png';
import iconQuest from '../img/icon-quest.png';
import iconQuestActive from '../img/icon-quest-active.png';
import iconAdventure from '../img/icon-adventure.png';
import iconRanking from '../img/icon-ranking.png';
import AdventureActive from '../img/icon-adventure-active.png';
import { Link } from 'react-router-dom'
import DailyQuest from '../components/DailyQuest'

function Home() {
    const [user, setUser] = useState(null)
    const [hoverButtonCommunity, setHoverButtonCommunity] = useState(false)
    const [hoverButtonAdventure, setHoverButtonAdventure] = useState(false)
    const [hoverButtonQuest, setHoverButtonQuest] = useState(false)
    const [dailyQuestVisible, setDailyQuestVisible] = useState(false)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    const openDailyQuest = () => setDailyQuestVisible(true)
    const closeDailyQuest = () => {
        setDailyQuestVisible(false)
        retrieveUser(sessionStorage.token)
            .then(user => setUser(user))
            .catch(error => alert(error.message))
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-home.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center w-96 h-[42rem] gap-[21.0rem] -mt-[0.4rem] px-6 py-6">
                    <header className='flex flex-col items-center text-white'>
                        <span className=' text-lg text-center -ml-[0.2rem] mt-[1.6rem] mb-[1rem]'>
                            {user?.level}
                        </span>
                        <div className='flex flex-row justify-center w-96 -ml-3'>
                            <Link to="chat">
                                <img
                                    onMouseEnter={() => setHoverButtonCommunity(true)}
                                    onMouseLeave={() => setHoverButtonCommunity(false)}
                                    className='mr-[1.9rem] mt-[0.5rem]'
                                    src={hoverButtonCommunity ? iconCommunityActive : iconCommunity}
                                    alt="community" />
                            </Link>
                            <span className="text-[1.5rem]">{user?.name}</span>
                            <Link to="/settings">
                                <img
                                    className='ml-8 mt-[0.5rem] hover:rotate-45 duration-100'
                                    src={iconEdit}
                                    alt="settings" />
                            </Link>
                        </div>
                        <div className='flex flex-row justify-center mt-[2rem] gap-x-[1rem]'>
                            <img
                                className=''
                                src={iconCombatPoints}
                                alt="iconCombatPoints" />
                            <span className='absolute text-right w-[6rem] -ml-[9.5rem] mt-[0.5rem] text-[0.85rem]'>{user?.combatPoints}</span>
                            <img
                                className=''
                                src={iconGold}
                                alt="gold" />
                            <span className='absolute text-right w-[5.5rem] ml-[11.6rem] mt-[0.5rem] text-[0.85rem]'>{user?.gold}</span>
                        </div>
                    </header>
                    <section className='flex flex-row justify-center w-96 absolute mt-[19rem] -ml-[1.6rem] '>
                        <Link to="/ranking">
                            <img
                                className='hover:-mt-[0.5rem] duration-100'
                                src={iconRanking}
                                alt="freeReward "
                            />
                        </Link>
                    </section>
                    <main className='mt-[2.2rem]'>
                        <section className='flex flex-row justify-center gap-x-[4.5rem]'>
                            <Link to="/adventures">
                                <img
                                    onMouseEnter={() => setHoverButtonAdventure(true)}
                                    onMouseLeave={() => setHoverButtonAdventure(false)}
                                    className=''
                                    src={hoverButtonAdventure ? AdventureActive : iconAdventure}
                                    alt="openAdventures" />
                            </Link>
                            <img
                                onMouseEnter={() => setHoverButtonQuest(true)}
                                onMouseLeave={() => setHoverButtonQuest(false)}
                                onClick={openDailyQuest}
                                className='cursor-pointer'
                                src={hoverButtonQuest ? iconQuestActive : iconQuest}
                                alt="openDailyQuest" />
                        </section>
                        <section>
                            {dailyQuestVisible &&
                                <DailyQuest
                                    onClose={closeDailyQuest} />}
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home