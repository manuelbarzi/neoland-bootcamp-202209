// VERSION 1

// function App (){
//     return <>
//         <h1>Hola mundo</h1>
//         {/* <time>{Date()}</time> */}
//         <time>{new Date().toString() }</time>
//     </> 
// }

// VERSION 2

class App extends React.Component{
    constructor (){
        super()

        this.state = {
            time: new Date
        }

        this.update = this.update.bind(this)
    }

    componentDidMount() {

        //setInterval(function () { this.update() }.bind(this), 1000)
        setInterval(() => this.update(), 1000)
    }

    update = () => {
        this.setState({
            time: new Date
        })
    }

    render(){
        return <>
            <h1>Hola mundo</h1>
            {/* <time>{Date()}</time> */}
            <time>{new Date().toString() }</time>
            {/* <button onClick={this.update.bind(this)}>refresh</button> */}
        </>
    }
}