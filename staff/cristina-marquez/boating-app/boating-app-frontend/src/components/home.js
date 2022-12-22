import { Outlet } from "react-router-dom";
import Navbar from "./navbar"
import PortsList from "./portslist";

function Home() {

    return (<>

        <Navbar></Navbar>
        <Outlet />
        <main className="w-screen h-screen bg-bone pt-20">
            <PortsList></PortsList>
        </main>
    </>
    );
}

export default Home 