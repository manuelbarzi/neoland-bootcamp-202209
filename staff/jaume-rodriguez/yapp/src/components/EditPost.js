import { useEffect, useState } from 'react'
import updatePost from '../logic/updatePost'
import retrievePost from '../logic/retrievePost'
import Button from './Button'

function EditPost({ onUpdated, onClose, postId }) {
    const [post, setPost] = useState()

    useEffect(() => {
        try {
            retrievePost(sessionStorage.userId, postId, (error, post) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPost(post)
            })
        } catch (error) {
            alert(error.message)
        }
    },)


    const submitUpdatePost = event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            updatePost(sessionStorage.userId, postId, text, visibility, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end" onClick={event => event.stopPropagation()}>
            <button size="1.5rem" onClick={onClose} className="cursor-pointer">Close</button>

            <form className="flex flex-col gap-2" onSubmit={submitUpdatePost}>
                <label htmlFor="text">Text</label>
                <textarea type="text" name="text" id="text" placeholder="input a text" defaultValue={post?.text}></textarea>
                <label htmlFor="visibility">Visibility</label>
                <select id="visibility" name="visibility" defaultValue={post?.visibility}>
                    <option value="public">public</option>
                    <option value="private">private</option>
                </select>
                <Button>Update</Button>
            </form>
        </div>
    </div>
}

export default EditPost