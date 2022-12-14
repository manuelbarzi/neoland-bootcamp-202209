import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../UserContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const { user, setUser } = useContext(UserContext)


    const logoutHandler = () => {
        try {
            setUser(null)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-darkblue text-white hover:text-gray-100 focus:text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <Link to={'/ports'} className="nav-link" aria-current="page">
                        <span className="text-xl">Boating App</span>
                    </Link>

                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item px-2">
                            <Link to={'/boats'} className="nav-link " aria-current="page">Boats</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to={'/bookings'} className="nav-link" aria-current="page">Bookings</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to={'/bookings'} className="nav-link text-white" aria-current="page"><FontAwesomeIcon icon={faUser} /></Link>

                        </li>

                    </ul>

                </div>

            </div>
        </nav>

    )
}
export default Navbar