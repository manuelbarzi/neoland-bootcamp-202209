import { useState, useEffect } from 'react'
import { format, render, cancel, register } from 'timeago.js'
import retrievePostsPerfil from '../logic/retrieve-posts-perfil'
import retrieveUserPost from '../logic/retrieve-user-post'
import extractSubFromToken from '../utils/extractSubFromToken'

function UserPosts({ postChanged, editingPost, deletingPost }) {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [lastPageRequested, setLastPageRequested] = useState(1)

    const userId = extractSubFromToken(sessionStorage.token)

    const scrollHandler = () => {
        let pageCalculated

        if (window.scrollY === 0) {
            pageCalculated = 1
        } else if (window.scrollY > 50 && window.scrollY < 500) {
            pageCalculated = 2
        } else {
            pageCalculated = Math.floor(window.scrollY / 500) + 1
        }

        setPage(pageCalculated)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])


    useEffect(() => {
        if (lastPageRequested < page) {
            try {
                retrievePostsPerfil(sessionStorage.token, page)
                    .then(postsFromLogic => {
                        setPosts((currentPosts) => {

                            const copyOfCurrentPosts = [...currentPosts]

                            copyOfCurrentPosts.push(...postsFromLogic)

                            return copyOfCurrentPosts
                        })

                        setLastPageRequested(page)
                    })
                    .catch(error => alert(error.message))
            } catch (error) {
                alert(error.message)
            }
        }
    }, [page])

    useEffect(() => {
        try {
            retrievePostsPerfil(sessionStorage.token, 1, (6 * page))
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [postChanged])


    const onDeletePost = (postId, userId) => {
        const post = { postId, userId }
        deletingPost(post)
    }

    const onEditPost = (postId, postUserId) => {
        try {
            retrieveUserPost(postId, postUserId, sessionStorage.token)
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
            return <article key={post.id} className="shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 border-2 p-4 w-96 rounded-xl">
                <div className="z-10 flex justify-between">
                    <h2 className='font-semibold'>{post.user.name}</h2>
                    <p>{format(post.date)}</p>
                </div>
                <p>{post.text}</p>
                <div className='z-10 flex justify-end gap-2'>
                    {post.user.id === userId && <button className="self-end border-2 p-2 rounded-xl text-xs" onClick={() => onEditPost(post.id, post.user.id)}>Edit</button>}

                    {post.user.id === userId && <button className="self-end border-2 p-2 rounded-xl text-xs" onClick={() => onDeletePost(post.id, post.user.id)}>Delete</button>}
                </div>
            </article>
        })}
    </section>
}

export default UserPosts