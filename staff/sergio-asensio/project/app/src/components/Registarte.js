
import log from '../utils/coolog'
import registerUser from '../logic/registerUser'
// import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import Loginate from './Loginate'
const { FormatError, LengthError, ConflictError } = errors


export default function Registarte({ onClose }) {

    const { showAlert } = useContext(Context)

    const handleRegister = event => {
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target

        try {
            registerUser(name, email, password)
                .then(()=> onClose())
                
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof ConflictError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            showAlert(error.message, 'warn')

            event.target.password.value = ''
        }
    }
    return<div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="p-5 rounded-xl flex flex-col items-end bg-teal-600 dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button onClick={onClose}>-X-</button>
            <form className="flex flex-col gap-2" onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" id="name" placeholder=" input your name" />
                <label htmlFor="email">E-mail</label>
                <input name="email" type="email" id="email" placeholder=" input your e-mail" />
                <label htmlFor="password" >Password</label>
                <input name="password" type="password" id="password" placeholder=" input your password" />
                <button className="p-2 border rounded-xl">Register</button>
            </form>
        </div>
    </div>

}
