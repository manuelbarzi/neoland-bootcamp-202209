import CreateEvent from '../components/CreateEvent'

export default function ({ onClose }) {

    const confirmInscription = () => {
        console.log('inscrito')
    }
   

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
    onClick={onClose}>
    <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
        <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button>
        <p>Are you sure to signUP at this event?</p>
        <div className="flex gap-2" >
            <button onClick={onClose}>Cancel</button>
            <button onClick={confirmInscription}>YES</button>
         </div>
    </div>
</div>
}