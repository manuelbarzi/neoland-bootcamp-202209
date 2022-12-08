import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import Button from '../components/Button'


const { AuthError, FormatError, LengthError, NotFoundError } = errors


function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    // const [vehicles, setVehicles] = useState()
    const { showAlert } = useContext(Context)
    // const [createVehicleVisible, setCreateVehicleVisible] = useState

    useEffect(() => {
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

    // const openCreateVehicle = () => setCreateVehicleVisible(true)

    // const closeCreateVehicle = () => setCreateVehicleVisible(false)

    // const handleVehicleCreated = () => {
    //     try {
            
    //         }
    //     }
    

    return <main className='h-full overflow-hidden bg-white dark:bg-black text-black dark:text-white'>
        {user && <Header userName={user.name} />}
        <div className='h-full flex flex-col items-center justify-center'>
            <button className='bg-pink-600 hover:bg-purple-600 duration-700 ease-in-out hover:scale-150 hover:shadow-rose-800 p-12 border rounded-full text-xl'>Go!</button>
        </div>

    </main>
}

export default Home