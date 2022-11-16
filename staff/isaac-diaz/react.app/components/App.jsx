const { useState, useEffect } = React

function App() {
    log('INFO', 'App -> render')
       
        const [view, setView] = useState('login')        

        //NOTE force user logged in already, to go faster to home page
        // user = users[2]
        // this.state = { view: 'home' }
    

    // const componentDidMounth() {
    //     log('INFO', 'App -> componentDidMounth')
    // }

    // const componentWillUnmounth() {
    //     log('INFO', 'App -> componentWillUnmounth')
    // }

     const handleNavigateToRegister = () => {
        log('INFO', 'App -> hadleNavigateToRegister')

        setView('register')
    }

    const handleNavigateToLogin = () => {
        log('INFO', 'App -> handleNavigateToLogin')

        setView('login')
    }

    const handleNavigateToHome = () => {
        log('INFO', 'App -> handleNavigateToHome')

        setView('home')
    }

    return <>
            {view === 'login' && <Login onNavigateToRegister={handleNavigateToRegister} onLogin={handleNavigateToHome} />}

            {view === 'register' && <Register onNavigateToLogin={handleNavigateToLogin} />}

            {view === 'home' && <Home onNavigateToLogin={handleNavigateToLogin} onLogout={handleNavigateToLogin} />}
        </>
    }
