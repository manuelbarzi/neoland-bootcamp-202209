class HomePage extends React.Component {
    constructor() {
        log('INFO', 'HomePage -> render')

        super()

        this.state = {
            toggleButtonText: 'menu',
            tasks: [],
            view: 'tasks'
        }
    }
    handleToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })

    handleLogout = () => {
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

    handleUpdateTaskText = (taskId, newText) => {
        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    handleDeleteTask = taskId => {
        try {
            deleteTask(user.email, taskId)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleAddTask = () => {
        try {
            createTask(user.email)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }
    
    handleNavigateToSettings = event => {
        event.preventDefault()

        this.setState({ view: 'settings', toggleButtonText: 'menu' })
    }
    

    handleUpdateUserEmail = event => {
        event.preventDefault()

        try {
            const newEmail = event.target.email.value

            updateUserEmail(user.email, newEmail)

            user.email = newEmail

            alert('E-mail updated')
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateUserName = event => {
        event.preventDefault()

        const newName = event.target.name.value

        try {
            updateUserName(user.name, newName)

            user.name = newName

            alert('Name updated')
        } catch (error) {

            alert(error.message)
        }

        handleUpdateUserPassword = event => {
            event.preventDefault()

            const newPassword = event.target.password.value

            try {
                updateUserPassword(user.password, newPassword)

                alert('Password updated')

                updatePasswordForm.reset()

            } catch (error) {

                alert(error.message)
            }

        }

    }

    handleUpdateTaskStatus = (taskId, newStatus) => {
        try {
            updateTaskStatus(user.email, taskId, newStatus)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        log('INFO', 'Home -> render')

        return <main className="h-full w-full">
            <header className="flex flex-col">
                <div className="flex justify-between">
                    <span className="font-extrabold italic my-8 ml-3">
                        {user && user.name}
                    </span>
                    <a href="">
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png" className=" h-20 w-30 " /></a>
                    <button className=" flex flex-col material-symbols-outlined" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</button>
                </div>
                {this.state.toggleButtonText === 'close' &&
                    <div className="flex">
                        <a className="material-symbols-outlined" href="" onClick={this.handleNavigateToSettings}>settings</a>
                        <button className=" material-symbols-outlined" onClick={this.handleLogout}>logout</button>
                    </div>}
            </header>
            <hr className="w-full border-1 bg-white" />

            {this.state.view === 'tasks' && <section className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-extrabold italic">Tasks</h2>
                <div className="flex flex-col sm:flex-row gap-x-44">
                    <section className="flex flex-col h-fit rounded-lg order-inherit gap-2 w-72 border-4 p-2">
                        <h2 className="font-extrabold">TODO</h2> {/*se aplica filter que devuelve un array y sobre ese nuevo array se aplica el metodo map  */}
                        {this.state.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="rounded-lg border-2 p-1">
                            <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>
                            <div className="flex justify-between">
                                <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>
                                <select className="material-symbols-outlined w-4 bg-transparent" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                                    <option disabled selected hidden className="text-sm">Add_box</option>
                                    <option className="text-xs" value="doing">DOING</option>
                                    <option className="text-xs" value="done">DONE</option>
                                </select>
                            </div>
                        </article>)}
                    </section>
                    <section className="flex flex-col h-fit border-4 rounded-lg order-inherit w-72 p-2 gap-2">
                        <h2 className="font-extrabold">DOING</h2>
                        {this.state.tasks.filter(task => task.status === 'doing').map(task => <article key={task.id} className="rounded-lg border-2 p-1">
                            <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>
                            <div className="flex justify-between">
                                <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>
                                <select className="material-symbols-outlined w-4  bg-transparent" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                                    <option disabled selected hidden className="text-sm">width_normal</option>
                                    <option className="text-xs" value="done">DONE</option>
                                    <option className="text-xs" value="todo">TODO</option>
                                </select>
                            </div>
                        </article>)}
                    </section>
                    <section className="border-4 h-fit rounded-lg order-inherit w-72 p-2 gap-2">
                        <h2 className="font-extrabold">DONE</h2>
                        {this.state.tasks.filter(task => task.status === 'done').map(task => <article key={task.id} className="rounded-lg border-2 p-1">
                            <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>
                            <div className="flex justify-between">
                                <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>
                                <select className="material-symbols-outlined w-4  bg-transparent" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                                    <option disabled selected hidden className="text-sm">width_normal</option>
                                    <option className="text-xs" value="doing">DOING</option>
                                    <option className="text-xs" value="todo">TODO</option>
                                </select>
                            </div>
                        </article>)}
                    </section>
                </div>
                <div className="flex flex-col items-center text-white my-2 border-1 p-2 mx-10 font-semibold italic rounded-full bg-indigo-600 rounded-x1 shadow-2xl shadow-gray-900">
                    <button onClick={this.handleAddTask}>+ Add task</button>
                </div>
            </section>}

            {this.state.view === 'settings' && <section className="flex flex-col items-center" >
                <h2>Settings</h2>
                <form className="flex flex-col" onSubmit={this.handleUpdateUserEmail}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" id="email" placeholder=" input an email" defaultValue={user.email} />
                    <button>Save</button>
                </form>
                <form className="flex flex-col" onSubmit={this.handleUpdateUserName}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="name" id="name" placeholder=" Name" defaultValue={user.name} />
                    <button>Save</button>
                </form>
                <form className="flex flex-col" onSubmit={this.handleUpdateUserPassword}>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" id="password" placeholder=" input a new password" />
                    <button>Save</button>
                </form>
            </section>}
        </main>
    }
}