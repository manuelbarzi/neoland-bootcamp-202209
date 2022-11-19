import { useContext } from "react"
import createNewPost from "../logic/createnewPost"
import UserContext from "../UserContext"


function Home() {
    const { user } = useContext(UserContext)


    const createNewPostHandler = async (event) => {
        event.preventDefault()

        console.log('creating new post for user', user.id)

        const currentUserId = user.id
        const text = 'sersiwrfassf'
        const visibility = 'public'


        try {

            await createNewPost(currentUserId, text, visibility)

        } catch (error) {

            alert(error.message)



        }


    }

    return (
        <div>
            <h2>Hello {user.name}</h2>

            {/* List posts */}



            {/* Create new post */}
            <button onClick={createNewPostHandler}>Create new post</button>


        </div>
    )





}

export default Home