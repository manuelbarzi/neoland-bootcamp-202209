import { useState } from 'react'

import deleteTask from '../logic/deleteTask'
import updateTaskStatus from '../logic/updateTaskStatus'
import updateTaskText from '../logic/updateTaskText'
import updateTaskTitle from '../logic/updateTaskTitle'

function Task(props) {

    const [buttonTaskText, setButtonTaskText] = useState("open")

    const handleButtonTaskText = () => {
        setButtonTaskText(buttonTaskText === "open" ? "close" : "open");
    }

    // TASK FUNCTIONS
    const handleUpdateTaskText = (taskId, newText) => {
        try {
            updateTaskText(window.userId, taskId, newText, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
            });
        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleupdateTaskTitle = (taskId, newTitle) => {
        try {
            updateTaskTitle(window.userId, taskId, newTitle, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
            });
        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        try {
            updateTaskStatus(window.userId, taskId, newStatus, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                props.onUpdateTaskStatus()
            });

        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleDeleteTask = (taskId) => {
        try {
            deleteTask(window.userId, taskId, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                props.onDeleteTask()
            });

        } catch (error) {
            alert(error.message);
        }
    }

    const handleTextRefresh = () => {
        props.onTextRefresh();
    };

    return (
        <article
            className={props.task.status === "todo" ? "w-full py-2 px-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-800 border-t border-b-4 border-x bg-rose-100" :
                props.task.status === "doing" ? " w-full py-2 px-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-800 border-t border-b-4 border-x bg-blue-100" :
                    " w-full py-2 px-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-800 border-t border-b-4 border-x bg-green-100"}>
            <textarea
                defaultValue={props.task.title}
                className="flex flex-col text-justify bg-transparent p-2 mb-1 text-slate-600 text-[15px] font-semibold placeholder:font-normal placeholder:text-slate-600 resize-none focus:outline-none"
                rows="1"
                maxLength="30"
                placeholder="Enter a title"
                onKeyUp={(event) => handleupdateTaskTitle(props.task.id, event.target.value)}
            >
            </textarea>
            {buttonTaskText === "open" && props.task.text === "" && (
                <span
                    className={props.task.status === "todo" ? "self-start rounded text-slate-600 cursor-pointer cursor-pointer text-[15px] border-slate-400 border-b-2 px-2 py-1 font-normal hover:bg-rose-300 bg-white" :
                        props.task.status === "doing" ? "self-start rounded text-slate-600 cursor-pointer cursor-pointer text-[15px] border-slate-400 border-b-2 px-2 py-1 font-normal hover:bg-blue-300 bg-white" :
                            "self-start rounded text-slate-600 cursor-pointer cursor-pointer text-[15px] border-slate-400 border-b-2 px-2 py-1 font-normal hover:bg-green-300 bg-white"}
                    onClick={() => {
                        handleButtonTaskText();
                    }}>Add a description</span>
            )
            }
            {
                (buttonTaskText === "close" || props.task.text !== "") && (
                    <textarea
                        type="text"
                        defaultValue={props.task.text}
                        className={props.task.status === "todo" ? "flex flex-col text-justify bg-inherit p-2 border-slate-400 text-slate-700 text-[15px] font-normal placeholder:text-slate-600 resize-none rounded focus:outline-none focus:bg-white focus:border-b-2" :
                            props.task.status === "doing" ? "flex flex-col text-justify bg-inherit p-2 border-slate-400 text-slate-700 text-[15px] font-normal placeholder:text-slate-600 resize-none rounded focus:outline-none focus:bg-white focus:border-b-2" :
                                "flex flex-col text-justify bg-inherit p-2 border-slate-400 text-slate-700 text-[15px] font-normal placeholder:text-slate-600 resize-none rounded focus:outline-none focus:bg-white focus:border-b-2"}
                        rows={props.task.text.length <= 30 ? "1" : props.task.text.length <= 61 ? "2" : props.task.text.length <= 92 ? "3" : "4"}
                        autoFocus="autofocus"
                        maxLength="124"
                        placeholder="add a more detailed description"
                        onChange={() => handleTextRefresh()}
                        onKeyUp={(event) => { handleUpdateTaskText(props.task.id, event.target.value) }}
                    >
                    </textarea>
                )
            }
            <div className='flex flex-row'>
                <div className="flex flex-row mt-2">
                    <select
                        className="text-black bg-inherit self-end font-normal text-base"
                        onChange={(event) => handleUpdateTaskStatus(props.task.id, event.target.value)}
                    >
                        <option disabled selected hidden value=''>
                            {props.task.status === 'todo' ? 'Pendiente' :
                                props.task.status === 'doing' ? 'En proceso' :
                                    props.task.status === 'done' ? 'Hecho' : 'Estado'}
                        </option>
                        {props.task.status === 'todo' ? <>
                            <option value="doing">En Proceso</option>
                            <option value="done">Hecho</option>
                        </>
                            :
                            props.task.status === 'doing' ? <>
                                <option value="todo">Pendiente</option>
                                <option value="done">Hecho</option>
                            </>
                                :
                                <>
                                    <option value="todo">Pendiente</option>
                                    <option value="doing">En Proceso</option>
                                </>
                        }
                    </select>
                </div>
                <button
                    className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-4 ml-auto text-sky-900"
                    onClick={() => handleDeleteTask(props.task.id)}
                >delete
                </button>
            </div>
        </article >
    )
}

export default Task