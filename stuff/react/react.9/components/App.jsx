class App extends React.Component {
    constructor() {
        super()

        this.state = {
            time:  new Date
        }
    }

    update() {
        this.setState({
            time: new Date
        })
    }

    render() {
        return <>
            <h1>hola mundo</h1>
            <time>{this.state.time.toString()}</time>
            <button onClick={this.update.bind(this)}>refresh</button>
            {/* DOM button.onclick = this.update */}
        </>
    }
}
