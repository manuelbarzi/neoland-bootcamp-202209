const { useState } = React

function App() {
   const [view, setView] = useState('search')
   const [vehicleId, setVehicleId] = useState()

   const handleNavigateToDetail = vehicleId => {
      setView('detail')
      setVehicleId(vehicleId)
   }

   return <>
    {view === 'search' && <Search onNavigateToDetail={handleNavigateToDetail}/>}
    {view === 'detail' && <Detail vehicleId={vehicleId}/>}
   </>
}