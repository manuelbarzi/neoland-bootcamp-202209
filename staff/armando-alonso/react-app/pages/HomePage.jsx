class HomePage extends React.Component {
    constructor() {
        log('INFO', 'Home -> constructor')

        super()

        this.state = { 
            toggleButtonText: 'menu', 
            tasks: [] ,
            view: 'tasks',
            desplegable: ''
        }
    }

    handleToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu'})

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
        log('INFO', 'Home -> Update Text Task')

        try {

            updateTaskText(user.email, taskId, newText)

        }catch (error) {

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
        this.setState({desplegable: this.state.desplegable === 'settings' ? '' : 'settings', toggleButtonText: 'menu' })

            
            
    }


    render () {
        log('INFO', 'Home -> render')

                return <main className="flex flex-col bg-[#ffe97d]">
                    <header className="flex flex-col shadow-2xl fixed w-full bg-[#635666]">
                        <div className="flex justify-between p-4 ">
                            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/100px-Trello-logo-blue.svg.png" className=""/></a>
                            <span className="">{user && user.name}</span>
                            <div className="flex">
                                <button className="material-symbols-outlined" onClick={this.handleAddTask}>add</button>
                                <button className="material-symbols-outlined" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</button>
                            </div>
                        </div>
                        {this.state.toggleButtonText === 'close' &&
                        <div className="flex flex-col items-end">
                            <button className="material-symbols-outlined" onClick={this.handleNavigateToSettings}>settings</button>
                            <button className="material-symbols-outlined" onClick={this.handleLogout}>logout</button>
                        </div>}
                    </header>
                    {this.state.desplegable === 'settings' && <section class="flex flex-col items-center mt-14">
                        <h2>settings</h2>
                        <form className="flex flex-col" onSubmit={this.handleUpdateUserEmail}>
                            <label htmlFor="settings-email">Email</label>
                            <input name="email" placeholder="New Email" id="settings-email" type="email" defaultValue={user.email}/>
                            <button>Change</button>
                        </form>
                    </section>}

                    <section className="flex flex-col items-center bg-[#D3EBCD] h-screen mt-12">
                    <h2 className="p-4">Tasks</h2>
                    <div className="flex flex-col sm:flex-row gap-20 bg-[#AEDBCE]">
                        <section className="flex flex-col gap-2 border-2 p-2">
                            <h2 className="flex flex-col items-center">TODO</h2>
                            {this.state.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="border-2 p-1">
                                <p contentEditable="true" onKeyUp={event => this.handleUpdateTaskText (task.id, event.target.innerText)}>{task.text}</p>
                                <button className="material-symbols-outlined container" onClick={() => this.handleDeleteTask(task.id)}>delete</button>
                            </article>)}
                        </section>
                        <section className="flex flex-col gap-2 border-2 p-2">
                            <h2 className="flex flex-col items-center">DOING</h2>
                            {this.state.tasks.filter(task => task.status === 'doing').map(task => <article key={task.id} className="border-2 p-1">
                                <p contentEditable="true" onKeyUp={event => this.handleUpdateTaskText (task.id, event.target.innerText)}>{task.text}</p>
                                <button className="material-symbols-outlined container" onClick={() => this.handleDeleteTask(task.id)}>delete</button>
                            </article>)}
                        </section>
                        <section className="flex flex-col gap-2 border-2 p-2">
                            <h2 className="flex flex-col items-center">DONE</h2>
                            {this.state.tasks.filter(task => task.status === 'done').map(task => <article key={task.id} className="border-2 p-1">
                                <p contentEditable="true" onKeyUp={event => this.handleUpdateTaskText (task.id, event.target.innerText)}>{task.text}</p>
                                <button className="material-symbols-outlined container" onClick={() => this.handleDeleteTask(task.id)}>delete</button>
                            </article>)}
                        </section>
                    </div>
                    </section>
                    
                    
                    
                </main>
    }
}