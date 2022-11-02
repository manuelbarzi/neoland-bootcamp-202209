function Task(props) {
    return (
        <article
            className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
            <textarea
                defaultValue={props.task.text}
                className="flex flex-col text-justify bg-cyan-50 p-4 text-sm border-sky-600 border bg-sky-200 text-black text-[14px] font-normal"
                onKeyUp={(event) => props.handleUpdateTaskText(props.task.id, event.target.value)}
            >
            </textarea>
            <div className="flex flex-row mt-3">
                <select
                    className="text-black bg-inherit self-end font-normal text-base"
                    onChange={(event) => props.handleUpdateTaskStatus(props.task.id, event.target.value)}>
                    <option disabled selected hidden value=''>
                        {props.task.status === 'todo' ? 'Pendiente' :
                            props.task.status === 'doing' ? 'En proceso' :
                                props.task.status === 'done' ? 'Hecho' : 'Estado'}
                    </option>
                    <option value={props.task.status === 'todo' ? 'doing' : 'todo'}>
                        {props.task.status === 'todo' ? 'En Proceso' : 'Pendiente'}
                    </option>
                    <option value={props.task.status === 'done' ? 'doing' : 'done'}>
                        {props.task.status === 'done' ? 'En Proceso' : 'Hecho'}
                    </option>

                </select>
                <button
                    className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-3 ml-auto text-sky-900"
                    onClick={() => props.handleDeleteTask(props.task.id)}>delete
                </button>
            </div>
        </article>
    )
}