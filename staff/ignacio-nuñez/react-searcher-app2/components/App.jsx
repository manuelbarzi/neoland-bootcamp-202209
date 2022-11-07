const { useState } = React

function App(){
    const [view, setView] = useState('search')
    const [vehicle, setVehicle] = useState()

    const retrieveVehicle= (vehicle) =>{
        setVehicle(vehicle)


        setView('detail')
    }

    return <>
    {view === 'search' && <Search onVehicleClick={vehicle=>retrieveVehicle(vehicle)}/>}
    {view === 'detail' && <Detail  vehicle={vehicle}/>}
    </>
}