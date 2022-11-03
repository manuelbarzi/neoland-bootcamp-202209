const { useState, useEffect } = React

function Navbar(props) {


    const [toggleButtonText, setToggleButtonText] = useState('menu')



    useEffect(() => {
        log('INFO', 'componentDidMount')

        return () => log('INFO', 'componentWillUnmount')
    }, [])

    useEffect(() => log('INFO', 'componentWillReceiveProps'), [props])


    const handleToggleMenu = () => {

        setToggleButtonText(toggleButtonText === 'menu' ? 'close' : 'menu')
    }

    const handleNavigateToTasks = event => {
        log('INFO', 'handleNavigateToTasks')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToTasks()
    }



    const handleNavigateToSettings = event => {
        console.log('Navigating to settings')
        event.preventDefault()

        setToggleButtonText('menu')
        props.onNavigateToSettings()
    }


    const handleCreateTask = () => {
        createTask(user.email)

        props.onAddTask()
    }

    const handleLogout = () => {
        props.onLoggedOut()
    }




    return <header className="fixed flex justify-between bg-pink-600 w-full">
        <div className="homepage-header-left-group">
            <span className="material-symbols-outlined header-icons text-white">home</span>
        </div>
        <div className="homepage-header-right-group">
            <span id="username-header-span" className="text-white">{user && user.name}</span>
            <span className="material-symbols-outlined header-icons text-white" onClick={handleCreateTask}>add</span>
            <span className="material-symbols-outlined header-icons text-white" onClick={handleToggleMenu}>{toggleButtonText}</span>
        </div>

        {
            toggleButtonText === 'close' && <div className="flex flex-col items-center text-white">
                <a className="material-symbols-outlined text-white" href="" onClick={handleNavigateToSettings}>settings</a>
                <button className="material-symbols-outlined text-white" onClick={handleLogout}>logout</button>
            </div>
        }
    </header >



}