function Header(props) {
    log('INFO', 'Header -> render')

    const [toggleButtonText, setToggleButtonText] = React.useState('menu')

    // componentDidMount() {
    //     log('INFO', 'Header -> componentDidMount')
    // }

    // React.useEffect(() => log('INFO', 'Header -> effect "componentDidMount"'), [])

    // componentWillUnmount() {
    //     log('INFO', 'Header -> componentWillUnmount')
    // }

    // React.useEffect(() => () => log('INFO', 'Header -> effect "componentWillUnmount"'), [])

    React.useEffect(() => {
        log('INFO', 'Header -> effect "componentDidMounth"')

        return () => log('INFO', 'Header -> effect "componentWillMounth"')
    }, [])

    // componentWillReceiveProps() {
    //     log('INFO', 'Header -> componentWillReceiveProps')
    // }

    React.useEffect(() => log('INFO', 'Header -> "componentWillReceiveProps"'), [props])

    const handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToTasks()
    }


    const handleAddTasks = () => {
        log('INFO', 'Header -> handleAddTasks')

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

    return <header className="flex flex-col h-24 bg-blue-400">
        <div className="flex justify-between h-17">
            <a className="h-20 w-40 m-2" href="" onClick={handleNavigateToTasks}><img className="h-20 rounded-xl border-solid border-6 border-yellow-600 bg-blue-400" src="imagenes/lacasitos.jpg" /></a>

            <span className="flex m-6">{user && user.name}</span>

            {props.view === 'tasks' && <button className="material-symbols-outlined" onClick={handleAddTasks}>add</button>}

            <button className="material-symbols-outlined" onClick={handleToggleMenu}>{toggleButtonText}</button>
        </div>

        {
            toggleButtonText === 'close' && <div className="flex flex-col absolute top-24 right-0 border-solid border-4 border-yellow-600 bg-blue-400 p-4 m-6 " >
                <a className="material-symbols-outlined m-2" href="" onClick={handleNavigateToSettings}>settings</a>

                <button className="material-symbols-outlined m-2" onClick={handleLogout}>logout</button>
            </div>
        }
    </header>
}
