import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

const { FormatError, AuthError, LengthError, NotFoundError } = errors


export default function Loginate({onClose}) {
    log.info('Login -> render')

    const { login, showAlert } = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password)
                .then(token => login(token))
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

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }


    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="p-5 rounded-xl flex flex-col items-end bg-teal-600 dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button onClick={onClose}>-X-</button>
            <form className="flex flex-col gap-2" onSubmit={handleLogin}>
                <label htmlFor="email">E-mail</label>
                <input name="email" type="email" id="email" placeholder=" input your e-mail" />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" id="password" placeholder=" input your password" />
                <button className="p-2 border rounded-xl">Login</button>
            </form>
        </div>
     </div>
}
