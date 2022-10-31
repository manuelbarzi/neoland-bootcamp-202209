class HomePage extends React.Component {
    constructor() {
        log("INFO", "HomePage -> render");
        super();

        this.state = {
            toggleMenuComponent: "open",
            tasks: [],
            view: 'tasks'
        };
    }

    handleToggleMenu = () =>
        this.setState({
            toggleMenuComponent:
                this.state.toggleMenuComponent === "open" ? "close" : "open",
        });

    handleLogoutLink = () => {
        log("INFO", "Home->logout");
        user = null;
        const onLoggedOut = this.props.onLoggedOut;

        onLoggedOut();
    };

    handleSettingsLink = () => {
        log("INFO", "Settings Account -> render");

        const onSettingsAccountLink = this.props.onSettingsAccountLink;

        onSettingsAccountLink();
    };

    componentDidMount() {
        log('INFO', 'Home -> componentDidMount');

        try {
            const tasks = retrieveTasks(user.id)
            //this.setState({ tasks: tasks })
            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleCreateTaskTodo = () => {
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
        try {
            updateTaskText(user.id, taskId, newText);
        } catch (error) {
            alert(error.message);

            return;
        }
    }

    handleUpdateTaskStatus = (taskId, newStatus) => {
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
            <main className="min-h-screen bg-sky-500">
                {/* HEADER */}
                <header className="flex flex-row z-0 items-center px-3 py-2 bg-sky-800">
                    <img src="img/trellologo.png" className="w-40 cursor-pointer" />
                    <img
                        src="img/headermenupanelbotton.png"
                        className="w-14 cursor-pointer ml-auto invert"
                        onClick={this.handleToggleMenu}
                    />
                </header>
                {/* TOGGLE MENU */}
                {this.state.toggleMenuComponent === "close" && (
                    <div className="flex justify-end right-0 absolute">
                        <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-sky-100 border-sky-700 border-b-2 border-l -mt-1">
                            <p className="text-black pr-1">{user.email}</p>
                            <hr className="w-full border-sky-700 mx-auto my-2" />
                            <button
                                className="text-black pr-1 hover:font-semibold"
                                onClick={this.handleSettingsLink}
                            >
                                Settings
                            </button>
                            <button
                                className="text-black pr-1 hover:font-semibold"
                                onClick={this.handleLogoutLink}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
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
                                <article
                                    key={task.id}
                                    className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
                                    <textarea
                                        defaultValue={task.text}
                                        className="flex flex-col text-justify bg-cyan-50 p-4 text-sm border-sky-600 border bg-sky-200 text-black text-[14px] font-normal"
                                        onKeyUp={(event) => this.handleUpdateTaskText(task.id, event.target.value)}
                                    >
                                    </textarea>
                                    <div className="flex flex-row mt-3">
                                        <select
                                            className="text-black bg-inherit self-end font-normal text-base"
                                            onChange={(event) => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                                            <option disabled selected hidden value='todo'>
                                                Pendiente
                                            </option>
                                            <option value='doing'>
                                                En proceso
                                            </option>
                                            <option value='done'>
                                                Hecho
                                            </option>

                                        </select>
                                        <button
                                            className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-3 ml-auto text-sky-900"
                                            onClick={() => this.handleDeleteTask(task.id)}>delete
                                        </button>
                                    </div>
                                </article>)}
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
                                <article
                                    key={task.id}
                                    className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
                                    <textarea
                                        defaultValue={task.text}
                                        className="flex flex-col text-justify bg-cyan-50 p-4 text-sm border-sky-600 border bg-sky-200 text-black text-[14px] font-normal"
                                        onKeyUp={(event) => this.handleUpdateTaskText(task.id, event.target.value)}
                                    >
                                    </textarea>
                                    <div className="flex flex-row mt-3">
                                        <select
                                            className="text-black bg-inherit self-end font-normal text-base"
                                            onChange={(event) => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                                            <option disabled selected hidden value='doing'>
                                                En proceso
                                            </option>
                                            <option value='todo'>
                                                Pendiente
                                            </option>
                                            <option value='done'>
                                                Hecho
                                            </option>

                                        </select>
                                        <button
                                            className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-3 ml-auto text-sky-900"
                                            onClick={() => this.handleDeleteTask(task.id)}>delete
                                        </button>
                                    </div>
                                </article>)}
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
                                <article
                                    key={task.id}
                                    className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
                                    <textarea
                                        defaultValue={task.text}
                                        className="flex flex-col text-justify bg-cyan-50 p-4 text-sm border-sky-600 border bg-sky-200 text-black text-[14px] font-normal"
                                        onKeyUp={(event) => this.handleUpdateTaskText(task.id, event.target.value)}
                                    >
                                    </textarea>
                                    <div className="flex flex-row mt-3">
                                        <select
                                            className="text-black bg-inherit self-end font-normal text-base"
                                            onChange={(event) => this.handleUpdateTaskStatus(task.id, event.target.value)}>
                                            <option disabled selected hidden value='done'>
                                                Hecho
                                            </option>
                                            <option value='todo'>
                                                Pendiente
                                            </option>
                                            <option value='doing'>
                                                En proceso
                                            </option>

                                        </select>
                                        <button
                                            className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-3 ml-auto text-sky-900"
                                            onClick={() => this.handleDeleteTask(task.id)}>delete
                                        </button>
                                    </div>
                                </article>)}
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
            </main>
        );
    }
}
