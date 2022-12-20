import { useState, useEffect } from 'react'
import retrieveUsers from '../logic/retrieveUsers'
import bgAdventureReward from '../img/bg-adventure-reward.png';
import buttonBack from '../img/icon-back.png';
import buttonHome from '../img/icon-home.png';
import buttonPlayStep from '../img/button-play-step.png';
import bgAdventureStep from '../img/bg-adventure-step.png';
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
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-start ml-[0.3rem] w-96 ml-[1rem] gap-[2.2rem] mt-[3.7rem] h-[42rem]">
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
                        <span className='text-white text-[2rem] ml-[3rem] -mt-[1rem]'>Ranking</span>
                    </header>
                    <section className='flex flex-col items-center'>
                        {users &&
                            <section className='flex flex-col h-[27rem] w-[24rem] bg-white justify-start items-center overflow-y-scroll scrollbar overscroll-contain '>
                                {users.map(user =>
                                    <div key={user.id} className="text-white mt-[0.7rem] flex flex-col">
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
                </div>
            </div>
        </div>
    )
}

export default Adventure