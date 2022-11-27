import deletePost from '../logic/deletePost'
import Button from './Button'

function DeletePost({ postId, onDeleted, onClose }) {
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

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-start items-center overflow-hidden" onClick={onClose}>
        <div className="w-[21rem] p-3 flex justify-center flex-col rounded-xl border-solid border-sky-700 border-t border-b-4 border-x bg-slate-100 mt-[20rem]" onClick={event => event.stopPropagation()}>
            <div className='p-2'>
                <div className='flex flex-col'>
                    <p >Are you sure you want to permanently remove this comment from Community?</p>
                    <div className='flex flex row self-end mt-4 gap-2'>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={confirmDeletePost}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DeletePost