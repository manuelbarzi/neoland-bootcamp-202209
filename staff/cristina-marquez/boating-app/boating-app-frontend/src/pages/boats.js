import { useEffect, useState } from 'react';
import BoatForm from '../components/boatForm';
import BoatsList from '../components/boatslist';
import getUserBoats from '../logic/boatslist';


function Boats() {


    const [boats, setBoats] = useState([])
    const [isBoatFormVisible, setisBoatFormVisible] = useState(false)
    const [editableBoatInfo, setEditableBoatInfo] = useState(false)

    const fetchBoats = async () => {
        const fetchedBoats = await getUserBoats()
        setBoats(fetchedBoats)
    }

    useEffect(() => {
        fetchBoats()
    }, [])


    const refreshBoats = async () => {
        await fetchBoats();
    }

    const triggerNewBoatCreation = (event) => {
        event.preventDefault()
        setisBoatFormVisible(true)
    }

    const hideForm = (event) => {
        event.preventDefault()
        setisBoatFormVisible(false)
        setEditableBoatInfo(null)
    }

    const onBoatsEdited = async () => {
        setisBoatFormVisible(false)
        await refreshBoats()
    }

    const onUpdateBoatRequest = (boatId) => {
        console.log('Received update event for boat', boatId)
        setEditableBoatInfo(boats.find(boat => boat._id === boatId))
        setisBoatFormVisible(true)
    }

    return (
        <main className="w-screen min-h-screen bg-bone pt-10 flex justify-center">
            <div className="flex flex-col items-center w-11/12">

                {boats.length && <div className="w-full">
                    <h2 className="mb-4">Your boats</h2>
                    <BoatsList boatsList={boats} onUpdate={refreshBoats} onUpdateBoatRequest={onUpdateBoatRequest}></BoatsList>
                </div>}


                {!isBoatFormVisible &&
                    <div className='flex w-full justify-end'>
                        <button className="px-3 py-1.5 mt-4 bg-midgreen text-bone 
                                font-medium text-xs leading-tight uppercase rounded shadow-md
                                hover:bg-blue-700 hover:shadow-lg"onClick={triggerNewBoatCreation}>
                            Add new boat to my list
                        </button>
                    </div>
                }


                {isBoatFormVisible &&
                    <div className='flex w-11/12 my-10'>
                        <BoatForm onChange={onBoatsEdited} boatInfo={editableBoatInfo} onDiscard={hideForm} ></BoatForm>
                    </div>
                }

            </div>
        </main>
    )
}

export default Boats