class App extends React.Component { // se extienden los componentes desde react
    constructor() {
        log('INFO', 'App -> constructor')

        super()
         user = users[0]
        this.state = { view: 'home' }

        //this.state = { view: 'login'}
    }
    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }
    componentWillUnmount() {
        log('INFO', 'App -> componentWillUnmount')
    }

    navigateToRegister = () => {
        log('INFO', 'App -> navigateToRegister')

        this.setState({ view: 'register' }) // defino callbacks que me permitan cambiar el estado en el componente 

    }//y me permite navegar a Register page

    navigateToLogin = () => {
        log('INFO', 'App -> navigateToLogin')

        this.setState({ view: 'login' })
    }

    navigateToHome = () => {
        log('INFO', 'App -> navigateToHome')

        this.setState({ view: 'home' }) //funciones ya bindeadas (funcion flecha)
    }


    render() {
        log('INFO', 'App -> render')

        return <>
            {/*click a register, nos enviaa a la pag register. Y onLoggedIn nos envia a home(despues de registrarse) */}
            {this.state.view === 'login' && <Login onNavigateToRegister={this.navigateToRegister} onLogIn={this.navigateToHome} />}
            {this.state.view === 'register' && <Register onNavigateToLogin={this.navigateToLogin} onRegisterUser={this.navigateToLogin} />}
            {this.state.view === 'home' && <Home onLogout={this.navigateToLogin} />}
            {/*cuando el estado del componente sea home, se muestre home */}
            {/*{this.state.view === 'setting' && <SettingPage onClickHome={this.navigateToHome}/>}*/}
        </>
    }
}