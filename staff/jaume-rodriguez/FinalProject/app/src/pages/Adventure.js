import { useState, useEffect } from 'react'
import retrieveAdventure from '../logic/retrieveAdventure'
import { useParams } from 'react-router-dom'

function Adventure() {
    const [adventure, setAdventure] = useState(null)
    const { adventureId } = useParams()

    useEffect(() => {
        try {
            retrieveAdventure(sessionStorage.token, adventureId)
                .then(adventure => {
                    console.log("adventure", adventure)
                    setAdventure(adventure)
                })
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    return (
        <main className="min-h-screen bg-slate-200">
            {
                adventure
                    ? <h1>Adventure: {adventure.title}</h1>
                    : <h1>Loading Adventure</h1>
            }

            {adventure && <ul>
                {adventure.steps.map(step =>
                    <li key={step.id}>
                        {step.text}
                    </li>
                )}
            </ul>}
        </main>
    );
}

export default Adventure