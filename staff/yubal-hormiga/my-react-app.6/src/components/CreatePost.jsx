import createPost from '../logic/createPost'

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({onCreated}) {
    const handleCreatePost = event => {
        event.preventDefault()

        const { text: { value: text }, visibility: { value: visibility } } = event.target

        try {
            createPost(window.userId, text, visibility, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('Post saved')

                event.target.reset()

                onCreated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <form className="border" onSubmit={handleCreatePost}>
        <label htmlFor="text">Text</label>
        <textarea type="text" name="text" id="text" placeholder="input a text"></textarea>
        <label htmlFor="visibility">Visibility</label>
        <select id="visibility" name="visibility">
            <option value="public">public</option>
            <option value="private">private</option>
        </select>
        <button>Post</button>
    </form>
}