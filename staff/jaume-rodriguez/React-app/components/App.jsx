class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()
    }

    componentDidMount() {
        log('INFO', 'App -> componentDiMount')
    }

    componentWillUnmount() {
        log('INFO')
    }

    render() {
        log('INFO', 'App -> render')

        return <>
            <LoginPage />
            {/* <RegisterPage /> */}
            {/* <HomePage /> */}
            {/* <SettingsAccountPage /> */}
        </>
    }
}