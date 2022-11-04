const { useState } = React

function App() {
    const [view, setView] = useState('Search')

    const navigateToDetail = () => setView('Detail')

    return <>
        {view === 'Search' && <Search
            onVehicleClick={navigateToDetail}
        />}
        {view === 'Detail' && <Detail />}
    </>
}