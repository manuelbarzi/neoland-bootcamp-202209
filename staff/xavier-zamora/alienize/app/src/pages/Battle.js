import log from '../utils/coolog'
import retrieveUser from '../logic/retrieveUser'
import atack1 from '../logic/atack1'
import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { Link } from 'react-router-dom'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Battle() {
    log.info('Battle -> render')

    const [user, setUser] = useState()
    const { showAlert } = useContext(Context)
    const token = sessionStorage.token

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

    const atack1Handler = event => {
        log.info('Battle -> atack1Handler')
  
        event.preventDefault()
  
        try{
          atack1(token)
          .then(token => atack1(token))
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
      }

    return <main className="block h-screen w-full bg-blue-800">
        <h2 onClick={atack1Handler}>Shoot Atack1</h2>
        <h2>{user?.name}</h2>
    </main>
}

export default Battle