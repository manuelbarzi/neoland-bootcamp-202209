import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import createPost from '../logic/createPost'

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(window.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {

        }
    }, [])

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
            })
        } catch(error) {
            alert(error.message)
        }
    }

    return <main>
        <h2>hola {user ? user.name : 'home'}</h2>

        <h2>create post</h2>

        <form className="border" onSubmit={handleCreatePost}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" id="text" placeholder="input a text"></textarea>
            <label htmlFor="visibility">Visibility</label>
            <select id="visibility" name="visibility">
                <option value="public">public</option>
                <option value="private">private</option>
            </select>
            <button>Post</button>
        </form>
    </main>
}

export default Home