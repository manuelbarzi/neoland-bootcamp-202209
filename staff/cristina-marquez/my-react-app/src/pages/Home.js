import { useContext, useEffect, useState } from "react"
import createNewPost from "../logic/createnewPost"
import UserContext from "../UserContext"
import getPosts from "../logic/getPosts"
import Post from "../components/Post"


function Home() {

    const { user } = useContext(UserContext)
    const [posts, setPosts] = useState([])



    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getPosts()
            setPosts(fetchedPosts)
        }
        fetchPosts()
    }, [])


    const createNewPostHandler = async (event) => {
        event.preventDefault()

        const currentUserId = user.id
        const text = 'sersiwrfassf'
        const visibility = 'public'

        try {
            await createNewPost(currentUserId, text, visibility)
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <div>
            <h2>Hello {user.name}</h2>

            {/* List posts */}

            {posts.length > 0 && posts.map((post) =>
                <Post key={post.id}
                    content={post} />
            )}


            {/* Create new post */}
            <button onClick={createNewPostHandler}>Create new post</button>
        </div>
    )





}

export default Home