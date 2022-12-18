import { useState } from 'react'
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

function Settings() {
    const { logout } = useContext(Context)

    const [changeNameVisible, setChangeNameVisible] = useState(false)
    const [changeEmailVisible, setChangeEmailVisible] = useState(false)
    const [changePasswordVisible, setChangePasswordVisible] = useState(false)
    const [hoverButtonSetName, setHoverButtonSetName] = useState(false)
    const [hoverButtonSetEmail, setHoverButtonSetEmail] = useState(false)
    const [hoverButtonSetPassword, setHoverButtonSetPassword] = useState(false)
    const [hoverButtonLogout, setHoverButtonLogout] = useState(false)

    const openSetName = () => setChangeNameVisible(true)
    const closeSetName = () => setChangeNameVisible(false)
    const openSetEmail = () => setChangeEmailVisible(true)
    const closeSetEmail = () => setChangeEmailVisible(false)
    const openSetPassword = () => setChangePasswordVisible(true)
    const closeSetPassword = () => setChangePasswordVisible(false)

    return (
        <div className="min-h-screen flex flex-col bg-[#191919]">
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                <div className="flex flex-col justify-center w-96 h-[42rem] gap-[9.3rem] px-6 py-6">
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
                    <section className='flex flex-col items-center gap-4'>
                        <button
                            onMouseEnter={() => setHoverButtonSetName(true)}
                            onMouseLeave={() => setHoverButtonSetName(false)}
                            onClick={openSetName}>
                            <img
                                className='cursor-pointer'
                                src={hoverButtonSetName ? buttonSetNameActive : buttonSetName}
                                alt="setName" />
                        </button>
                        <button
                            onMouseEnter={() => setHoverButtonSetEmail(true)}
                            onMouseLeave={() => setHoverButtonSetEmail(false)}
                            onClick={openSetEmail}>
                            <img
                                className=' cursor-pointer'
                                src={hoverButtonSetEmail ? buttonSetEmailActive : buttonSetEmail}
                                alt="setEmail" />
                        </button>
                        <button
                            onMouseEnter={() => setHoverButtonSetPassword(true)}
                            onMouseLeave={() => setHoverButtonSetPassword(false)}
                            onClick={openSetPassword}>
                            <img
                                className='cursor-pointer'
                                src={hoverButtonSetPassword ? buttonSetPasswordActive : buttonSetPassword}
                                alt="setPassword" />
                        </button>
                    </section>
                    <section className='flex flex-col items-center '>
                        <button
                            onMouseEnter={() => setHoverButtonLogout(true)}
                            onMouseLeave={() => setHoverButtonLogout(false)}>
                            <Link to="/login" onClick={logout}>
                                <img
                                    className=' cursor-pointer'
                                    src={hoverButtonLogout ? buttonLogoutActive : buttonLogout}
                                    alt="logout" />
                            </Link>
                        </button>
                    </section>
                    {changeNameVisible &&
                        <SetName
                            onClose={closeSetName} />}
                    {changeEmailVisible &&
                        <SetEmail
                            onClose={closeSetEmail} />}
                    {changePasswordVisible &&
                        <SetPassword
                            onClose={closeSetPassword} />}
                </div>
            </div>
        </div >
    );
}

export default Settings