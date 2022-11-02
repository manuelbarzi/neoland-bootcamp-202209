class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = {
            view: 'LoginPage',
            inputEmailValue: "",
            inputPasswordValue: ""
        }
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }

    // FORMS INFO VALUE
    handleInputEmailValue = (newValue) => {
        this.setState({ inputEmailValue: newValue })
    }

    handleInputPasswordValue = (newValue) => {
        this.setState({ inputPasswordValue: newValue })
    }

    // APP PAGES RENDER
    navigateToLogin = () => this.setState({ view: 'LoginPage' })
    navigateToRegister = () => this.setState({ view: 'RegisterPage' })
    navigateToHome = () => this.setState({ view: 'HomePage' })
    navigateToSettingsAccount = () => this.setState({ view: 'SettingsAccountPage' })

    render() {
        log('INFO', 'App -> Render')

        return <>
            {this.state.view === 'LoginPage' &&
                <LoginPage
                    onLoggedIn={this.navigateToHome}
                    onRegisterLinkClick={this.navigateToRegister}
                    onInputEmailValue={this.handleInputEmailValue}
                    onInputPasswordValue={this.handleInputPasswordValue}
                />}

            {this.state.view === 'RegisterPage' &&
                <RegisterPage
                    loginInputEmailValue={this.state.inputEmailValue}
                    loginInputPasswordValue={this.state.inputPasswordValue}
                    onLoggedIn={this.navigateToHome}
                    onLoginLinkClick={this.navigateToLogin}
                />}

            {this.state.view === 'HomePage' &&
                <HomePage
                    onHomeLink={this.navigateToHome}
                    onSettingsAccountLink={this.navigateToSettingsAccount}
                    onLoggedoutLink={this.navigateToLogin}
                />}

            {this.state.view === 'SettingsAccountPage' &&
                <SettingsAccountPage
                    onHomeLink={this.navigateToHome}
                    onSettingsAccountLink={this.navigateToSettingsAccount}
                    onLoggedoutLink={this.navigateToLogin}
                />}
        </>
    }
}