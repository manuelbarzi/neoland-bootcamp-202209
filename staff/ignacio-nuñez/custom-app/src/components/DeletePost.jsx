import { useState, useEffect } from 'react'
import deletePost from '../logic/delete-post'

function DeletePost({ className, onDeletePostClose, onDeletePost, userPost }) {
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
    
        return () => document.body.style = ''
    })

    const handlerConfirmDeletePost = () => {
        try {
            deletePost(userPost.postId, userPost.userId, sessionStorage.userId)
                .then(() => onDeletePost())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handlerConfirmDeletePostClose = () => {
        onDeletePostClose()
    }


    return <div className="fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={handlerConfirmDeletePostClose}>
        <div onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-1/3 h-1/4 bg-white border-2 p-10 rounded-xl ${className ? className : ""}`}>
            <p className='font-semibold text-lg'>Are you sure that you want to delete this post?</p>
            <div className="mt-7 gap-3 flex items-center justify-between">
                <button className="bg-emerald-200 w-1/2 h-10 mt-2 rounded-lg" onClick={handlerConfirmDeletePostClose}>Cancel</button>
                <button onClick={handlerConfirmDeletePost} className="bg-emerald-200 w-1/2 h-10 mt-2 rounded-lg">Yes, Delete</button>
            </div>
        </div>
    </div>
}

export default DeletePost