class App extends React.Component{
    constructor(){
        super()

        this.state = {view: 'login'}
    }

    navigateToRegister = () => this.setState({ view:'register' })

    navigateToLogin = () => this.setState({ view:'login' })

    navigateToHome = () => this.setState({ view:'home' })

    navigateToSettings = () => this.setState({view: 'settings'})

    render(){
        return <>
        { this.state.view === 'login' && <LoginPage onRegisterClick={ this.navigateToRegister } 
        onLoggedIn={ this.navigateToHome }/> }
        { this.state.view === 'register' && <RegisterPage onLoginClick={ this.navigateToLogin } onRegister={this.navigateToLogin}/> }
        { (this.state.view === 'home' || this.state.view ==='settings') && <NavBar onLogOut={this.navigateToLogin} onSettings={this.navigateToSettings} onHomeLink={this.navigateToHome}/>}
        { this.state.view === 'home' && <HomePage />}
        { this.state.view === 'settings' && <SettingsPage  /> }

        </>
    }
}