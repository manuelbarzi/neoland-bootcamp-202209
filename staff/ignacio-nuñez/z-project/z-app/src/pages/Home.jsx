import { useContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { Context } from "../components/Context"

function Home() {
    const { user } = useContext(Context)

    const userName = user && user.name

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <div className="z-10 border-2 shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                    <h2>{`Hola ${userName}`}</h2>
                </div>
            </div>
        </div>

    </main>
}

export default Home