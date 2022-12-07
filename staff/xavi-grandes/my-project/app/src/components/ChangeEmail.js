import log from '../utils/coolog'
import { IoCloseCircle } from 'react-icons/io5'
import updateUserEmail from '../logic/updateUserEmail'
import retrieveUser from '../logic/retrieveUser'
import { useEffect, useState } from 'react'

export default function ({onClose}) {

    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

        } catch (error) {
        }
    }, [])

    const handleUpdateUserEmail = event => {
        log.info('ChangeEmail -> handleUpdateUserEmail')
        
        event.preventDefault();

        // const newEmail = event.target.email.value
        const { email: { value: newEmail } } = event.target

        try {
            updateUserEmail(sessionStorage.token, newEmail)
                .then(() => {
                    alert('The user email has been changed successfully')
                    user.email = newEmail
                    onClose()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    };

    return <main className="absolute top-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.2)] flex justify-center items-center" onClick={onClose}>
        <div className="bg-white h-[25%] w-3/5 p-2 gap-2 border rounded-xl flex flex-col" onClick={event => event.stopPropagation()}>
            <i className='self-end'><IoCloseCircle size="1.3rem" onClick={onClose}/></i>
            <form className="flex flex-col items-center gap-2" onSubmit={handleUpdateUserEmail}>
                <label className="self-start ml-3 text-[#1b385b] font-bold" htmlFor="email">E-mail</label>
                <input className="border-b-2 border-black" name="email" type="email" id="email" placeholder="Inserta tu nuevo email" defaultValue={user?.email} />
                <button className="w-4/5 bg-[#1b385b] text-white border rounded-lg">Save</button>  
            </form>
        </div>
    </main>
}