class App extends React.Component {
    constructor(){
        log('INFO', 'App - constructor')
        super()

        this.state = {
            view: 'login'
        }

    }

    componentDidMount() {
        log('INFO', 'App - componentDiMount')
    }

    componentWillUnmount(){
        log('INFO', 'App - componentWillUnmount')
    }
    

    // -------------------------------------------------- REPASAR
    navigateToRegister = () => {
        this.setState({view: 'register'})
    }

    navigateToLogin = () =>{
        this.setState({view: 'login'})
    }

    render(){
        log('INFO', 'App -render')
        return <>
                                                  {/* parametros */}
        {this.state.view ==='login' && <LoginPage onRegisterClick ={this.navigateToRegister} /> }
        {this.state.view ==='register' && <RegisterPage onLoginClick={this.navigateToLogin} />}
        </>
    }    
}