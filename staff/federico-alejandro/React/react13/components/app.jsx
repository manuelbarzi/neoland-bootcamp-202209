class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = {
            time: new Date
        } // crea la clase App y llama (extends) a componentes de React ya pre-definidos
    }

    componentDidMount() { // se invoca inmediatamente después de montar un componente
                          // utlizado para configurar un temporizador
        log('INFO', 'App -> componentDidMount')

        //setInterval(function () { this.update() }.bind(this), 1000)
        setInterval(() => this.update(), 1000)
    }

    update = () => { // creado para actualizar la hora
        log('INFO', 'App -> update')

        this.setState({
            time: new Date
        })
    }

    render() { //  se utiliza para mostrar en pantalla
        log('INFO', 'App -> render')

        return <>
            <h1>hola mundo</h1>
            <time>{this.state.time.toString()}</time>
        </>
    }
}