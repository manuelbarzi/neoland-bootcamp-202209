import deletePost from '../logic/deletePost'
import Button from './Button'

export default function ({ postId, onDeleted, onClose }) {
    const confirmDeletePost = event => {
        event.preventDefault()

        try {
            deletePost(sessionStorage.userId, postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onDeleted()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden " onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end gap-2  dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <p>Are you sure you want to delete this post?</p>
            <div className="flex gap-2" >
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={confirmDeletePost}>Delete</Button>
            </div>
        </div>
    </div>
}