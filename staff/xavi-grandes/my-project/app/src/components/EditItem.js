import log from '../utils/coolog'
import { IoCloseCircle } from 'react-icons/io5'

export default function ({onClose}) {
    log.info('CreateList -> render')


  return (
    <section className="absolute top-0 z-30 h-[100vh] w-full bg-[#64aaa464]" onClick={onClose}>
      <section className="fixed bottom-0 h-[45%] w-full bg-blue-400 flex flex-col items-center gap-4" onClick={event => event.stopPropagation()}>
      <i className='self-end mr-2 mt-2'><IoCloseCircle size="1.5rem" onClick={onClose}/></i>
            <form className='flex flex-col gap-2'>
                <input className='h-10'></input>
                <div className='flex justify-between gap-2'>
                    <input className="bg-gray-200 w-[50%] pl-2 text-xl content-center" placeholder='Cantidad'></input>
                    <button className="bg-gray-200 w-10 h-10 rounded-full flex justify-center text-3xl">+</button>
                    <button className="bg-gray-200 w-10 h-10 rounded-full flex justify-center text-3xl">-</button>
                </div>
                <div className='flex justify-between gap-2'>
                    <input className="bg-gray-200 w-[50%] pl-2 text-xl content-center" placeholder='Precio'></input>
                    <button className="bg-gray-200 w-10 h-10 rounded-full flex justify-center text-3xl">+</button>
                    <button className="bg-gray-200 w-10 h-10 rounded-full flex justify-center text-3xl">-</button>
                </div>
                <button className="mt-2 self-center bg-[#1b385b] border border-gray-400 rounded-2xl w-[90%] h-9 text-white text-lg">Aceptar Cambios</button>
            </form>
            <button className="bg-red-400 border border-gray-400 rounded-2xl w-4/5 h-8 text-white text-lg">Borrar</button>
      </section>
    </section>
  );
}
