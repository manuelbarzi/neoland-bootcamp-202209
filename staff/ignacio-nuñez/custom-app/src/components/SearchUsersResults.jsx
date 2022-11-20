import usersSearcher from "../logic/users-searcher"
import { useState, useEffect } from 'react'

function SearchUsersResults(props) {
    const [searchedUsers, setSearchedUsers] = useState()

    useEffect(() => {
        setSearchedUsers(props.usersFounded)
    }, [props])

    const handlerSearchedUserClick = (event, searchedUserId) => {
        event.preventDefault()

        props.onSearchedUserClick(searchedUserId)
    }

    return <div className="border border-2 shadow-sm shadow-slate-600 flex flex-col col-start-1 col-end-4 bg-teal-300 rounded-xl">
        {searchedUsers && props.usersFounded.length > 0 ? <div className="flex flex-col p-2 rounded-xl">
            {searchedUsers.map(user => {
                return <a key={user.userId} onClick={event => handlerSearchedUserClick(event, user.userId)} href="" className="bg-slate-100 mt-2 border border-2 p-2 rounded-xl">{user.name}</a>
            })}
        </div> : <div className="border border-2 p-2 rounded-xl"><p className="bg-slate-100 border border-2 p-2 rounded-xl">No results</p></div>}
    </div>
}

export default SearchUsersResults