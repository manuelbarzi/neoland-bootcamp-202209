import { useContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { Context } from "../components/Context"
import SearchButton from "../components/SearchButton"
import SearchPanel from "../components/SearchPanel"

function Home() {
    const [searchPanelStatus, setSearchPanelStatus] = useState()
    const { user } = useContext(Context)

    const onSearchClick = () => {
        setSearchPanelStatus(true)
    }

    const closeSearchPanel = () => {
        setSearchPanelStatus()
    }

    const userName = user && user.name

    return <main className="min-h-screen bg-slate-100">
        <SearchButton
            onSearchClick={onSearchClick}
        />
         {searchPanelStatus && <SearchPanel
            className={"inset-x-[2.5%] inset-y-[15%] absolute"} 
            closeSearchPanel={closeSearchPanel}
        />}
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mb-20">
                <div className="z-10 border-2 shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                    <h2>{`Hola ${userName}`}</h2>
                </div>
            </div>
        </div>
        <NavBar
        />
    </main>
}

export default Home