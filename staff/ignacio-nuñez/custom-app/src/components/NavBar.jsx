import retrieveUser from "../logic/retrieve-user"
import { useEffect, useState } from "react"
import Search from "./Search"
import SearchUsersResults from "./SearchUsersResults"
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [searchedUsers, setSearchedUsers] = useState()

    const userName = user && user.name

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.userId)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handlerLogoutClick = () => {
        sessionStorage.clear()
        setUser()

        navigate('/login')
    }

    const handlerUsersFounded = usersFounded => setSearchedUsers(usersFounded)

    return <header className="fixed w-full h-20 bg-teal-300 grid grid-cols-12">
        <nav className="flex items-center justify-between p-4 h-20 col-start-1 col-end-13 text-2xl">
            <div className="flex gap-4">
                <Link to={'/'}>Home</Link>
                <Search usersFounded={handlerUsersFounded} />
            </div>
            <div className="flex gap-4">
                <Link to={'/perfil'}>{userName || 'Loading...'}</Link>
                <button onClick={handlerLogoutClick}>Logout</button>
            </div>
        </nav>
        {searchedUsers &&
            <SearchUsersResults
            usersFounded={searchedUsers}
            />}
    </header>
}

export default NavBar