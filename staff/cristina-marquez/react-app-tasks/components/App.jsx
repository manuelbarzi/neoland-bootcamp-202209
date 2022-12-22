const { useState, useEffect } = React

function App(props) {


    const [view, setView] = useState('login')

    const handleNavigateToRegister = () => {
        setView('register')
    }
    const handleNavigateToLogin = () => {
        setView('login')
    }
    const handleNavigateToHome = () => {
        setView('home')
    }


    return <>
        {view === 'login' &&
            <LoginPage
                onRegisterClick={handleNavigateToRegister}
                onLoggedIn={handleNavigateToHome}
            />}
        {view === 'register' && <RegisterPage onLoginClick={handleNavigateToLogin} />}

        {view === 'home' && <HomePage onLoggedOut={handleNavigateToLogin} />}
    </>

}
