import log from '../utils/coolog'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import  CreateEvent from '../components/CreateEvent'
import { errors } from 'com'
import retrieveUser from '../logic/retrieveUser'
import Context from '../components/Context'
import { useContext } from 'react'

const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Events() {
    log.info('Events -> render')

    const { showAlert } = useContext(Context)

    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
                })

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
    const [view, setView] = useState()
    const [january, setJanuary] = useState()
    // const [february, setFebruary] = useState()

 
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    const goBack = () => {
        setView()
    }

    const handlerJanuary = () => {
        setJanuary(true)
        setView(true)
    }
    const handlerFebruary = () => {
        setView(true)
    }

    return <main className="h-full">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
        <h1>12 MESES, 12 ACTIVIDADES</h1>
                <button onClick={goHome} >HOME</button>
                {view && <button onClick={goBack} >BACK</button>}
        </header>
        
        
        {!view &&<div className="grid grid-cols-2 gap-4 p-4">
            <button onClick={handlerJanuary}>
            <div className='border rounded-xl h-36 p-2'>
                <h1>ENERO</h1>
                <p>title</p>
                <p>resumen</p>
            </div></button>


           <button onClick={handlerFebruary}> <div className='border rounded-xl h-36 p-2'>
                <h1>FEBRERO</h1>
                <p>title</p>
                <p>resumen</p>
                </div></button>
            
            <div className='border rounded-xl h-36 p-2'>MARZO</div>
            <div className='border rounded-xl h-36 p-2'>ABRIL</div>
            <div className='border rounded-xl h-36 p-2'>MAYO</div>
            <div className='border rounded-xl h-36 p-2'>JUNIO</div>
            <div className='border rounded-xl h-36 p-2'>JULIO</div>
            <div className='border rounded-xl h-36 p-2'>AGOSTO</div>
            <div className='border rounded-xl h-36 p-2'>SEPTIEMBRE</div>
            <div className='border rounded-xl h-36 p-2'>OCTUBRE</div>
            <div className='border rounded-xl h-36 p-2'>NOVIEMBRE</div>
            <div className='border rounded-xl h-36 p-2'>DICIEMBRE</div>
        </div>}
        
        {january && <CreateEvent closeCreate={() => setJanuary()}/>}

    </main>

}

export default Events
