class SuperApp extends React.Component {
    constructor() {
        log('INFO', 'SuperApp -> constructor')

        super()

        this.state = { show: false }
    }

    toggle = () => {
        log('INFO', 'SuperApp -> toggle')

        this.setState({ show: !this.state.show })
    }

    render() {
        log('INFO', 'SuperApp -> render')

        return <>
            <button onClick={this.toggle}>toggle app</button>
            {this.state.show && <App />}
        </>
    }
}
