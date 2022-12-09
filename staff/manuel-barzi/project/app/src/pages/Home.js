import log from '../utils/coolog'
import Header from '../components/Header'

function Home() {
    log.info('Home -> render')

    return <main className="overflow-hidden bg-white dark:bg-black text-black dark:text-white">
        <Header />
    </main>
}

export default Home