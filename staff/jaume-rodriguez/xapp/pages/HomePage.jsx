class HomePage extends React.Component {
    constructor() {
        log('INFO', 'HomePage -> render')
        super()

        this.state = { toggleMenuComponent: 'open' }
    }

    toggleMenu = () => this.setState({ toggleMenuComponent: this.state.toggleMenuComponent === 'open' ? 'close' : 'open' })

    logout = () => {
        log('INFO', 'Home->logout')
        user = null
        const onLoggedOut = this.props.onLoggedOut

        onLoggedOut()
    }

    settingsLink = () => {
        log('INFO', 'Settings Account -> render')

        const onSettingsAccountLink = this.props.onSettingsAccountLink

        onSettingsAccountLink()
    }

    render() {
        return (
            <main className="h-screen">
                <header className="flex z-0 items-center px-2 py-3 bg-gradient-to-br from-cyan-500 to-blue-500">
                    <img src="img/trellologo.png" className="w-40 cursor-pointer" />
                    <img src="img/headermenupanelbotton.png" className="w-14 cursor-pointer ml-auto invert" onClick={this.toggleMenu} />
                </header>

                {this.state.toggleMenuComponent === 'close' &&
                    <div className="flex justify-end right-0 absolute">
                        <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-cyan-100 border-sky-700 border-b-2 border-l -mt-1">
                            <p className="text-black pr-1">{user.email}</p>
                            <hr className="w-full border-b border-sky-700 mx-auto my-2" />
                            <button className="text-black pr-1 hover:font-semibold" onClick={this.settingsLink}>
                                Settings
                            </button>
                            <button className="text-black pr-1 hover:font-semibold" onClick={this.logout}>
                                Logout
                            </button>
                        </div>
                    </div>}
                <section className="flex z-1 w-full justify-center flex-wrap">
                    <div className="flex flex-col justify-center content-center z-0 p-8 bg-sky-100 border-sky-700 border-b-2 border-solid w-full h-32">
                        <span className="self-center font-light text-4xl text-black mt-1">
                            My Tasks
                        </span>
                        <span className="self-center font-light text-lg text-black mt-1">
                            {user.name}
                        </span>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center m-4 gap-x-4">
                        <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold">
                            TO DO
                            <button className="self-center p-2 bg-sky-700 border-round rounded text-white my-4 p-4 font-semibold scale-100 bg-gradient-to-br from-cyan-500 to-blue-500">
                                {" "}
                                Add new Task
                            </button>
                        </section>
                        <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold">
                            DOING
                            <button className="self-center p-2 bg-sky-700 rounded border-round text-white my-4 p-4 font-semibold bg-gradient-to-br from-cyan-500 to-blue-500 scale-100">
                                {" "}
                                Add new Task
                            </button>
                        </section>
                        <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold">
                            DONE
                            <button className="self-center p-2 bg-sky-700 rounded text-white my-4 p-4 font-semibold bg-gradient-to-br from-cyan-500 to-blue-500 scale-100">
                                {" "}
                                Add new Task
                            </button>
                        </section>
                    </div>
                </section>
            </main>
        );
    }
}
