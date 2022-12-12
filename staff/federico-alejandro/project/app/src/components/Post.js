import { Link } from 'react-router-dom'
import extractSubFromToken from '../utils/extractSubFromToken'
import { useState } from 'react'
import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'
import CreateComment from '../components/CreateComment'
import retrievePost from '../logic/retrievePost'
import { format} from 'timeago.js'

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

function Post({ post: postFromProps, onPostUpdated, onPostDeleted }) {
    const [post, setPost] = useState(postFromProps)
    const [isEditVisible, setEditVisible] = useState(false)
    const [isDeleteVisible, setDeleteVisible] = useState(false)

    const [comment, setComment] = useState()
    const [createCommentVisible, setCreateCommentVisible] = useState(false)

    const userId = extractSubFromToken(sessionStorage.token)

    const openEditPost = () => setEditVisible(true)
    const closeEditPost = () => setEditVisible(false)

    const openDeletePost = () => setDeleteVisible(true)
    const closeDeletePost = () => setDeleteVisible(false)

    const openCreateComment = () => setCreateCommentVisible(true)
    const closeCreateComment = () => setCreateCommentVisible(false)

    const handleCommentCreated = () => {
        retrievePost(sessionStorage.token, post.id)
            .then(postFromApi => {
                setPost(postFromApi)
                setComment(comment)
            
                closeCreateComment()
            })
    }

    return <>
        <article key={post.id} className=' bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
            <div className='flex justify-between '><Link to={`/profile/${postFromProps.user.id}`}><strong>{postFromProps.user.name}</strong></Link>
                <time className='flex justify-end h-fit'>{format(post.date)}</time>
            </div>
            <div className='bg-white m-2 border rounded-xl'>
                <h2 className='font-bold'>{post.title}</h2>
                <p>{post.text}</p>
                {post.image && <div className='w-fit h-fit'><img src={post.image} alt='' /></div>}
            </div>
            {postFromProps.user.id === userId && <div className='flex justify-end'>
                <div>
                    <button onClick={openEditPost}><AiOutlineEdit size='1rem' /></button>
                    <button onClick={openDeletePost}><AiOutlineDelete size='1rem' /></button>
                </div>
            </div>}
            <hr className='border-black' />
            <button className='p-2' onClick={openCreateComment}><FaRegComment size='1rem' /></button>
        </article>
        {isEditVisible && <EditPost postId={post.id} onUpdated={onPostUpdated} onClose={closeEditPost} />}
        {isDeleteVisible && <DeletePost postId={post.id} onDeleted={onPostDeleted} onClose={closeDeletePost} />}

        {createCommentVisible && <CreateComment postId={post.id} onCreated={handleCommentCreated} onClose={closeCreateComment} />}
    </>
}

export default Post