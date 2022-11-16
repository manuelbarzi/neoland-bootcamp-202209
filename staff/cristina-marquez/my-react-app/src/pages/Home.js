import { useContext } from "react"
import UserContext from "../UserContext"

function Home() {
    const { user } = useContext(UserContext)
    return <h2>Hello {user.name}</h2>
}

export default Home