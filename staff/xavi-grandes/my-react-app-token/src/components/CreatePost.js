import createPost from '../logic/createPost'
import Button from './Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function ({ onCreated, onClose }) {
    const submitCreatePost = event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            createPost(sessionStorage.userId, text, visibility)
                .then(() => onCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
        onClick={onClose}
    >
        <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />
            <form className="flex flex-col gap-2" onSubmit={submitCreatePost}>
                <label htmlFor="text">Text</label>
                <textarea className="text-black" type="text" name="text" id="text" placeholder="input a text"></textarea>
                <label htmlFor="visibility">Visibility</label>
                <select className="text-black" id="visibility" name="visibility">
                    <option value="public">public</option>
                    <option value="private">private</option>
                </select>
                <Button>Create</Button>
            </form>
        </div>
    </div>
}