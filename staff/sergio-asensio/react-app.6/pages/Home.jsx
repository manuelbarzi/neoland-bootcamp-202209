class Home extends React.Component {
    constructor() {
        log('INFO', 'Home -> constructor')

        super()

        this.state = {
            tasks: [],
            view: 'tasks'
        }
    }

    componentWillUnmount() {
        log('INFO', 'Home -> componentWillUnmount')
    }

    handleLogout = () => {
        log('INFO', 'Home -> handleLogout')

        user = null

        this.props.onLogout()
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

    handleUpdateTaskText = (taskId, newText) => {
        log('INFO', 'Home -> handleUpdateTaskText')

        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    handleDeleteTask = taskId => {
        log('INFO', 'Home -> handleDeleteTask')

        try {
            deleteTask(user.email, taskId)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleAddTask = () => {
        log('INFO', 'Home -> handleAddTask')

        try {
            createTask(user.email)
            
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleNavigateToSettings = () => {
        log('INFO', 'Home -> handleNavigateToSettings')

        this.setState({ view: 'settings' })
    }

    handleUpdateUserEmail = event => {
        log('INFO', 'Home -> handleUpdateUserEmail')

        event.preventDefault()

        try {
            const newEmail = event.target.email.value

            updateUserEmail(user.email, newEmail)

            alert('E-mail updated')
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateTaskStatus = (taskId, newStatus) => {
        log('INFO', 'Home -> handleUpdateTaskStatus')

        try {
            updateTaskStatus(user.email, taskId, newStatus)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleNavigateToTasks = () => {
        log('INFO', 'Home -> handleNavigateToTasks')

        this.setState({ view: 'tasks' })
    }

    render() {
        log('INFO', 'Home -> render')

        return <main className="h-full w-full">
            <Header
                onNavigateToTasks={this.handleNavigateToTasks}
                onAddTask={this.handleAddTask}
                onNavigateToSettings={this.handleNavigateToSettings}
                onLogout={this.handleLogout}
                view={this.state.view}
            />

            {this.state.view === 'tasks' && <section className="flex flex-col items-center">
                <h2>Tasks</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <section className="flex flex-col gap-2 border-2 p-2">
                        <h2>TODO</h2>
                        {this.state.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="border-2 p-1">
                            <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

                            <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>

                            <select className="material-symbols-outlined" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                                <option disabled hidden className="text-sm" value="">width_normal</option>
                                <option value="doing">DOING</option>
                                <option value="done">DONE</option>
                            </select>
                        </article>)}
                    </section>
                    <section className="border-2 p-2">
                        <h2>DOING</h2>
                        {this.state.tasks.filter(task => task.status === 'doing').map(task => <article key={task.id} className="border-2 p-1">
                            <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

                            <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>

                            <select className="material-symbols-outlined" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                                <option disabled hidden className="text-sm" value="">width_normal</option>
                                <option value="todo">TODO</option>
                                <option value="done">DONE</option>
                            </select>
                        </article>)}
                    </section>
                    <section className="border-2 p-2">
                        <h2>DONE</h2>
                        {this.state.tasks.filter(task => task.status === 'done').map(task => <article key={task.id} className="border-2 p-1">
                            <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

                            <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>

                            <select className="material-symbols-outlined" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                                <option disabled hidden className="text-sm" value="">width_normal</option>
                                <option value="todo">TODO</option>
                                <option value="doing">DOING</option>
                            </select>
                        </article>)}
                    </section>
                </div>
            </section>}

            {this.state.view === 'settings' && <section className="flex flex-col items-center">
                <h2>Settings</h2>
                <form className="flex flex-col" onSubmit={this.handleUpdateUserEmail}>
                    <label htmlFor="email">E-mail</label>
                    <input name="email" type="email" id="email" placeholder="input an email" defaultValue={user.email} />
                    <button>Save</button>
                </form>
            </section>}
        </main>
    }
}