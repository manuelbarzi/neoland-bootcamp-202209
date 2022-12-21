import log from '../utils/coolog'
import { useNavigate , Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { errors } from 'com'
import retrieveUser from '../logic/retrieveUser'
import Context from '../components/Context'
import Settings from '../components/Settings'
import { useContext } from 'react'
import retrieveEvents from '../logic/retrieveEvents'
import getMonthName from '../utils/getMonthNameByNumber'
import logo from '../img/logo.jpg'
import { MdSettings } from 'react-icons/md'
import { HiOutlineUser } from 'react-icons/hi'



const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Events() {
    log.info('Events -> render')

    const { showAlert } = useContext(Context)

    const [user, setUser] = useState()
    const [events, setEvents] = useState([])
    const [settings, setSettings] = useState()

    useEffect(() => {
        try {
            Promise.all([retrieveUser(sessionStorage.token), retrieveEvents(sessionStorage.token)])
                .then(([user, events]) => {
                    setUser(user)
                    setEvents(events)
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
        // const rest = jrfap
        // console.log(new Date)
    }, [])

    const navigate = useNavigate()

    const handleMonth = (month) => {
        navigate(`/events/${getMonthName(month)}`)
    }
    const handleSettings = () => {
        if (!settings)
            setSettings('true')
        else
            setSettings()

    }
    
    return <main className="h-full">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
        <Link to="/"><img src={logo} className='w-20 h-20 cursor-pointer'/></Link>
            <h1>12 MESES, 12 ACTIVIDADES</h1>
            <div className='flex items-center gap-1'>
            <HiOutlineUser/>
            <p>{user?.name}</p>
            </div>
            <button onClick={handleSettings}><MdSettings size='1.5rem'/></button>
        </header>
        {settings && <Settings/>}
        
        <div className=" md:grid md:grid-cols-3 md:gap-4 p-4 bg-slate-100 ">

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(index => {
                const event = events.find(event => {
                    const month = event.date.getMonth()

                    return month === index
                })

                return <button className=' min-w-full p-4 overflow overflow-hidden'  key={index} onClick={() => handleMonth(index + 1)}>
                    <div className='border rounded-xl h-48 p-4 bg-green-50 overflow-hidden'>
                        <h1 className='bg-teal-400 rounded-t-xl uppercase'>{getMonthName(index + 1)}</h1>
                        <p className='bg-slate-200'>{event?.title}</p>
                        <img className='m-a rounded-b-xl object-contain	' src={event?.image} />
                    </div>
                </button>
            })}
        </div>
    </main>

}

export default Events
