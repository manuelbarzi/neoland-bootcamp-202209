import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Nav from '../components/Nav'
import ShopScreen from '../components/ShopScreen'
import NewsScreen from '../components/newsScreen'
import ButtonLogReg from "../components/ButtonLogReg" 

function Home() {
    log.info('Home -> render')

    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(window.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <main className="block h-full w-full bg-blue-800">
        <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
        <h2 className="text-white">{user ? user.name: 'home'}</h2>  
        <ButtonLogReg className="w-full mb-2 mt-2">FIGHT</ButtonLogReg>
        <h2 className="text-white">settings</h2>
        </nav>
        <div className="h-screen mt-12">
        <ShopScreen></ShopScreen>
        <NewsScreen></NewsScreen>
        </div>
    </main> 
}


export default Home