import { useState, useEffect } from 'react'
import { format } from 'timeago.js'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import retrieveAUser from '../logic/retrieveAUser'
import retrievePostsFromUser from '../logic/retrievePostsFromUser'
import buttonBack from '../img/icon-back.png';
import buttonHome from '../img/icon-home.png';
import buttonCreatePost from '../img/button-create-post.png';

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
            <section className="min-h-screen flex flex-col bg-[#191919]">
                <div className="relative flex flex-grow font-alata h-full flex-col justify-center items-center bg-[url('/src/img/bg-settings.jpg')] bg-no-repeat bg-center">
                    {/*POSTS*/}
                    <div className="flex flex-col justify-center gap-[2rem]">
                        <header className='text-white flex flex-row items-start justify-center'>
                            <Link to="/chat">
                                <img
                                    className='cursor-pointer absolute -ml-[3rem] mt-[0.9rem]'
                                    src={buttonBack}
                                    alt="home" />
                            </Link>
                            <span className=' text-orange-200 text-[2rem]'>{user?.name}</span>
                        </header>
                        {/* POST*/}
                        {posts &&
                            <section className="flex flex-col h-[27rem] ml-[1.3rem] bg-inherit justify-start items-center overflow-y-scroll scrollbar overscroll-contain ">
                                {posts.map(post =>
                                    <article
                                        key={post.id}
                                        className="h-[27rem] w-[21.813rem] p-4 flex justify-start flex-col mb-4 bg-inherit text-white">
                                        <span
                                            className='-mt-2 pb-2 text-orange-200'>{user.name}
                                        </span>
                                        <p
                                            className="flex flex-col text-justify p-4 text-sm border-black rounded border-t bg-[#2d2b2b] text-gray-300 font-normal py-4 mb-2">{post.text}
                                        </p>
                                        <div className="flex">
                                            <time className='self-end ml-auto px-2 text-sm text-gray-400'>
                                                {format(post.date)}
                                            </time>
                                        </div>
                                    </article>)}
                            </section>}
                        <div className='flex flex-col items-center mt-[1rem]'>
                            <Link to="/">
                                <img
                                    className='cursor-pointer -ml-[1rem] absolute z-10'
                                    src={buttonHome}
                                    alt="buttonHome" />
                            </Link>
                            <img
                                className='opacity-0'
                                src={buttonCreatePost}
                                alt="buttonCreatePost"
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Profile