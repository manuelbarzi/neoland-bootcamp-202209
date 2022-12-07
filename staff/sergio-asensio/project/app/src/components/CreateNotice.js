import createNotice from '../logic/createNotice'

export default function ({ onCreated, onClose }) {
    const submitCreateNotice = event => {
        event.preventDefault()

        const { title: { value: title }, body: { value: body } } = event.target

        try {
            createNotice(sessionStorage.token, title, body)
                .then(() => onCreated())
                .then(()=> onClose())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
        onClick={onClose}>
        <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button>
            <form className="flex flex-col gap-2" onSubmit={submitCreateNotice}>
                <label htmlFor="title">title</label>
                <input className="text-black pl-2" type="text" name="title" id="title" placeholder="input a title"></input>
                <label htmlFor="body">Notice</label>
                <textarea className="text-black pl-2" type="text" name="body" id="body" placeholder="input the notice"></textarea>
                
                <button>Create</button>
            </form>
        </div>
    </div>
}


// import createPost from '../logic/createPost'
// import Button from './Button'
// import { AiOutlineCloseCircle } from 'react-icons/ai'

// export default function ({ onCreated, onClose }) {
//     const submitCreatePost = event => {
//         event.preventDefault()

//         const { text: { value: text }, visibility: { value: visibility } } = event.target

//         try {
//             createPost(sessionStorage.token, text, visibility)
//                 .then(() => onCreated())
//                 .catch(error => alert(error.message))
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
//         onClick={onClose}
//     >
//         <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
//             <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />
//             <form className="flex flex-col gap-2" onSubmit={submitCreatePost}>
//                 <label htmlFor="text">Text</label>
//                 <textarea className="text-black" type="text" name="text" id="text" placeholder="input a text"></textarea>
//                 <label htmlFor="visibility">Visibility</label>
//                 <select className="text-black" id="visibility" name="visibility">
//                     <option value="public">public</option>
//                     <option value="private">private</option>
//                 </select>
//                 <Button>Create</Button>
//             </form>
//         </div>
//     </div>
// }