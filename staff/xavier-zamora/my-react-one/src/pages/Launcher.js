import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import ButtonLogReg from "../components/ButtonLogReg"

function Launcher() {
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

    return <main className="block h-screen w-full bg-blue-800">
        <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
            <h2 className="text-white">READY?</h2>
            <ButtonLogReg className="w-full mb-2 mt-2">READY</ButtonLogReg>
            <h2 className="text-white">EXIT</h2>
        </nav>
        <section className='flex place-content-center place-items-center w-full h-full'>
                <div className=" w-11/12 h-3/4 bg-yellow-100"></div>
        </section>
    </main>
}


export default Launcher