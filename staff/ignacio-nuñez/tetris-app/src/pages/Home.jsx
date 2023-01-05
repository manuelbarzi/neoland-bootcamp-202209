import TheLong from "../Figures/TheLong"

function Home(){

    return <main className="min-h-screen">
        <div className="flex h-screen justify-center items-center">
        
        <div className="grid grid-cols-8 grid-rows-[repeat(20,minmax(0,1fr))] border-solid border-black border-2 h-4/6 w-1/6">
        <TheLong />
        </div>
        </div>
    </main>
}

export default Home