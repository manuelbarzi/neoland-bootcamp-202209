import log from '../utils/coolog'
import Header from '../components/Header'
import { GrNext } from "react-icons/gr";


export default function () {
    log.info('Profile -> render')

    // dark mode
    const switchMode = () => document.querySelector('html').classList.toggle('dark')

    return <>
        <Header />
        <main className="mt-[3rem] flex flex-col items-center gap-4">
            <h2 className='mt-2 text-2xl'>Settings</h2>
            <hr />
            <div className='w-4/5 h-10 flex justify-between items-center'>
                <span className="ml-3 text-gray-900 dark:text-gray-300">Cambiar tema</span>
                <label onClick={switchMode} className="inline-flex relative items-center cursor-pointer ">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked/>
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
            <div className='w-4/5 h-10 flex justify-between items-center'>
                <label className="ml-3 text-gray-900 dark:text-gray-300" htmlFor="language">Cambiar idioma</label>
                <select className='m-1 w-24 border border-blue-600' id="language">
                    <option>Español</option>
                    <option>Inglés</option>
                </select>
            </div>
        </main>
    </>
}