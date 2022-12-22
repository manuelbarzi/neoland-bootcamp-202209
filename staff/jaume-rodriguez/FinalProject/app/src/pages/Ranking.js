import { useState, useEffect } from 'react'
import retrieveUsers from '../logic/retrieveUsers'
import buttonBack from '../img/icon-back.png';
import buttonAddStep from '../img/button-add-step.png';
import bgRankingPlayers from '../img/bg-ranking-players.png';
import { Link } from 'react-router-dom'

function Adventure() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        try {
            retrieveUsers(sessionStorage.token)
                .then(users => setUsers(users))
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center gap-[2rem]">
                    <header className='text-white flex flex-row items-start justify-center'>
                        <Link to="/">
                            <img
                                className='cursor-pointer absolute -ml-[3rem] mt-[0.9rem]'
                                src={buttonBack}
                                alt="home" />
                        </Link>
                        <span className=' text-orange-200 text-[2rem]'>Ranking</span>
                    </header>
                    <section className='ml-[1rem]'>
                        {users &&
                            <section className='flex flex-col h-[27rem] w-[21.813rem] bg-inherit justify-start items-center overflow-y-scroll scrollbar overscroll-contain '>
                                {users.sort((a, b) => b.exp - a.exp).map((user, i) =>
                                    <div key={user.id} className=" mt-[0.7rem] flex flex-col relative">
                                        <span className="text-orange-200 absolute ml-[2rem] mt-[1.1rem]">
                                            {i + 1}
                                        </span>
                                        <span className="text-orange-200 absolute ml-[4rem] mt-[1.1rem]">
                                            {user?.name}
                                        </span>
                                        <span className="text-gray-300 absolute ml-[7.5rem] mt-[1.1rem] text-lg text-right w-[9rem] text-right">
                                            {user?.exp}
                                        </span>
                                        <img
                                            className=''
                                            src={bgRankingPlayers}
                                            alt="bgRankingPlayers" />
                                    </div>
                                )}
                            </section>}
                    </section>
                    <div className='flex flex-col items-center mt-[1rem] opacity-0'>
                        <img
                            className=''
                            src={buttonAddStep}
                            alt="create" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventure