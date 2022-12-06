import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import Pension from './Pension'
import Appointment from './Appointment'
import Memory from './Memory'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const { showAlert } = useContext(Context)

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

    return <main className='bg-green-100 '>
        {user && <Header userName={user.name} />}
        <div className='  grid  grid-rows-3 grid-cols-2 gap-2  text-center mx-2'>
            <section className='border-2 border-green-800 row-start-1 row-end-4 col-start-1 col-end-2  w-full p-2 rounded-xl bg-white '>
                <div>
                    <Pension />
                </div>
            </section>
            <section className=' overflow-y-scroll border-2 border-green-800 h-80 row-start-1 row-end-3 col-start-2 col-end-3  w-full p-2 rounded-xl bg-white'>
                <div>
                    <Appointment />
                </div>
            </section>
            <section className='border-2 border-green-800 h-40 row-start-3 row-end-4 col-start-2 col-end-3w-full p-2 rounded-xl bg-white'>
                <div className='h-full w-full '>
                    <Memory />
                </div>
            </section>
        </div>

    </main>
}

export default Home