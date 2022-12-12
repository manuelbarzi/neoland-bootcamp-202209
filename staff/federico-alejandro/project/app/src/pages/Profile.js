import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveAUser from '../logic/retrieveAUser'
import retrievePostsFromUser from '../logic/retrievePostsFromUser'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaRegComment } from 'react-icons/fa'
import retrieveComment from '../logic/retrieveComment'
import CreateComment from '../components/CreateComment'

function Profile() {
    log.info('Profile -> render')

    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const { targetUserId } = useParams()
    const [comment, setComment] = useState()
    const [createCommentVisible, setCreateCommentVisible] = useState(false)


    useEffect(() => {
        try {
            retrieveAUser(sessionStorage.token, targetUserId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                try {
                    retrievePostsFromUser(sessionStorage.token, targetUserId, (error, posts) => {
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

    return <main className='overflow-hidden h-full bg-gradient-to-b from-[#439A97] via-[#62B6B7] to-[#97DECE]'>
        <Header userName={user?.name} />
        {posts && <div className='flex flex-col items-center gap-4 py-[3rem]'>
            {posts.map(post => <article key={post.id} className='bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
                <div className='flex justify-between'>
                    <h3 className='font-bold'>{user.name}</h3>
                    <time className='flex justify-end h-fit'>{post.date}</time>
                </div>
                <div className='bg-white m-2 border rounded-xl'>
                    <h2 className='font-bold'>{post.title}</h2>
                    <p>{post.text}</p>
                    {post.image && <div className='w-fit h-fit'><img src={post.image} alt='' /></div>}
                </div>
                <hr className='border-black' />
                <button className='p-2' onClick={() => openCreateComment()}><FaRegComment size='1rem' /></button>

            </article>)}
        </div>}

        <Footer />
        {createCommentVisible && <CreateComment onCreated={handleCommentCreated} onClose={closeCreateComment} />}

    </main>
}

export default Profile