import { useState, useEffect } from 'react'
import logoHeader from '../img/trellologo.png';
import logoMenu from '../img/headermenupanelbotton.png';
import retrieveUser from '../logic/retrieveUser';

function Header(props) {

    const [toggleMenuComponent, setToggleMenuComponent] = useState('open')
    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(window.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUser(user)
            })
        } catch (error) {
        }
    }, [])

    // HEADER LINKS
    const handleHomeLink = () => {
        props.onHomeLink();
    };

    // TOGGLE MENU OPEN & CLOSE
    const handleToggleMenu = () => {
        setToggleMenuComponent(toggleMenuComponent === "open" ? "close" : "open");
    }

    // TOGGLE MENU LINKS
    const handleCommunityLink = () => {
        props.onCommunityLink();
    };

    const handleSettingsLink = () => {
        props.onSettingsAccountLink();
    };

    const handleLogoutLink = () => {
        props.onLoggedoutLink();
    };

    return (
        <>
            {/* HEADER */}
            <header className="flex flex-row z-0 items-center px-3 py-2 bg-[#0066a0]">
                <img
                    src={logoHeader}
                    alt="logoHeader"
                    className="w-40 cursor-pointer"
                    onClick={handleHomeLink} />
                <img
                    src={logoMenu}
                    alt="logoMenu"
                    className="w-14 cursor-pointer ml-auto invert"
                    onClick={handleToggleMenu} />
            </header>
            {/* TOGGLE MENU */}
            {toggleMenuComponent === "close" && (
                <div className="flex justify-end right-0 absolute">
                    <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-sky-100 border-sky-700 border-b-2 border-l -mt-1">
                        <p className="text-black pr-1">{user ? user.email : 'home'}</p>
                        <hr className="w-full border-sky-700 mx-auto my-2" />
                        <button
                            className="text-black pr-1 hover:font-semibold"
                            onClick={handleCommunityLink}
                        >
                            Community
                        </button>
                        <button
                            className="text-black pr-1 hover:font-semibold"
                            onClick={handleSettingsLink}
                        >
                            Settings
                        </button>
                        <button
                            className="text-black pr-1 hover:font-semibold"
                            onClick={handleLogoutLink}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header