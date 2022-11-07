const { useState, useEffect } = React

function App(props) {
    log('INFO', 'App -> render')

    const [view, setView] = useState('login')

    useEffect(() => {
        log('INFO', 'App -> effect "componentDidMount"')

        return () => log('INFO', 'App -> effect "componentWillUnmount')
    }, [])

    useEffect(() => log('INFO', 'App -> effect "componentWillReceiveProps"'), [props])


    const navigateToRegister = () => {
        log('INFO', 'App -> navigateToRegister')

        setView( 'register' )
    }

    const navigateToLogin = () => {
        log('INFO', 'App -> navigateToLogin')

        setView( 'login' )
    }
    const navigateToHome = () => {
        log('INFO', 'App -> navigateToHome')

        setView( 'home' )
    }

        return <>
            {view === 'login' && 
                <Login 
                    onRegisterClick={navigateToRegister} 
                    onLoggedIn={navigateToHome} 
                />}
            {view === 'register' && 
                <Register 
                    onLoginClick={navigateToLogin} 
                    onRegister={navigateToLogin} 
                />}
            {view === 'home' && 
                <Home 
                    onLogout={navigateToLogin} 
                />}
        </>
    }