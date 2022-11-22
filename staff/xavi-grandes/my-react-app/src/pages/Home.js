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
        <div className='h-10 flex items-center gap-10 ml-2'>
            <h1>Welcome to the Home </h1>
            <button onClick={showCreatePost} className="border border-black p-1 bg-gray-200">+</button>
        </div>
        
        {createPostVisibile && <CreatePost onCreated={handlePostCreated}/>}
        
        <hr/>
        <div>

        </div>
    </main>
}

export default Home
