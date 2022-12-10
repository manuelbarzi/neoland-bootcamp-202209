import log from '../utils/coolog'
import ButtonLogReg from "../components/ButtonLogReg"
import { Link, Navigate } from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import createGame from '../logic/createGame'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import { useNavigate } from 'react-router-dom'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Launcher() {
    log.info('Launcher -> render')

    const { showAlert, navPick } = useContext(Context)
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


    const createGameHandler = event => {
        log.info('Launcher -> createGameHandler')
  
        event.preventDefault()
  
        const token = sessionStorage.token
  
        try{
          createGame(token, user.name)
          .then(token => Launcher(token))
          .catch(error => {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            showAlert(error.message, 'warn')
        else if (error instanceof AuthError || error instanceof NotFoundError)
            showAlert(error.message, 'error')
        else
            showAlert(error.message, 'fatal')
          })
        } catch (error){
          console.log('TODO')
        }
        navPick()
      }

  return <main className="block h-screen w-full bg-blue-800">
      <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
          <h2 className="text-white">{user?.name}</h2>
          <ButtonLogReg className="w-full mb-2 mt-2" onClick={createGameHandler}>READY</ButtonLogReg>
          <Link to="/"><h2 className="text-white">EXIT</h2></Link>
      </nav>
      <section className='flex place-content-center place-items-center w-full h-full'>
              <div className=" w-11/12 h-3/4 bg-yellow-100"></div>
      </section>
  </main>
}


export default Launcher
