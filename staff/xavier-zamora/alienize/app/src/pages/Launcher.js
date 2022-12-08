import log from '../utils/coolog'
import ButtonLogReg from "../components/ButtonLogReg"
import { Link, Navigate } from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Launcher() {
    log.info('Home -> render')

    const { showAlert } = useContext(Context)
    const [user, setUser] = useState()

    useEffect(() => {
      try {
          retrieveUser(sessionStorage.token)
              .then(user => setUser(user))
              .catch(error => {
                  if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                      showAlert(error.message, 'warn')
                  else if (error instanceof AuthError || error instanceof NotFoundError)
                      showAlert(error.message, 'error')
                  else
                      showAlert(error.message, 'fatal')
              })
      } catch (error) {
          if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
              showAlert(error.message, 'warn')
          else
              showAlert(error.message, 'fatal')
      }
  }, [])

    return <main className="block h-screen w-full bg-blue-800">
        <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
            <h2 className="text-white">{user?.name}</h2>
            <Link to="/Pick"><ButtonLogReg className="w-full mb-2 mt-2">READY</ButtonLogReg></Link>
            <Link to="/"><h2 className="text-white">EXIT</h2></Link>
        </nav>
        <section className='flex place-content-center place-items-center w-full h-full'>
                <div className=" w-11/12 h-3/4 bg-yellow-100"></div>
        </section>
    </main>
}


export default Launcher