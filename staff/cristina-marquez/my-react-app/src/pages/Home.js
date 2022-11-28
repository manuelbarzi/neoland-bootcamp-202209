import { useEffect, useState } from "react"
import getPosts from "../logic/getPosts"
import Post from "../components/Post"
import CreatePost from "../components/CreatePost"
import Navbar from "../components/Navbar"



function Home() {


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
        console.log('refreshed')
        setPosts(fetchedPosts)
    }


    return (
        <div>
            <Navbar></Navbar>

            <section className="pt-4">

                {/* Create new post */}

                <button onClick={createNewPostHandler}>Create new post</button>
                {createPostIsVisible && <CreatePost onCreated={onCreateNewPostCreated} onClose={onCreateNewPostClose} ></CreatePost>}

                {/* List posts */}

                {posts.length > 0 && posts.map((post) =>
                    <Post key={post._id}
                        content={post}
                        onUpdate={refreshPosts} />
                )}
            </section>



        </div>
    )

}

export default Home