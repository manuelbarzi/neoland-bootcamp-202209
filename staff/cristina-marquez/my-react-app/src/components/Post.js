import { useContext, useState } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import UserContext from "../UserContext";

function Post({ content, onRefreshPosts }) {

    const [updatePostIsVisible, setUpdatePostIsVisible] = useState(false)
    const [deletePostIsVisible, setDeletePostIsVisible] = useState(false)
    const { user } = useContext(UserContext)


    const updatePostHandler = (event) => {
        event.preventDefault()
        setUpdatePostIsVisible(true)
    }

    const onUpdatePostClose = () => {
        setUpdatePostIsVisible(false)
    }

    const onUpdatedPost = () => {
        setUpdatePostIsVisible(false)
        onRefreshPosts()
    }

    const deletePostHandler = (event) => {
        event.preventDefault()
        setDeletePostIsVisible(true)
    }

    const onDeletePostClose = () => {
        setDeletePostIsVisible(false)

    }

    const onDeletedPost = () => {
        setDeletePostIsVisible(false)
        onRefreshPosts()
    }

    const isOwner = (post) => {
        return post.userId === user._id
    }


    return (
        <div className="flex flex-col items-center justify-center mb-5 pt-2">
            <div className="border  rounded-md shadow-sm flex flex-col justify-between content-center">
                <h2 className="p-3 bg-teal-600 rounded-t-md text-white">{content.userId}</h2>
                <div className="p-2">
                    <p>{content.text}</p>
                    <p>{new Date(content.date).toLocaleString()}</p>
                </div>
                {isOwner(content) &&
                    <div className="flex flex-row self-end space-x-2 m-1">
                        <button onClick={deletePostHandler}> <AiOutlineDelete /></button>
                        {deletePostIsVisible && <DeletePost post={content} onDeleted={onDeletedPost} onClose={onDeletePostClose} ></DeletePost>}
                        <button onClick={updatePostHandler}> <AiOutlineEdit /> </button>
                        {updatePostIsVisible && <UpdatePost post={content} onUpdated={onUpdatedPost} onClose={onUpdatePostClose} ></UpdatePost>}
                    </div>
                }

            </div>
        </div>
    )

}

export default Post