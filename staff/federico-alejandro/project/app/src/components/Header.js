import log from '../utils/coolog'
import Context from './Context'
import { useContext, useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import { errors } from 'com'

import { AiOutlineLogout } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function Header() {
    log.info('Header -> render')

    const { logout, showAlert } = useContext(Context)
    const [user, setUser] = useState()

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

    return <header className="fixed w-full h-[2rem] flex justify-between items-center gap-2 bg-slate-200 dark:bg-black text-black dark:text-white">
        {user && <p className='font-bold text-black mx-1.5'>{user.name}</p>}
        <div>
            <button onClick={logout}><AiOutlineLogout /></button>
            <button onClick={switchMode}><IoInvertModeOutline /></button>
        </div>
    </header>
}