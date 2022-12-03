import { Link } from 'react-router-dom'
import ButtonLogReg from "./ButtonLogReg" 

function Nav({ userName }) {
    return <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
        <h2 className="text-white"><p>{userName}</p></h2> 
        <Link to="/Launcher"><ButtonLogReg className="w-full mb-2 mt-2">FIGHT</ButtonLogReg></Link>
        <h2 className="text-white">logOut</h2>
    </nav>
}

export default Nav