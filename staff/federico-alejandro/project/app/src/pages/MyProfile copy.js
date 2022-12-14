import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import { format } from 'timeago.js'

import retrieveMyUser from '../logic/retrieveMyUser'
import retrievePostsUser from '../logic/retrievePostsUser'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'

import { AiOutlineEdit, AiOutlineDelete, AiOutlineLock } from 'react-icons/ai'


function MyProfile() {
    log.info('MyProfile -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const [postIdToEdit, setPostIdToEdit] = useState()
    const [postIdToDelete, setPostIdToDelete] = useState()
    const [createPostVisible, setCreatePostVisible] = useState(false)

    useEffect(() => {
        try {
            retrieveMyUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                try {
                    retrievePostsUser(sessionStorage.token, (error, posts) => {
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

    const openCreatePost = () => setCreatePostVisible(true)
    const closeCreatePost = () => setCreatePostVisible(false)

    const handlePostCreated = () => {
        try {
            retrievePostsUser(sessionStorage.token, (error, posts) => {
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
            retrievePostsUser(sessionStorage.token, (error, posts) => {
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
            retrievePostsUser(sessionStorage.token, (error, posts) => {
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

    return <main className='overflow-hidden bg-gradient-to-b from-[#439A97] via-[#62B6B7] to-[#97DECE]'>
        <Header userName={user?.name} />

        {posts && <div className='flex flex-col items-center gap-4 py-[3rem]'>
            {posts.map(post => <article key={post.id} className=' bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
                <time className='flex justify-end font-bold text-xs'>{format(post.date)}</time>
                <div className='bg-white m-2 border rounded-xl'>
                    <h2 className='font-bold'>{post.title}</h2>
                    <p>{post.text}</p>
                {post.image && <div className='w-fit h-fit'><img src={post.image} alt='' /></div>}
                </div>
                <hr className='border-black' />
                <div className='flex self-end pb-0'>
                    <button onClick={() => openEditPost(post.id)}><AiOutlineEdit size='1rem' /></button>
                    <button onClick={() => openDeletePost(post.id)}><AiOutlineDelete size='1rem' /></button>
                    {post.visibility === 'private' && <p className='self-end'><AiOutlineLock /></p>}
                </div>
            </article>)}
        </div>}

        <Footer onCreate={openCreatePost} />

        {createPostVisible && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost} />}
        {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
        {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />}

    </main>

}

export default MyProfile 