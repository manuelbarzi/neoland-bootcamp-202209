class Home extends React.Component {
  constructor() {
    log('INFO', 'Home -> constructor')

    super()

    this.state = { view: 'tasks', timestamp: Date.now() }
  }

  componentDidMount() {
    log('INFO', 'Home -> componentDidMount')
  }

  componentWillUnmount() {
    log('INFO', 'Home -> componentWillUnmount')
  }

  componentWillReceiveProps() {
    log('INFO', 'Home -> componentWillReceiveProps')
  }

  handleLogout = () => {
    log('INFO', 'Home -> logout')

    user = null

    this.props.onLogout()
  }

  handleAddTask = () => {
    log('INFO', 'Home -> handleAddTask')

    this.setState({ timestamp: Date.now() })

  }

  handleNavigateToSettings = () => {
    log('INFO', 'Home -> handleNavigateToSettings')

    this.setState({ view: 'settings' })
  }


  handleNavigateToTasks = () => {
    log('INFO', 'Home -> handleNavigateToTasks')

    this.setState({ view: 'tasks' })

  }

  render() {
    log('INFO', 'Home -> render')

    return <main className="h-full w-full bg-blue-100">
      <Header
        onNavigateToTasks={this.handleNavigateToTasks}
        onAddTask={this.handleAddTask}
        onNavigateToSettings={this.handleNavigateToSettings}
        onLogout={this.handleLogout}
        view={this.state.view}
      />

      {this.state.view === 'tasks' && <Tasks />}

      {this.state.view === 'settings' && <Settings />}
    </main>
  }
}