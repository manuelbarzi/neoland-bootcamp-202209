import { useState, useEffect } from 'react'
import retrievePosts from '../logic/retrieve-posts'
import { format, render, cancel, register } from 'timeago.js'
import retrieveUserPost from '../logic/retrieve-user-post'
import { Link } from 'react-router-dom'


function VisiblePosts({ postChanged, editingPost, deletingPost }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            retrievePosts(sessionStorage.userId)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [postChanged])


    const onDeletePost = (postId, userId) => {
        const post = {postId, userId}
        deletingPost(post)
    }

    const onEditPost = (postId, postUserId) => {
        try {
            retrieveUserPost(postId, postUserId, sessionStorage.userId)
                .then(post => editingPost(post))
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <section>
        {posts.map(post => {
            return <article key={post.postId} className="shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 border-2 p-4 w-96 rounded-xl">
                <div className="flex justify-between">
                    <Link className='font-semibold' to={`/user/${post.userId}`}>{post.userName}</Link>
                    <p>{format(post.date)}</p>
                </div>
                <p>{post.content}</p>
                <div className='flex justify-end gap-2'>
                    {post.userId === sessionStorage.userId && <button className="self-end border-2 p-2 rounded-xl text-xs" onClick={() => onEditPost(post.postId, post.userId)}>Edit</button>}

                    {post.userId === sessionStorage.userId && <button className="self-end border-2 p-2 rounded-xl text-xs" onClick={() => onDeletePost(post.postId, post.userId)}>Delete</button>}
                </div>
            </article>
        })}
    </section>
}

export default VisiblePosts