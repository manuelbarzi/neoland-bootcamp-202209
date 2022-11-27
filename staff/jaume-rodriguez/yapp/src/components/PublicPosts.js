import { useState, useEffect } from 'react'
import { format } from 'timeago.js'
import retrieveUser from '../logic/retrieveUser'
import retrievePublicPosts from '../logic/retrievePublicPosts'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'
import { Link } from 'react-router-dom'

function Posts() {
    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [postIdToEdit, setPostIdToEdit] = useState()
    const [postIdToDelete, setPostIdToDelete] = useState()

    // TASKS REFRESH
    useEffect(() => {
        try {
            retrieveUser(sessionStorage.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                try {
                    retrievePublicPosts(sessionStorage.userId, (error, posts) => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        setUser(user)
                        setPosts(posts)
                    })
                } catch (error) {
                    alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handlePostCreated = () => {
        try {
            retrievePublicPosts(sessionStorage.userId, (error, posts) => {
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

    const handlePostUpdated = () => {
        try {
            retrievePublicPosts(sessionStorage.userId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPostIdToEdit()
                setPosts(posts)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handlePostDeleted = () => {
        try {
            retrievePublicPosts(sessionStorage.userId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPostIdToDelete()
                setPosts(posts)
            })
        } catch (error) {
            alert(error.message)
        }
    }
    const openCreatePost = () => setCreatePostVisible(true)
    const closeCreatePost = () => setCreatePostVisible(false)
    const openEditPost = postId => setPostIdToEdit(postId)
    const closeEditPost = () => setPostIdToEdit()
    const openDeletePost = postId => setPostIdToDelete(postId)
    const closeDeletePost = () => setPostIdToDelete()
    return (
        <>
            {/* POSTS PANEL*/}
            <section className="flex z-1 w-full justify-center flex-wrap">
                <div className="flex flex-row justify-center content-center z-0 p-8 bg-sky-100 border-sky-900 border-b border-solid w-full h-16">
                    <span className="self-center font-semibold text-4xl text-sky-800">
                        Community Posts
                    </span>
                </div>
                {/*POSTS*/}
                <div className="flex flex-col items-center m-4 gap-x-4">
                    <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                        <div className="flex flex-row w-full">
                            <span className="align-self-start text-lg text-black text-base font-normal">Públicos</span>
                            <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                more_horiz
                            </h1>
                        </div>
                        <hr className="w-full mx-auto my-2 border-black" />
                        <div
                            className="w-full p-2 px-4 flex flex-row rounded border-solid border-sky-700 border-t border-b-4 border-x bg-sky-100 hover:bg-yellow-200 cursor-pointer text-sm"
                            onClick={openCreatePost}>
                            <span
                                className="text-center m-auto text-[1.1rem] text-slate-800 font-semibold ">
                                Share your thoughts,  {user ? sessionStorage.userName : 'home'}</span>
                        </div>
                    </section>
                    {/* POST*/}
                    {posts && <div className="flex flex-col items-center">
                        {posts.map(post =>
                            <article
                                key={post.id}
                                className="w-[21rem] p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-700 border-t border-b-4 border-x bg-sky-100">
                                <Link
                                    className="pb-2"
                                    to={`/profile/${post.user.id}`}><strong>{post.user.name}</strong></Link>
                                <p
                                    className="flex flex-col text-justify p-4 text-sm border-sky-700 border-t bg-sky-100 text-black text-[15px] font-normal py-4">{post.text}</p>
                                <div className="flex self-end w-full">
                                    <time className='self-end ml-auto px-2 text-slate-600'>{format(post.date)}</time>
                                    {post.user.id === sessionStorage.userId &&
                                        <button
                                            className="material-symbols-outlined self-center cursor-pointer mt-3 text-sky-900 hover:bg-sky-200"
                                            onClick={() => openEditPost(post.id)}>edit</button>}
                                    {post.user.id === sessionStorage.userId &&
                                        <button
                                            className="material-symbols-outlined self-center cursor-pointer border-none mt-3 text-black hover:bg-sky-200"
                                            onClick={() => openDeletePost(post.id)}>delete</button>}
                                </div>
                            </article>)}
                    </div>}
                    {createPostVisible &&
                        <CreatePost
                            onCreated={handlePostCreated}
                            onClose={closeCreatePost} />}
                    {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
                    {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />}
                </div>
            </section >
        </>
    );

}

export default Posts