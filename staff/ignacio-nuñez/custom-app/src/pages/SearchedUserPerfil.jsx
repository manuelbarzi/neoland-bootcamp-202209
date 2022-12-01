import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { format, render, cancel, register } from 'timeago.js'
import retrieveSearchedUserPosts from '../logic/retrieve-searched-user-posts'
import { useParams, useNavigate } from "react-router-dom"
import retrieveSearchedUser from '../logic/retrieve-searched-user'
import extractSubFromToken from '../utils/extractSubFromToken'

function SearchedUserPerfil() {
    const [posts, setPosts] = useState([])
    const [userName, setUserName] = useState()
    const [page, setPage] = useState(1)
    const [lastPageRequested, setLastPageRequested] = useState(0)

    const { targetUserId } = useParams()
    const navigate = useNavigate()

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
        const userId = extractSubFromToken(sessionStorage.token)
        if (userId === targetUserId) {
            navigate('/perfil')

            return
        }
        if (lastPageRequested < page) {
            try {
                Promise.all([retrieveSearchedUserPosts(sessionStorage.token, targetUserId, page), retrieveSearchedUser(targetUserId, sessionStorage.token)])
                    .then(([postsFromLogic, userName]) => {
                        setUserName(userName)
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
            Promise.all([retrieveSearchedUserPosts(sessionStorage.token, targetUserId, page), retrieveSearchedUser(targetUserId, sessionStorage.token)])
            .then(([posts, userName]) => {
                setUserName(userName)
                setPosts(posts)
                setPage(1)
                setLastPageRequested(0)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
}, [targetUserId])


    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />

        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <div className="flex justify-center border-2 shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                    <h2 className="font-bold text-xl">{userName || 'Loading...'}</h2>
                </div>

                <section>
                    {posts.map(post => {
                        return <article key={post.id} className="border-2 shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 p-4 w-96 rounded-xl">
                            <div className="flex justify-between">
                                <h2 className='font-semibold'>{userName || 'Loading...'}</h2>
                                <p>{format(post.date)}</p>
                            </div>
                            <p>{post.text}</p>
                        </article>
                    })}
                </section>
            </div>
        </div>
    </main>
}

export default SearchedUserPerfil