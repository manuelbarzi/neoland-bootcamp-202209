class App extends React.Component{

    constructor(){
        super()      
      
    }
    
    componentDidMount(){ //!para cuando arranca la aplicación, solo una vez
        log( 'INFO', 'App ->constructor')      
    }
    componentWillUnmount(){
        log('INFO', 'APP-componentDidMount')
    }
   

    render() {
        log( 'INFO', 'App ->RENDER')

        return  <>
        {/* <LoginPage /> */}
        <RegisterPage />
    </>

    }
}
