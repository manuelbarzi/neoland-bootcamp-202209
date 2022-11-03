const { useState, useEffect } = React

function HomePage(props) {
    const [view, setView] = useState("tasks")
    //const [timestamp, setTimestamp] = useState(Date.now())
    const [sensor, toggle] = useState(false)

    useEffect(() => {
        log('INFO', 'Home component mounted')
    }, [])

    const handleCreateTask = () => {
        //setTimestamp(Date.now())

        toggle(!sensor)
    }

    const handleNavigateToTasks = () => {

        setView('tasks')
    }

    const handleNavigateToSettings = () => {
        log('INFO', 'navigating to settings')

        setView('settings')
    }

    const handleLogout = () => {

        user = null

        props.onLoggedOut()
    }


    return <main className="min-h-screen">


        <Navbar

            onAddTask={handleCreateTask}
            onNavigateToSettings={handleNavigateToSettings}
            onNavigateToTasks={handleNavigateToTasks}
            onLoggedOut={handleLogout}
            view={view}
        />
        {view === 'settings' && <Settings />}
        {view === 'tasks' && <Tasks />}



    </main>

}