class HomePage extends React.Component {
    constructor() {
        log('INFO', 'Home -> constructor')

        super()

        this.state = { toggleButtonText: 'menu', tasks: [] }
    }

    toggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })

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

            //this.setState({ tasks: tasks })
            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        return <main class="h-screen ">
            <header className="flex flex-col bg-yellow-200">
                <div class="flex justify-between">
                    <a href="">
                        <img src="https://fakeimg.pl/50x25/?text=hola%20mundo&amp;font=lobster" />
                    </a><span>{user && user.name}</span><button class="material-symbols-outlined">add</button>
                    <button class="material-symbols-outlined" onClick={this.toggleMenu}>{this.state.toggleButtonText}</button>
                </div>
                {this.state.toggleButtonText === 'close' && <div className="flex flex-col items-center">
                    <a className="material-symbols-outlined" href="">settings</a>
                    <button className="material-symbols-outlined" onClick={this.logout}>logout</button>
                </div>}
            </header>
            <section class="flex flex-col items-center">
                <h2>Tasks</h2>
                <div class="flex flex-col sm:flex-row gap-4">
                    <section class="flex flex-col gap-2 border-2 p-2"><h2>TODO</h2> {this.state.tasks.filter(task => task.status === 'todo').map(task => <article className="border-2 p-1">
                        <p contenteditable="true">{task.text}</p>
                        <button className="material-symbols-outlined">delete</button>
                    </article>)}
                    </section>
                    <section class="border-2 p-2"><h2>DOING</h2> {this.state.tasks.filter(task => task.status === 'doing').map(task => <article className="border-2 p-1">
                        <p contenteditable="true">{task.text}</p>
                        <button className="material-symbols-outlined">delete</button>
                    </article>)}</section>
                    <section class="border-2 p-2"><h2>DONE</h2>{this.state.tasks.filter(task => task.status === 'done').map(task => <article className="border-2 p-1">
                        <p contenteditable="true">{task.text}</p>
                        <button className="material-symbols-outlined">delete</button>
                    </article>)}
                    </section>
                </div>
            </section>
        </main>
    }




}