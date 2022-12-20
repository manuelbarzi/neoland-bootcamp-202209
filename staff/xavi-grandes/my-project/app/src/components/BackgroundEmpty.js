import fondoListas from '../Images/fondoListas.jpg'
import { FaArrowDown } from 'react-icons/fa'

export default function () {
    return <div className='flex flex-col'>
    <img className="" src={fondoListas} alt="fondoListas" />
    <h1 className='text-center text-lg font-bold'>¡Planifica tus compras!</h1>
    <p className='text-center'>Toca el botón para crear tu primera lista</p>
    <i className='self-center mt-16 animate-bounce'><FaArrowDown size="3rem"/></i>
    </div>
}