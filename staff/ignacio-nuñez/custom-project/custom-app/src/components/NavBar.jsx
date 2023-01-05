import { useState, useContext } from "react"
import Search from "./Search"
import SearchUsersResults from "./SearchUsersResults"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from "./Context"

function NavBar() {
    const navigate = useNavigate()
    const { handleLogout, user} = useContext(Context)

    const [searchedUsers, setSearchedUsers] = useState()
    const [searchedUsersState, setSearchedUsersState] = useState(false)
    const [searchInputValue, setSearchInputValue] = useState()

    const userName = user && user.name

    const handlerLogoutClick = () => {
        sessionStorage.clear()
        handleLogout()

        navigate('/login')
    }

    const handlerUsersFounded = usersFounded => {
        setSearchedUsers(usersFounded)

        setSearchInputValue()

        setSearchedUsersState(true)
    }

    const handlerCloseSearchedUsers = () => setSearchedUsers(false)

    const handlerSearchInputValue = () => {
        setSearchInputValue('')

        setSearchedUsersState(false)
    }

    return <header className="z-20 fixed w-full h-20 bg-teal-300 grid grid-cols-12">
        <nav className="flex items-center justify-between p-4 h-20 col-start-1 col-end-13 text-2xl">
            <div className="z-10 flex gap-4">
                <Link to={'/'}>Home</Link>
                <Search
                    usersFounded={handlerUsersFounded}
                    handlerSearchInputValue={searchInputValue}
                />
            </div>
            <div className="z-10 flex gap-4">
                <Link to={'/perfil'}>{userName || 'Loading...'}</Link>
                <button onClick={handlerLogoutClick}>Logout</button>
            </div>
        </nav>
        {searchedUsers && searchedUsersState &&
            <>
                <div className="fixed w-screen h-screen inset-y-0" onClick={handlerCloseSearchedUsers}></div>
                <SearchUsersResults
                    closeSearchedUsersResults={handlerSearchInputValue}
                    usersFounded={searchedUsers}
                />
            </>}
    </header>
}

export default NavBar