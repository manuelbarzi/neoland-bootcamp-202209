import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import CreateVehicle from '../components/CreateVehicle'
import TarjetVehicle from '../components/TarjetVehicle'


const { AuthError, FormatError, LengthError, NotFoundError } = errors


function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    // const [vehicles, setVehicles] = useState()
    const { showAlert } = useContext(Context)
    const [isCreateVehicleVisible, setCreateVehicleVisible] = useState(false)
    const [isTarjetVehicleVisible, setTarjetVehicleVisible] = useState(false)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(() => setUser(user))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
            /*retrieveVehicles(sessionStorage.token)  
                .then(() => setVehicles(vehicles))
                .catch(error => alert(error.message))                  
                                
            */     
                        
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
        TarjetVehicle()
        closeCreateVehicle()
    }
    

    return <main className='h-full overflow-hidden bg-white dark:bg-black text-black dark:text-white'>
      {/* {isTarjetVehicleVisible && <TarjetVehicle > no se como hacer la tarjeta una vez creo el vehiculo */}
       
       {isCreateVehicleVisible && <CreateVehicle onClose={closeCreateVehicle} onCreated={handleCreatedVehicle} />}
        {user && <Header userName={user.name} />}
        <div className='h-full flex flex-col items-center justify-center'>
            <button onClick={openCreateVehicle} className='bg-pink-600 hover:bg-purple-600 duration-700 ease-in-out hover:scale-150 hover:shadow-rose-800 p-12 border rounded-full text-xl'>Go!</button>
        </div>

    </main>
}

export default Home