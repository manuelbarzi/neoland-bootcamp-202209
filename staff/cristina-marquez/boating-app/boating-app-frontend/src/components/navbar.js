import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../UserContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightFromBracket, faGear, faSailboat, faWater } from '@fortawesome/free-solid-svg-icons'
import appSessionManager from "../helpers/sessionManager"

function Navbar() {

    const { setUser } = useContext(UserContext)


    const logoutHandler = () => {
        try {
            setUser(null)
            appSessionManager.removeSessionFromLocalStorage()
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-darkblue text-white hover:text-gray-100 focus:text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="navbar-toggler text-white border-0 1hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
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
                        <span className="text-xl"> <FontAwesomeIcon icon={faWater} /></span>
                    </Link>

                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item px-2">
                            <Link to={'/boats'} className="nav-link " aria-current="page">Boats</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to={'/bookings'} className="nav-link" aria-current="page">Bookings</Link>
                        </li>
                    </ul>
                    <div className="flex justify-center">
                        <div>
                         <div className="dropdown relative">
                                          <button className="dropdown-toggle px-6 py-3.5 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md
                                                  hover:bg-blue-700 hover:shadow-lg
                                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                    active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex
                                                    items-center whitespace-nowrap "
                                                    type="button" id="dropdownMenuButton1d" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <FontAwesomeIcon icon={faUser} />
                                          </button>
                                      <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left  rounded-lg shadow-lg mt-1 bg-clip-padding border-none"
                                                     aria-labelledby="dropdownMenuButton1d">
                                             <li className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                             <Link to={'/settings'} className="nav-link" aria-current="page"> <FontAwesomeIcon icon={faGear} /> Settings</Link>
                                             </li>

                                            <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                                            <li className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" onClick={logoutHandler}>
                                           <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                                             </li>
                                      </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </nav>

    )
}
export default Navbar
