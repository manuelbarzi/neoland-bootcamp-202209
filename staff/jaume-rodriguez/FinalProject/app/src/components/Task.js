import { useState } from 'react'

import deleteTask from '../logic/deleteTask'
import updateTaskStatus from '../logic/updateTaskStatus'
import updateTaskText from '../logic/updateTaskText'
import updateTaskTitle from '../logic/updateTaskTitle'

function Task({ onUpdateTaskStatus, onDeleteTask, onTextRefresh, task }) {

    const [buttonTaskText, setButtonTaskText] = useState("open")

    const handleButtonTaskText = () => {
        setButtonTaskText(buttonTaskText === "open" ? "close" : "open");
    }

    // TASK FUNCTIONS
    const handleUpdateTaskText = (taskId, newText) => {
        try {
            updateTaskText(sessionStorage.token, taskId, newText)
                .then(() => { })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    const handleupdateTaskTitle = (taskId, newTitle) => {
        try {
            updateTaskTitle(sessionStorage.token, taskId, newTitle)
                .then(() => { })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        try {
            updateTaskStatus(sessionStorage.token, taskId, newStatus)
                .then(() => onUpdateTaskStatus())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleDeleteTask = (taskId) => {
        try {
            deleteTask(sessionStorage.token, taskId)
                .then(() => onDeleteTask())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message);
        }
    }

    const handleTextRefresh = () => {
        onTextRefresh();
    };

    return (
        <article
            className={task.status === "todo" ? "w-full py-2 px-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-800 border-t border-b-4 border-x bg-rose-200" :
                task.status === "doing" ? " w-full py-2 px-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-800 border-t border-b-4 border-x bg-blue-200" :
                    " w-full py-2 px-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-800 border-t border-b-4 border-x bg-green-200"}>
            <textarea
                defaultValue={task.title}
                className="flex flex-col text-justify bg-transparent p-2 mb-1 text-slate-600 text-[15px] font-semibold placeholder:font-normal placeholder:text-slate-600 resize-none focus:outline-none"
                rows="1"
                maxLength="30"
                placeholder="Enter a title"
                onKeyUp={(event) => handleupdateTaskTitle(task.id, event.target.value)}
            >
            </textarea>
            {buttonTaskText === "open" && task.text === "" && (
                <span
                    className={task.status === "todo" ? "self-start rounded text-slate-600 cursor-pointer cursor-pointer text-[15px] border-slate-400 px-2 py-1 font-normal hover:bg-rose-300 bg-inherit" :
                        task.status === "doing" ? "self-start rounded text-slate-600 cursor-pointer cursor-pointer text-[15px] border-slate-400 px-2 py-1 font-normal hover:bg-blue-300 bg-inherit" :
                            "self-start rounded text-slate-600 cursor-pointer cursor-pointer text-[15px] border-slate-400 px-2 py-1 font-normal hover:bg-green-300 bg-inherit"}
                    onClick={() => {
                        handleButtonTaskText();
                    }}>Add a description</span>
            )
            }
            {
                (buttonTaskText === "close" || task.text !== "") && (
                    <textarea
                        type="text"
                        defaultValue={task.text}
                        className={task.status === "todo" ? "flex flex-col text-justify bg-inherit p-2 text-slate-700 text-[15px] font-normal placeholder:text-slate-600 resize-none rounded focus:outline-none" :
                            task.status === "doing" ? "flex flex-col text-justify bg-inherit p-2 text-slate-700 text-[15px] font-normal placeholder:text-slate-600 resize-none rounded focus:outline-none" :
                                "flex flex-col text-justify bg-inherit p-2 text-slate-700 text-[15px] font-normal placeholder:text-slate-600 resize-none rounded focus:outline-none"}
                        rows={task.text.length <= 30 ? "1" : task.text.length <= 61 ? "2" : task.text.length <= 92 ? "3" : "4"}
                        autoFocus="autofocus"
                        maxLength="124"
                        placeholder="add a more detailed description"
                        onChange={() => handleTextRefresh()}
                        onKeyUp={(event) => { handleUpdateTaskText(task.id, event.target.value) }}
                    >
                    </textarea>
                )
            }
            <div className='flex flex-row'>
                <div className="flex flex-row mt-2">
                    <select
                        defaultValue=""
                        className="text-black bg-inherit self-end font-normal text-base"
                        onChange={(event) => handleUpdateTaskStatus(task.id, event.target.value)}
                    >
                        <option value='' hidden>
                            {task.status === 'todo' ? 'Pendiente' :
                                task.status === 'doing' ? 'En proceso' :
                                    task.status === 'done' ? 'Hecho' : 'Estado'}
                        </option>
                        {task.status === 'todo' ? <>
                            <option value="todo">Pendiente</option>
                            <option value="doing">En proceso</option>
                            <option value="done">Hecho</option>
                        </>
                            :
                            task.status === 'doing' ? <>
                                <option value="todo">Pendiente</option>
                                <option value="doing">En proceso</option>
                                <option value="done">Hecho</option>
                            </>
                                :
                                <>
                                    <option value="todo">Pendiente</option>
                                    <option value="doing">En proceso</option>
                                    <option value="done">Hecho</option>
                                </>
                        }
                    </select>
                </div>
                <button
                    className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-4 ml-auto text-sky-900"
                    onClick={() => handleDeleteTask(task.id)}
                >delete
                </button>
            </div>
        </article >
    )
}

export default Task