import { IoCloseCircle } from 'react-icons/io5'
export default function ({onClose}) {

    return <main className="absolute top-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.2)] flex justify-center items-center" onClick={onClose}>
        <div className="bg-white h-[25%] w-3/5 p-2 gap-2 border rounded-xl flex flex-col" onClick={event => event.stopPropagation()}>
            <i className='self-end'><IoCloseCircle size="1.3rem" onClick={onClose}/></i>
            <form className="flex flex-col items-center gap-2">
                <label className="self-start ml-3" htmlFor="email">Pasword</label>
                <input className="border-b-2 border-black" name="email" type="email" id="email" placeholder="Insera tu nuevo email" defaultValue={'user.password'} />
                <button className="w-4/5 bg-red-400 border rounded-lg">Save</button>  
            </form>
        </div>
    </main>
}