import updateNotice from '../logic/updateNotice'

export default function ({ onUpdated, onClose, notice }) {
    
    const submitUpdateNotice = event => {
        event.preventDefault()

        const { title: { value: title }, body: { value: body } } = event.target

        try {
            updateNotice(sessionStorage.token, notice.id, title, body)
            .then (()=> onUpdated())
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
        onClick={onClose}>
        <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button>
            <form className="flex flex-col gap-2" onSubmit={submitUpdateNotice}>
                <label htmlFor="title">New-Title</label>
                <input className="text-black pl-2" type="text" name="title" id="title" placeholder="input a title" defaultValue={notice.title}></input>
                <label htmlFor="body">Updade-Notice</label>
                <textarea className="text-black pl-2" type="text" name="body" id="body" placeholder="input the notice" defaultValue={notice.body}></textarea>
                
                <button>Update</button>
            </form>
        </div>
    </div>
}