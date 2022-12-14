import log from '../utils/coolog'
//import {format} from 'timeago.js'
import { useParams } from 'react-router-dom'
// import { FaRegComment } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import retrieveAUser from '../logic/retrieveAUser'
//import retrieveComment from '../logic/retrieveComment'
import retrievePostsFromUser from '../logic/retrievePostsFromUser'

import Post from '../components/Post'
import Header from '../components/Header'
import Footer from '../components/Footer'
//import CreateComment from '../components/CreateComment'

function Profile() {
    log.info('Profile -> render')

    const { targetUserId } = useParams()
    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const [comments, setComments] = useState()
    //const [createCommentVisible, setCreateCommentVisible] = useState(false)


    useEffect(() => {
        try {
            Promise.all([retrieveAUser(sessionStorage.token, targetUserId), retrievePostsFromUser(sessionStorage.token, targetUserId)])
                .then(([user, posts]) => {
                    setUser(user)
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    //     retrieveAUser(sessionStorage.token, targetUserId, (error, user) => {
    //         if (error) {
    //             alert(error.message)

    //             return
    //         }

    //         try {
    //             retrievePostsFromUser(sessionStorage.token, targetUserId, (error, posts, comments) => {
    //                 if (error) {
    //                     alert(error.message)

    //                     return
    //                 }

    //                 setUser(user)
    //                 setPosts(posts)
    //                 setComments(comments)
    //             })
    //         } catch (error) {
    //             alert(error.message)
    //         }
    //     })
    // } catch (error) {
    //     alert(error.message)
    // }
    // }, [])

    // const openCreateComment = () => setCreateCommentVisible(true)
    // const closeCreateComment = () => setCreateCommentVisible(false)

    // const handleCommentCreated = () => {
    //     try {
    //         retrieveComment(sessionStorage.token, (error, comment) => {
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

    return <main className='overflow-hidden bg-gradient-to-b from-[#439A97] via-[#62B6B7] to-[#97DECE]'>
        <Header />
        {posts && <div className='flex flex-col items-center gap-4 py-[3rem]'>
            {posts.map(post => <Post key={post.id} post={post} />)}
            {/* {posts.map(post => <article key={post.id} post={post} className='bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
                <div className='flex justify-between'>
                    <h3 className='font-bold'>{user.name}</h3>
                    <time className='flex justify-end font-bold text-xs'>{format(post.date)}</time>
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