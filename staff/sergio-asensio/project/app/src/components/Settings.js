import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import retrieveUser from '../logic/retrieveUser'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
// import { AiOutlineLogout } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function Settings() {

    const switchMode = () => document.querySelector('html').classList.toggle('dark')

    const { showAlert } = useContext(Context)

    const { logout } = useContext(Context)

    const navigate = useNavigate()

    const [user, setUser] = useState()

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
    }, [])

    return <div className='flex justify-end bg-slate-100'>
        <div className=" flex flex-col w-40  bg-green-50 p-2 rounded-b-xl">
            <button onClick={() => navigate('/users')} className='border-2 border-black'>Usuarios</button>
            <button onClick={() => navigate('/profile')} className='border-2 border-black mt-1'>Profile</button>
            <button onClick={logout} className='border-2 border-black mt-1'>Logout</button>
        </div>
    </div>
}

// <button onClick={logout}><AiOutlineLogout /></button>
// <button onClick={switchMode}><IoInvertModeOutline /></button>