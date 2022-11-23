import { useState } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import UpdatePost from "./UpdatePost";

function Post({ content, onUpdate }) {

    const [updatePostIsVisible, setUpdatePostIsVisible] = useState(false)


    const updatePostHandler = (event) => {
        event.preventDefault()
        setUpdatePostIsVisible(true)
    }

    const onUpdatePostClose = () => {
        setUpdatePostIsVisible(false)
    }

    const onUpdatedPost = () => {
        setUpdatePostIsVisible(false)
        onUpdate()
    }




    return (
        <div className="flex flex-col items-center justify-center mb-5">
            <div className="border  rounded-md shadow-sm flex flex-col justify-between content-center">
                <h2 className="pt-1 pl-1 pb-1 bg-teal-500 rounded-t-md text-white">{content.user}</h2>
                <p>{content.text}</p>
                <p>{new Date(content.date).toLocaleString()}</p>
                <button> <AiOutlineDelete /></button>
                <button onClick={updatePostHandler}> <AiOutlineEdit /> </button>
                {updatePostIsVisible && <UpdatePost post={content} onUpdated={onUpdatedPost} onClose={onUpdatePostClose} ></UpdatePost>}

            </div>
        </div>
    )

}

export default Post