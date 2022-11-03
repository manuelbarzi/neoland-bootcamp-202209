// const useState = React.useState
// const useEffect = React.useEffect

const { useState, useEffect } = React

function Header(props) {
    log.info('Header -> render')

    const [toggleButtonText, setToggleButtonText] = useState('menu')

    useEffect(() => {
        log.info('Header -> effect "componentDidMount"')

        return () => log.info('Header -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => log.info('Header -> effect "componentWillReceiveProps"'), [props])

    const handleNavigateToTasks = event => {
        log.info('Header -> handleNavigateToTasks')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToTasks()
    }

    const handleAddTask = () => {
        log.info('Header -> handleAddTask')

        try {
            createTask(user.email)

            props.onAddTask()
        } catch (error) {
            alert(error.message)
        }

    }

    const handleToggleMenu = () => {
        log.info('Header -> handleToggleMenu')

        setToggleButtonText(toggleButtonText === 'menu' ? 'close' : 'menu')
    }

    const handleNavigateToSettings = event => {
        log.info('Header -> handleNavigateToSettings')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToSettings()
    }

    const handleLogout = () => {
        log.info('Header -> handleLogout')

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