import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import CreateVehicle from '../components/CreateVehicle'
import TarjetVehicle from '../components/TarjetVehicle'
import retrieveVehicles from '../logic/retrieveVehicles'

const { AuthError, FormatError, LengthError, NotFoundError } = errors

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [vehicles, setVehicles] = useState()
    const { showAlert } = useContext(Context)
    const [isCreateVehicleVisible, setCreateVehicleVisible] = useState(false)
    
    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)

                    return retrieveVehicles(sessionStorage.token)
                })
                .then(vehicles => setVehicles(vehicles))
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

    const openCreateVehicle = () => setCreateVehicleVisible(true)

    const closeCreateVehicle = () => setCreateVehicleVisible(false)


    const handleCreatedVehicle = () => {
        // TODO evaluar si queremos que cuando se cree un vehículo nuevo se haga alguna otra cosa
        closeCreateVehicle()
    }

    //Hacer el delete(revisar logicas y api)

    return <main className='h-full overflow-hidden bg-white dark:bg-black text-black dark:text-white m-6'>
        {vehicles && !isCreateVehicleVisible && vehicles.length > 0 && vehicles.map(vehicle => <TarjetVehicle vehicle={vehicle} />)}
        {isCreateVehicleVisible && <CreateVehicle onClose={closeCreateVehicle} onCreated={handleCreatedVehicle} />}
        {user && <Header userName={user.name} />}
        <div className='flex justify-center'>
        {!isCreateVehicleVisible && <button onClick={openCreateVehicle} className='bg-pink-600 hover:bg-purple-600 duration-700 ease-in-out hover:scale-150 hover:shadow-rose-800 p-12 border rounded-full text-xl'>Go!</button>}
        </div>
       
    </main>
}

export default Home