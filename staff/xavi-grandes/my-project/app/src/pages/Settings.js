import log from '../utils/coolog'
import Header from '../components/Header'
import { GrNext } from "react-icons/gr";


export default function () {
    log.info('Profile -> render')

    return <>
        <Header />
        <main className="mt-[3rem] flex flex-col items-center gap-4">
            <h2 className='mt-2 text-2xl'>Settings</h2>
            <hr />
            <button className='w-4/5 h-10 flex justify-between items-center'><p>Cambiar tema</p><GrNext/></button>
        </main>
    </>
}