const { useState, useEffect } = React

function App(props) { // se extienden los componentes desde react
    log('INFO', 'App -> render')

     user = users[0] //forzar home con usuario
     const [view, setView] = useState ('home')

    //const [view, setView] = useState('login')

    useEffect(() => {
        log('INFO', 'App -> effect "componentDidMount"')

        return () => log('INFO', 'App -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => log('INFO', 'App -> effect "componentWillReceiveProps"'), [props])


    const navigateToRegister = () => {
        log('INFO', 'App -> navigateToRegister')

        setView('register')

    }

    const navigateToLogin = () => {
        log('INFO', 'App -> navigateToLogin')

        setView('login')
    }

    const navigateToHome = () => {
        log('INFO', 'App -> navigateToHome')

        setView('home') //funciones ya bindeadas (funcion flecha)
    }

    return <>
        {/*click a register, nos enviaa a la pag register. Y onLoggedIn nos envia a home(despues de registrarse) */}
        {view === 'login' && <Login onNavigateToRegister={navigateToRegister} onLogIn={navigateToHome} />}
        {view === 'register' && <Register onNavigateToLogin={navigateToLogin} onRegisterUser={navigateToLogin} />}
        {view === 'home' && <Home onLogout={navigateToLogin} />}
        {/*cuando el estado del componente sea home, se muestre home */}

    </>
}
