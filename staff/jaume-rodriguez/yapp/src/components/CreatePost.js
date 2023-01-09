import { useState, useEffect } from 'react'
import createPost from '../logic/createPost'
import Button from './Button'
import retrieveUser from '../logic/retrieveUser';

function CreatePost({ onCreated, onClose }) {
    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUser(user)
            })
        } catch (error) {
        }
    }, [])

    const submitCreatePost = event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            createPost(sessionStorage.userId, text, visibility, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                event.target.reset()

                onCreated()
            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-start items-center overflow-hidden" onClick={onClose}>
        <div className="w-[21rem] p-3 my-3 flex justify-center flex-col rounded-xl border-solid border-sky-700 border-t border-b-4 border-x bg-slate-100 mt-[20rem]" onClick={event => event.stopPropagation()}>
            <div className="flex w-full place-content-center">
                <p className="fixed ml-auto my-[0.2rem] font-semibold">Create Post</p>
                <button className="hover:bg-slate-300 ml-auto rounded-2xl p-1 text-[1.4rem] text-black font-semibold material-symbols-outlined" onClick={onClose}>close</button>
            </div>

            <form className="flex flex-col gap-2" onSubmit={submitCreatePost}>
                <textarea
                    type="text"
                    name="text"
                    id="text"
                    placeholder={"What's in your mind, " + (user ? user.name : "") + " ?"}
                    rows="3"
                    className=" placeholder:text-slate-700 flex flex-col text-justify p-4 text-sm border-sky-700 border bg-sky-200 text-black text-[15px] font-normal py-4 mt-3"></textarea>
                <select id="visibility" name="visibility" className="text-black bg-inherit self-start font-semibold text-sky-700">
                    <option value="public">Anyone can see it</option>
                    <option value="private">Only friends can see it</option>
                </select>
                <Button>Create</Button>
            </form>
        </div>
    </div>

}
export default CreatePost