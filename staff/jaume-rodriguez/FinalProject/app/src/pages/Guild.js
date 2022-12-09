import Header from '../components/Header'

function Guild() {

    function handlePlayQuest() {

    };

    return (
        <main className="min-h-screen bg-slate-200">
            <Header />
            <h1>Guild</h1>
            <button
                onClick={handlePlayQuest}>Play Dayly Quest</button>
        </main>
    );
}

export default Guild