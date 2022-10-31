class HomePage extends React.Component {
  constructor() {
    log("INFO", "Home -> constructor");

    super();

    this.state = { toggleButtonText: "menu", tasks: [], view: 'tasks'};
  }

  handleToggleMenu = () => this.setState({
      toggleButtonText: this.state.toggleButtonText === "menu" ? "close" : "menu",
    });

  handleLogout = () => {
    log("INFO", "Home -> logout");

    user = null;

    const onLoggedOut = this.props.onLoggedOut;

    onLoggedOut();
  };

  componentDidMount() {
    log("INFO", "Home -> componentDidMount");

    try {
      const tasks = retrieveTasks(user.email);

      this.setState({ tasks });
    } catch (error) {
      alert(error.message);
    }
  }

  handleUpdateTaskText = (taskId, newText) => {
    try {
      updateTaskText (user.email, taskId, newText)
    } catch (error) {
      alert(error.message)
    }
  }

  handleDeleteTask = (taskId) => {
    try {
      deleteTask(user.email, taskId);

      const tasks = retrieveTasks(user.email);

      this.setState({ tasks });
    } catch (error) {
      alert(error.message);
    }
  };
  
  handleAddTask = () => {
    try {
      createTask (user.email)

    const tasks = retrieveTasks (user.email)
    
    this.setState({tasks})

    } catch (error) {
      alert(error.message)
    }
  }
  
  handleNavigateToSettings = event => {
    event.preventDefault()

    this.setState({view: 'settings', toggleButtonText: 'menu'})
  }

  handleUpdateUserEmail = event => {
    event.preventDefault()

    try {
      const newEmail = event.target.email.value 

      updateUserEmail(user.email, newEmail)

      alert('E-mail updated')

    } catch (error) {
      alert(error.message)
    }
  }

  handleReturnHome = event => {
    event.preventDefault()

    this.setState({view: 'tasks'})
  }

  handleUpdateTaskStatus = (taskId, newStatus) => {
    try {
      updateTaskStatus(user.email, taskId, newStatus)

      const tasks = retrieveTasks (user.email)

      this.setState ({tasks})
    } catch (error) {
      alert (error.message)
    }
  }

  render() {
    log("INFO", "Home -> render");

    return <main className=" min-h-screen w-full h-full self-start">
        <Header 
          onNavigateToTasks={this.handleNavigateToTasks}
          onAddTask={this.handleAddTask}
          onNavigateToSettings={this.handleNavigateToSettings}
          onLogout={this.handleLogout}
          view={this.state.view}
        />

          {this.state.view === 'tasks' && <section className="tasks-menu">
          <h1 className="uppercase font-bold text-center mt-4">
            Manage your tasks</h1>

          {/* sm:flex-row - cuando el texto está más grande que en mobile la distribución pasa a ser flex-row */}
          <div className="flex gap-10 justify-center flex-col mt-4 sm:flex-row">
            <section className="w-64 p-2 bg-white border border-black">
              <h2 className="font-bold">TODO</h2>
              {this.state.tasks.filter((task) => task.status === "todo").map((task) => (
                  <article key={task.id} className="m-2 p-2 border border-black task-item flex flex-col place-content-between ">
                    <div className="flex justify-between ml-2">
                    <p suppressContentEditableWarning={true}
                      contentEditable="true" onKeyUp={event => this.handleUpdateTaskText (task.id, event.target.innerText)}>{task.text}</p>
                    <button className="material-symbols-outlined"
                    onClick={() => this.handleDeleteTask(task.id)}>
                      delete
                    </button>
                    </div>
<select className='bg-blue-100 m-1 border border-black' onChange={event => this.handleUpdateTaskStatus (task.id, event.target.value)}>
  <option disabled selected hidden className="text-sm " value=''><select name="" id=""></select></option>
<option className="text-sm " value='doing'>DOING</option>
<option className="text-sm " value='done'>DONE</option>
</select>

                  </article>
                ))}
            </section>

            <section className="w-64 p-2 bg-white border border-black">
              <h2 className="font-bold">DOING</h2>
              {this.state.tasks.filter((task) => task.status === "doing").map((task) => (
              <article key={task.id} className="m-2 p-2 border border-black task-item flex flex-col place-content-between">
                <div className="flex justify-between ml-2">
                <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => this.handleUpdateTaskText (task.id, event.target.innerText)}>{task.text}</p>
                <button
                      className="material-symbols-outlined"
                      onClick={() => this.handleDeleteTask(task.id)}>delete
                </button>
                </div>
                <select className='bg-blue-100 m-1 border border-black' onChange={event => this.handleUpdateTaskStatus (task.id, event.target.value)}>
  <option disabled selected hidden className="text-sm " value=''><select name="" id=""></select></option>
<option className="text-sm " value='todo'>TODO</option>
<option className="text-sm " value='done'>DONE</option>
</select>
              </article>
              ))}
            </section>

            <section className="w-64 p-2 bg-white border border-black">
              <h2 className="font-bold">DONE</h2>
              {this.state.tasks.filter((task) => task.status === "done").map((task) => (<article key={task.id} className="m-2 p-2 border border-black task-item flex flex-col place-content-between ">
              <div className="flex justify-between ml-2"> 
              <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => {this.handleUpdateTaskText}}>
              {task.text}</p>
                    <button
                      className="material-symbols-outlined"
                      onClick={() => this.handleDeleteTask(task.id)}>delete
                    </button>
</div>
                    <select className='bg-blue-100 m-1 border border-black' onChange={event => this.handleUpdateTaskStatus (task.id, event.target.value)}>
  <option disabled selected hidden className="text-sm " value=''><select name="" id=""></select></option>
<option className="text-sm " value='todo'>TODO</option>
<option className="text-sm " value='doing'>DOING</option>
</select>
                  </article>
                ))}
            </section>
          </div>
        </section>}

        {this.state.view === 'settings' && <section className="flex flex-col items-center">
          <div className="m-4 rounded-xl bg-white border border-black ">
                <h2 className="m-2 text-xl font-bold">Settings</h2>
                <form className="mr-2 ml-2 flex flex-col" onSubmit={this.handleUpdateUserEmail}>
                    <label htmlFor="email">E-mail</label>
                    <input className="pl-1 bg-gray-200 border-b-2 border-gray-100" name="email" type="email" id="email" placeholder="input an email" defaultValue={user.email} />
                    <button className="bg-red-400 border border-black rounded-md w-32 m-2 self-center">Save</button>
                </form>
          </div>
            </section>}

      </main>
  }
}
