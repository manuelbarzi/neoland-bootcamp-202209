import log from '../utils/coolog'
import randomPick from '../logic/randomPicks'
import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { Link } from 'react-router-dom'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Pick() {
    log.info('Home -> render')

    const { showAlert } = useContext(Context)

    const randomPickHandler = event => {
        log.info('Launcher -> createGame')
  
        event.preventDefault()
  
        const token = sessionStorage.token
  
        try{
          randomPick(token)
          .then(token => randomPick(token))
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
        <h2 onClick={randomPickHandler}>READY</h2>
        <Link to="/Battle"><h2>Battle</h2></Link>
    </main>
}


export default Pick