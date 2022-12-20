import log from '../utils/coolog'
import { MdSettings } from 'react-icons/md'
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
        <button onClick={handleSettings} ><MdSettings/></button>
        </div> 
    </header>
    {settings && <Settings/>}
    </main>
}
