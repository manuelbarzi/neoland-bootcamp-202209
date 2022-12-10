import log from '../utils/coolog'
import retrieveGameId from '../logic/retrieveGameId'
import randomPick from '../logic/randomPicks'
import retrieveUser from '../logic/retrieveUser'
import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Pick() {
  log.info('Pick -> render')
 
  const [user, setUser] = useState()
  const [gameId, setGame] = useState()
  const { showAlert, navBattle } = useContext(Context)

  useEffect(() => {
    
    retrieveUserIdHandler()
    retrieveGameIdHandler()
    /*navBattle()*/
  }, [])

  const retrieveUserIdHandler = () => {
    log.info('Launcher -> retrieveUserIdHandler')

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
  }

  const retrieveGameIdHandler = () => {
    log.info('Launcher -> createGame')

    try {
      retrieveGameId(sessionStorage.token)
        .then(gameId => setGame(gameId))
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
  }


  const randomPickHandler = () => {
    log.info('Launcher -> randomPickHandler')

    const userName = user.name
    const game = gameId
  
    try {
      randomPick(sessionStorage.token, userName, game)
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
  }

  return <main className="block h-screen w-full bg-blue-800">
    <h2>{user?.name}</h2>
    <h2>{gameId}</h2>
    <h2 onClick={randomPickHandler}>GO FIGHT!</h2>
  </main>
}


export default Pick