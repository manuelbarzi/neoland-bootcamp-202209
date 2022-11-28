import deletePost from "../logic/deletePost"
import { AiOutlineCloseCircle } from "react-icons/ai";


function DeletePost({ onClose, onUpdated, post }) {


    const confirmDeletePost = () => {


        try {
            deletePost(post._id)

            onUpdated()
        } catch (error) {
            alert(error.message)

        }

    }






    return <div className="bg-[#aaaa] absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end gap-2" onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />
            <p>Do you want to delete this post?</p>
            <div className="flex gap-2" >

                <button onClick={confirmDeletePost}>Confirm</button>
            </div>
        </div>
    </div >

}



export default DeletePost