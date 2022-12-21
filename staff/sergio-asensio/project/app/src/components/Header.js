import log from '../utils/coolog'
import { SlMenu } from 'react-icons/sl'
import {  HiOutlineUser } from 'react-icons/hi'
import Context from './Context'
import { useContext, useState} from 'react'
import logo from '../img/logo.jpg'
import Settings from '../components/Settings'


export default function Header({ userName }) {
    log.info('Header -> render')

    const [settings, setSettings] = useState()

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
    <div className='flex items-center gap-1'>
            <HiOutlineUser/>
            <p>{userName}</p>
            </div>
    <div>
        <button onClick={handleSettings} ><SlMenu size='1.5rem'/></button>
        </div> 
    </header>
    {settings && <Settings/>}
    </main>
}
