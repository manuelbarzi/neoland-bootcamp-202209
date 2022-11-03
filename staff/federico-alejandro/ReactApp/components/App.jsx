class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()
        user = users[0]
        this.state = { view: 'home' }



    }
    componentDidMount() {
        log('INFO', 'App -> componentDidMount')

    }
    componentWillUnmount() {
        log('INFO', 'App -> componentWillUnMount')
    }
    navigateToRegister = () => this.setState({ view: 'register' })

    navigateToLogin = () => this.setState({ view: 'login'})

    navigateToHome = () => this.setState({ view: 'home'})



    render() {
        log('INFO', 'App -> redner')

        return <> {/*si esto es cierto, entonces mostrame la login page*/}
            {this.state.view === 'login' && <LoginPage onNavigateToRegister={this.navigateToRegister} onLogIn={this.navigateToHome} />}
            {this.state.view === 'register' && <RegisterPage onNavigateToLogin={this.navigateToLogin} onRegisterUser={this.navigateToLogin} />}
            {this.state.view === 'home' && <HomePage onLogout={this.navigateToLogin} />}
            {/*{this.state.view === 'settings' && <SettingPage />}*/}
        </>
    }
}