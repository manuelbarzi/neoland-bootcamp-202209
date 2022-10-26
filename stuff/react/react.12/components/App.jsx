class App extends React.Component {
    constructor() {
        super()

        this.state = {
            time: new Date
        }
    }

    update = () => {
        this.setState({
            time: new Date
        })
        /* 
        setState(state) {
            ...
            for (const key in state)
                this.state[key] = state[key]
            ...
            this.render()
        }
        */
    }

    render() {
        return <>
            <h1>hola mundo</h1>
            <time>{this.state.time.toString()}</time>
            <button onClick={this.update}>refresh</button>
            {/* DOM button.onclick = this.update */}
        </>
    }
}