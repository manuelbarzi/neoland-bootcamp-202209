import log from '../utils/coolog'
import { AiOutlineLogout } from 'react-icons/ai'
// import { useNavigate } from 'react-router-dom'

export default function ({ userName, onLoggedOut }) {
    log.info('Header -> render')

    // const navigate = useNavigate()

    const logout = () => {
        delete sessionStorage.userId

        // navigate('/login')
        onLoggedOut()
    }

    return <header className="fixed bg-[white] w-full h-[2rem] top-0 flex justify-center items-center gap-2">
        <p>{userName}</p>

        <button onClick={logout}><AiOutlineLogout /></button>
    </header>
}