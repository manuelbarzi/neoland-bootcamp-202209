import log from '../utils/coolog'
import Context from '../components/Context'
import { useEffect, useState, useContext } from 'react'
import retrieveAUser from '../logic/retrieveAUser'
import retrievePostsFromUser from '../logic/retrievePostsFromUser'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {errors } from 'com'
// import { FaRegComment } from 'react-icons/fa'
// import retrieveComment from '../logic/retrieveComment'
//import CreateComment from '../components/CreateComment'
// import { format } from 'timeago.js'
import Post from '../components/Post'

const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Profile() {
    log.info('Profile -> render')

    const { showAlert } = useContext(Context)
    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const { targetUserId } = useParams()
    const [comments, setComments] = useState()
    // const [createCommentVisible, setCreateCommentVisible] = useState(false)


    useEffect(() => {
        try {
            retrieveAUser(sessionStorage.token, targetUserId) //(error, user) => {
                .catch(error => {
                if (error) {
                    alert(error.message)

                    //return
                }

                try {
                    retrievePostsFromUser(sessionStorage.token, targetUserId) //(error, posts, comments) => {
                        .then(user => setUser(user))
                        .then(posts => setPosts(posts))
                        .then(comments => setComments(comments))
                        .catch(error => {
                            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                                showAlert(error.message, 'warn')
                            else if (error instanceof AuthError || error instanceof NotFoundError)
                                showAlert(error.message, 'error')
                            else
                                showAlert(error.message, 'fatal')
                        // if (error) {
                        //     alert(error.message)

                        //     return
                        // }

                        // setUser(user)
                        // setPosts(posts)
                        // setComments(comments)
                    })
                } catch (error) {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
                    //alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    // const openCreateComment = () => setCreateCommentVisible(true)
    // const closeCreateComment = () => setCreateCommentVisible(false)

    // const handleCommentCreated = () => {
    //     try {
    //         retrieveComment(sessionStorage.token, (error, comments) => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }
    //             setCreateCommentVisible(false)
    //             setComments(comments)
    //         })
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    return <main className='overflow-hidden h-full bg-gradient-to-b from-[#439A97] via-[#62B6B7] to-[#97DECE]'>
        <Header userName={user?.name} />
        {posts && <div className='flex flex-col items-center gap-4 py-[3rem]'>
            {posts.map(post => <Post key={post.id} post={post} />)}
            {/* {posts.map(post => <article key={post.id} className='bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
                <div className='flex justify-between'>
                    <h3 className='font-bold'>{user.name}</h3>
                    <time className='flex justify-end h-fit'>{format(post.date)}</time>
                </div>
                <div className='bg-white m-2 border rounded-xl'>
                    <h2 className='font-bold'>{post.title}</h2>
                    <p>{post.text}</p>
                    {post.image && <div className='w-fit h-fit'><img src={post.image} alt='' /></div>}
                </div>
                <hr className='border-black' />
                <button className='p-2' onClick={() => openCreateComment()}><FaRegComment size='1rem' /></button>

            </article>)} */}
        </div>}

        <Footer />
        {/* {createCommentVisible && <CreateComment onCreated={handleCommentCreated} onClose={closeCreateComment} />} */}

    </main>
}

export default Profile