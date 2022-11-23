import usersSearcher from "../logic/users-searcher"

function Search(props) {
    let timeOutId

    const searchUser = event => {
        event.preventDefault()

        let { target: { value: userNameQuery } } = event

        if(timeOutId) clearTimeout(timeOutId)

        if (userNameQuery.trim() === '') {
            props.usersFounded()

            return
        }
        try {
            timeOutId = setTimeout(() => {usersSearcher(userNameQuery, sessionStorage.userId) 
                .then(users => {
                    props.usersFounded(users)
                })
                .catch(error => {
                    alert(error.message)
                })
            }, 500)
        } catch (error) {
            alert(error.message)
        }
    }

    return <form>
        <input id="userNameQuery" type="text" name="userNameQuery" className="p-1 outline-none rounded-lg" placeholder="Search" onChange={searchUser} />
    </form>
}

export default Search