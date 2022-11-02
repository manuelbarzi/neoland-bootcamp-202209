function Header(props) {
    log('INFO', 'Header -> render')

    const [toggleButtonText, setToggleButtonText] = React.useState('menu')

    // componentDidMount() {
    //     log('INFO', 'Header -> componentDidMount')
    // }

    // componentWillUnmount() {
    //     log('INFO', 'Header -> componentWillUnmount')
    // }

    // componentWillReceiveProps() {
    //     log('INFO', 'Header -> componentWillReceiveProps')
    // }

    const handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

        event.preventDefault()

        props.onNavigateToTasks()
    }

    const handleAddTask = () => {
        log('INFO', 'Header -> handleAddTask')

        try {
            createTask(user.email)

            props.onAddTask()
        } catch (error) {
            alert(error.message)
        }

    }

    const handleToggleMenu = () => {
        log('INFO', 'Header -> handleToggleMenu')

        setToggleButtonText(toggleButtonText === 'menu' ? 'close' : 'menu')
    }


    const handleNavigateToSettings = event => {
        log('INFO', 'Header -> handleNavigateToSettings')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToSettings()
    }

    const handleLogout = () => {
        log('INFO', 'Header -> handleLogout')

        props.onLogout()
    }

    return <header className="flex flex-col">
        <div className="flex justify-between">
            <a href="" onClick={handleNavigateToTasks}><img src="https://fakeimg.pl/50x25/?text=hola%20mundo&amp;font=lobster" /></a>

            <span>{user && user.name}</span>

            {props.view === 'tasks' && <button className="material-symbols-outlined" onClick={handleAddTask}>add</button>}

            <button className="material-symbols-outlined" onClick={handleToggleMenu}>{toggleButtonText}</button>
        </div>

        {
            toggleButtonText === 'close' && <div className="flex flex-col items-center">
                <a className="material-symbols-outlined" href="" onClick={handleNavigateToSettings}>settings</a>

                <button className="material-symbols-outlined" onClick={handleLogout}>logout</button>
            </div>
        }
    </header>
}