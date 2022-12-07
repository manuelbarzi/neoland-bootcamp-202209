import log from '../utils/coolog'
import { useEffect, useState} from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import { Link, useNavigate } from 'react-router-dom'
import CreateNotice from '../components/CreateNotice'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Noticias() {
    log.info('Noticias -> render')

    const [createNoticeVisible, setCreateNoticeVisible] = useState(false)


    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const openCreateNotice = () => setCreateNoticeVisible(true)

    const closeCreateNotice = () => setCreateNoticeVisible(false)

    const handleNoticeCreated = () => {
        console.log('vamooos')
    }


    return <><header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
    <h1>Noticias</h1>
    <button onClick={()=> openCreateNotice()}> + </button>
    <button onClick={goHome} >HOME</button>
    </header>
    <main className='p-8'>
        <div className='w-3/4 border-4 border-solid rounded-md'>
            <h2>Pabellon Cerrado</h2>
            <p>dfhlkasjdfñmdsfjñildsjfmijñlsfjkvlñasfkddñlv</p>
        </div>

        <div className='w-3/4 border-4 border-solid rounded-md'>
            <h2>Inscripciones Barranco Valdoria</h2>
            <p>dfhlkasjdfñmdsfjñildsjfmijñlsfjkvlñasfkddñlv</p>
        </div>

{createNoticeVisible && <CreateNotice onCreated={handleNoticeCreated} onClose={closeCreateNotice} />}

{/* {postIdToEdit && <EditPost postId={postIdToEdit} onUpdated={handlePostUpdated} onClose={closeEditPost} />} */}
{/* {postIdToDelete && <DeletePost postId={postIdToDelete} onDeleted={handlePostDeleted} onClose={closeDeletePost} />} */}
    </main>
</>
}

export default Noticias