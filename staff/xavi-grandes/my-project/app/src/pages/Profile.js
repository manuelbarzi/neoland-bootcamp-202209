import log from '../utils/coolog'
import Header from '../components/Header'
import { GrNext } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { IoExit } from "react-icons/io5";
import Context from '../components/Context';
import { useContext } from 'react'


export default function () {
    log.info('Profile -> render')

    const { logout } = useContext(Context)

    return <>
        <Header />
        <main className="mt-[3rem] flex flex-col items-center gap-4">
            <h2 className='mt-2 text-2xl'>Profile</h2>
            <img src='../Images/profile.png'/>
            <p className='bg-green-200 p-2'>TODO: mostrar email del usuario</p>
            <hr className="bg-black w-4/5" />
            <button className='w-4/5 h-10 flex justify-between items-center'><p>Cambiar email</p><GrNext/></button>
            <hr className="bg-black w-4/5" />
            <button className='w-4/5 h-10 flex justify-between items-center'><p>Cambiar contraseña</p><GrNext/></button>
            <hr className="bg-black w-4/5" />
            <button className='w-4/5 h-10 flex justify-between items-center' onClick={logout}><p>Cerrar session</p><IoExit size="1.3rem"/></button>
            <button className='w-4/5 h-10 flex justify-between items-center'><p>Borrar cuenta</p><MdDelete size="1.3rem"/></button>
        </main>
    </>
}