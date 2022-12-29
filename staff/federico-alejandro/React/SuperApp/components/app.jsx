class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = {
            time: new Date
        }// crea la clase App y llama (extends) a componentes de React ya pre-definidos
    }

    componentDidMount() { //se invoca inmediatamente después de montar un componente, utlizado para configurar un temporizador
        log('INFO', 'App -> componentDidMount')

        //setInterval(function () { this.update() }.bind(this), 1000)
        this.interval = setInterval(() => this.update(), 1000)
    }

    componentWillUnmount() { //Utilizado en el desmontado, para la limpieza de todo lo que tuviese el componente
        //Por ejemplo, temporizadores o manejadores de eventos que se hayan generado sobre partes del navegador que no dependen de este componente
        log('INFO', 'App -> componentWillUnmount')

        clearInterval(this.interval)
    }

    update = () => {
        log('INFO', 'App -> update')

        this.setState({
            time: new Date
        })
    }

    render() { // se utiliza para mostrar en pantalla en pantalla (pinta)
        log('INFO', 'App -> render')

        return <>
            <h1>hola mundo</h1>
            <time>{this.state.time.toString()}</time>
        </>
    }
}