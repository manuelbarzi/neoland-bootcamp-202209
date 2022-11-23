import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext"
import getPosts from "../logic/getPosts"
import Post from "../components/Post"
import CreatePost from "../components/CreatePost"



//TODO: change create post button position

function Home() {

    const { user } = useContext(UserContext)
    const [posts, setPosts] = useState([])
    const [createPostIsVisible, setCreatePostIsVisible] = useState(false)



    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getPosts()
            setPosts(fetchedPosts)
        }
        fetchPosts()
    }, [])


    const createNewPostHandler = async (event) => {
        event.preventDefault()
        setCreatePostIsVisible(true)

    }

    const onCreateNewPostClose = () => {
        setCreatePostIsVisible(false)
    }

    const onCreateNewPostCreated = async () => {
        setCreatePostIsVisible(false)
        await refreshPosts()
    }

    const refreshPosts = async () => {
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts)
    }


    return (
        <div>
            <h2>Hello {user.name}, what's up? </h2>

            {/* List posts */}

            {posts.length > 0 && posts.map((post) =>
                <Post key={post.id}
                    content={post}
                    onUpdate={refreshPosts} />
            )}


            {/* Create new post */}
            <button onClick={createNewPostHandler}>Create new post</button>
            {createPostIsVisible && <CreatePost onCreated={onCreateNewPostCreated} onClose={onCreateNewPostClose} ></CreatePost>

            }
        </div>
    )

}

export default Home