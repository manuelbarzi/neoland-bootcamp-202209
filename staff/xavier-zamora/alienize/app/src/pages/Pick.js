import log from '../utils/coolog'
import randomPick from '../logic/randomPicks'
import retrieveUser from '../logic/retrieveUser'
import createGame from '../logic/createGame'
import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Pick() {
  debugger
  log.info('Pick -> render')

  const { showAlert, navBattle } = useContext(Context)
  const token = sessionStorage.token
  const [user, setUser] = useState()
  const [game, setGame] = useState()

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
    /*createGameHandler()*/
    /*randomPickHandler(token)*/
    navBattle()
  }, [])

  /*const createGameHandler = () => {
    try {
      createGame(token)
        .then(game => setGame(game))
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
  }*/

  /*const randomPickHandler = () => {
    log.info('Launcher -> createGame')

    const token = sessionStorage.token

    try {
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
    } catch (error) {
      if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
        showAlert(error.message, 'warn')
      else
        showAlert(error.message, 'fatal')
    }
  }*/

  return <main className="block h-screen w-full bg-blue-800">
  </main>
}


export default Pick