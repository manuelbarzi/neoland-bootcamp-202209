class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = { view: 'LoginPage' }
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }

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
                />}

            {this.state.view === 'RegisterPage' &&
                <RegisterPage
                    onRegisterSuccess={this.navigateToLogin}
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