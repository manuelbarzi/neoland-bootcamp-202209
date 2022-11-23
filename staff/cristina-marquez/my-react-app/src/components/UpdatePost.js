import updatePost from "../logic/updatePost";
import { AiOutlineCloseCircle } from 'react-icons/ai'



function UpdatePost({ onUpdated, onClose, post }) {

    const submitUpdatePost = async event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            await updatePost(post.id, text, visibility)
            event.target.reset()

            onUpdated()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end" onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />
            <form className="flex flex-col gap-2" onSubmit={submitUpdatePost}>
                <label htmlFor="text">Text</label>
                <textarea type="text" name="text" id="text" placeholder="input a text" defaultValue={post.text}></textarea>
                <label htmlFor="visibility">Visibility</label>
                <select id="visibility" name="visibility" defaultValue={post.visibility}>
                    <option value="public">public</option>
                    <option value="private">private</option>
                </select>
                <button>Save changes</button>
            </form>
        </div>
    </div>

}

export default UpdatePost