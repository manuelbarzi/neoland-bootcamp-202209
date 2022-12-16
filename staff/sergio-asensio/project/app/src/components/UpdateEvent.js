import updateEvent from '../logic/updateEvent'
import getMonthNumberByName from '../utils/getMonthNumberByName'
import { useParams } from 'react-router-dom'

export default function ({ onUpdated, onClose, event }) {
    const { monthName } = useParams()

    const submitUpdateEvent = e => {
        e.preventDefault()

        const {title: { value: title }, body: { value: body }, requirement: { value: requirement }, capacity: { value: capacity }, date: { value: date }, inscription: { value:inscription }, image: {value: image} } = e.target
        
        const _date = new Date(date)

        if (_date.getMonth() !== getMonthNumberByName(monthName) - 1) {
            alert(`please, choose a date that is inside month`)

            return
        }

        try {
            updateEvent(sessionStorage.token, event.id, title, body, requirement, Number(capacity), _date, inscription, image)
                .then(() => onUpdated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }



    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
        >
        <div className="p-5 rounded-xl flex flex-col items-center bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button>
            <form className="flex flex-col gap-2" onSubmit={submitUpdateEvent}>
                <label htmlFor="title">Title</label>
                <input className="text-black pl-2" type="text" name="title" id="title" defaultValue={event.title}></input>
                
                <label htmlFor="body">Body</label>
                <textarea className="text-black pl-2" type="text" name="body" id="body" defaultValue={event.body}></textarea>
                
                <label htmlFor="requirement">Requirements</label>
                <input className="text-black pl-2" type="text" name="requirement" id="requirement" defaultValue={event.requirement}></input>
                
                <label htmlFor="capacity">Capacity</label>
                <input className="text-black pl-2" type="number" name="capacity" id="capacity" defaultValue={event.capacity}></input>
                
                <label htmlFor="date">Date</label>
                <input className="text-black pl-2" type="date" name="date" id="date" defaultValue={event.date}></input>
                
                <label htmlFor="inscription">Inscription</label>                
                <select className="text-black" id="iscription" name="inscription">
                    <option value="close">close</option>
                    <option value="open">open</option>
                </select>

                <label htmlFor="image">Imagen</label>
                <input className="text-black pl-2" type="text" name="image" id="image" defaultValue={event.image}></input>
                
                <button>Update</button>
            </form>
        </div>
    </div>
}
