import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext";
import { AiOutlineLogout } from "react-icons/ai";


function Navbar() {


    const { user } = useContext(UserContext)

    const logoutHandler = () => {

    }



    return <header className="fixed flex justify-between bg-teal-600 w-full">

        <span id="username-header-span" className="text-white">Hello {user.name} what's up?</span>

        <button className=" text-white" onClick={logoutHandler}>logout</button>


    </header >



}

export default Navbar