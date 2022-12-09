import log from '../utils/coolog'
import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import CreateListComponent from '../components/CreateListComponent'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [isCreateOpen, setCreateOpen
    ] = useState(false) 

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


    const HandleCreateList = () => {

        setCreateOpen(!isCreateOpen)
    }

    return <>
        {isCreateOpen && <CreateListComponent onClose={HandleCreateList} />}
        {user && <Header userName={user.name}/>}
        <main className='mt-[3rem]'>
            <p> Aquí irán las listas</p>
        </main>
        <footer className='z-10 absolute bottom-0 h-[4rem] flex justify-center items-center w-full bg-gray-200'>
            <button className=' bg-blue-400 h-[3rem] w-2/5 text-white text-xl p-2 flex justify-center items-center rounded-lg' onClick={HandleCreateList}>+ Crear lista</button>
        </footer>
    </>
}