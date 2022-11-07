const {useState, useEffect} = React

function NavBar(props){
    const [toggleButtonText, setToggleButtonText] = useState('Menu')

    const logout = () => {
        user = null

        const onLogOut = props.onLogOut

        onLogOut()
    }

    const settings = (event) => {
        event.preventDefault()

        setToggleButtonText('Menu')

        const onSettings = props.onSettings

        onSettings()
    }

    const goToHome = (event) => {
        event.preventDefault()

        setToggleButtonText('Menu')

        const onHomeLink = props.onHomeLink

        onHomeLink()
    }

    const closeMenuClick = () => setToggleButtonText('Menu')


    const toggleMenu = () =>  toggleButtonText === 'Menu' ? setToggleButtonText('Close') : setToggleButtonText('Menu') 

    return <header className="fixed w-full h-20 bg-orange-500 grid grid-cols-12">
        {toggleButtonText === 'Close' && <div className="absolute w-screen h-screen" onClick={closeMenuClick}></div>}
        <nav className="z-20 flex items-center justify-between p-4 h-full col-start-1 col-end-13 text-2xl">
            <a href="" onClick={goToHome} className="z-10 h-fit self-center material-symbols-outlined text-5xl">Home</a>
            <span className="h-9">{user && user.name}</span>
            <button className="material-symbols-outlined" onClick={toggleMenu}>{toggleButtonText}</button>
        </nav>
        {toggleButtonText === 'Close' && <div className="shadow-xl flex flex-col bg-orange-300 p-2 col-start-11 col-end-13 rounded-lg">
            <a href="" className="z-10 text-center mt-2 text-xl border-solid border-black border-2 rounded-lg" onClick={settings}>Settings <span className="material-symbols-outlined">settings</span></a>
            <button className="mt-2 z-10 text-xl border-solid border-black border-2 rounded-lg" onClick={logout}>Logout <span className="material-symbols-outlined">logout</span></button>
        </div>}
    </header>
}
