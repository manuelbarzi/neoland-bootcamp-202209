import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { useContext } from 'react'
import Context from './Context'
import { errors } from 'com'
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import retrieveUser from '../logic/retrieveUser'



const { FormatError, AuthError, LengthError, NotFoundError } = errors


export default function UpdatePassword( { onClose }) {
    log.info('Login -> render')

    // const { login, showAlert, saveRole } = useContext(Context)
    const { login, showAlert } = useContext(Context)

    const handlePassword = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { password: { value: password } } = event.target

        // try {
        //     authenticateUser(email, password)
        //         .then(token => {
        //             login(token)

        //             // retrieveUser(token)
        //             //     .then(user => saveRole(user.role))
        //         })
        //         .catch(error => {
        //             if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
        //                 showAlert(error.message, 'warn')
        //             else if (error instanceof AuthError || error instanceof NotFoundError)
        //                 showAlert(error.message, 'error')
        //             else
        //                 showAlert(error.message, 'fatal')
        //         })
        // } catch (error) {
        //     if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
        //         showAlert(error.message, 'warn')
        //     else
        //         showAlert(error.message, 'fatal')

        //     event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        // }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="p-5 rounded-xl flex flex-col items-end bg-teal-600 dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button onClick={onClose}>-X-</button>
            <form className="flex flex-col gap-2" onSubmit={handlePassword}>
                <label htmlFor="old">Old Password</label>
                <input name="old" type="password" id="old" placeholder=" input your old password" />
                <label htmlFor="new">New Password</label>
                <input name="new" type="password" id="new" placeholder=" input your new password" />
                <input name="new" type="password" id="new" placeholder=" repeat the new password" />
                <button className="p-2 border rounded-xl">Edit</button>
            </form>
        </div>
    </div>
}
