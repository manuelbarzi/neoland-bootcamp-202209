class HomePage extends React.Component{
    constructor(){
        super()

        this.state = {tasks: []}
    }

    componentDidMount(){
        try{
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        }catch(error){

        alert(error.message)
        }
    }

    render(){   
    return <> 
        <div className="flex justify-center h-full bg-rose-600">
            <section className="flex flex-col">
                <h2 className="text-center text-2xl p-3 font-bold">Tasks</h2>
                <div className="flex flex-row gap-24 p-3">  
                    <div className="border-solid border-black border-2 rounded-lg p-3 w-48  bg-orange-300">
                        <section className="">
                            <h2 className="font-semibold text-lg">TODO</h2> 
                           {this.state.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="">
                            <p contenteditable="true">{task.text}</p>
                            <button className="material-symbols-outlined">delete</button>
                        </article>)}
                        </section>
                        <form className="flex justify-end">
                            <button className="material-symbols-outlined">add</button>
                        </form>
                    </div>
                    <div className="border-solid border-black border-2 rounded-lg p-3 w-48 bg-orange-300">
                        <section className="">
                            <h2 className="font-semibold text-lg">DOING</h2>
                            {this.state.tasks.filter(task => task.status === 'doing').map(task =><article key={task.id} className="">
                                <p contenteditable="true">{task.text}</p>
                                <button className="material-symbols-outlined">delete</button>
                            </article>)}
                            </section>
                    </div>
                    <div className="">
                        <section className="border-solid border-black border-2 rounded-lg p-3 w-48 bg-orange-300">
                            <h2 className="font-semibold text-lg">DONE</h2>
                            {this.state.tasks.filter(task => task.status === 'done').map(task =><article key={task.id} className="">
                            <p contenteditable="true">{task.text}</p>
                            <button className="material-symbols-outlined">delete</button>
                        </article>)}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </>
    }
}