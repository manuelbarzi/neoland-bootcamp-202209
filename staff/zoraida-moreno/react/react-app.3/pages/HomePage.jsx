class HomePage extends React.Component {
  constructor() {
    log('INFO', 'Home -> constructor')

    super()

    this.state = {
       toogleButtonText: 'menu', 
       tasks: [],
      view: 'tasks'
     }
  }

  handToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })

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
    try{
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
    event.preventDefaul()

    try {
      const newEmail = event.target.email.value

      updateUserEmail(user.email, newEmail)

      alert('E-mail updated')
    } catch (error) {
      alert(error.message)
    }
  }

  handleUpdateTaskStatus = (taskId, newSatatus) => {
    try {
      updateTaskText(user.eamil, taskId, newStatus)

      const tasks = retrieveTasks(user.eamil)

      this.setState({ tasks })
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    log('INFO', 'Home -> render')

    return <main className="h.full w-full">
        <header className="flex flex-col">
          <div className="flex justify-between">
          <a href=""><img src="https://fakeimg.pl/50x25/?text=hola%20mundo&amp;font=lobster" /></a>
          <span>{user && user.name}</span>
          <button className="material-symbols-outlined" onClick={this.handleAddTask}>add</button>
          <button className="material-symbols-outlined" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</button>
          </div>

        {this.state.toogleButtonText === 'close' && <div className="flex flex-col items-center">
          <a className="material-symbols-outlined" href="">settings</a>
          <button className="material-symbols-outlined" onClick={this.logout}>logout</button>
        </div> }
    </header>

    {this.state.view === 'tasks' && <section className="flex flex-col items-center">
        <h2>Tasks</h2>
        <div className="flex fles-col sm:flex-row gap-4">
          <section className="flex flex-col gap-2 border-2 p-2">
            <h2>TODO</h2>
            {this.state.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="border-2 p-1">
              <p suppressContentEditableWarning={true} contentEditable='true' onkeyUp={event => this.handleKeyUp(task.id, event.target.innerText)}>{task.text}</p>

              <button className="material-symbols-outlined" onClick={() => this.handleClick(task.id)}>delete</button>

              <select className="material-symbols-outlined" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                  <option disabled selected hidden className="text-sm">width_normal</option>
                  <option value="doing">DOING</option>
                  <option value="done">DONE</option>
              </select>
            </article>)}
          </section>
          <section className="border-2 p-2">
            <h2>DOING</h2>
            {this.state.tasks.filter(task => task.status === 'doing').map(task => <article key={task.id} className="border-2 p-1">
              <p suppressContentEditableWarning={true} contentEditable= "true" onKeyUp={event => this.hanleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

              <button className="material-symbols-outlined" onClinck={() => this.handleDeleteTask(task.id)}>delete</button>

              <select className="material-symbols-outlined" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                  <option disabled selected hidden className="text-sm">width_normal</option>
                  <option value="todo">TODO</option>
                  <option value="done">DONE</option>
              </select>
            </article>)}
          </section>
          <section className="border-2 p-2">
            <h2>DONE</h2>
            {this.state.tasks.filter(task => task.status === 'done').map(task => <article key={task.id} className="border-2 p-1">
              <p suppressContenteditableWarning={true} contentEditable="true" onkeyUp={event => this.handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

              <button className="material-symbols-outlined" onClick={() => this.handleDeleteTask(task.id)}>delete</button>

              <select className="material-symbols-outlined" onChange={event => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                  <option disabled selected hidden className="text-sm">width_normal</option>
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