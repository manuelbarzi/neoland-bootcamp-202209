import log from '../utils/coolog'
import { AiOutlineLogout } from 'react-icons/ai'

export default function({ userName, onLoggedOut}) {
    log.info('Header -> render')

    const logout = () => {
        delete sessionStorage.userId

        onLoggedOut()
    }

    return <header className='fixed bg-[white] w-full h-[2rem] top-0 flex justify-center items-center gap-2'>
        <p>{userName}</p>

        <button onClick={logout}><AiOutlineLogout /> </button>
        </header>

}