import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(window.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {

        }
    }, [])

    return <h2>hola {user ? user.name : 'home'}</h2>
}

export default Home