import { useEffect, useState } from "react"
import newPost from "../logic/new-post"
import retrievePosts from "../logic/retrieve-posts"
import retrieveUser from "../logic/retrieve-user"
import { format, render, cancel, register } from 'timeago.js'

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
            retrievePosts()
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

        const { post: { value: post } } = event.target

        try{
            newPost(post, sessionStorage.userId, user.name)
            .then(() =>retrievePosts())
            .then(posts => setPosts(posts))
            .catch(error =>{
                alert(error.message)
            })
        }catch(error){
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
        <h1>Hola {userName}</h1>
        {/* 
        <div>
            <form onSubmit={searchCat}>
            <label htmlFor="catSearcher">Search</label>
            <input type="text" name="query"/>
            <button>🔎</button>
            </form>
        </div> */}

        <div>
            <form onSubmit={onCreatePost}>
                <textarea name="post"></textarea>
                <button>Post</button>
            </form>
        </div>

        <section>
            {posts.map(post => {
                return <article key={post.postId}>
                    <h2>{post.userName}</h2>
                    <p>{format(post.date)}</p>
                    <p>{post.content}</p>
                </article>
            })}
        </section>
    </main>)
}

export default Home