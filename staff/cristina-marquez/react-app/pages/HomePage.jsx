class HomePage extends React.Component {
    constructor() {

        super()

        this.state = { tasks: [] }

    }
    handleToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })


    handleNavigateToSettings = event => {
        event.preventDefault()

        this.setState({ view: 'settings', toggleButtonText: 'menu' })
    }


    componentDidMount() {
        log('INFO', 'Home component mounted')
        try {
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleCreateTask = () => {
        try {
            createTask(user.email)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateTaskText = (taskId, newText) => {
        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    handleDeleteTask = (taskId) => {
        try {
            deleteTask(taskId)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }



    handleLogout = () => {

        user = null
        const onLoggedOut = this.props.onLoggedOut

        onLoggedOut()
    }

    render() {
        return <main className="min-h-screen">
            <header className="fixed flex justify-between bg-pink-600 w-full">
                <div className="homepage-header-left-group">
                    <span className="material-symbols-outlined header-icons text-white">home</span>
                </div>
                <div className="homepage-header-right-group">
                    <span id="username-header-span" className="text-white">{user && user.name}</span>
                    <span className="material-symbols-outlined header-icons text-white" onClick={this.handleCreateTask}>add</span>
                    <span className="material-symbols-outlined header-icons text-white" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}menu</span>
                </div>

                {this.state.toggleButtonText === 'close' && <div className="flex flex-col items-center text-white">
                    <a className="material-symbols-outlined text-white" href="" onClick={this.handleNavigateToSettings}>settings</a>
                    <button className="material-symbols-outlined text-white" onClick={this.handleLogout}>logout</button>
                </div>}
            </header>

            <section className="flex flex-col items-center">
                <h2 className="text-4xl m-10">Tasks</h2>
                <div className="flex-column sm:flex w-11/12 sm:w-3/4 justify-around">
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">TODO</div>


                        {this.state.tasks.filter(task => task.status === 'TODO').map(task => <div className="task-component mx-3 my-2 flex justify-between">
                            <article className="task-card" contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</article>
                            <span className="material-symbols-outlined task-component delete-icon" onClick={() => { this.handleDeleteTask(task.id) }}>delete</span>
                        </div>)}

                    </section>
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">IN PROGRESS</div>
                        {this.state.tasks.filter(task => task.status === 'IN_PROGRESS').map(task => <div className="task-component mx-3 my-2 flex justify-between">
                            <article className="task-card" contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</article>
                            <span className="material-symbols-outlined task-component delete-icon" onClick={() => { this.handleDeleteTask(task.id) }}>delete</span>
                        </div>)}
                    </section>
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">COMPLETED</div>
                        {this.state.tasks.filter(task => task.status === 'COMPLETED').map(task => <div className="task-component mx-3 my-2 flex justify-between">
                            <article className="task-card" contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</article>
                            <span className="material-symbols-outlined task-component delete-icon" onClick={() => { this.handleDeleteTask(task.id) }}>delete</span>
                        </div>)}
                    </section>
                </div>
            </section>

        </main>

    }
}