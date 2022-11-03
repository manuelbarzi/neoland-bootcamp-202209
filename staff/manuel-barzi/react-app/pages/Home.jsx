const { useState, useEffect } = React

function Home(props) {
    log('INFO', 'Home -> render')

    const [view, setView] = useState('tasks')
    const [timestamp, setTimestamp] = useState(Date.now())

    useEffect(() => {
        log('INFO', 'Home -> effect "componentDidMount"')

        return () => log('INFO', 'Home -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => log('INFO', 'Home -> effect "componentWillReceiveProps"'), [props])

    const handleLogout = () => {
        log('INFO', 'Home -> handleLogout')

        user = null

        props.onLogout()
    }

    const handleAddTask = () => {
        log('INFO', 'Home -> handleAddTask')

        setTimestamp(Date.now())
    }

    const handleNavigateToSettings = () => {
        log('INFO', 'Home -> handleNavigateToSettings')

        setView('settings')
    }

    const handleNavigateToTasks = () => {
        log('INFO', 'Home -> handleNavigateToTasks')

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