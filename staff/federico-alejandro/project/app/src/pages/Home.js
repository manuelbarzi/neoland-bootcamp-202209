import log from '../utils/coolog'
import { useEffect, useState, useContext } from 'react'
import { errors } from 'com'
import retrievePublicPosts from '../logic/retrievePublicPosts'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Context from '../components/Context'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
//import EditPost from '../components/EditPost'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    log.info('Home -> render')

    const [posts, setPosts] = useState()
    const { showAlert } = useContext(Context)

    const [createPostVisible, setCreatePostVisible] = useState()

    //const [comments, setComments] = useState()

    useEffect(() => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => setPosts(posts))
                //.then(comments => setComments(comments))
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
    }, [])

    const openCreatePost = () => setCreatePostVisible(true)
    const closeCreatePost = () => setCreatePostVisible()

    const handlePostCreated = () => {
        
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => {
                    setPosts(posts)
                    setCreatePostVisible()
                })
                //.then(comments => setComments(comments))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        // retrievePublicPosts(sessionStorage.token, (error, posts, comments) => {
        //     if (error) {
        //         alert(error.message)

        //         return
        //     }
        //     setCreatePostVisible(false)
        //     setPosts(posts)
        //     setComments(comments)
        // })
        // } catch (error) {
        //     alert(error.message)
        // }
    }

    const refreshPosts = () => {
        try {
            retrievePublicPosts(sessionStorage.token)
                .then(posts => setPosts(posts))
                //.then(comments => setComments(comments))    
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
    }

    return <main className='overflow-hidden bg-gradient-to-b from-[#439A97] via-[#62B6B7] to-[#97DECE]'>
        <Header />
        {posts && <div className='flex flex-col items-center gap-4 py-[3rem] '>
            {posts.map(post => <Post key={post.id} post={post} onPostUpdated={refreshPosts} onPostDeleted={refreshPosts} />)}
        </div>}

        <Footer onCreate={openCreatePost} />
        {createPostVisible && <CreatePost onCreated={handlePostCreated} onClose={closeCreatePost} />}
        

    </main>
}

export default Home