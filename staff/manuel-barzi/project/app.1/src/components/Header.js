import log from '../utils/coolog'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'
import Context from './Context'
import { useContext } from 'react'
import retrieveUser from '../logic/retrieveUser'
import { errors } from 'com'
import { useEffect, useState } from 'react'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function Header({ userName }) {
    log.info('Header -> render')
    
    const [user, setUser] = useState()

    const { logout, showAlert } = useContext(Context)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
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

    const switchMode = () => document.querySelector('html').classList.toggle('dark')

    return <header className="fixed bg-[white] w-full h-[2rem] top-0 flex justify-center items-center gap-2 bg-white dark:bg-black text-black dark:text-white">
        {user && <p>{user.name}</p>}

        <button onClick={logout}><AiOutlineLogout /></button>

        <button onClick={switchMode}><IoInvertModeOutline /></button>
    </header>
}