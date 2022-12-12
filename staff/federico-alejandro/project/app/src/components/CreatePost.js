import createPost from '../logic/createPost'
import Button from './Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdOutlineVisibility } from 'react-icons/md'


function CreatePost({ onCreated, onClose }) {
    const submitCreatePost = event => {
        event.preventDefault()

        const { 
            title: { value: title }, 
            text: { value: text }, 
            image: { value: image },
            visibility: { value: visibility }
        } = event.target

        try {

            createPost(sessionStorage.token, title, text, visibility, image)
                .then(() => onCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden' onClick={onClose}>
        <div className='p-5 rounded-xl flex flex-col items-end bg-white border-2 border-slate-600' onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size='1.5rem' onClick={onClose} className='cursor-pointer' />
            
            <form className='flex flex-col justify-start m-4 gap-2 p-4 border-2  rounded-xl' onSubmit={submitCreatePost}>
                <label className='font-bold' htmlFor='text'>Title</label>
                <input className='border-b border-black text-black rounded-xl' type='text' name='title' id='title' placeholder='input a title' />
                
                <label className='font-bold' htmlFor='text'>Text</label>
                <textarea className='border-b border-black text-black rounded-xl' type='text' name='text' id='text' placeholder='input a text'></textarea>
                
                <label className='font-bold' htmlFor='image'>Image</label>
                <input className='border-b border-black text-black rounded-xl' type='text' name='image' id='image' placeholder='input an image url' />
                
                <label htmlFor='visibility'><MdOutlineVisibility /></label>
                <select className='text-black' id='visibility' name='visibility'>
                    <option value='public'>public</option>
                    <option value='private'>private</option>
                </select>

                <Button>Create</Button>
            </form>
        </div>
    </div>
}
export default CreatePost