import { useContext } from 'react'
import Context from './Context'
import { Link } from 'react-router-dom'
import { Dropdown, Navbar, Avatar } from 'flowbite-react'

const LandingNavbar = () => {

    return (      
      <div className="bg-[#3E5064]">
        <div className="pt-3 pb-3 justify-between items-center mx-auto max-w-screen-2xl">
          <Navbar  fluid={true} rounded={true} className="bg-[#3E5064]">
            <Navbar.Brand href="https://flowbite.com/">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" rounded={true} className="hover:text-[#61FFB6]"/>}>
                <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="block text-sm text-[#eff2f5]">
            <Navbar.Link href="/navbars" className="block text-sm text-[#eff2f5]"><Link to='/landing'>Home</Link></Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div> 
    )
}

export default LandingNavbar