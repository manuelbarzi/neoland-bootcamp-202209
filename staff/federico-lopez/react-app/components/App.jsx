class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }

    componentWillUnmount() {
        log('INFO', 'App -> componentWillUnmount')
    }

    render() {
        log('INFO', 'App -> render')

        return <>
            {/* <LoginPage /> */}
            <RegisterPage />
        </>
    }
}