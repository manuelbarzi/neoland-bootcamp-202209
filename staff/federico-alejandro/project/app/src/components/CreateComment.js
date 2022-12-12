import createComment from '../logic/createComment'
import Button from './Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function CreateComment({ onCreated, onClose, postId }) {
    const submitCreateComment = event => {
        event.preventDefault()

        const { text: { value: text } } = event.target
        

        try {
            createComment(sessionStorage.token, text, postId)
                .then(() => onCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    
    return <div className='bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden' onClick={onClose}>
        <div className='p-5 rounded-xl flex flex-col items-end bg-white' onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size='1.5rem' onClick={onClose} className='cursor-pointer' />
            <form className='flex flex-col gap-2' onSubmit={submitCreateComment}>
                <label className='font-bold' htmlFor='text'>Text</label>
                <textarea className='text-black border-black resize-y rounded-md' type='text' name='text' id='text' placeholder='input a text'></textarea>
                <Button>Create</Button>
            </form>
        </div>
    </div>
}
export default CreateComment