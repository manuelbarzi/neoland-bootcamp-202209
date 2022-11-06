const { useState } = React

function App() {
    const [view, setView] = useState('Search')
    const [vehicle, setVehicle] = useState()

    const navigateToDetail = (vehicle) => {
        setVehicle(vehicle)
        setView('Detail')
    }

    return <>
        {view === 'Search' && <Search
            onDetail={navigateToDetail}
        />}
        {view === 'Detail' && <Detail
            vehicle={vehicle}
        />}
    </>
}