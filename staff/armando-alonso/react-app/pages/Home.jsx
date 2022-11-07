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
        log('INFO', 'Home -> logout')

        user = null
        
        props.onLogout()

    }

    const handleNavigateToSettings = () => {
        log('INFO', 'Home -> handleNavigateToSettings')
        
        setView( 'settings' )
    }


    const handleNavigateToTasks = () => {
        log('INFO', 'Home -> handleNavigateToTasks')
        
        setView( 'tasks' )
    }
        
                return <main className="flex flex-col bg-[#ffe97d]">
                            <Header 
                                onNavigateToTasks={handleNavigateToTasks}
                                onNavigateToSettings={handleNavigateToSettings}
                                onLogout={handleLogout} />

                            {view === 'tasks' && <Tasks />}

                            {view === 'settings' && <Settings />}
            
                        </main>
}
