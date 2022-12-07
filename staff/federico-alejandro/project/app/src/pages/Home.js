import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { errors } from 'com'
import { Link } from 'react-router-dom'

import retrieveUser from '../logic/retrieveUser'
import retrievePublicPosts from '../logic/retrievePublicPosts'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Context from '../components/Context'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'

import extractSubFromToken from '../utils/extractSubFromToken'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const { showAlert } = useContext(Context)
    
    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [postIdToEdit, setPostIdToEdit] = useState()
    const [postIdToDelete, setPostIdToDelete] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
            try {
                retrievePublicPosts(sessionStorage.token)
                    //.then(user => setUser(user)) //debe ir o no?
                    .then(posts => setPosts(posts))
                    .catch(error => {
                        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                            showAlert(error.message, 'warn')
                        else if (error instanceof AuthError || error instanceof NotFoundError)
                            showAlert(error.message, 'error')
                        else
                            showAlert(error.message, 'fatal')
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                    showAlert(error.message, 'warn')
                else
                    showAlert(error.message, 'fatal')
            }
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

    return <main className="overflow-hidden bg-white dark:bg-black text-black dark:text-white">
          <Header userName={user?.name} />
       
        {posts && <div className='flex flex-col items-center gap-4 py-[3rem] '>
            {posts.map(post => <article key={post.id} className='bg-green-400 rounded-xl w-[50%] flex flex-col p-5'>
                <div className='flex justify-between '><Link to={`/profile/${post.user.id}`}><strong>{post.user.name}</strong></Link>
                    <time>{post.date}</time>
                </div>
                <p className='border-2 bg-slate-200 border-slate-400 rounded-xl'>{post.text}</p>
                {post.user.id === userId && <div className='flex justify-between'>
                    <div>
                        <button onClick={() => openEditPost(post.id)}><AiOutlineEdit size='1rem' /></button>
                        <button onClick={() => openDeletePost(post.id)}><AiOutlineDelete size='1rem' /></button>
                    </div>
                </div>}
            </article>)}
        </div>}

        <Footer onCreate={openCreatePost}/> {/* si quito onCreate funciona igual? */}
        {createPostVisible && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost} />}
        {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
        {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />}

    </main>
}

export default Home