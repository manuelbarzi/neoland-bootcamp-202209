import log from '../utils/coolog'
import { useNavigate } from 'react-router-dom'


function Activities() {
    log.info('Login -> render')

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    return <main className="h-full">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
                <h1>Trepadores Cavernicolas</h1>
                <button onClick={goHome} >HOME</button>
        </header>
        <h1>12 MESES, 12 ACTIVIDADES</h1>
        <div className="grid grid-cols-2 gap-4 p-4">
            <div className='border rounded-xl h-36 p-2'>ENERO </div>
            <div className='border rounded-xl h-36 p-2'>FEBRERO</div>
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
        </div>
    </main>

}

export default Activities
