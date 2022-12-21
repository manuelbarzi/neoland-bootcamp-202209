import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import CreateEvent from '../components/CreateEvent'
import UpdateEvent from '../components/UpdateEvent'
import DeleteEvent from '../components/DeleteEvent'
import Inscription from '../components/Inscription'
import retrieveEventByMonthNumber from '../logic/retrieveEventByMonthNumber'
import retrieveUser from '../logic/retrieveUser'
import { errors } from 'com'
import Context from '../components/Context'
import getMonthNumberByName from '../utils/getMonthNumberByName'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import DeleteInscription from '../components/DeleteInscription'
import extractSubFromToken from '../utils/extractSubFromToken'
import { HiOutlineUser } from 'react-icons/hi'
import { TiArrowBack } from 'react-icons/ti'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

function EventMonth() {
    const { monthName } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [event, setEvent] = useState()
    const [createEvent, setCreateEvent] = useState()
    const [updateEvent, setUpdateEvent] = useState()
    const [deleteEvent, setDeleteEvent] = useState()
    const [inscription, setInscription] = useState()
    const [deleteinscription, setDeleteInscription] = useState()

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
            retrieveEventByMonthNumber(sessionStorage.token, getMonthNumberByName(monthName))
                .then(event => {
                    setEvent(event)
                })
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError)
                        showAlert(error.message, 'error')
                    else if (error instanceof NotFoundError) {
                        setEvent()
                    } else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }

    const goEvents = () => navigate('/events')
    
    const handleCreateEvent = () => {
        setCreateEvent('true')

    }
    const handleEventCreated = () => {
        eventRetrieveMonth()
        setCreateEvent()
    }

    const handleUpdateEvent = () => setUpdateEvent('true')
    
    const eventUpdated = () => {
        setUpdateEvent()
        eventRetrieveMonth()
    }

    const handleDeleteEvent = () => setDeleteEvent('true')
    
    const handleEventDeleted = () => {
        setDeleteEvent()
        eventRetrieveMonth()
    }

    const handlesignUp = () => setInscription('true')
    

    const handleUnsignUp = () => setDeleteInscription('true')
    
    const handleResgistered = () => {
        setInscription()
        eventRetrieveMonth()
    }

    const handleDeleteInscription = () => {
        setDeleteInscription()
        eventRetrieveMonth()
    }

    const shortDate = event?.date?.slice(0, -14)

    const userId = extractSubFromToken(sessionStorage.token)
    const enrolled = event && event.participants ? event.participants.some(participant => participant.id === userId) : false

    const max = (event?.capacity)
    const participants = (event?.participants?.length)
    const available = max - participants

    return <main className="h-full bg-slate-100">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600'>
            <Link to="/"><img src={logo} className='w-20 h-20 cursor-pointer' /></Link>
            <div className='flex items-center gap-1'>
                <button onClick={goEvents} className='border-2 border-black'><TiArrowBack /></button>
                <h2 className='uppercase'>{monthName}</h2>
            </div>
            <div className='flex items-center gap-1'>
                <HiOutlineUser />
                <p>{user?.name}</p>
            </div>
        </header>

        {event ? <div className='mx-4 bg-slate-100'>
            <div className='flex mt-4 gap-6 justify-between'>
                <div>
                    <h1 className='underline'>{event.title}</h1>
                    <h3>{event.body}</h3>
                    <h3><u>Requisitos:</u> {event.requirement}</h3>
                    <h3><u>Fecha:</u> {shortDate} </h3>
                    <h3><u>Plazas:</u> {event.capacity}</h3>
                    {!available && <div>
                        <h3>{event.inscription = 'No more places'}</h3>
                        {enrolled && <button onClick={handleUnsignUp} className="border-2 rounded-full border-black bg-red-50 p-1 cursor-pointer m-1">Desinscribirse</button>}</div>}
                    {event.inscription === 'close' && <div><h3>Inscrition: Close</h3></div>}
                    {event.inscription === 'open' && <div className='flex items-baseline'>
                        Inscription : <div><div>
                            {!enrolled && <button onClick={handlesignUp} className="border-2 rounded-full border-black  bg-green-100 p-1 cursor-pointer m-1">Inscribirse</button>}
                            {enrolled && <button onClick={handleUnsignUp} className="border-2 rounded-full border-black  bg-red-100 p-1 cursor-pointer m-1">Desinscribirse</button>}
                        </div>
                        </div>
                    </div>}
                    -------------------------------------------
                    {event.inscription === 'open' && <p>Plazas disponibles: {available} </p>}
                </div>

                <div><img src={event?.image} /></div>
            </div>

            {event?.participants?.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
            -------------------------------------------
            {user?.role === 'admin' && <div>
                <button onClick={handleDeleteEvent} className="border-2 border-black  bg-slate-300 cursor-pointer m-1">BORRAR</button>
                <button onClick={handleUpdateEvent} className="border-2 border-black bg-slate-300 cursor-pointer m-1">EDITAR</button>
            </div>}

        </div> : <div>{user?.role === 'admin' && <div><button onClick={handleCreateEvent} className="border-2 border-black bg-slate-300 cursor-pointer m-1">crear</button></div>
        }

        </div>}
        {createEvent && <CreateEvent monthName={monthName} onCreated={handleEventCreated} closeCreate={() => setCreateEvent()} />}
        {updateEvent && <UpdateEvent event={event} onUpdated={eventUpdated} onClose={() => setUpdateEvent()} />}
        {deleteEvent && <DeleteEvent event={event} onDeleted={handleEventDeleted} onClose={() => setDeleteEvent()} />}
        {inscription && <Inscription event={event} user={user} onClose={() => setInscription()} onRegistered={handleResgistered} />}
        {deleteinscription && <DeleteInscription event={event} onClose={() => setDeleteInscription()} onDeleted={handleDeleteInscription} />}
    </main>
}

export default EventMonth


