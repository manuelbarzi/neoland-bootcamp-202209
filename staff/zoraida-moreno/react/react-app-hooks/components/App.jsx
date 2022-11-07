const { useState, useEffect} = React

function App(props) {
    log('INFO', 'App -> render')

    // const viewState = useState('login')
    // const view = viewState[0]
    // const setView = viewState[1]

    // const [view, setView] = useState('login')

    // NOTE force user logged in already, to go faster to home page
    user = users[2]
    const [view, setView] = useState('home')

    useEffect(() => {
        log.info('App -> effect "componentDidMount"')

        return () => log.info('App -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => log.info('App -> effect "componentWillReceiveProps"'), [props])

    const handleNavigateToRegister = () => {
        log.info('App -> handleNavigateToRegister')

        setView('register')
    }

    const handleNavigateToLogin = () => {
        log.info('App -> handleNavigateToLogin')
    
        setView('login')
    }

    const handleNavigateToHome = () => {
        log.info('App -> handleNavigateToHome')

        setView('home')
    }

    return <>
    
        {view === 'login' && <Login onNavigateToRegister={handleNavigateToRegister} onLogin={handNavigateToHome} />}

        {view === 'register' && <Register onNavigateToLogin={handleNavigateToLogin} onRegister={handNavigateToLogin} />}

        {view === 'home' && <Home onLogout={handleNavigateToLogin} />}
    </>
}

    
