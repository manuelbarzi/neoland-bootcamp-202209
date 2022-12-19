import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import retrieveUser from '../logic/retrieveUser'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function Settings(){

    const { showAlert } = useContext(Context)

    const navigate = useNavigate()

    const [user, setUser] =useState()

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
     
    return <div className=" bg-slate-200">
        
        {user?.role === 'admin' && <div><button onClick={() => navigate('/users')}>Usuarios</button></div>} 
        </div>
}