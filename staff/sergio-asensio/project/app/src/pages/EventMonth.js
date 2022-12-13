import log from '../utils/coolog'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import  CreateEvent from '../components/CreateEvent'
// import retrieveEvent from '../logic/retrieveEvent'
import retrieveUser from '../logic/retrieveUser'
import { errors } from 'com'
import Context from '../components/Context'

const { FormatError, AuthError, LengthError, NotFoundError } = errors


function EventMonth() {
    const { month } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [event, setEvent] = useState()
    const [create, setCreate] = useState()
    const { showAlert } = useContext(Context)


    useEffect(() => {
        userRetrieve()
        // eventRetrieve()
    }, [])

    const userRetrieve = () => {
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
    }

    // const eventRetrieve = () => {
    //     try {
    //         retrieveEvent(sessionStorage.token)
    //             .then(event => setEvent(event))
    //             .catch(error => {
    //                 if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
    //                     showAlert(error.message, 'warn')
    //                 else if (error instanceof AuthError || error instanceof NotFoundError)
    //                     showAlert(error.message, 'error')
    //                 else
    //                     showAlert(error.message, 'fatal')
    //             })
    //     } catch (error) {
    //         if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
    //             showAlert(error.message, 'warn')
    //         else
    //             showAlert(error.message, 'fatal')
    //     }
    // }

    
    const goEvents = () => {
        navigate('/events')
    }

    const handleCreateEvent = () => {
        setCreate('true')
        
    }

    return <main className="h-full">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
        <h1>12 MESES, 12 ACTIVIDADES</h1>
        <h2>{month}</h2>
                <button onClick={goEvents}>Go_Back</button>
        </header>
        
        <div className="grid grid-cols-2">
        <button onClick={handleCreateEvent}>crear</button>
        </div>
        <div>
            <h1>title</h1>
            <p>body</p>
            <p>requeriment</p>
            <p>capacity</p>
            <p>date</p>
            <p>if inscription is open</p>

        </div>
        

        {create && <CreateEvent month={month} closeCreate={() => setCreate()}/>}

    </main>

}

export default EventMonth