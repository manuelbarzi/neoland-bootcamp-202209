import log from '../utils/coolog'
import { IoSettingsOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { BsListCheck } from 'react-icons/bs'

export default function Menu (props) {
    log.info('Menu -> render')



    return <>
    <div className="absolute top-[3rem] w-[100%] h-[100vh] bg-[rgba(0,0,0,0.2)]">
        <div className="h-[100vh] w-4/5 bg-gray-200">
            <ul className="ml-4 flex flex-col gap-4 h-[100%]">
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl">Hola!</li>
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl"><BsListCheck/><a>Listas</a></li>
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl"><CgProfile/><a>Cuenta</a></li>
                <li className="flex items-center gap-4 mt-2 mb-2 text-2xl"><IoSettingsOutline/><a>Ajustes</a></li>
            </ul>
        </div>
    </div>
</>
}