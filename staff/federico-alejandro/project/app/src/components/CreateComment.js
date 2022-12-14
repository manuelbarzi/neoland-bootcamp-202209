import { errors } from 'com'
import { useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import createComment from '../logic/createComment'
import Context from '../components/Context'
import Button from './Button'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

function CreateComment({ onCreated, onClose, postId }) {
    const { showAlert } = useContext(Context)

    const submitCreateComment = event => {
        event.preventDefault()

        const { text: { value: text } } = event.target

        try {
            createComment(sessionStorage.token, text, postId)
                .then(() => onCreated())
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

    return <article className='bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden'>
        <div className='bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden' onClick={onClose}>
            <div className='p-5 rounded-xl flex flex-col items-end bg-white border-2 border-slate-600' onClick={event => event.stopPropagation()}>
                <AiOutlineCloseCircle size='1.5rem' onClick={onClose} className='cursor-pointer' />
                <form className='flex flex-col gap-2' onSubmit={submitCreateComment}>
                    <label className='font-bold' htmlFor='text'>Text</label>
                    <textarea className='text-black border-black rounded-md text-center' type='text' name='text' id='comment' placeholder='input a comment'></textarea>
                    <Button>Create</Button>
                </form>
            </div>
        </div>
    </article>
}
export default CreateComment