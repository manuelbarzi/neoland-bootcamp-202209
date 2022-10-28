class HomePage extends React.Component {
  constructor() {
    log('INFO', 'Home -> constructor')

    super();

    this.state = { toggleButtonText: "menu", tasks: [] };
  }

  handleToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })

    handleLogout = () => {
      log('INFO', 'Home -> logout')

        user = null

        const onLoggedOut = this.props.onLoggedOut

        onLoggedOut()
    }

componentDidMount(){
  log('INFO', 'Home -> componentDidMount')

  try {
    const tasks = retrieveTasks (user.email)

    this.setState({tasks})
  } catch (error) {
    alert (error.message)
  }
}

    handleDelete = (taskId) => {
      try {
        deleteTask (user.email, taskId)

        const tasks = retrieveTasks (user.email)

        this.setState({tasks})
      } catch (error) {
        alert (error.message)
      }
    }

  render() {
    log('INFO', 'Home -> render')

    return (
      <main className="w-full self-start">
        <header className="bg-white w-full flex place-content-between items-center">
          <a href=" ">
            <img
              className="w-16"
              src="https://cdn.iconscout.com/icon/free/png-256/trello-14-1175081.png"
            />
          </a>
          <span className="#">Pepito Grillo</span>
          <button className="home-header-button material-symbols-outlined">add</button>
          <button className="home-header-button material-symbols-outlined" onClick={this.handleToggleMenu}>
            {this.state.toggleButtonText}
          </button>
        </header>
        
        {this.state.toggleButtonText === 'close' && <div className="absolute right-0 flex justify-end">
            <div className="bg-green-500 w-40 flex flex-col items-center p-2 gap-2">
                <a className=" material-symbols-outlined" href="">settings</a>
                    
                <button className="material-symbols-outlined" onClick={this.handleLogout}>logout</button>
            </div>
        </div>}


        <main className="tasks-menu">
          <h1 className="uppercase font-bold text-center mt-4">Manage your tasks</h1>
          <div className="flex gap-10 justify-center mt-4">
            <section className="w-64 p-2 bg-white border border-black">
              <h2 className="font-bold">TODO</h2>
              {this.state.tasks.filter(task => task.status === 'todo').map(task =>
              <article className="m-2 p-2 border border-black task-item flex place-content-between ">
                <p suppressContentEditableWarning={true}  contentEditable="true">buy milk</p>
                <button className="material-symbols-outlined">delete</button>
              </article>)}
            </section>
            <section className="w-64 p-2 bg-white border border-black">
              <h2 className="font-bold">DOING</h2>
              <article className="m-2 p-2 border border-black task-item flex place-content-between">
                <p suppressContentEditableWarning={true}  contentEditable="true">buy eggs</p>
                <button className="material-symbols-outlined">delete</button>
              </article>
            </section>
            <section className="w-64 p-2 bg-white border border-black">
              <h2 className="font-bold">DONE</h2>
              {this.state.tasks.filter(task => task.status === 'done').map(task =>
              <article className="m-2 p-2 border border-black task-item flex place-content-between ">
                <p suppressContentEditableWarning={true}  contentEditable="true">buy cereals</p>
                <button className="material-symbols-outlined" onClick={()=> this.handleDelete(task.id)} >delete</button>
              </article>)}
            </section>
          </div>
        </main>
      </main>
    );
  }
}
