import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { errors } from 'com'
import retrieveUser from '../logic/retrieveUser'
import Context from '../components/Context'
import { useContext } from 'react'
import logo from '../img/logo.jpg'
import { MdEdit } from 'react-icons/md'
import { HiOutlineUser } from 'react-icons/hi'
import UpdateName from '../components/UpdateName'
import UpdateEmail from '../components/UpdateEmail'
import UpdatePassword from '../components/UpdatePassword'
import DeleteCount from '../components/DeleteCount'





const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Profile() {
    const { showAlert } = useContext(Context)

    const [user, setUser] = useState()
    const [editName, setEditName] = useState()
    const [editEmail, setEditEmail] = useState()
    const [editPassword, setEditPassword] = useState()
    const [deleteCount, setDeleteCount] = useState()



    useEffect(() => {
        userRetrieve()
    }, [])

    const userRetrieve = () => {
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
    }

    return <main className="h-full bg-slate-100">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
            <Link to="/"><img src={logo} className='w-20 h-20 cursor-pointer' /></Link>
            <h1>PROFILE</h1>
            <div className='flex items-center gap-1'>
                <HiOutlineUser />
                <p>{user?.name}</p>
            </div>

        </header>
        <body className='m-10'>
            <div>
                <p>{user?.name}</p>
                <button onClick={() => setEditName('true')}><MdEdit /></button>
            </div>
            <div>
                <p>{user?.email}</p>
                <button onClick={() => setEditEmail('true')}><MdEdit /></button>
            </div>
            <div>
                <button onClick={() => setEditPassword('true')} className='border border-solid border-black'>New Password</button>
            </div>
                <button onClick={() => setDeleteCount('true')} className='underline'>Eliminar cuenta</button>
        </body>

        {editName && <UpdateName onClose={() => setEditName()}/>}
        {editEmail && <UpdateEmail onClose={() => setEditEmail()}/>}
        {editPassword && <UpdatePassword onClose={() => setEditPassword()}/>}
        {deleteCount && <DeleteCount onClose={() => setDeleteCount()}/>}


        


    </main>

}

export default Profile
