import { useState, useEffect } from 'react'
import retrieveMainAdventures from '../logic/retrieveMainAdventures'
import { Link } from 'react-router-dom'

function Adventures() {
    const [mainAdventures, setMainAdventures] = useState(null)

    useEffect(() => {
        try {
            retrieveMainAdventures(sessionStorage.token)
                .then(adventures => {
                    console.log("adventures", adventures)
                    setMainAdventures(adventures)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    return (
        <main className="min-h-screen bg-slate-200">
            <h1>Adventures</h1>
            {mainAdventures && <ul>
                {mainAdventures.map(adventure =>
                    <li key={adventure.id}>
                        <Link to={`/adventures/${adventure.id}`}>{adventure.title}</Link>
                    </li>
                )}
            </ul>}
        </main>
    );
}

export default Adventures