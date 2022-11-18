import { useEffect, useState } from "react"
import newPost from "../logic/new-post"
import retrievePosts from "../logic/retrieve-posts"
import retrieveUser from "../logic/retrieve-user"
import { format, render, cancel, register } from 'timeago.js'
import deletePost from "../logic/delete-post"

function Home(props) {

    const [user, setUser] = useState()
    const [posts, setPosts] = useState([])

    const userName = user && user.name

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.userId)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrievePosts(sessionStorage.userId)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onLogoutClick = () => {
        sessionStorage.clear()
        setUser()

        props.onLogout()
    }

    const onCreatePost = event => {
        event.preventDefault()

        const { post: { value: post }, visibility: { value: visibility } } = event.target

        try {
            newPost(post, sessionStorage.userId, user.name, visibility)
                .then(() => retrievePosts(sessionStorage.userId))
                .then(posts => {
                    setPosts(posts)

                    event.target.reset()
                })

                .catch(error => {
                    alert(error.message)
                })

        } catch (error) {
            alert(error.message)
        }
    }

    const onDeletePost = (postId, postUserId) => {
        try {
            deletePost(postId, postUserId, sessionStorage.userId)
                .then(() => retrievePosts(sessionStorage.userId))
                .then(posts => setPosts(posts))
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    // const searchCat = event =>{
    //     event.preventDefault()

    //     const query = event.target.query.value

    //     if(query.trim() === '') return

    //     try{
    //         catSearcher(query)
    //         .then(cats =>setCats(cats))
    //         .catch(error =>{
    //             alert(error.message)
    //         })
    //     }catch(error){
    //         alert(error.message)
    //     }
    // }

    return (<main>
        <button onClick={onLogoutClick}>Logout</button>
        {/* 
        <div>
        <form onSubmit={searchCat}>
        <label htmlFor="catSearcher">Search</label>
        <input type="text" name="query"/>
        <button>🔎</button>
        </form>
    </div> */}
        <div className="flex items-center flex-col">
            <div>
                <h1>Hola {userName}</h1>
                <form onSubmit={onCreatePost}>
                    <textarea name="post" placeholder="Share your thoughts"></textarea>
                    <select id="visibility" name="visibility">
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                    <button>Post</button>
                </form>
            </div>

            <section>
                {posts.map(post => {
                    return <article key={post.postId} className="mt-3.5 border solid">
                        <h2>{post.userName}</h2>
                        <p>{format(post.date)}</p>
                        <p>{post.content}</p>
                        {post.userId === sessionStorage.userId ? <button onClick={() => onDeletePost(post.postId, post.userId)}>Delete</button> : null}
                    </article>
                })}
            </section>
        </div>
    </main>)
}

export default Home