 class HomePage extends React.Component {
    constructor() {
        log('INFO', 'HomePage -> render')

        super()

        this.state = {
            tasks: [],
            view: 'tasks',
            time: new Date().toDateString()
        }
    }
            
    handleLogout = () => {
        log('INFO', 'Home -> logout')

        user = null

        this.props.onLogout()

    }

    componentDidMount() {
        log('INFO', 'Home -> componentDidMount')

        //setInterval(() => this.update(), 1000) //se actualiza sola la hora

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

        this.setState({ view: 'settings'})

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
    }

    handleUpdateUserPassword = event => {
        event.preventDefault()

        
        try {
            const newPassword = event.target.password.value
            
            updateUserPassword(user.password, newPassword)

            alert('Password updated')

            updatePasswordForm.reset()

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
            onNavigateToSettings={this.handleNavigateToSettings}
            onLogout={this.handleLogout} 
            view={this.state.view}
            />
            
            <hr className="w-full border-1 bg-white" />
            {/* TASK PANEL*/}
            <time className="font-extrabold m-2 underline">{this.state.time}</time>
            
            {this.state.view === 'tasks' && <Tasks 
                tasks={this.state.tasks}
                onUpdateTaskText={this.handleUpdateTaskText}
                onDeleteTask={this.handleDeleteTask}
                onUpdateTaskStatus={this.handleUpdateTaskStatus}
                onAddTask={this.handleAddTask}
            />}
            {/*SETTINGS */}
            {this.state.view === 'settings' && <section className="flex flex-col items-center" >
                <h2>Settings</h2>
                <div>
                    <form className='block' onSubmit={this.handleUpdateUserEmail}>
                        <label htmlFor='email'>Email</label>
                        <input name='email' type='email' id='email' placeholder=' input an email' defaultValue={user.email} />
                        <button className='m-5 text-sm border-transparent rounded-md font-serif bg-blue-400 w-14'>Save</button>
                    </form>
                    <form className='block' onSubmit={this.handleUpdateUserName}>
                        <label htmlFor='name'>Name</label>
                        <input name='name' type='name' id='name' placeholder=' Name' defaultValue={user.name} />
                        <button className='m-5 text-sm border-transparent rounded-md font-serif bg-blue-400 w-14'>Save</button>
                    </form>
                    <form className='block' onSubmit={this.handleUpdateUserPassword}>
                        <label htmlFor='password'>Password</label>
                        <input name='password' type='password' id='password' placeholder=' Input a new password' />
                        <button className='m-5 text-sm border-transparent rounded-md font-serif bg-blue-400 w-14'>Save</button>
                    </form>
                </div>
            </section>}
        </main>
    }
}