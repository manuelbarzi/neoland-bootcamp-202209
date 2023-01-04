import createNotice from '../logic/createNotice'

export default function ({ onCreated, onClose }) {
    const submitCreateNotice = event => {
        event.preventDefault()

        const { title: { value: title }, body: { value: body } } = event.target

        try {
            createNotice(sessionStorage.token, title, body)
                .then(() => onCreated())
                .then(() => onClose())
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
                <label htmlFor="title">Title</label>
                <input className="text-black pl-2" type="text" name="title" id="title" placeholder="input a title"></input>
                <label htmlFor="body">Notice</label>
                <textarea className="text-black pl-2" type="text" name="body" id="body" placeholder="input the notice"></textarea>
                
                <button>Create</button>
            </form>
        </div>
    </div>
}
