import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrievePublicPosts from '../logic/retrievePublicPosts'
import CreatePost from '../components/CreatePost.jsx'

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const [createPostVisibile, setCreatePostVisible] = useState(false)

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

    const handleEditPost = postId => {
        console.log('TODO edit post ' + postId)
    }

    const handleDeletePost = postId => {
        console.log('TODO delete post ' + postId)
    }



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

    const showCreatePost = () => setCreatePostVisible(true)

    const handleLeavePost = () => {
        setCreatePostVisible(false)

    }


    return <main>
        <h2>hola {user ? user.name : 'home'}</h2>

        <button onClick={showCreatePost}>+</button>

        {createPostVisibile && <><button onClick={handleLeavePost}>--x--</button><CreatePost onCreated={handlePostCreated} /> </>}

        {posts && posts.map(post => <article key={post.id}>
            <strong>{post.user}</strong>
            <p>{post.text}</p>
            <time>{post.date}</time>
            {post.user === window.userId && <><button onClick={() => handleEditPost(post.id)}>Edit</button><button onClick={() => handleDeletePost(post.id)}>Delete</button></>}
        </article>)}
    </main>
}

export default Home