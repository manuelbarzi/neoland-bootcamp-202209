class NavBar extends React.Component {
    constructor() {
        super()

        this.state = {toggleButtonText: 'Menu'}
    }
    logout = () => {
        user = null

        const onLogOut = this.props.onLogOut

        onLogOut()
    }

    settings = (event) =>{
        event.preventDefault()

        const onSettings = this.props.onSettings

        onSettings()
    }

    goToHome = (event) =>{
        event.preventDefault()

        const onHomeLink = this.props.onHomeLink

        onHomeLink()
    }

    toggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'Menu' ? 'Close' : 'Menu' })

    render() {
        return <header className="h-20 bg-orange-500 grid grid-cols-12">
            <nav className="flex justify-between p-5 h-full col-start-1 col-end-13 text-2xl">
                <a href="" onClick={this.goToHome} className="h-fit self-center">Home</a>
                <span className="">{user && user.name}</span>
                <button className="material-symbols-outlined" onClick={this.toggleMenu}>{this.state.toggleButtonText}</button>
            </nav>
            {this.state.toggleButtonText === 'Close' && <div className="m-2 flex flex-col bg-orange-300 p-2 col-start-12 col-end-13 rounded-lg">
                <a href="" className="text-center" onClick={this.settings}>Settings</a>
                <button className="" onClick={this.logout}>Log Out</button>
            </div>}
        </header>
        }
}