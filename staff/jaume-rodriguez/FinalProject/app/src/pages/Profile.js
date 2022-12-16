import { useState, useEffect } from 'react'
import { format } from 'timeago.js'
import retrieveAUser from '../logic/retrieveAUser'
import retrievePostsFromUser from '../logic/retrievePostsFromUser'
import { useParams } from 'react-router-dom'

function Profile() {

    const [user, setUser] = useState()
    const [posts, setPosts] = useState([])
    const { targetUserId } = useParams()

    // TASKS REFRESH
    useEffect(() => {
        try {
            retrieveAUser(sessionStorage.token, targetUserId)
                .then((user) => setUser(user))
                .catch(error => alert(error.message))

            retrievePostsFromUser(sessionStorage.token, targetUserId)
                .then((posts) => setPosts(posts))
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    }, [targetUserId])

    return (
        <>
            {/* POSTS PANEL*/}
            <section className="flex z-1 justify-center place-content-start flex-wrap bg-slate-200 min-h-screen">
                <div className="flex flex-row justify-center content-center z-0 p-8 bg-sky-100 border-sky-900 border-b border-solid w-full h-16">
                    <span className="self-center font-semibold text-4xl text-sky-800">
                        {user ? user.name : 'home'} Profile
                    </span>
                </div>
                {/*POSTS*/}
                <div className="flex flex-col items-center m-4 gap-x-4">
                    <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                        <div className="flex flex-row w-full">
                            <span className="align-self-start text-lg text-black text-base font-normal">Tus posts</span>
                            <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                more_horiz
                            </h1>
                        </div>
                        <hr className="w-full mx-auto my-2 border-black" />
                    </section>
                    {/* POST*/}
                    {posts && <div className="flex flex-col items-center">
                        {posts.map(post =>
                            <article
                                key={post.id}
                                className="w-[21rem] p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-700 border-t border-b-4 border-x bg-sky-100">
                                <p className='pb-2'><strong>{user.name}</strong></p>
                                <p
                                    className="flex flex-col text-justify p-4 text-sm border-sky-700 border-t bg-sky-100 text-black text-[15px] font-normal py-4">{post.text}</p>
                                <div className="flex self-end w-full">
                                    <time className='self-end ml-auto px-2 text-slate-600'>{format(post.date)}</time>
                                </div>
                            </article>)}
                    </div>}
                </div>
            </section >
        </>
    );

}

export default Profile