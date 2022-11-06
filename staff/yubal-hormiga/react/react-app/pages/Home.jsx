const { useState, useEffect } = React

function Home(props) {
    log.info('Home -> render')

    const [view, setView] = useState('tasks')
    const [timestamp, setTimestamp] = useState(Date.now())

    useEffect(() => {
        log.info('Home -> effect "componentDidMount"')

        return () => log.info('Home -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => log.info('Home -> effect "componentWillReceiveProps"'), [props])

    const handleLogout = () => {
        log.info('Home -> handleLogout')

        user = null

        props.onLogout()
    }

    const handleAddTask = () => {
        log.info('Home -> handleAddTask')

        setTimestamp(Date.now())
    }

    const handleNavigateToSettings = () => {
        log.info('Home -> handleNavigateToSettings')

        setView('settings')
    }

    const handleNavigateToTasks = () => {
        log.info('Home -> handleNavigateToTasks')

        setView('tasks')
    }

    return <main className="h-full w-full">
        <Header
            onNavigateToTasks={handleNavigateToTasks}
            onAddTask={handleAddTask}
            onNavigateToSettings={handleNavigateToSettings}
            onLogout={handleLogout}
            view={view}
        />

        {view === 'tasks' && <Tasks />}

        {view === 'settings' && <Settings />}
    </main>
}