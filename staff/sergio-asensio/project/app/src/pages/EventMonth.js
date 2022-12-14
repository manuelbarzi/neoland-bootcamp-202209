import log from '../utils/coolog'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import  CreateEvent from '../components/CreateEvent'
import  DeleteEvent from '../components/DeleteEvent'
import retrieveEventMonth from '../logic/retrieveEventMonth'
import retrieveUser from '../logic/retrieveUser'
import { errors } from 'com'
import Context from '../components/Context'


const { FormatError, AuthError, LengthError, NotFoundError } = errors


function EventMonth() {
    const { month } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [event, setEvent] = useState()
    const [createEvent, setCreateEvent] = useState()
    const [update, setUpdateEvent] = useState()
    const [deleteEvent, setDeleteEvent] = useState()

    

    const { showAlert } = useContext(Context)


    useEffect(() => {
        userRetrieve()
        eventRetrieveMonth()
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

    const eventRetrieveMonth = () => {
        try {
            retrieveEventMonth(sessionStorage.token, month)
                .then(event => setEvent(event))
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

    
    const goEvents = () => {
        navigate('/events')
    }

    const handleCreateEvent = () => {
        setCreateEvent('true')
        
    }

    // const handleUpdateEvent = () => {
    //     setUpdate('true')
    // }

    const handleDeleteEvent = () => {
        setDeleteEvent('true')
    }

    return <main className="h-full">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
        <h1>12 MESES, 12 ACTIVIDADES</h1>
        <h2>{month}</h2>
                <button onClick={goEvents}>Go_Back</button>
        </header>
            <div>
            <button >--EDITAR--</button>
            <p></p>
            <button onClick={handleDeleteEvent}>--BORRAR--</button>
            </div>

        { event ? <div>
        <div>
            <h1>{event?.title}</h1>
            <h3>{event?.boody}</h3>
            <h3>{event?.requeriment}</h3>
            <h3> Fecha: {event?.date}</h3>
            <h3> Plazas: {event?.capacity}</h3>
            <h3>Inscripciones: {event?.inscription}</h3>
            <img src= {event?.img}/>
            <h3> Plazas: {event?.capacity}</h3>
        </div>
            {event?.inscription === 'open' && <div>
                <p>Pepe</p>
                <p>Pepe</p>
                <p>Pepe</p>
                <p>...</p>
            </div>}
        </div> : <div><button onClick={handleCreateEvent}>crear</button></div>}

        {createEvent && <CreateEvent month={month} closeCreate={() => setCreateEvent()}/>}

    </main>

}

export default EventMonth

// {createNoticeVisible && <CreateNotice onCreated={handleNoticeCreated} onClose={closeCreateNotice} />}
