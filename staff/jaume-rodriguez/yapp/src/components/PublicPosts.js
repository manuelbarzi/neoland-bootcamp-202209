import { useState, useEffect } from 'react'
import Post from './Post'
import retrievePosts from '../logic/retrievePosts'
import createPost from '../logic/createPost'

function Posts() {

    const [posts, setPosts] = useState([])

    // TASKS REFRESH
    useEffect(() => {
        handleRefreshPosts()
    }, [])

    const handleRefreshPosts = () => {
        try {
            retrievePosts(window.userId, (error, posts) => {
                if (error) {
                    alert(error.message)
                    return
                }
                setPosts(posts)
            })
        } catch (error) {
        }
    }

    // POSTS CREATION
    const handleCreatePost = (visibility) => {
        try {
            createPost(window.userId, visibility, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                handleRefreshPosts()
            })

        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            {/* POSTS PANEL*/}
            <section className="flex z-1 w-full justify-center flex-wrap">
                <div className="flex flex-row justify-center content-center z-0 p-8 bg-sky-100 border-sky-900 border-b border-solid w-full h-16">
                    <span className="self-center font-semibold text-4xl text-sky-800">
                        Community Posts
                    </span>
                </div>
                {/*POSTS*/}
                <div className="flex flex-col justify-center m-4 gap-x-4">
                    {/* POST*/}
                    {posts.map(post => post.visibility === 'public' ?
                        // COMPONENTE POST
                        <Post
                            key={post.id}
                            post={post}
                            onUpdatePostStatus={handleRefreshPosts}
                            onDeletePost={handleRefreshPosts} /> : null)}
                    <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                        <div className="flex flex-row w-full">
                            <span className="align-self-start text-lg text-black text-base font-normal">Público</span>
                            <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                more_horiz
                            </h1>
                        </div>
                        <hr className="w-full mx-auto my-2 border-black" />
                        <div
                            className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-800 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                            onClick={() => { handleCreatePost('public') }}>
                            <span
                                className="material-symbols-outlined text-black">
                                add
                            </span>
                            <span className="align-self-start text-medium text-black font-normal">Add new post</span>
                        </div>
                    </section>
                </div>
            </section >
        </>
    );

}

export default Posts