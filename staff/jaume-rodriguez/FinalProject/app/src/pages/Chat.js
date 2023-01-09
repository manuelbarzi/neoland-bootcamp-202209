import { useState, useEffect } from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import extractSubFromToken from '../utils/extractSubFromToken'
import retrievePublicPosts from '../logic/retrievePublicPosts'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'
import buttonBack from '../img/icon-back.png';
import buttonCreatePost from '../img/button-create-post.png';

function Posts() {
    const userId = extractSubFromToken(sessionStorage.token)
    const [posts, setPosts] = useState()
    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [postIdToEdit, setPostIdToEdit] = useState()
    const [postIdToDelete, setPostIdToDelete] = useState()

    // TASKS REFRESH
    useEffect(() => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handlePostCreated = () => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => {
                    setCreatePostVisible(false)
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handlePostUpdated = () => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => {
                    setPostIdToEdit()
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handlePostDeleted = () => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => {
                    setPostIdToDelete()
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
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
            <section className="min-h-screen flex flex-col bg-[#191919]">
                <div className="relative flex flex-grow font-alata h-full flex-col justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                    {/*POSTS*/}
                    <div className="flex flex-col justify-center gap-[2rem]">
                        <header className='text-white flex flex-row items-start justify-center'>
                            <Link to="/">
                                <img
                                    className='cursor-pointer absolute -ml-[3rem] mt-[0.9rem]'
                                    src={buttonBack}
                                    alt="home" />
                            </Link>
                            <span className=' text-orange-200 text-[2rem]'>Community</span>
                        </header>
                        {/* POST*/}
                        {posts &&
                            <section className="flex flex-col h-[27rem] ml-[1.3rem] bg-inherit justify-start items-center overflow-y-scroll scrollbar overscroll-contain ">
                                {posts.map(post =>
                                    <article
                                        key={post.id}
                                        className="h-[27rem] w-[21.813rem] p-4 flex justify-start flex-col mb-4 bg-inherit text-white">
                                        <Link
                                            className="-mt-2 pb-2 text-orange-200"
                                            to={`/profile/${post.user.id}`}>{post.user.name}
                                        </Link>
                                        <p
                                            className="flex flex-col text-justify p-4 text-sm border-black rounded border-t bg-[#2d2b2b] text-gray-300 font-normal py-4 mb-2">{post.text}
                                        </p>
                                        <div className="flex">
                                            <time className='self-end ml-auto px-2 text-sm text-gray-400'>  {format(post.date)}
                                            </time>
                                            {post.user.id === userId &&
                                                <button
                                                    className="material-symbols-outlined cursor-pointer text-orange-200 hover:bg-[#2d2b2b]"
                                                    onClick={() => openEditPost(post.id)}>edit</button>}
                                            {post.user.id === userId &&
                                                <button
                                                    className="material-symbols-outlined cursor-pointer text-orange-200 hover:bg-[#2d2b2b]"
                                                    onClick={() => openDeletePost(post.id)}>delete</button>}
                                        </div>
                                    </article>)}
                            </section>}
                        {createPostVisible &&
                            <CreatePost
                                onCreated={handlePostCreated}
                                onClose={closeCreatePost} />}
                        {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
                        {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />}
                        <div className='flex flex-col items-center mt-[1rem]'>
                            <img
                                className=''
                                src={buttonCreatePost}
                                alt="buttonCreatePost"
                                onClick={openCreatePost}
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );

}

export default Posts