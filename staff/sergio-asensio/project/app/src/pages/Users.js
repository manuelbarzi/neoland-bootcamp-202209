import {  Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { errors } from 'com'
import retrieveUser from '../logic/retrieveUser'
import Context from '../components/Context'
import { useContext } from 'react'
import logo from '../img/logo.jpg'
import retrieveUsers from '../logic/retrieveUsers'
import UpdateUserRole from '../components/UpdateUserRole'
import { MdEdit } from 'react-icons/md'
import { HiOutlineUser } from 'react-icons/hi'


const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Users() {
    const { showAlert } = useContext(Context)

    const [user, setUser] = useState()
    const [users, setUsers] = useState([])
    const [userToChange, setUserToChange] = useState()
    useEffect(() => {
        userRetrieve()
        usersRetrieve()
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

    const usersRetrieve = () => {
        try {
            retrieveUsers(sessionStorage.token)
                .then(users => {
                    setUsers(users)
                })
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError)
                        showAlert(error.message, 'error')
                    else if (error instanceof NotFoundError) {
                        setUsers()
                    } else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }
    const handleEditRole = (userToChange) => setUserToChange(userToChange)
    const onUpdated = () => {
        setUserToChange()
        usersRetrieve()
    }

    return <main className="h-full bg-slate-100">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
            <Link to="/"><img src={logo} className='w-20 h-20 cursor-pointer' /></Link>
            <h1>USERS</h1>
            <div className='flex items-center gap-1'>
                <HiOutlineUser />
                <p>{user?.name}</p>
            </div>

        </header>
        <table className='m-10 '>
            <tr>
                <th>Nombre</th>
                <th>E-mail</th>
                <th>Role</th>
            </tr>
            {users.map(userToChange => {
                return <tr key={userToChange.id} >
                    <td>{userToChange.name}</td>
                    <td>{userToChange.email}</td>
                    <td>{userToChange.role}</td>
                    {user.role === 'admin' && <button onClick={() => handleEditRole(userToChange)} className='ml-2 border-2 border-black'><MdEdit /></button>}
                </tr>
            })}

        </table>
        {userToChange && <UpdateUserRole userToChange={userToChange} onClose={() => setUserToChange()} onUpdated={onUpdated} />}

    </main>

}

export default Users
