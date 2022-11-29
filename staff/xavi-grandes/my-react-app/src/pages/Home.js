import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrievePublicPosts from '../logic/retrievePublicPosts'
import CreatePost from '../components/CreatePost'
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [postIdToEdit, setPostIdToEdit] = useState()
    const [postIdToDelete, setPostIdToDelete] = useState()
    // const [logOutToLogin, setLogOutToLogin] = useState()

    // const Logout = () => setLogOutToLogin()

    useEffect(() => {
        try {
            retrieveUser(window.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                try {
                    retrievePublicPosts(window.userId, (error, posts) => {
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
            retrievePublicPosts(window.userId, (error, posts) => {
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
            retrievePublicPosts(window.userId, (error, posts) => {
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
            retrievePublicPosts(window.userId, (error, posts) => {
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

    return <main className="overflow-hidden">
        <header className="fixed bg-[white] w-full h-[2rem] top-0 flex place-content-around ">
            <p>{user ? user.name : 'home'}</p>
            {/* <button className='flex gap-1' onClick={Logout}>Log out <BiLogOut size="1.5rem" /></button> */}
            <Link to="/login" className="flex gap-1">Log out <BiLogOut size="1.5rem" /></Link> 
        </header>

        {posts && <div className="flex flex-col items-center gap-2 py-[2.5rem]">
            {posts.map(post => <article key={post.id} className="bg-white border rounded-xl w-[50%] flex flex-col p-5">
                <a href={`/users/${post.user.id}`}><strong>{post.user.name}</strong></a>
                <p>{post.text}</p>
                <time>{post.date}</time>
                {post.user.id === window.userId && <div className="flex self-end">
                    <button onClick={() => openEditPost(post.id)}><AiOutlineEdit size="1rem" /></button>
                    <button onClick={() => openDeletePost(post.id)}><AiOutlineDelete size="1rem" /></button>
                </div>}
            </article>)}
        </div>}

        <footer className="fixed bg-[white] w-full h-[2rem] bottom-0 flex justify-center"><button onClick={openCreatePost}><AiOutlinePlusCircle size="1.5rem" /></button></footer>

        {createPostVisible && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost} />}

        {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
        {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />}
    </main>
}

export default Home