import shoppingList from '../Images/shoppingList.png'
import { FaArrowDown } from 'react-icons/fa'

export default function () {
    return <div className='flex flex-col gap-1'>
    <img className="self-center mt-10 h-[70%] w-[70%]" src={shoppingList} alt="fondoListas" />
    <h1 className='mt-10 text-center text-lg font-bold'>¡Planifica tus compras!</h1>
    <p className='text-center'>Toca el botón para crear tu primer artículo</p>
    <i className='self-center mt-3 animate-bounce'><FaArrowDown size="3rem"/></i>
    </div>
}