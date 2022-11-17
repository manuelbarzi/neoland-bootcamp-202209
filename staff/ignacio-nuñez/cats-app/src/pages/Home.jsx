import { useEffect, useState } from "react"
import retrieveUser from "../logic/retrieve-user"
import catSearcher from "../logic/cat-searcher"

function Home(props){

    const [user, setUser] = useState()
    const [cats, setCats] = useState([])

    const userName = user && user.name

    useEffect(()=>{
        try{
            retrieveUser(sessionStorage.userId)
            .then(user =>  setUser(user))
            .catch(error => alert(error.message))
        }catch(error){
            alert(error.message)
        }
    }, [])

    const onLogoutClick =() => {
        sessionStorage.clear()
        setUser()

        props.onLogout()
    }

    const searchCat = event =>{
        event.preventDefault()

        const query = event.target.query.value

        if(query.trim() === '') return
        
        try{
            catSearcher(query)
            .then(cats =>setCats(cats))
            .catch(error =>{
                alert(error.message)
            })
        }catch(error){
            alert(error.message)
        }
    }

    return(<main>
        <button onClick={onLogoutClick}>Logout</button>
        <h1>Hola {userName}</h1>

        <div>
            <form onSubmit={searchCat}>
            <label htmlFor="catSearcher">Search</label>
            <input type="text" name="query"/>
            <button>🔎</button>
            </form>
        </div>

        <section>
            {cats.map(cat =>{return <article>
                <img src={cat.imageUrl} alt="" />
                <p>{cat.codeStatus}</p>
                <p>{cat.textStatus}</p>
            </article>})}
        </section>
    </main>)
}

export default Home