import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { format, render, cancel, register } from 'timeago.js'
import retrieveSearchedUserPosts from '../logic/retrieve-searched-user-posts'
import { useParams } from "react-router-dom"
import retrieveSearchedUser from '../logic/retrieve-searched-user'

function SearchedUserPerfil({ onLogoutClick, onHomeClick, onSearchedUserClick, onPerfilClick }) {
    const [posts, setPosts] = useState([])
    const [userName, setUserName] = useState()
    const { userId } = useParams()

    useEffect(() => {
        try {
            Promise.all([retrieveSearchedUserPosts(sessionStorage.userId, userId), retrieveSearchedUser(userId)])
                .then(([posts, userName]) => {
                    setPosts(posts)

                    setUserName(userName)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }, [userId])

    const handlerLogoutClick = () => {
        onLogoutClick()
    }

    const handlerHomeClick = () => {
        onHomeClick()
    }

    const onSearchUserClick = (searchedUser) => {
        onSearchedUserClick(searchedUser)
    }

    const handlerPerfilClick = () => {
        onPerfilClick()
    }

    return <main className="min-h-screen bg-slate-100">
        <NavBar
            onLogoutClick={handlerLogoutClick}
            onHomeClick={handlerHomeClick}
            onPerfilClick={handlerPerfilClick}
            onClickSearchedUser={onSearchUserClick} />

        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <div className="flex justify-center border-2 shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                    <h2 className="font-bold text-xl">{userName || 'Loading...'}</h2>
                </div>

                <section>
                    {posts.map(post => {
                        return <article key={post.postId} className="border-2 shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 p-4 w-96 rounded-xl">
                            <div className="flex justify-between">
                                <h2>{userName || 'Loading...'}</h2>
                                <p>{format(post.date)}</p>
                            </div>
                            <p>{post.content}</p>
                        </article>
                    })}
                </section>
            </div>
        </div>
    </main>
}

export default SearchedUserPerfil