import log from '../utils/coolog'
import { useEffect, useReducer, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Nav from '../components/Nav'
import ShopScreen from '../components/ShopScreen'
import NewsScreen from '../components/newsScreen'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const { showAlert } = useContext(Context)

    useEffect(() => {
        console.log('effect')
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }, [])

    return <main className="block h-full w-full bg-blue-800">
        <Nav userName={user?.name} /> 
        <div className="h-screen mt-12">
        <ShopScreen></ShopScreen>
        <NewsScreen></NewsScreen>
        </div>
    </main> 
}


export default Home