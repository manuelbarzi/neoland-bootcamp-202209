import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext";
import { AiOutlineLogout } from "react-icons/ai";


function Navbar() {

    const { user, setUser } = useContext(UserContext)


    const logoutHandler = () => {
        try {
            setUser(null)

        } catch (error) {
            alert(error.message)
        }

    }

    return <header className="fixed flex justify-between bg-teal-600 w-full p-3 text-white">

        <span id="username-header-span" >Hello {user.name} what's up?</span>
        <button onClick={logoutHandler}><AiOutlineLogout /> </button>


    </header >

}

export default Navbar