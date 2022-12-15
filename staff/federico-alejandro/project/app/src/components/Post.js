import { Link } from 'react-router-dom'
import extractSubFromToken from '../utils/extractSubFromToken'
import { useEffect, useState } from 'react'
import { format } from 'timeago.js'

import EditPost from '../components/EditPost'
import DeletePost from '../components/DeletePost'
import CreateComment from '../components/CreateComment'
import retrievePost from '../logic/retrievePost'

import { AiOutlineEdit, AiOutlineDelete, AiOutlineLock } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'


function Post({ post: postFromProps, onPostUpdated, onPostDeleted }) {
    const [post, setPost] = useState()
    const [isEditVisible, setEditVisible] = useState()
    const [isDeleteVisible, setDeleteVisible] = useState()

    const [comments, setComments] = useState()
    const [createCommentVisible, setCreateCommentVisible] = useState()

    useEffect(() => {
        setPost(postFromProps)
    }, [postFromProps])

    const userId = extractSubFromToken(sessionStorage.token)

    const openEditPost = () => setEditVisible(true)
    const closeEditPost = () => setEditVisible()

    const openDeletePost = () => setDeleteVisible(true)
    const closeDeletePost = () => setDeleteVisible()

    const openCreateComment = () => setCreateCommentVisible(true)
    const closeCreateComment = () => setCreateCommentVisible()

    const handleCommentCreated = () => {
        retrievePost(sessionStorage.token, post.id)
            .then(postFromApi => {
                setPost(postFromApi)
                setComments(comments)

                closeCreateComment()
            })
    }

    const onUpdatePost = () => {
        setEditVisible()
        onPostUpdated()
    }

    return <>
        <article key={post?.id} className=' bg-white rounded-xl w-[25%] flex flex-col p-[0.25rem]'>
            <div className='flex justify-between '><Link to={`/profile/${post?.user.id}`}><strong>{post?.user.name}</strong></Link>
                <time className='flex justify-end font-bold text-xs'>{format(post?.date)}</time>
            </div>
            <div className='bg-white m-2 border rounded-xl'>
                <h2 className='font-bold'>{post?.title}</h2>
                <p>{post?.text}</p>
                {post?.image && <div className='w-fit h-fit'><img src={post?.image} alt='' /></div>}
            </div>
            {post?.user.id === userId && <div className='flex justify-end'>
                <div className='flex self-end pb-0'>
                    <button onClick={openEditPost}><AiOutlineEdit size='1rem' /></button>
                    <button onClick={openDeletePost}><AiOutlineDelete size='1rem' /></button>
                    {post.visibility === 'private' && <p className='self-end'><AiOutlineLock /></p>}
                </div>
            </div>}
            <hr className='border-black' />
            <div>
                <button className='p-2' onClick={openCreateComment}><FaRegComment size='1rem' /></button>
            </div>
            {post?.chats.length ? post?.chats.map(chat => chat.comments.map(comment => {
                return <article key={comment.id}  className='bg-slate-100 m-2 border rounded-xl'>
                    <p>{comment?.user.name}</p>
                    <p>{comment?.text}</p>
                    <p>{format(comment?.date)}</p>
                </article>
            })
            ) : null}
        </article>
        {isEditVisible && <EditPost postId={post.id} onUpdated={onUpdatePost} onClose={closeEditPost} />}
        {isDeleteVisible && <DeletePost postId={post.id} onDeleted={onPostDeleted} onClose={closeDeletePost} />}

        {createCommentVisible && <CreateComment postId={post.id} onCreated={handleCommentCreated} onClose={closeCreateComment} />}
    </>
}

export default Post