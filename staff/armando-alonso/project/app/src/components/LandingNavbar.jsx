import { useContext } from 'react'
import Context from './Context'
import { Link } from 'react-router-dom'
import { Dropdown, Navbar, Avatar } from 'flowbite-react'

const LandingNavbar = () => {

  const { logout } = useContext(Context)


    return (      
      <div className="bg-[#3E5064]">
        <div className="pt-3 pb-3 justify-between items-center mx-auto max-w-screen-2xl">
          <Navbar  fluid={true} rounded={true} className="bg-[#3E5064]">
            <Navbar.Brand>
            <Link to='/'><img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /></Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" rounded={true} className="hover:text-[#61FFB6]"/>}>
                <Dropdown.Header>
                  <span className="block text-sm text-[#ADB5BC]">{sessionStorage.name}</span>
                  <span className="block truncate text-sm font-medium">{sessionStorage.email}</span>
                </Dropdown.Header>
                <Dropdown.Item><Link to="/createNews">Gestion Noticias</Link></Dropdown.Item>
                <Dropdown.Item>Ajustes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="block text-sm text-[#eff2f5]">
              {/* <Dropdown label="Home" inline={true}>
                <Dropdown.Item href="/navbars" active={true}><Link to='/'>Home</Link></Dropdown.Item>
              </Dropdown> */}
              <Navbar.Link href="/navbars" className="block text-sm text-[#eff2f5]"><Link to='/'>Home</Link></Navbar.Link>
              {/* <Navbar.Link href="/navbars" className="block text-sm text-[#eff2f5]">Quejas</Navbar.Link>
              <Navbar.Link href="/navbars" className="block text-sm text-[#eff2f5]">Contacto</Navbar.Link> */}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div> 
    )
}

export default LandingNavbar