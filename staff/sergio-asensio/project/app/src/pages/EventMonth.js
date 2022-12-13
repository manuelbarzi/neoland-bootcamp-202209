import log from '../utils/coolog'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import  CreateEvent from '../components/CreateEvent'

// const { FormatError, AuthError, LengthError, NotFoundError } = errors


function EventMonth() {
    const { month } = useParams()
    const navigate = useNavigate()

    const [create, setCreate] = useState()

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
        

        {create && <CreateEvent month={month} closeCreate={() => setCreate()}/>}

    </main>

}

export default EventMonth