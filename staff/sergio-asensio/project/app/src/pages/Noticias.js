import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import CreateNotice from '../components/CreateNotice'
import retrieveNotices from '../logic/retrieveNotices'
import { errors } from 'com'
import Context from '../components/Context'
import { useContext } from 'react'


const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Noticias() {
    log.info('Noticias -> render')

    const [createNoticeVisible, setCreateNoticeVisible] = useState(false)
    const [notices, setNotices] = useState([])
    const { showAlert } = useContext(Context)

    useEffect(() => {
        noticesRetrieve()
    }, [])

    const noticesRetrieve =() =>{
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

    const openCreateNotice = () => setCreateNoticeVisible(true)

    const closeCreateNotice = () => setCreateNoticeVisible(false)

    const handleNoticeCreated = () =>  noticesRetrieve()
    

    return <><header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
        <h1>Noticias</h1>
        <button onClick={() => openCreateNotice()}> + </button>
        <button onClick={goHome} >HOME</button>
    </header>
        <div className="flex flex-col items-center gap-2 py-[2rem]">
            {notices.map(notice => {
               return <article key={notice.id} className="border rounded-xl w-[50%] flex flex-col p-5">
                <p>{notice.title}</p>
                <p>{notice.body}</p>
            </article>
            })}
        </div>
        {createNoticeVisible && <CreateNotice onCreated={handleNoticeCreated} onClose={closeCreateNotice} />}
    </>
}

export default Noticias




// {/* <main className='p-8'>
// <div className='w-3/4 border-4 border-solid rounded-md'>
//     <h2>Pabellon Cerrado</h2>
//     <p>dfhlkasjdfñmdsfjñildsjfmijñlsfjkvlñasfkddñlv</p>
// </div>

// {createNoticeVisible && <CreateNotice onCreated={handleNoticeCreated} onClose={closeCreateNotice} />}

// {/* {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />} */}
// {/* {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />} */}

// </main> */}