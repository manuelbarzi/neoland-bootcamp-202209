const { useState, useEffect } = React

function Header(props) {

    const [toggleMenuComponent, setToggleMenuComponent] = useState('open')

    // HEADER LINKS
    const handleHomeLink = () => {
        log("INFO", "Header: handleHomeLink");
        props.onHomeLink();
    };

    // TOGGLE MENU OPEN & CLOSE
    const handleToggleMenu = () => {
        log("INFO", "Header: handleToggleMenu");
        setToggleMenuComponent(toggleMenuComponent === "open" ? "close" : "open");
    }

    // TOGGLE MENU LINKS
    const handleSettingsLink = () => {
        log("INFO", "Header: handleSettingsLink");
        props.onSettingsAccountLink();
    };

    const handleLogoutLink = () => {
        log("INFO", "Header: handleLogoutLink");
        props.onLoggedoutLink();
    };

    return (
        <>
            {/* HEADER */}
            <header className="flex flex-row z-0 items-center px-3 py-2 bg-sky-800">
                <img
                    src="img/trellologo.png"
                    className="w-40 cursor-pointer"
                    onClick={handleHomeLink} />
                <img
                    src="img/headermenupanelbotton.png"
                    className="w-14 cursor-pointer ml-auto invert"
                    onClick={handleToggleMenu}
                />
            </header>
            {/* TOGGLE MENU */}
            {toggleMenuComponent === "close" && (
                <div className="flex justify-end right-0 absolute">
                    <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-sky-100 border-sky-700 border-b-2 border-l -mt-1">
                        <p className="text-black pr-1">{user.email}</p>
                        <hr className="w-full border-sky-700 mx-auto my-2" />
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