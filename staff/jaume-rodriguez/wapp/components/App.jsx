const { useState, useEffect } = React

function App() {

    const [view, setView] = useState('LoginPage')
    const [inputNameValue, setInputNameValue] = useState('')
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')

    // FORMS INFO VALUE
    const handleInputEmailAndNameValue = (newValue) => {
        setInputEmailValue(newValue),
            setInputNameValue(newValue.split('@')[0])
    }

    const handleInputPasswordValue = (newValue) => {
        setInputPasswordValue(newValue)
    }

    // APP PAGES RENDER
    const navigateToLogin = () => setView('LoginPage')
    const navigateToRegister = () => setView('RegisterPage')
    const navigateToHome = () => setView('HomePage')
    const navigateToSettingsAccount = () => setView('SettingsAccountPage')

    return <>
        {view === 'LoginPage' &&
            <LoginPage
                onLoggedIn={navigateToHome}
                onRegisterLinkClick={navigateToRegister}
                onInputEmailValue={handleInputEmailAndNameValue}
                onInputPasswordValue={handleInputPasswordValue}
            />}

        {view === 'RegisterPage' &&
            <RegisterPage
                onLoggedIn={navigateToHome}
                onLoginLinkClick={navigateToLogin}
                loginInputNameValue={inputNameValue}
                loginInputEmailValue={inputEmailValue}
                loginInputPasswordValue={inputPasswordValue}
            />}

        {view === 'HomePage' &&
            <HomePage
                onHomeLink={navigateToHome}
                onSettingsAccountLink={navigateToSettingsAccount}
                onLoggedoutLink={navigateToLogin}
            />}

        {view === 'SettingsAccountPage' &&
            <SettingsAccountPage
                onHomeLink={navigateToHome}
                onSettingsAccountLink={navigateToSettingsAccount}
                onLoggedoutLink={navigateToLogin}
            />}
    </>
}
