import { useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from "./Context"

function NavBar() {
    const navigate = useNavigate()
    const { handleLogout, user} = useContext(Context)

    const userName = user && user.name

    const handlerLogoutClick = () => {
        sessionStorage.clear()
        handleLogout()

        navigate('/login')
    }

    return <header className="z-20 fixed w-full h-20 bg-teal-300 grid grid-cols-12">
        <nav className="flex items-center justify-between p-4 h-20 col-start-1 col-end-13 text-2xl">
            <div className="z-10 flex gap-4">
                <Link to={'/'}>Home</Link>
            </div>
            <div className="z-10 flex gap-4">
                <Link to={'/user/profile'}>{userName || 'Loading...'}</Link>
                <button onClick={handlerLogoutClick}>Logout</button>
            </div>
        </nav>
    </header>
}

export default NavBar