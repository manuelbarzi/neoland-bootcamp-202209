import log from '../utils/coolog'
import {useEffect, useState} from 'react'
import CreatePost from '../components/CreatePost.jsx'

function Home () {
log.info('home -> render')

const [createPostVisibile, setCreatePostVisible] = useState(false)

const showCreatePost = () => setCreatePostVisible(true)

    return <main>
        <div>
            <h1>Welcome to the Home </h1>
            <button onClick={showCreatePost} >+</button>
        </div>
        
        {createPostVisibile && <CreatePost />}
        
        <hr/>
        <div>

        </div>
    </main>
}

export default Home
