import log from '../utils/coolog'
import {useState} from 'react'
import CreatePost from '../components/CreatePost.js'

function Home () {
log.info('home -> render')

const [user, setUser] = useState()
const [posts, setPosts] = useState()
const [createPostVisibile, setCreatePostVisible] = useState(false)
const [postIdToEdit, setPostIdToEdit] = useState()

const showCreatePost = () => setCreatePostVisible(true)
const closeCreatePost = () => setCreatePostVisible(false)
const handlePostCreated = () => {
    try {
        retrievePublicPosts(window.userId, (error, posts) => {
            if (error) {
                alert(error.message)

                return
            }

            setCreatePostVisible(false)
            setPosts(posts)
        })
    } catch (error) {
        alert(error.message)
    }
}

    return <main className="bg-blue-200">
        <header className='h-10 flex items-center gap-10 ml-2'>
            <h1>Welcome to the Home </h1>
            <button onClick={showCreatePost} className="border border-black p-1 bg-gray-200">+</button>
        </header>
        
        {createPostVisibile && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost}/>}
        
        <hr/>
        <div>

        </div>
    </main>
}

export default Home
