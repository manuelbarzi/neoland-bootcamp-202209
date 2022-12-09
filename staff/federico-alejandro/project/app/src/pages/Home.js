import log from '../utils/coolog'
import { useEffect, useState, useContext } from 'react'
import { errors } from 'com'
import { Link } from 'react-router-dom'

import retrievePublicPosts from '../logic/retrievePublicPosts'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Context from '../components/Context'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'

import retrieveComment from '../logic/retrieveComment'
import CreateComment from '../components/CreateComment'

import extractSubFromToken from '../utils/extractSubFromToken'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    log.info('Home -> render')

    const [posts, setPosts] = useState()
    const { showAlert } = useContext(Context)

    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [postIdToEdit, setPostIdToEdit] = useState()
    const [postIdToDelete, setPostIdToDelete] = useState()

    const [comment, setComment] = useState()
    const [createCommentVisible, setCreateCommentVisible] = useState(false)

    useEffect(() => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => setPosts(posts))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
            // try {
            //     retrieveComment(sessionStorage.token)
            //         .then(comment => setComment(comment))
            //         .catch(error => {
            //             if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            //                 showAlert(error.message, 'warn')
            //             else if (error instanceof AuthError || error instanceof NotFoundError)
            //                 showAlert(error.message, 'error')
            //             else
            //                 showAlert(error.message, 'fatal')
            //         })
            // } catch (error) {
            //     alert(error.message)
            // }
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }, [])

    const openCreatePost = () => setCreatePostVisible(true)
    const closeCreatePost = () => setCreatePostVisible(false)

    const handlePostCreated = () => {
        try {
            retrievePublicPosts(sessionStorage.token, (error, posts) => {
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

    const openEditPost = postId => setPostIdToEdit(postId)
    const closeEditPost = () => setPostIdToEdit()

    const handlePostUpdated = () => {
        try {
            retrievePublicPosts(sessionStorage.token, (error, posts) => {
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

    const openDeletePost = postId => setPostIdToDelete(postId)
    const closeDeletePost = () => setPostIdToDelete()

    const handlePostDeleted = () => {
        try {
            retrievePublicPosts(sessionStorage.token, (error, posts) => {
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

    const userId = extractSubFromToken(sessionStorage.token)

    const openCreateComment = () => setCreateCommentVisible(true)
    const closeCreateComment = () => setCreateCommentVisible(false)

    const handleCommentCreated = () => {
        try {
            retrieveComment(sessionStorage.token, (error, comment) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setCreateCommentVisible(false)
                setComment(comment)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <main className='overflow-hidden bg-green-400  dark:bg-black text-black dark:text-white'>
        <Header />

        {posts && <div className='flex flex-col items-center gap-4 py-[3rem] '>
            {posts.map(post => <article key={post.id} className='border bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
                <div className='flex justify-between '><Link to={`/profile/${post.user.id}`}><strong>{post.user.name}</strong></Link>
                    <time className='flex justify-end'>{post.date}</time>
                </div>
                <div className='bg-white m-2 border rounded-xl'>
                    <h2 className='font-bold'>{post.title}</h2>
                    <p>{post.text}</p>
                    {post.image && <div className='w-fit h-fit'><img src={post.image} /></div>}
                </div>
                {post.user.id === userId && <div className='flex justify-end'>
                    <div>
                        <button onClick={() => openEditPost(post.id)}><AiOutlineEdit size='1rem' /></button>
                        <button onClick={() => openDeletePost(post.id)}><AiOutlineDelete size='1rem' /></button>
                    </div>
                </div>}
                <hr className='border-black' />
                <button className='p-2' onClick={() => openCreateComment(post.id)}><FaRegComment size='1rem' /></button>
                {/* {comment && <p>{comment.text}</p>} */}
            </article>)}
        </div>}

        <Footer onCreate={openCreatePost} />
        {createPostVisible && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost} />}
        {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
        {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />}

        {createCommentVisible && <CreateComment onCreated={handleCommentCreated} onClose={closeCreateComment} />}

    </main>
}

export default Home