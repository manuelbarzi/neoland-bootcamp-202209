import { useState, useEffect } from 'react'
import editPost from '../logic/edit-post'

function EditPost({ className, userInfo, onEditPostClose, onEditPost, userPost }) {
    const [user, setUser] = useState(userInfo)
useEffect(()=>{
    document.body.style.overflow = 'hidden'

    return () => document.body.style = ''
})

    const handlerEditPost = event => {
        event.preventDefault()

        const { post: { value: content }, visibility: { value: visibility } } = event.target

        try {
            editPost(content, visibility, userPost.postId, sessionStorage.userId,)
                .then(() => onEditPost())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    const handlerClosePost = () => {
        onEditPostClose()
    }

    const onFocusTextArea = event => {
        var postContent = event.target.value

        event.target.value = ''

        event.target.value = postContent
    }

    let publicSelected
    let privateSelected

    userPost.visibility === 'public' ? publicSelected = true : publicSelected = false
    userPost.visibility === 'private' ? privateSelected = true : privateSelected = false

    return <div className="fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={handlerClosePost}>
        <div onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-2/6 h-3/6 bg-white border-2 p-4 rounded-xl ${className ? className : ""}`}>
            <div className="flex flex-col items-center">
                <div className="grid w-full items-center grid-cols-12">
                    <span className="font-bold text-xl w-fit col-start-5 col-end-9">Edit Post</span>
                    <button className="border-2 w-fit h-fit justify-self-end col-start-12 col-end-13 px-2 py-1 rounded-xl" onClick={handlerClosePost}>X</button>
                </div>
                <hr className="w-full mt-3.5" />
                <p className="self-start font-medium text-lg mt-2">{user.name}</p>
                <form className="flex flex-col items-center w-full mt-2 gap-2" onSubmit={handlerEditPost}>
                    <select id="visibility" name="visibility" className="w-1/4 rounded-lg p-1 self-start">
                        <option selected={publicSelected} value="public">Public</option>
                        <option selected={privateSelected} value="private">Private</option>
                    </select>
                    <textarea onFocus={onFocusTextArea} defaultValue={userPost?.content} autoFocus name="post" id="post" className="resize-none outline-none rounded-xl w-full" rows="5"></textarea>
                    <button className="bg-emerald-200 w-full h-10 mt-2 rounded-lg ">Edit</button>
                </form>
            </div>
        </div>
    </div>
}

export default EditPost