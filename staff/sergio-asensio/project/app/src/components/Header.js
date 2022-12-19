import log from '../utils/coolog'
// import { AiOutlineLogout } from 'react-icons/ai'
// import { IoInvertModeOutline } from 'react-icons/io5'
import Context from './Context'
import { useContext, useState} from 'react'
import logo from '../img/logo.jpg'
import Settings from '../components/Settings'


export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)
    const [settings, setSettings] = useState()

    const switchMode = () => document.querySelector('html').classList.toggle('dark')
    // className='h-screen'

    const handleSettings = () =>{
            if(!settings) 
                setSettings('true')
            else 
                setSettings()

    } 

    return <main >
    <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
    <div>
        <button onClick={()=> setSettings()}><img src={logo} className='w-20 h-20'/></button>
    </div>
    <div>
        <h1>TREPADORES CAVERNICOLAS</h1>
    </div>
    <div>
        <p>{userName}</p> 
    </div>
    <div>
        {/* <button onClick={logout}><AiOutlineLogout /></button>
        <button onClick={switchMode}><IoInvertModeOutline /></button> */}
        <button onClick={handleSettings} className='className="border-2 border-black bg-slate-300 p-1 cursor-pointer m-1'>Settings</button>
        </div> 
    </header>
    {settings && <Settings/>}
    </main>
}
