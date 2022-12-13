import log from '../utils/coolog'
import retrieveGameData from '../logic/retrieveGameData'
import retrieveUser from '../logic/retrieveUser'
import changeTurn from '../logic/changeTurn'
import atack1 from '../logic/atack1'
import { useCallback, useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { Link } from 'react-router-dom'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Battle() {
  log.info('Battle -> render')

  const [user, setUser] = useState()
  const [timer, setTimer] = useState(11)
  const [count, setCount] = useState(0)
  const [game, setGame] = useState()
  const { showAlert } = useContext(Context)

  useEffect(() => {
    log.info('Battle -> useEffect')
    retrieveUserHandler()
    gameMechanics()
  }, [count, timer])

  const gameMechanics = () => {
    if (game?.namePlayerTwo === undefined) {
      setTimeout(function counting() {
        retrieveGameDataHandler()
        setCount(count + 1)
      }, 1000)
    }else if(game?.namePlayerOne === user.name && game.hasTurn === true){
      setTimeout(function countingTimer() {
        setTimer(timer - 1)
        if(timer <= 0){
          changeTurnHandler()
          retrieveGameDataHandler()
        }
      }, 1000)
    }
    else if(game?.namePlayerTwo === user.name && game.hasTurn === false){
      setTimeout(function countingTimer() {
        setTimer(timer - 1)
        if(timer <= 0){
          changeTurnHandler()
          retrieveGameDataHandler()
        }
      }, 1000)
    }/*
    else{setTimeout(function countingTimer() {
      retrieveGameDataHandler()
    }, 10000)}*/
  }

  const retrieveUserHandler = () => {
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

  const changeTurnHandler = () => {
    log.info('Battle -> changeTurn')

    try {
      changeTurn(sessionStorage.token)
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

  const atack1Handler = event => {
    log.info('Battle -> atack1Handler')

    event.preventDefault()

    try {
      atack1(sessionStorage.token)
        .then(token => atack1(token))
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
    <h2 onClick={atack1Handler}>Shoot Atack1</h2>
    <h2>{timer}</h2>
    <h2>{game?.turn}</h2>
    <h2>{game?.namePlayerOne}</h2>
    <h2>{game?.playerOneAlien.name}</h2>
    <h2>{game?.playerOneAlien.stats.healthPoints}</h2>
  </main>
}

export default Battle