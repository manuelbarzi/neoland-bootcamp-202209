import log from '../utils/coolog'
import retrieveGameId from '../logic/retrieveGameId'
import randomPick from '../logic/randomPicks'
import retrieveUser from '../logic/retrieveUser'
import retrieveGameData from '../logic/retrieveGameData'
import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Pick() {
  log.info('Pick -> render')
 
  const [count, setCount] = useState(0)
  const [user, setUser] = useState()
  const [gameId, setGameId] = useState()
  const [game, setGame] = useState()
  const { showAlert, navBattle } = useContext(Context)

  useEffect(() => {
    pickPageMechanics()
  }, [user, gameId, game])

  const pickPageMechanics = () => {
    if(user === undefined) retrieveUserIdHandler()
    if(user !== undefined && gameId === undefined){ 
      retrieveGameIdHandler()
    }
    if(gameId !== undefined && game === undefined){
      retrieveGameDataHandler()
    }
    if(game !== undefined && game?.playerTwoName !== undefined){
      randomPickHandler()
      navBattle()
    }
  }

  const retrieveGameDataHandler = () => {
    log.info('Battle -> retrieveGameData')

    try {
      retrieveGameData(sessionStorage.token)
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
  }

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
    log.info('Launcher -> retrieveGameId')

    try {
      retrieveGameId(sessionStorage.token)
        .then(gameId => setGameId(gameId))
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
        .then()
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
  </main>
}


export default Pick