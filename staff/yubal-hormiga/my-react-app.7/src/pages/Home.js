import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrievePublicPosts from '../logic/retrievePublicPosts'
import CreatePost from '../components/CreatePost'
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import EditPost from '../components/EditPost'

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [postIdToEdit, setPostIdToEdit] = useState()

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

    const handleDeletePost = postId => {
        console.log('TODO delete post ' + postId)
    }

    return <main className="overflow-hidden">
        <header className="fixed bg-[white] w-full h-[2rem] top-0 flex justify-center">
            <p>hola {user ? user.name : 'home'}</p>
        </header>

        {posts && <div className="flex flex-col items-center gap-2 py-[2rem]">
            {posts.map(post => <article key={post.id} className="border rounded-xl w-[50%] flex flex-col p-5">
                <strong>{post.user}</strong>
                <p>{post.text}</p>
                <time>{post.date}</time>
                {post.user === window.userId && <div className="flex self-end">
                    <button onClick={() => openEditPost(post.id)}><AiOutlineEdit size="1rem" /></button>
                    <button onClick={() => handleDeletePost(post.id)}><AiOutlineDelete size="1rem" /></button>
                </div>}
            </article>)}
        </div>}

        <footer className="fixed bg-[white] w-full h-[2rem] bottom-0 flex justify-center"><button onClick={openCreatePost}><AiOutlinePlusCircle size="1.5rem" /></button></footer>

        {createPostVisible && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost} />}

        {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />}
    </main>
}

export default Home