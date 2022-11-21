// import createPost from '../logic/createPost'

export default function () {

    const handleCreatePost = event => {
        event.preventDefault()
    }

    return <form className="..." onSubmit={handleCreatePost}>
        <label htmlFor='text'>Text</label>
        <textarea type="text" name="text" id="text" placeholder="input a text"></textarea>
        <label htmlFor="visibility">Visibility</label>
        <select id='visibility' name='visibility'>
            <option value="public">public</option>
            <option value="private">private</option>
        </select>
        <button>Post</button>
    </form>
}