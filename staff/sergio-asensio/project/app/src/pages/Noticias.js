import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import CreateNotice from '../components/CreateNotice'
import UpdateNotice from '../components/UpdateNotice'
import DeleteNotice from '../components/DeleteNotice'
import retrieveNotices from '../logic/retrieveNotices'
import retrieveNotice from '../logic/retrieveNotice'
import retrieveUser from '../logic/retrieveUser'

import { errors } from 'com'
import Context from '../components/Context'
import { useContext } from 'react'
import extractSubFromToken from '../utils/extractSubFromToken'


const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Noticias() {
    log.info('Noticias -> render')

    const [createNoticeVisible, setCreateNoticeVisible] = useState(false)

    const [deleteNoticeVisible, setDeleteNoticeVisible] = useState(false)

    const [updateNoticeVisible, setUpdateNoticeVisible] = useState(false)
    const [notice, setNotice] = useState()
    const [user, setUser] = useState()

    const [notices, setNotices] = useState([])
    const { showAlert } = useContext(Context)

    useEffect(() => {
        try {
            Promise.all([retrieveUser(sessionStorage.token), retrieveNotices(sessionStorage.token)])
                .then(([user, notices]) => {
                    setUser(user)
                    setNotices(notices)
                })
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            showAlert(error.message, 'warn')
        else
            showAlert(error.message, 'fatal')
        }
    }, [])

    // const userRetrieve = () => {
    //     try {
    //         retrieveUser(sessionStorage.token)
    //             .then(user => {
    //                 setUser(user)
    //             })

    //             .catch(error => {
    //                 if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
    //                     showAlert(error.message, 'warn')
    //                 else if (error instanceof AuthError || error instanceof NotFoundError)
    //                     showAlert(error.message, 'error')
    //                 else
    //                     showAlert(error.message, 'fatal')
    //             })
    //     } catch (error) {
    //         if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
    //             showAlert(error.message, 'warn')
    //         else
    //             showAlert(error.message, 'fatal')
    //     }
    // }

    const noticesRetrieve = () => {
        try {
            retrieveNotices(sessionStorage.token)
                .then(notices => setNotices(notices))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const openCreateNotice = () => {
        setCreateNoticeVisible(true)
        console.log(user.role)
    }
    const closeCreateNotice = () => setCreateNoticeVisible(false)
    const handleNoticeCreated = () => noticesRetrieve()

    const openUpdateNotice = (noticeId) => {
        try {
            retrieveNotice(sessionStorage.token, noticeId)
                .then(notice => {
                    setNotice(notice)
                    setUpdateNoticeVisible(true)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const closeUpdateNotice = () => setUpdateNoticeVisible(false)
    const handleNoticeUpdated = () => {
        noticesRetrieve()
        setUpdateNoticeVisible(false)
    }

    const openDeleteNotice = (noticeId) => {
        try {
            retrieveNotice(sessionStorage.token, noticeId)
                .then(notice => {
                    setNotice(notice)
                    setDeleteNoticeVisible(true)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const closeDeleteNotice = () => setDeleteNoticeVisible(false)
    const handleNoticeDeleted = () => {
        noticesRetrieve()
        setDeleteNoticeVisible(false)
    }

    return <><header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
        <h1>Noticias</h1>
        {user?.role === 'admin' && <button onClick={() => openCreateNotice()}> + </button>}
        <button onClick={goHome} >HOME</button>
    </header>
        <div className="flex flex-col items-center gap-2 py-[5rem] h-full  bg-gray-100">
            {notices.map(notice => {
                return <article key={notice.id} className="border rounded-xl w-[50%] flex flex-col p-5 break-words  bg-green-50">
                    <p className='underline p-2'>{notice.title}</p>
                    <p>{notice.body}</p>
                    {user?.role === 'admin' && <div>
                        <button onClick={() => openUpdateNotice(notice.id)}>Editar</button>
                        <button onClick={() => openDeleteNotice(notice.id)}>Borrar</button>
                    </div>}
                </article>
            })}

        </div>
        {createNoticeVisible && <CreateNotice onCreated={handleNoticeCreated} onClose={closeCreateNotice} />}
        {updateNoticeVisible && <UpdateNotice notice={notice} onUpdated={handleNoticeUpdated} onClose={closeUpdateNotice} />}
        {deleteNoticeVisible && <DeleteNotice notice={notice} onDeleted={handleNoticeDeleted} onClose={closeDeleteNotice} />}

    </>
}

export default Noticias



