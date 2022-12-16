import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import userStats from '../img/user-stats-h.png';
import resource from '../img/resource-h.png';
import buttonSettings from '../img/button-settings.png';
import fondo1Menu from '../img/fondo1-menu.png';
import fondo2Menu from '../img/fondo2-menu.png';
import iconRanking from '../img/icon-ranking.png';
import iconCalendar from '../img/icon-calendar.png';
import iconChest from '../img/icon-chest.png';
import iconCommunity from '../img/icon-community.png';
import fondoQuest from '../img/fondo-quest.png';
import questLog from '../img/quest-log.png';
import iconQuest from '../img/icon-quest.png';
import iconAdventure from '../img/icon-adventure.png';
import buttonPlay from '../img/button-play.png';
import buttonPlayActive from '../img/button-play-active.png';
import { Link } from 'react-router-dom'
import DailyQuest from '../components/DailyQuest'
import GAME_CONSTANTS from '../shared/constants';
import { format } from 'timeago.js'

function Home() {
    const [user, setUser] = useState(null)
    const [hoverButtonAdventure, setHoverButtonAdventure] = useState(false)
    const [dailyQuestVisible, setDailyQuestVisible] = useState(false)

    useEffect(() => {
        try {
            console.log("retrieveUser");
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

    function isReadyToPlayQuest() {
        if (!user) {
            return false
        }

        const currentTimeMilliseconds = Date.now()
        const timeLapsed = currentTimeMilliseconds - user.lastQuestPlayedTime
        return timeLapsed >= GAME_CONSTANTS.dailyQuestCooldown;
    }

    function getNextPlayDate() {
        if (!user) {
            return 0
        }

        return user.lastQuestPlayedTime + GAME_CONSTANTS.dailyQuestCooldown;
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-home.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-start w-96 h-[42rem] gap-1 px-6 py-6 flex-wrap">

                    <header className='text-white z-0'>
                        <div className='z-10 absolute ml-[4.3rem]'>
                            {user?.name}
                        </div>
                        <div className='z-10 absolute mt-[1.25rem] ml-[0.95rem] text-sm text-center w-[2rem]'>
                            {user?.level}
                        </div>
                        <div className='z-10 absolute mt-[2.18rem] ml-[7rem] text-[0.6rem] text-center'>
                            {user?.exp} / 1000
                        </div>
                        <button className='z-10 absolute ml-[19rem]'>
                            <Link to="/settings">
                                <img
                                    className='hover:rotate-45 duration-200'
                                    src={buttonSettings}
                                    Settings
                                    alt="settings" />
                            </Link>
                        </button>
                        <img
                            className=''
                            src={userStats}
                            alt="user" />
                        <div className='z-10 absolute ml-[7.5rem] mt-2 text-sm'>
                            {user?.gold}
                        </div>
                        <button className='material-symbols-outlined self-end z-10 absolute ml-[10rem] mt-1.5 text-gray-500 hover:text-green-300 duration-200'>add</button>
                        <img
                            className='ml-9'
                            src={resource}
                            alt="resource" />
                    </header>
                    <main>
                        <section>
                            <div className='mt-9'>
                                <img
                                    className='mt-[0.2rem]  ml-[0.82rem] absolute z-10 cursor-pointer hover:mt-[0rem] duration-100'
                                    src={iconRanking}
                                    alt="iconRanking" />
                                <img
                                    className='mt-[0.62rem]  ml-[6.7rem] absolute z-10 cursor-pointer hover:mt-[0.42rem] duration-100'
                                    src={iconCalendar}
                                    alt="iconCalendar" />
                                <img
                                    className='mt-[0.49rem] ml-[12.20rem] absolute z-10 cursor-pointer hover:mt-[0.29rem] duration-100'
                                    src={iconChest}
                                    alt="iconChest" />
                                <img
                                    className='mt-[6rem] ml-[0.9rem] absolute z-10 cursor-pointer hover:mt-[5.80rem] duration-100'
                                    src={iconCommunity}
                                    alt="iconCommunity" />
                                <img
                                    className=''
                                    src={fondo1Menu}
                                    alt="fondo1Menu" />
                            </div>
                            <div className=''>
                                <img
                                    className='mt-3'
                                    src={fondo2Menu}
                                    alt="fondo2Menu" />
                            </div>
                        </section>
                        <section className='flex flex-row items-start mt-14'>
                            <div>
                                <span className='text-gray-300 absolute z-10 mt-5 ml-5 text-[0.85rem]'>
                                    {(user && user.lastQuestPlayedText !== ' ')
                                        ? user.lastQuestPlayedText
                                        : 'You are ready to play your first quest'
                                    }
                                </span>
                                <span className='text-gray-400 absolute z-10 mt-10 ml-[1rem] text-[0.7rem] text-right w-[12.3rem]'>
                                    {(user && user.lastQuestPlayedTime !== 0)
                                        ? (
                                            isReadyToPlayQuest()
                                                ? 'Quest available'
                                                : 'Time for next Daily Quest: ' + format(getNextPlayDate(), 'en-EN', { minInterval: 3, })
                                        )
                                        : ''
                                    }
                                </span>
                                <img
                                    className='pt-1.5'
                                    src={questLog}
                                    alt="questLog" />
                            </div>
                            <div className=' -mt-6'>
                                <button
                                    onClick={openDailyQuest}>
                                    <img
                                        className='pt-1.5 absolute z-10 ml-2 -mt-[2.8rem] hover:-mt-[3rem] duration-100'
                                        src={iconQuest}
                                        alt="questLog" />
                                </button>
                                <img
                                    className=''
                                    src={fondoQuest}
                                    alt="fondoQuest" />
                            </div>
                        </section>
                        <section>
                            <div className='pt-5'>
                                <img
                                    className='z-10 absolute mt-[2.4rem] ml-[1rem]'
                                    src={iconAdventure}
                                    alt="iconAdventure" />
                                <button
                                    onMouseEnter={() => setHoverButtonAdventure(true)}
                                    onMouseLeave={() => setHoverButtonAdventure(false)}>
                                    <img
                                        className='absolute z-10 ml-[9.5rem] mt-[2.8rem]'
                                        src={hoverButtonAdventure ? buttonPlayActive : buttonPlay}
                                        alt="play" />
                                </button>
                            </div>

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