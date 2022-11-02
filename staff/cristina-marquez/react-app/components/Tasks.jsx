class Tasks extends React.Component {
    constructor() {
        super()
        this.state = { tasks: [] }
    }

    componentDidMount() {
        this.handleRefreshTasks()
    }


    componentWillReceiveProps() {
        this.handleRefreshTasks()
    }

    handleRefreshTasks = () => {
        try {
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {

        return <section className="flex flex-col items-center">

            <h2 className="text-4xl m-10">Tasks</h2>
            <div className="flex-column sm:flex w-11/12 sm:w-11/12 justify-around">
                <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                    <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">TODO</div>


                    {this.state.tasks.filter(task => task.status === 'TODO').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={this.handleRefreshTasks}
                        onUpdateTaskStatus={this.handleRefreshTasks} />)}
                </section>
                <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                    <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">In progress</div>


                    {this.state.tasks.filter(task => task.status === 'IN_PROGRESS').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={this.handleRefreshTasks}
                        onUpdateTaskStatus={this.handleRefreshTasks} />)}
                </section>
                <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                    <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">Completed</div>


                    {this.state.tasks.filter(task => task.status === 'COMPLETED').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={this.handleRefreshTasks}
                        onUpdateTaskStatus={this.handleRefreshTasks} />)}
                </section>
            </div>

        </section>
    }
}