
class HomePage extends React.Component {
    constructor() {

        super()
        this.state = { tasks: [], view: "tasks" }

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

    handleUpdateTaskStatus = (taskId, newStatus) => {
        try {

            updateTaskStatus(taskId, newStatus)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
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

    handleNavigateToSettings = () => {
        log('INFO', 'navigating to settings')

        this.setState({ view: 'settings' })
    }

    handleLogout = () => {

        user = null

        this.props.onLoggedOut()
    }

    render() {
        return <main className="min-h-screen">


            <Navbar

                onAddTask={this.handleCreateTask}
                onNavigateToSettings={this.handleNavigateToSettings}
                onLoggedOut={this.handleLogout}
                view={this.state.view}
            />

            {this.state.view === "tasks" && <section className="flex flex-col items-center">
                <h2 className="text-4xl m-10">Tasks</h2>
                <div className="flex-column sm:flex w-11/12 sm:w-11/12 justify-around">
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">TODO</div>


                        {this.state.tasks.filter(task => task.status === 'TODO').map(task => <div key={task.id} className="task-component mx-3 my-2 flex justify-between content-center">

                            <div className="flex content-center pt-3">
                                <article contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</article>
                            </div>
                            <div className="flex content-center">

                                <select
                                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                    onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}
                                >
                                    <option selected={task.status === 'TODO' ? true : false} value="TODO">Todo</option>
                                    <option selected={task.status === 'IN_PROGRESS' ? true : false} value="IN_PROGRESS">In progress</option>
                                    <option selected={task.status === 'COMPLETED' ? true : false} value="COMPLETED">Completed</option>
                                </select>
                                <span className="material-symbols-outlined task-component delete-icon pt-2" onClick={() => { this.handleDeleteTask(task.id) }}>delete</span>
                            </div>


                        </div>)}

                    </section>
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">IN PROGRESS</div>
                        {this.state.tasks.filter(task => task.status === 'IN_PROGRESS').map(task => <div key={task.id} className="task-component mx-3 my-2 flex justify-between">
                            <div className="flex content-center pt-3">
                                <article contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</article>
                            </div>
                            <div className="flex">
                                <select
                                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                    onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}
                                >
                                    <option selected={task.status === 'TODO' ? true : false} value="TODO">Todo</option>
                                    <option selected={task.status === 'IN_PROGRESS' ? true : false} value="IN_PROGRESS">In progress</option>
                                    <option selected={task.status === 'COMPLETED' ? true : false} value="COMPLETED">Completed</option>
                                </select>
                                <span className="material-symbols-outlined task-component delete-icon pt-2" onClick={() => { this.handleDeleteTask(task.id) }}>delete</span>
                            </div>
                        </div>)}
                    </section>


                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">COMPLETED</div>
                        {this.state.tasks.filter(task => task.status === 'COMPLETED').map(task => <div key={task.id} className="task-component mx-3 my-2 flex justify-between">
                            <div className="flex content-center pt-3">
                                <article contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</article>
                            </div>
                            <div className="flex">
                                <select
                                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                    onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}
                                >
                                    <option selected={task.status === 'TODO' ? true : false} value="TODO">Todo</option>
                                    <option selected={task.status === 'IN_PROGRESS' ? true : false} value="IN_PROGRESS">In progress</option>
                                    <option selected={task.status === 'COMPLETED' ? true : false} value="COMPLETED">Completed</option>
                                </select>
                                <span className="material-symbols-outlined task-component delete-icon pt-2" onClick={() => { this.handleDeleteTask(task.id) }}>delete</span>

                            </div>
                        </div>)}
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