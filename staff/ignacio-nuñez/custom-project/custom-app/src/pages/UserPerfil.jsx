import { useContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import CreatePost from "../components/CreatePost"
import UserPosts from "../components/UserPosts"
import EditPost from "../components/EditPost"
import DeletePost from "../components/DeletePost"
import { Context } from "../components/Context"

function UserPerfil() {
    const {  user } = useContext(Context)

    const [creatingPost, setCreatingPost] = useState(false)
    const [postChanged, setPostChanged] = useState()
    const [editingPost, setEditingPost] = useState(false)
    const [userPost, setUserPost] = useState()
    const [deletingPost, setDeletingPost] = useState(false)

    const userName = user && user.name

    const onCreatePost = () => {
        handlerClosePost()

        setPostChanged(Date.now())
    }

    const onEditPost = () => {
        handlerCloseEditingPost()

        setPostChanged(Date.now())
    }

    const onDeletePost = () => {
        handlerCloseDeletingPost()

        setPostChanged(Date.now())
    }

    const handlerCreatePostClick = () => {
        setCreatingPost(true)
    }

    const handlerClosePost = () => {
        setCreatingPost(false)
    }

    const handlerCloseEditingPost = () => {
        setEditingPost(false)
    }

    const handlerCloseDeletingPost = () => {
        setDeletingPost(false)
    }

    const postEditing = post => {
        setUserPost(post)

        setEditingPost(true)
    }

    const postDeleting = post => {
        setUserPost(post)

        setDeletingPost(true)
    }

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        {creatingPost && <div className="absolute w-full h-full bg-slate-200 opacity-60" onClick={handlerClosePost}></div>
        }
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <div className="border-2 z-10 shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                    <div onClick={handlerCreatePostClick} className="rounded-xl w-full h-full hover:bg-slate-200 bg-slate-100 block text-slate-500 cursor-pointer">
                        <span className="ml-2">Share your thoughts {userName}</span>
                    </div>
                </div>
                {creatingPost && <>
                    <CreatePost
                        className="inset-x-1/3 inset-y-1/4 absolute"
                        userInfo={user}
                        onCreatePostClose={handlerClosePost}
                        onNewPost={onCreatePost}
                    />
                </>}
                {editingPost && <>
                    <EditPost
                        className="inset-x-1/3 inset-y-1/4 absolute"
                        userInfo={user}
                        onEditPostClose={handlerCloseEditingPost}
                        onEditPost={onEditPost}
                        userPost={userPost}
                    />
                </>}
                {deletingPost && <>
                    <DeletePost
                        className="inset-x-1/3 inset-y-1/3 absolute"
                        onDeletePostClose={handlerCloseDeletingPost}
                        onDeletePost={onDeletePost}
                        userPost={userPost}
                    />
                </>}
                <UserPosts
                    postChanged={postChanged}
                    editingPost={postEditing}
                    deletingPost={postDeleting}
                />

            </div>
        </div>
    </main>
}

export default UserPerfil