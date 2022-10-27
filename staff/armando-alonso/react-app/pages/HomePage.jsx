class HomePage extends React.Component {
    constructor() {
        log('INFO', 'Home -> constructor')

        super()

        this.state = { toggleButtonText: 'menu', tasks: [] }
    }

    toggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu'})

    logout = () => {
        log('INFO', 'Home -> logout')

        user = null
        
        const onLoggedOut = this.props.onLoggedOut

        onLoggedOut()
    }

    componentDidMount() {
        log('INFO', 'Home -> componentDidMount')

        try {
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })

        } catch (error) {

            alert(error.message)
            
        }
    }

    render () {
        log('INFO', 'Home -> render')

    return <main className="flex flex-col bg-[#fffde7]">
                    <header className="flex flex-col">
                        <div className="flex justify-between p-4">
                            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/100px-Trello-logo-blue.svg.png" className=""/></a>
                            <span className="">{user && user.name}</span>
                            <div className="flex">
                                <button className="material-symbols-outlined">add</button>
                                <button className="material-symbols-outlined" onClick={this.toggleMenu}>{this.state.toggleButtonText}</button>
                            </div>
                        </div>
                        {this.state.toggleButtonText === 'close' &&
                        <div className="flex flex-col items-end">
                            <a className="material-symbols-outlined">settings</a>
                            <button className="material-symbols-outlined" onClick={this.logout}>logout</button>
                        </div>}
                    </header>
                    <section className="flex flex-col items-center bg-[#fffde7] h-full">
                    <h2 className="p-4">Tasks</h2>
                    <div className="flex flex-col sm:flex-row gap-20 bg-[#fffde7]">
                        <section className="flex flex-col gap-2 border-2 p-2">
                            <h2 className="flex flex-col items-center">TODO</h2>
                            {this.state.tasks.filter(task => task.status === 'todo').map(task => <article className="border-2 p-1">
                                <p contentEditable="true">{task.text}</p>
                                <button className="material-symbols-outlined flex flex-col items-center">delete</button>
                            </article>)}
                        </section>
                        <section className="flex flex-col gap-2 border-2 p-2">
                            <h2 className="flex flex-col items-center">DOING</h2>
                            {this.state.tasks.filter(task => task.status === 'doing').map(task => <article className="border-2 p-1">
                                <p contentEditable="true">{task.text}</p>
                                <button className="material-symbols-outlined">delete</button>
                            </article>)}
                        </section>
                        <section className="flex flex-col gap-2 border-2 p-2">
                            <h2 className="flex flex-col items-center">DONE</h2>
                            {this.state.tasks.filter(task => task.status === 'done').map(task => <article className="border-2 p-1">
                                <p contentEditable="true">{task.text}</p>
                                <button className="material-symbols-outlined">delete</button>
                            </article>)}
                        </section>
                    </div>
                    </section>
                </main>
    }

}
