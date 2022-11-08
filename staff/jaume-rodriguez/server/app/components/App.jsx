const { useState } = React

function App() {
    const [view, setView] = useState('Search')
    const [vehicle, setVehicle] = useState()

    // OBTENEMOS LA INFORMACIÓN RECIBIDA VIA PROP DE OTRAS PÁGINAS
    const navigateToDetail = (vehicle) => {
        setVehicle(vehicle)
        setView('Detail')
    }

    const navigateToSearch = () => {
        setView('Search')
    }

    return <>
        {view === 'Search' && <Search
            onDetail={navigateToDetail}
        />}
        {view === 'Detail' && <Detail
            vehicle={vehicle}
            backLink={navigateToSearch}
        />}
    </>
}