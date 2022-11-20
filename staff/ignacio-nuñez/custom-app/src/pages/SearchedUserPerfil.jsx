import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { format, render, cancel, register } from 'timeago.js'
import retrieveSearchedUser from '../logic/retrieve-searched-user'

function SearchedUserPerfil({onLogoutClick, onHomeClick, onSearchedUserClick, onSearchUser, onPerfilClick}){
const [posts, setPosts] = useState([])
useEffect(() => {
    try {
        retrieveSearchedUser(sessionStorage.userId, onSearchUser)
            .then(posts => setPosts(posts))
            .catch(error => alert(error.message))
    } catch (error) {
        alert(error.message)
    }
}, [onSearchUser])

const handlerLogoutClick = () => {
    onLogoutClick()
}


const handlerHomeClick = () =>{
    onHomeClick()
}

const onSearchUserClick = (searchedUserId) =>{
    onSearchedUserClick(searchedUserId)
}

const handlerPerfilClick = () => {
    onPerfilClick()
}

const searchedUser = posts.find(post=> post.userName)

return <main className="min-h-screen bg-slate-100">
        <NavBar onLogoutClick={handlerLogoutClick} onHomeClick={handlerHomeClick} onPerfilClick={handlerPerfilClick} onClickSearchedUser={onSearchUserClick}/>

<div className="flex items-center flex-col">
    <div className="flex items-center flex-col mt-28">
        <section>
            {searchedUser && <h2>{searchedUser.userName}</h2>}
            {posts.map(post => {
                return <article key={post.postId} className="border border-2 shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 border border-2 p-4 w-72 rounded-xl">
                    <div className="flex justify-between">
                        <h2>{post.userName}</h2>
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