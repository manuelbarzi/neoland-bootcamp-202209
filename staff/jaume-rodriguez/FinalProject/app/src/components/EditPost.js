import { useEffect, useState } from 'react'
import updatePost from '../logic/updatePost'
import retrieveUser from '../logic/retrieveUser';
import retrievePost from '../logic/retrievePost'
import bgEditPost from '../img/bg-edit-post.png';
import buttonUpdatePost from '../img/button-update-post.png';
import buttonCancel from '../img/button-cancel.png';

function EditPost({ onUpdated, onClose, postId }) {
    const [user, setUser] = useState()
    const [post, setPost] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

            retrievePost(sessionStorage.token, postId)
                .then(post => setPost(post))
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    },)


    const submitUpdatePost = event => {
        event.preventDefault()

        const { text: { value: text } } = event.target

        try {
            updatePost(sessionStorage.token, postId, text)
                .then(() => onUpdated())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center justify-center -mt-[1.5rem]" onClick={event => event.stopPropagation()}>
            <img
                className=''
                src={bgEditPost}
                alt="bgEditPost" />
            <form className="flex flex-col items-center " onSubmit={submitUpdatePost}>
                <textarea
                    name='text'
                    type="text"
                    placeholder={"What's in your mind, " + (user?.name) + " ?"}
                    id="text"
                    title="Please enter at least 1 character"
                    defaultValue={post?.text}
                    className="px-4 py-2 h-[10rem] w-[17rem] bg-inherit text-white text-center text-sm rounded-xl autofill:bg-black absolute -mt-[17.5rem] ml-[0.4rem] resize-none scrollbar"
                />
                <section className='flex flex-row absolute justify-center gap-x-3 -mt-[5.5rem]'>
                    <img
                        className="cursor-pointer"
                        src={buttonCancel}
                        alt="buttonCancel"
                        onClick={onClose}
                    />
                    <button className=''>
                        <img
                            className="cursor-pointer"
                            src={buttonUpdatePost}
                            alt="buttonCreateAdventure" />
                    </button>
                </section>
            </form>
        </div>
    </div>
}

export default EditPost