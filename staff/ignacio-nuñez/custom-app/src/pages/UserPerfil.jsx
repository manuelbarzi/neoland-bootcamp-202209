import { useEffect, useState } from "react"
import newPost from "../logic/new-post"
import { format, render, cancel, register } from 'timeago.js'
import deletePost from "../logic/delete-post"
import NavBar from "../components/NavBar"
import retrieveUser from "../logic/retrieve-user"
import retrievePostsPerfil from "../logic/retrieve-posts-perfil"

function UserPerfil({ onLogoutClick, onHomeClick, onSearchedUserClick, onPerfilClick}) {

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState()
    const [creatingPost, setCreatingPost] = useState(false)

    const userName = user && user.name


    useEffect(() => {
        try {
            retrievePostsPerfil(sessionStorage.userId)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        try {
            retrieveUser(sessionStorage.userId)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onCreatePost = event => {
        event.preventDefault()

        const { post: { value: post }, visibility: { value: visibility } } = event.target

        try {
            newPost(post, sessionStorage.userId, user.name, visibility)
                .then(() => retrievePostsPerfil(sessionStorage.userId))
                .then(posts => {
                    setPosts(posts)

                    event.target.reset()

                    handlerClosePost()
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
                .then(() => retrievePostsPerfil(sessionStorage.userId))
                .then(posts => setPosts(posts))
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }


    const handlerLogoutClick = () => {
        onLogoutClick()
    }

    
    const handlerHomeClick = () =>{
        onHomeClick()
    }

    const onSearchUser = (searchedUserId) =>{
        onSearchedUserClick(searchedUserId)
    }

    const handlerPerfilClick = () => {
        onPerfilClick()
    }

    const handlerCreatePostClick = () => {
        setCreatingPost(true)
    }

    const handlerClosePost = () => {
        setCreatingPost(false)
    }

    return <main className="min-h-screen bg-slate-100">
        <NavBar onLogoutClick={handlerLogoutClick} onHomeClick={handlerHomeClick} onPerfilClick={handlerPerfilClick} onClickSearchedUser={onSearchUser}/>
        {creatingPost && <div className="absolute w-full h-full bg-slate-200 opacity-60" onClick={handlerClosePost}></div>
        }
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
            <div className="shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                        <span className="rounded-lg w-full h-full hover:bg-slate-200 bg-slate-100 block text-slate-500 cursor-pointer" onClick={handlerCreatePostClick}>Share your thoughts {userName}</span>
                    </div>
                {creatingPost && <div className="shadow-lg shadow-slate-400 absolute w-2/6 h-3/6 bg-white border border-2 p-4 rounded-xl inset-x-1/3 inset-y-1/4">
                        <div className="flex flex-col items-center">
                            <div className="grid w-full items-center grid grid-cols-12">
                                <span className="font-bold text-xl w-fit col-start-5 col-end-9">Create Post</span>
                                <button className="border border-2 justify-self-end col-start-12 col-end-13 p-1 rounded-lg" onClick={handlerClosePost}>Close</button>
                            </div>
                            <hr className="w-full mt-3.5" />
                            <p className="self-start font-medium text-lg mt-2">{user.name}</p>
                            <form className="flex flex-col items-center w-full mt-2 gap-2" onSubmit={onCreatePost}>
                                <select id="visibility" name="visibility" className="w-1/4 rounded-lg p-1 self-start">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                                <textarea autoFocus name="post" id="post" placeholder={"Share with us " + user.name} className="resize-none border-none outline-none rounded-xl w-full" rows="5"></textarea>
                                <button className="bg-emerald-200 w-full h-10 mt-2 rounded-lg ">Post</button>
                            </form>
                        </div>
                    </div>}

                <section>
                    {posts.map(post => {
                        return <article key={post.postId} className="shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 border border-2 p-4 w-96 rounded-xl">
                            <div className="flex justify-between">
                                <h2>{post.userName}</h2>
                                <p>{format(post.date)}</p>
                            </div>
                            <p>{post.content}</p>
                            {post.userId === sessionStorage.userId ? <button className="self-end border border-2 p-2 rounded-xl" onClick={() => onDeletePost(post.postId, post.userId)}>Delete</button> : null}
                        </article>
                    })}
                </section>
            </div>
        </div>
    </main>
}

export default UserPerfil