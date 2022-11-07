const { useState } = React

function App() {

    const [view, setView] = useState('search')
    const [vehicleId, setVehicleId] = useState()

    const detailRetrieve = (vehicleId)=>{
        setVehicleId(vehicleId)

        setView('detail')
    }

    return <>
        {view === 'search' && <Search onVehicleClick={detailRetrieve} />}
        {view === 'detail' && <Detail vehicleId={vehicleId}/>}
    </>
}