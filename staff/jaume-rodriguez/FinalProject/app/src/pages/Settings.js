import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import buttonBack from '../img/icon-back.png';
import buttonSetName from '../img/button-setName.png';
import buttonSetEmail from '../img/button-setEmail.png';
import buttonSetPassword from '../img/button-setPassword.png';
import buttonLogout from '../img/button-logout.png';
import buttonSetNameActive from '../img/button-setName-active.png';
import buttonSetEmailActive from '../img/button-setEmail-active.png';
import buttonSetPasswordActive from '../img/button-setPassword-active.png';
import buttonLogoutActive from '../img/button-logout-active.png';
import buttonHome from '../img/icon-home.png';
import { Link } from 'react-router-dom'
import Context from '../components/Context'
import { useContext } from 'react'
import SetName from '../components/SetName'
import SetEmail from '../components/SetEmail'
import SetPassword from '../components/SetPassword'
//import DailyQuest from '../components/DailyQuest'

function Settings() {
    const { logout } = useContext(Context)

    const [user, setUser] = useState(null)
    const [changeNameVisible, setChangeNameVisible] = useState(false)
    const [changeEmailVisible, setChangeEmailVisible] = useState(false)
    const [changePasswordVisible, setChangePasswordVisible] = useState(false)
    const [hoverButtonSetName, setHoverButtonSetName] = useState(false)
    const [hoverButtonSetEmail, setHoverButtonSetEmail] = useState(false)
    const [hoverButtonSetPassword, setHoverButtonSetPassword] = useState(false)
    const [hoverButtonLogout, setHoverButtonLogout] = useState(false)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    const openSetName = () => setChangeNameVisible(true)
    const closeSetName = () => setChangeNameVisible(false)
    const openSetEmail = () => setChangeEmailVisible(true)
    const closeSetEmail = () => setChangeEmailVisible(false)
    const openSetPassword = () => setChangePasswordVisible(true)
    const closeSetPassword = () => setChangePasswordVisible(false)

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-start w-96 h-[42rem] gap-1 px-6 py-6">
                    <header className='text-white flex flex-col mt-[0.5rem] '>
                        <Link to="/">
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
                        <span className='text-[2rem] ml-[3rem] -mt-[1rem]'>Settings</span>
                    </header>
                    <main className='z-10'>
                        <section className='flex flex-col justify-center h-[34rem] ml-[4rem]'>
                            <div className=''>
                                <button
                                    onMouseEnter={() => setHoverButtonSetName(true)}
                                    onMouseLeave={() => setHoverButtonSetName(false)}
                                    onClick={openSetName}>
                                    <img
                                        className='ml-[0.3rem] pt-1 cursor-pointer'
                                        src={hoverButtonSetName ? buttonSetNameActive : buttonSetName}
                                        alt="setName" />
                                </button>
                                <button
                                    onMouseEnter={() => setHoverButtonSetEmail(true)}
                                    onMouseLeave={() => setHoverButtonSetEmail(false)}
                                    onClick={openSetEmail}>
                                    <img
                                        className=' ml-[0.3rem] cursor-pointer py-10'
                                        src={hoverButtonSetEmail ? buttonSetEmailActive : buttonSetEmail}
                                        alt="setEmail" />
                                </button>
                                <button
                                    onMouseEnter={() => setHoverButtonSetPassword(true)}
                                    onMouseLeave={() => setHoverButtonSetPassword(false)}
                                    onClick={openSetPassword}>
                                    <img
                                        className='ml-[0.3rem] cursor-pointer'
                                        src={hoverButtonSetPassword ? buttonSetPasswordActive : buttonSetPassword}
                                        alt="setPassword" />
                                </button>
                            </div>
                        </section>
                        <section>
                            <div className=''>
                                <button
                                    onMouseEnter={() => setHoverButtonLogout(true)}
                                    onMouseLeave={() => setHoverButtonLogout(false)}>
                                    <Link to="/login" onClick={logout}>
                                        <img
                                            className='-mt-[0rem] ml-[4.25rem] cursor-pointer'
                                            src={hoverButtonLogout ? buttonLogoutActive : buttonLogout}
                                            alt="logout" />
                                    </Link>
                                </button>
                            </div>
                        </section>
                        <section>
                            {changeNameVisible &&
                                <SetName
                                    onConfirm={closeSetName}
                                    onClose={closeSetName} />}
                            {changeEmailVisible &&
                                <SetEmail
                                    onConfirm={closeSetEmail}
                                    onClose={closeSetEmail} />}
                            {changePasswordVisible &&
                                <SetPassword
                                    onConfirm={closeSetPassword}
                                    onClose={closeSetPassword} />}
                        </section>
                    </main>
                    {/* <DailyQuest /> */}
                </div>
            </div>
        </div >
    );
}

export default Settings