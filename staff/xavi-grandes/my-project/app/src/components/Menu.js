import log from '../utils/coolog'
import { IoSettingsOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { BsListCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Menu ({onClose}) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        log.info('Menu -> render')

        setIsMounted(true)
    }, [])

    return <> 
    <div className="absolute z-10 top-0 w-full h-[100vh] bg-[rgba(0,0,0,0.2)]" onClick={onClose}>
        <div className={`relative transition-all duration-1000 linear h-[100vh] w-4/5 bg-gray-200 border-black border-r-2 ${isMounted ? "left-0": "-left-72"}`} onClick={event => event.stopPropagation()}>
            <ul className="ml-4 flex flex-col gap-4 h-full">
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl">Hola!</li>
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl" onClick={onClose}><BsListCheck/><Link to="/">Listas</Link></li>
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl" onClick={onClose}><CgProfile/><Link to="/Profile">Cuenta</Link></li>
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl" onClick={onClose}><IoSettingsOutline/><Link to="/settings">Ajustes</Link></li>
            </ul>
        </div>
    </div>
</>
}