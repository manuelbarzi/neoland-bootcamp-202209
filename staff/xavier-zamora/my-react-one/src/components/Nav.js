import ButtonLogReg from "./ButtonLogReg" 

function Nav({ children, className, onClick }) {
    return <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
        <h2 className="text-white">name</h2> 
        <ButtonLogReg className="w-full mb-2 mt-2">FIGHT</ButtonLogReg>
        <h2 className="text-white">settings</h2>
    </nav>
}

export default Nav