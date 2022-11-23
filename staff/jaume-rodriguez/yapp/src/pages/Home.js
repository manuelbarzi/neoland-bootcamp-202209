import Header from '../components/Header'
import Tasks from '../components/Tasks'

function Home() {

    return (
        <main className="min-h-screen bg-slate-200">
            <Header />
            <Tasks />
        </main>
    );
}

export default Home