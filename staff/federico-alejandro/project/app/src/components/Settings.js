import { useContext, useState } from 'react'
import Context from './Context'
import { errors } from 'com'
import updateEmail from '../logic/updateEmail'
import updatePassword from '../logic/updatePassword'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Button from './Button'

const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Settings({onUpdated, onClose}) {

    //const [visibility, setVisibility] = useState()
    // const [email, setEmail] = useState()
    const { showAlert } = useContext(Context)



    const submitUpdateEmail = event => {
        event.preventDefault()

        const { email: { value: email } } = event.target

        try {
            updateEmail(sessionStorage.token, email)
                .then(() => onUpdated())
                .then(() => onClose())
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
    const submitUpdatePassword = event => {
        event.preventDefault()

        const { password: { value: password } } = event.target

        try {
            updatePassword(sessionStorage.token, password)
                .then(() => onUpdated())
                .then(() => onClose())
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

            event.target.password.value = ''
        }
    }

    return <div className='bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden z-10' onClick={onClose}>
        <div className='p-5 rounded-xl flex flex-col items-end bg-white border-2 border-slate-600 shadow-inner shadow-slate-600' onClick={event => event.stopPropagation()}>
        <AiOutlineCloseCircle size='1rem' onClick={onClose} className='cursor-pointer' />
            <form className='flex flex-col justify-start m-4 gap-4' >
                <div className='flex flex-row gap-4  items-center justify-start'>
                    <label htmlFor='email' >E-mail</label>
                    <input name='email' type='email' id='email' placeholder='  input your e-mail' className='border-b border-black text-black text-center rounded-xl ml-2.5' />
                    <Button onSubmit={submitUpdateEmail} className='text-white border-green-400 rounded-xl'>Save</Button>
                </div>
                <div className='flex flex-row gap-2 items-center justify-start'>
                    <label htmlFor='password'  >Password</label>
                    <input name='password' type='password' id='password' placeholder='  input your a password' className='border-b border-black text-black rounded-xl' />
                    <Button onSubmit={submitUpdatePassword} className='ml-1.5 text-white border-green-400 rounded-xl'>Save</Button>
                </div>
            </form>
        </div>
    </div>
}
export default Settings