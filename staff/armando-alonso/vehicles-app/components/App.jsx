const { useState } = React

function App () {
    const [view, setView] = useState('search')

    return <>
        {view === 'search' && <Search />}
        {view === 'detail' && <Detail />}
    </>
}