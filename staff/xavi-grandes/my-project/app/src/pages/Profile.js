import { useContext, useState, useEffect } from 'react'
import { errors } from 'com'
import log from '../utils/coolog'
import Header from '../components/Header'
import Context from '../components/Context';
import { GrNext } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { IoExit } from "react-icons/io5";
import retrieveUser from '../logic/retrieveUser'
import ChangeEmail from '../components/ChangeEmail';
import ChangePassword from '../components/ChangePassword';
import profile from '../Images/profile.png'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function () {
    log.info('Profile -> render')

    const { logout } = useContext(Context)
    const [user, setUser] = useState({email:'default@email.com'})
    const { showAlert } = useContext(Context)

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

    const [show, setShow] = useState('close')
    const openUpdateEmail = () => {
    
        setShow(show === 'close'? 'open': 'close')
    }

    const [openPass, setOpenPass] = useState('close')
    const openUpdatePassword = () => {
    
        setOpenPass(openPass === 'close'? 'open': 'close')
    }

    return <>
        <Header />
        <main className="mt-[3rem] flex flex-col items-center gap-4">
            <h2 className='mt-2 text-2xl'>Profile</h2>
            <img className='h-[5rem]' src={profile} alt="logo-web"/>
            <p className='bg-green-200 p-2'>{user && user.name}</p>
            <hr className="bg-black w-4/5" />
            <button className='w-4/5 h-10 flex justify-between items-center' onClick={openUpdateEmail}><p>Cambiar email</p><GrNext/></button>
            <hr className="bg-black w-4/5" />
            <button className='w-4/5 h-10 flex justify-between items-center' onClick={openUpdatePassword}><p>Cambiar contraseña</p><GrNext/></button>
            <hr className="bg-black w-4/5" />
            <button className='w-4/5 h-10 flex justify-between items-center' onClick={logout}><p>Cerrar session</p><IoExit size="1.3rem"/></button>
            <button className='w-4/5 h-10 flex justify-between items-center'><p>Borrar cuenta</p><MdDelete size="1.3rem"/></button>
        </main>
        { show === 'open' && <ChangeEmail onClose={openUpdateEmail}/>}
        { openPass === 'open' && <ChangePassword onClose={openUpdatePassword}/>}
    </>
}