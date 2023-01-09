import { useState } from 'react'
import deletePost from '../logic/deletePost'
import buttonDelete from '../img/button-delete.png';
import buttonDeleteActive from '../img/button-delete-active.png';
import buttonCancel from '../img/button-cancel.png';
import bgDeletePost from '../img/bg-delete-post.png';

function DeletePost({ postId, onDeleted, onClose }) {
    const [hoverButtonDelete, setHoverButtonDelete] = useState(false)
    const confirmDeletePost = event => {

        event.preventDefault()

        try {
            deletePost(sessionStorage.token, postId)
                .then(() => onDeleted())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center" onClick={event => event.stopPropagation()}>
            <img
                className=''
                src={bgDeletePost}
                alt="bgDeletePost" />
            <section className='flex flex row absolute justify-center mt-[7.2rem] gap-x-3'>
                <img
                    onClick={onClose}
                    className='cursor-pointer'
                    src={buttonCancel}
                    alt="cancel" />
                <img
                    onClick={confirmDeletePost}
                    className='cursor-pointer'
                    onMouseEnter={() => setHoverButtonDelete(true)}
                    onMouseLeave={() => setHoverButtonDelete(false)}
                    src={hoverButtonDelete ? buttonDeleteActive : buttonDelete}
                    alt="deleteConfirm" />
            </section>
        </div>
    </div>
}

export default DeletePost