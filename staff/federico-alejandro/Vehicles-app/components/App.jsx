const {useState} = React

function App() {
    const [view, setView] = useState('search')
    const [vehicle, setVehicle] = useState()

    const navigateToDetail = (vehicle) =>  {
        setVehicle(vehicle)
        setView('detail')
    }
   
   return <>
        {view === 'search' && <Search onDetail={navigateToDetail} />}
        {view === 'detail' && <Detail vehicle={vehicle}/>}
    </>
}