import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SearchUsersResults(props) {
    const [searchedUsers, setSearchedUsers] = useState()

    useEffect(() => {
        setSearchedUsers(props.usersFounded)
    }, [props])

    const closeSearchedUsers = () => props.closeSearchedUsersResults()

    return <div className="z-10 border-2 shadow-sm shadow-slate-600 flex flex-col col-start-1 col-end-4 bg-teal-300 rounded-xl">
        {searchedUsers && props.usersFounded.length > 0 ? <ul className="flex flex-col p-2 rounded-xl">
            {searchedUsers.map(searchedUser => {
                return <li key={searchedUser.id} className="flex bg-slate-100 mt-2 border-2 rounded-xl">
                    <Link to={`/user/${searchedUser.id}`} onClick={closeSearchedUsers} className="p-2 h-full w-full">{searchedUser.name}</Link></li>
            })}
        </ul> : <div className="border-2 p-2 rounded-xl"><p className="bg-slate-100 border-2 p-2 rounded-xl">No results</p></div>}
    </div>
}

export default SearchUsersResults