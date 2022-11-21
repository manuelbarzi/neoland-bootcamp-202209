import log from '../utils/coolog'
import {useState} from 'react'
import CreatePost from '../components/CreatePost.jsx'

function Home () {
log.info('home -> render')

const [createPostVisibile, setCreatePostVisible] = useState(false)

const showCreatePost = () => setCreatePostVisible(true)

const handlePostCreated = () => {
    setCreatePostVisible(false)
}

    return <main className="bg-blue-200">
        <div>
            <h1 className="text-red-500">Welcome to the Home </h1>
            <button onClick={showCreatePost} >+</button>
        </div>
        
        {createPostVisibile && <CreatePost onCreated={handlePostCreated}/>}
        
        <hr/>
        <div>

        </div>
    </main>
}

export default Home
