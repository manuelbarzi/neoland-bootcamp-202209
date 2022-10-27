class HomePage extends React.Component {
    constructor() {

        super()

        this.state = { tasks: [] }

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

    logout = () => {

        user = null
        const onLoggedOut = this.props.onLoggedOut

        onLoggedOut()
    }

    render() {
        return <main className="h-full w-full" >
            <header className="flex justify-between bg-pink-600">
                <div className="homepage-header-left-group">
                    <span className="material-symbols-outlined header-icons text-white">home</span>
                </div>
                <div className="homepage-header-right-group">
                    <span id="username-header-span" className="text-white">{user && user.name}</span>
                    <span className="material-symbols-outlined header-icons text-white">add</span>
                    <span className="material-symbols-outlined header-icons text-white">menu</span>
                </div>
            </header>

            <section className="flex flex-col items-center">
                <h2 className="text-4xl m-5">Tasks</h2>
                <div className="flex-column sm:flex w-11/12 sm:w-3/4 justify-around">
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">TODO</div>

                        {this.state.tasks.filter(task => task.status === 'TODO').map(task => <div className="task-component mx-3 my-2 flex justify-between">
                            <article className="task-card" contentEditable="true">{task.text}</article>
                            <span className="material-symbols-outlined task-component delete-icon">delete</span>
                        </div>)}

                    </section>
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">IN PROGRESS</div>
                        {this.state.tasks.filter(task => task.status === 'IN_PROGRESS').map(task => <div className="task-component mx-3 my-2 flex justify-between">
                            <article className="task-card" contentEditable="true">{task.text}</article>
                            <span className="material-symbols-outlined task-component delete-icon">delete</span>
                        </div>)}
                    </section>
                    <section className="flex flex-col border-2 mr-5 basis-1/3 rounded-md shadow-md">
                        <div className="task-column-header pt-5 pl-5 pb-5 bg-pink-600 rounded-t-md text-white">COMPLETED</div>
                        {this.state.tasks.filter(task => task.status === 'COMPLETED').map(task => <div className="task-component mx-3 my-2 flex justify-between">
                            <article className="task-card" contentEditable="true">{task.text}</article>
                            <span className="material-symbols-outlined task-component delete-icon">delete</span>
                        </div>)}
                    </section>
                </div>
            </section>

        </main>

    }
}