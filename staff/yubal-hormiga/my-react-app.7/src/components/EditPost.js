/* eslint-disable import/no-anonymous-default-export */
import updatePost from '../logic/updatePost'
import Button from './Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import retrievePost from '../logic/retrievePost'

export default function ({ onUpdated, onClose, postId }) {
    const [post, setPost] = useState()

    useEffect(() => {
        try {
            retrievePost(window.userId, postId, (error, post) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPost(post)
            })
        } catch(error) {
            alert(error.message)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const submitUpdatePost = event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            updatePost(window.userId, postId, text, visibility, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                event.target.reset()

                onUpdated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end" onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />
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

// post && post.text -> post?.text