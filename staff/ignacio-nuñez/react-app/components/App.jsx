const { useState } = React

function App() {

    const [view, setView] = useState('login')

    const navigateToRegister = () => setView('register')

    const navigateToLogin = () => setView('login')

    const navigateToHome = () => setView('home')

    const navigateToSettings = () => setView('settings')

    return <>
        {view === 'login' && <LoginPage onRegisterClick={navigateToRegister}
            onLoggedIn={navigateToHome} />}
        {view === 'register' && <RegisterPage onLoginClick={navigateToLogin} onRegister={navigateToLogin} />}
        {view === 'home' && <HomePage onLogOut={navigateToLogin} onSettings={navigateToSettings} onHomeLink={navigateToHome} />}
        {view === 'settings' && <SettingsPage onLogOut={navigateToLogin} onSettings={navigateToSettings} onHomeLink={navigateToHome} />}
    </>
}