import usersSearcher from "../logic/users-searcher"

function Search(props) {
    const searchUser = event => {
        event.preventDefault()

        let { target: { value: userNameQuery } } = event

        if (userNameQuery.trim() === ''){
            props.usersFounded()

            return
        } 

        try {
            usersSearcher(userNameQuery, sessionStorage.userId)
                .then(users => { 
                    props.usersFounded(users)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <input id="userNameQuery" type="text" name="userNameQuery" className="rounded-lg" placeholder="Search" onChange={searchUser} />
     
}

export default Search