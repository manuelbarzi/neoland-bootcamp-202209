import log from '../utils/coolog'
import { IoCloseCircle } from 'react-icons/io5'
import updateUserPassword from '../logic/updateUserPasword'
import { useContext } from 'react'
import Context from '../components/Context';

export default function ({onClose}) {

    const { showAlert } = useContext(Context)

    const handleUpdateUserPassword = event => {
        log.info('Settings -> handleUpdateUserPassword')
        
        event.preventDefault()

    const {  password: { value: password }, newPassword: { value: newPassword } } = event.target
        
    try {
        updateUserPassword(sessionStorage.token, password, newPassword)
        .then(() => {
            // alert('Pasword has been changed successfully')
            showAlert('Password has been changed successfully', 'info')
            //Change with show alert
            onClose()
        })
        .catch(error => alert(error.message))

    } catch (error){
        alert(error.message)
    }

    }

    return <main className="absolute top-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.2)] flex justify-center items-center" onClick={onClose}>
        <div className="bg-white h-[33%] w-3/5 p-2 border rounded-xl flex flex-col" onClick={event => event.stopPropagation()}>
            <i className='self-end'><IoCloseCircle size="1.3rem" onClick={onClose}/></i>
            <form className="flex flex-col items-center gap-2" onSubmit={handleUpdateUserPassword}>
                <label className="self-start ml-3 text-[#1b385b] font-bold" htmlFor="password">Pasword</label>
                <input className="border-b-2 border-black" name="password" type="password" id="password" placeholder="Inserta tu password" />
                <label className="self-start ml-3 text-[#1b385b] font-bold" htmlFor="newPassword">New Pasword</label>
                <input className="border-b-2 border-black" name="newPassword" type="password" id="newPassword" placeholder="Inserta tu nuevo password"/>
                <button className="mt-2 w-4/5 bg-[#1b385b] text-white border rounded-lg">Save</button>  
            </form>
        </div>
    </main>
}