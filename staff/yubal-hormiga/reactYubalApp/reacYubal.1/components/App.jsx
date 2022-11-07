class App extends React.Component{


    constructor(){
        super()
        
        this.state = {
            time: new Date()
        }
        
    }
    
    componentDidMount(){ //!para cuando arranca la aplicación, solo una vez
        log( 'INFO', 'App ->constructor')

        setInterval(()=>{
            this.update()
        }, 1000)
    }
    componentWillUnmount(){
        log('INFO', 'APP-componentDidMount')
    }
    update = ()=> {
        //console.log('udpader')
        this.setState({
            time: new Date
        })
    }

    render() {
        log( 'INFO', 'App ->RENDER')

        return  <>
        <h1>Hola mundo</h1>
        <time>{ this.state.time.toString() }</time>        
        <button onClick={this.update}>refresh</button>
    </>

    }
}
