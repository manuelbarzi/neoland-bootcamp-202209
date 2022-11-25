import createNewPost from "../logic/createnewPost"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useContext } from "react"
import UserContext from "../UserContext"

function CreatePost({ onCreated, onClose }) {

    const { user } = useContext(UserContext)

    const submitCreatePost = async event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            await createNewPost(user._id, text, visibility)
            event.target.reset()
            onCreated()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end" onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />
            <form className="flex flex-col gap-2" onSubmit={submitCreatePost}>
                <label htmlFor="text">Text</label>
                <textarea type="text" name="text" id="text" placeholder="input a text"></textarea>
                <label htmlFor="visibility">Visibility</label>
                <select id="visibility" name="visibility">
                    <option value="public">public</option>
                    <option value="private">private</option>
                </select>
                <button>Create</button>
            </form>
        </div>
    </div>
}

export default CreatePost