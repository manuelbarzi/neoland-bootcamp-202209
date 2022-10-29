// class App extends React.Component {
//     constructor() {
//         log('INFO', 'App -> constructor')

//         super()

//         this.state = {
//             time: new Date
//         }
//     }

//     componentDidMount() {
//         log('INFO', 'App -> componentDidMount')

//         //setInterval(function () { this.update() }.bind(this), 1000)
//         setInterval(() => this.update(), 1000)
//     }

//     componentWillUnmount() {
//         log('INFO', 'App -> componentWillUnmount')

//         clearInterval(this.setInterval)
//     }

//     update = () => {
//         log('INFO', 'App -> update')

//         this.setState({
//             time: new Date
//         })
//     }

//     render() {
//         log('INFO', 'App -> render')

//         return <>
//             <h1>hola mundo</h1>
//             <time>{this.state.time.toString()}</time>
//         </>
//     }
// }


class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = {
            time: new Date
        }
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')

        //setInterval(function () { this.update() }.bind(this), 1000)
        this.interval = setInterval(() => this.update(), 1000)
    }

    componentWillUnmount() {
        log('INFO', 'App -> componentWillUnmount')

        clearInterval(this.interval)
    }

    update = () => {
        log('INFO', 'App -> update')

        this.setState({
            time: new Date
        })
    }

    render() {
        log('INFO', 'App -> render')

        return <>
            <h1>hola mundo</h1>
            <time>{this.state.time.toString()}</time>
        </>
    }
}