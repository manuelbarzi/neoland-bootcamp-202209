import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import createPost from '../logic/createPost'
import retrievePublicPosts from '../logic/retrievePublicPosts'

function Home() {
    log.info('home -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState([])
    const [toggleButtonPost, setToggleButtonPost] = useState('menu')
    const [view, setView] = useState()


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
            alert(error.message)
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
        } catch (error) {
            alert(error.message)
        }
    }

    // const close = document.getElementById('close')
    // const open = document.getElementById('open')
    // const newPost = document.getElementById('newPost')

    // const openNewPost = () => newPost.classList.add('newPost')
    // const closeNewPost = () => newPost.classList.remove('newPost')

    const handleTogglePost = () =>
        setToggleButtonPost(toggleButtonPost === 'newPost' ? 'close' : 'newPost')


    useEffect(() => {
        //const { text: { value: text }, visibility: { value: visibility } } = posts
        try {
            retrievePublicPosts(window.userId, (error, posts) => {
                if (posts.visibility === 'public') {

                    setPosts(posts)
                }

                if (error) {
                    alert(error.message)

                    return
                }


            })
        } catch (error) {
            alert(error.message)
        }

    }, [posts])

    return <main>
        <h2>Hola {user ? user.name : 'home'}</h2>

        <h2>Create Post</h2>
        <button onClick={handleTogglePost}>Comment</button>
        {toggleButtonPost === 'close' &&
            <form onSubmit={handleCreatePost}>
                <label htmlFor='text'>Text</label>
                <textarea type='text' name='text' placeholder='input a text'></textarea>
                <label htmlFor='visibility'>Visibility</label>
                <select id='visibility' name='visibility'>
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                </select>
                <button>Post</button>
            </form>}
        
            
        

        <section>
            <h2>Public Posts</h2>
            {posts.filter(post => post.visibility === 'public').map(post => <post
                key={post.id}
                post={post}
            />)}

        </section>

    </main>
}

export default Home