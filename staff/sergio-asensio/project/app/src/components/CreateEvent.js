import { useEffect } from 'react'
import createEvent from '../logic/createEvent'


export default function ({ closeCreate, month}) {
    const submitCreateEvent = event => {
        event.preventDefault()

        const {title: { value: title }, body: { value: body }, requeriment: { value: requeriment }, capacity: { value: capacity }, date: { value: date }, inscription: { value:inscription }  } = event.target
        
        try {
            createEvent(sessionStorage.token,month, title, body, requeriment, Number(capacity), Date(date), inscription)
                // .then(() => onCreated())
                .then(() => closeCreate())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
        >
        <div className="p-5 rounded-xl flex flex-col items-center bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button size="1.5rem" onClick={closeCreate} className="cursor-pointer"> -X-</button>
            <form className="flex flex-col gap-2" onSubmit={submitCreateEvent}>
                <label htmlFor="title">Title</label>
                <input className="text-black pl-2" type="text" name="title" id="title" placeholder="input a title"></input>
                
                <label htmlFor="body">Body</label>
                <textarea className="text-black pl-2" type="text" name="body" id="body" placeholder="input the notice"></textarea>
                
                <label htmlFor="requeriment">Requeriments</label>
                <input className="text-black pl-2" type="text" name="requeriment" id="requeriment" placeholder="input the requeriments"></input>
                
                <label htmlFor="capacity">Capacity</label>
                <input className="text-black pl-2" type="number" name="capacity" id="capacity" placeholder="input de capacity"></input>
                
                <label htmlFor="date">Date</label>
                <input className="text-black pl-2" type="date" name="date" id="date" placeholder="input the date"></input>
                
                <label htmlFor="inscription">Inscription</label>
                <input className="text-black pl-2" type="text" name="inscription" id="inscription" placeholder="iinscription"></input>
                

                <button>Create</button>
            </form>
        </div>
    </div>
}
