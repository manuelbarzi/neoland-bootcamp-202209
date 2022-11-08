class Tasks extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: [],
        };
    }

    // TASKS MANAGER
    componentDidMount() {
        log('INFO', 'Tasks: componentDidMount');

        try {
            const tasks = retrieveTasks(user.id)
            //this.setState({ tasks: tasks })
            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleCreateTaskTodo = () => {
        log('INFO', 'Tasks: handleCreateTaskTodo');
        try {
            createTaskTodo(user.id)
            const tasks = retrieveTasks(user.id)
            //this.setState({ tasks: tasks })
            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleCreateTaskDoing = () => {
        log('INFO', 'Tasks: handleCreateTaskDoing');
        try {
            createTaskDoing(user.id)
            const tasks = retrieveTasks(user.id)
            //this.setState({ tasks: tasks })
            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleCreateTaskDone = () => {
        log('INFO', 'Tasks: handleCreateTaskDone');
        try {
            createTaskDone(user.id)
            const tasks = retrieveTasks(user.id)
            //this.setState({ tasks: tasks })
            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateTaskText = (taskId, newText) => {
        log('INFO', 'Tasks: handleUpdateTaskText');
        try {
            updateTaskText(user.id, taskId, newText);
        } catch (error) {
            alert(error.message);

            return;
        }
    }

    handleUpdateTaskStatus = (taskId, newStatus) => {
        log('INFO', 'Tasks: handleUpdateTaskStatus');
        try {
            updateTaskStatus(user.id, taskId, newStatus);
            const tasks = retrieveTasks(user.id)

            this.setState({ tasks })

        } catch (error) {
            alert(error.message);

            return;
        }
    }

    handleDeleteTask = (taskId) => {
        log('INFO', 'Tasks: handleDeleteTask');
        try {
            deleteTask(user.id, taskId);

            const tasks = retrieveTasks(user.id)
            //this.setState({ tasks: tasks })
            this.setState({ tasks })

        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (
            <>
                {/* TASKS PANEL*/}
                <section className="flex z-1 w-full justify-center flex-wrap">
                    <div className="flex flex-row justify-center content-center z-0 p-8 bg-sky-500 border-black border-b border-solid w-full h-16">
                        <span className="self-center font-semibold text-4xl text-sky-100">
                            My Tasks
                        </span>
                    </div>
                    {/*TASKS*/}
                    <div className="flex flex-row flex-wrap justify-center m-4 gap-x-4">
                        {/* TO DO TASKS*/}
                        <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                            <div className="flex flex-row w-full">
                                <span className="align-self-start text-lg text-black text-base font-normal">Pendiente</span>
                                <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                    more_horiz
                                </h1>
                            </div>
                            <hr className="w-full mx-auto my-2 border-black" />
                            {this.state.tasks.filter(task => task.status === 'todo').map(task =>
                                // COMPONENTE TASK
                                <Task
                                    key={task.id}
                                    task={task}
                                    handleUpdateTaskText={this.handleUpdateTaskText}
                                    handleUpdateTaskStatus={this.handleUpdateTaskStatus}
                                    handleDeleteTask={this.handleDeleteTask} />)}
                            <div
                                className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                                onClick={this.handleCreateTaskTodo}>
                                <span
                                    className="material-symbols-outlined text-black">
                                    add
                                </span>
                                <span className="align-self-start text-medium text-black font-normal">Add new task</span>
                            </div>
                        </section>
                        {/* DOING TASKS*/}
                        <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                            <div className="flex flex-row w-full">
                                <span className="align-self-start text-lg text-black text-base font-normal">En proceso</span>
                                <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                    more_horiz
                                </h1>
                            </div>
                            <hr className="w-full mx-auto my-2 border-black" />
                            {this.state.tasks.filter(task => task.status === 'doing').map(task =>
                                // COMPONENTE TASK
                                <Task
                                    key={task.id}
                                    task={task}
                                    handleUpdateTaskText={this.handleUpdateTaskText}
                                    handleUpdateTaskStatus={this.handleUpdateTaskStatus}
                                    handleDeleteTask={this.handleDeleteTask} />)}
                            <div
                                className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                                onClick={this.handleCreateTaskDoing}>
                                <span
                                    className="material-symbols-outlined text-black">
                                    add
                                </span>
                                <span className="align-self-start text-medium text-black font-normal">Add new task</span>
                            </div>
                        </section>
                        {/* DONE TASKS*/}
                        <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                            <div className="flex flex-row w-full">
                                <span className="align-self-start text-lg text-black text-base font-normal">Hecho</span>
                                <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                    more_horiz
                                </h1>
                            </div>
                            <hr className="w-full mx-auto my-2 border-black" />
                            {this.state.tasks.filter(task => task.status === 'done').map(task =>
                                // COMPONENTE TASK
                                <Task
                                    key={task.id}
                                    task={task}
                                    handleUpdateTaskText={this.handleUpdateTaskText}
                                    handleUpdateTaskStatus={this.handleUpdateTaskStatus}
                                    handleDeleteTask={this.handleDeleteTask} />)}
                            <div
                                className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                                onClick={this.handleCreateTaskDone}>
                                <span
                                    className="material-symbols-outlined text-black">
                                    add
                                </span>
                                <span className="align-self-start text-medium text-black font-normal">Add new task</span>
                            </div>
                        </section>
                    </div>
                </section>
            </>
        );
    }
}