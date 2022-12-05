import log from '../utils/coolog'
import Header from '../components/Header'


export default function () {
    log.info('Profile -> render')

    return <>
        <Header />
        <main className="flex flex-col items-center">
            <h2>Settings</h2>
            <hr />
            <button>Cambiar tema</button>
        </main>
    </>
}