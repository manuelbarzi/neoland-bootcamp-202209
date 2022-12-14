import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrieveLastNotice from '../logic/retrieveLastNotice'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import { Link } from 'react-router-dom'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [notice, setNotice] = useState()

    const { showAlert } = useContext(Context)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
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

        try {
            retrieveLastNotice(sessionStorage.token)
                .then(notice => setNotice(notice))
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

    return <div className="h-full  bg-white dark:bg-black text-black dark:text-white">
        {user && <Header userName={user.name} />}

        <div className='h-full p-8'>
            <Link to="/noticias"> <div className='h-1/4 border-4 border-solid rounded-md mb-4'>
                <h2 className=''>NOTICIAS</h2>
                <p>{notice?.title}</p>
                <p>{notice?.body}</p>
            </div></Link>

            <Link to="events"><div className='h-1/4 border-4 border-solid rounded-md mb-4'>
                <h2>12 Meses, 12 Actividades</h2>
            </div></Link>

            <div className='h-1/4 border-4 border-solid rounded-md'>
                <h2>RESERVA HORARIO</h2>
            </div>
        </div>
    </div>
}

export default Home