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

  const [selector, setSelector] = useState()
  const [user, setUser] = useState()
  const [timer, setTimer] = useState(21)
  const [count, setCount] = useState(0)
  const [game, setGame] = useState()
  const { showAlert } = useContext(Context)

  useEffect(() => {
    log.info('Battle -> useEffect')
    gameMechanics()
  }, [count, timer])

  const selectorSelect = () => {
    if(game?.namePlayerOne === user?.name) setSelector(0)
    if(game?.namePlayerTwo === user?.name) setSelector(1)
  }

  const gameMechanics = () => {
    if(!user){
       retrieveUserHandler()
    }
    if(game?.turn >= 1){
      retrieveGameDataHandler()
    }
    selectorSelect()
    if(selector){
      if(game?.hasTurn === false){
        setTimeout(function countingTimer() {
          setTimer(timer - 1)
          if(timer < 1  ){
            changeTurnHandler()
            setTimer(21)
          }
        }, 1000)
      }else{setTimeout(function countingTimer() {
        retrieveGameDataHandler()
        setCount(count + 1)
      }, 10000)}
    }
    if(!selector){
      if(game?.hasTurn === true){
        setTimeout(function countingTimer() {
          setTimer(timer - 1)
          if(timer < 1  ){
            changeTurnHandler()
            setTimer(21)
          }
        }, 1000)
      }else{setTimeout(function countingTimer() {
        retrieveGameDataHandler()
        setCount(count + 1)
      }, 10000)}
    }
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
    <h2>{timer}</h2>
    <h2>{game?.turn}</h2>
    <h2>{game?.namePlayerOne}</h2>
    <h2>{game?.playerOneAlien.name}</h2>
    <h2>Health Points: {game?.playerOneAlien.stats.healthPoints}</h2>
    <h2>Especial Defense: {game?.playerOneAlien.stats.especialDefense}</h2>
    <h2>Fisic Defense: {game?.playerOneAlien.stats.fisicDefense}</h2>
    <h2>Fisic Attack: {game?.playerOneAlien.stats.fisicAttack}</h2>
    <h2>Especial Attack: {game?.playerOneAlien.stats.especialAttack}</h2>
    <h2>Psiquical Attack:{game?.playerOneAlien.stats.psiquicalAttack}</h2>
    <h2>Speed: {game?.playerOneAlien.stats.speed}</h2>
    <h2>Healing: {game?.playerOneAlien.stats.healing}</h2>
    <h2>Repeat: {game?.playerOneAlien.stats.repeat}</h2>
    <h2>{game?.playerOneAlien.attacks[0]}</h2>
    <h2>{game?.playerOneAlien.attacks[1]}</h2>
    <h2>{game?.playerOneAlien.attacks[2]}</h2>
    <h2>{game?.playerOneAlien.attacks[3]}</h2>

    <h2>{game?.namePlayerTwo}</h2>
    <h2>{game?.playerTwoAlien.name}</h2>
    <h2>Health Points: {game?.playerTwoAlien.stats.healthPoints}</h2>
    <h2>Especial Defense: {game?.playerTwoAlien.stats.especialDefense}</h2>
    <h2>Fisic Defense:{game?.playerTwoAlien.stats.fisicDefense}</h2>
    <h2>Fisic Attack:{game?.playerTwoAlien.stats.fisicAttack}</h2>
    <h2>Especial Attack: {game?.playerTwoAlien.stats.especialAttack}</h2>
    <h2>Psiquical Attack: {game?.playerTwoAlien.stats.psiquicalAttack}</h2>
    <h2>Speed: {game?.playerTwoAlien.stats.speed}</h2>
    <h2>Healing: {game?.playerTwoAlien.stats.healing}</h2>
    <h2>Repeat: {game?.playerTwoAlien.stats.repeat}</h2>
    <h2>{game?.playerTwoAlien.attacks[0]}</h2>
    <h2>{game?.playerTwoAlien.attacks[1]}</h2>
    <h2>{game?.playerTwoAlien.attacks[2]}</h2>
    <h2>{game?.playerTwoAlien.attacks[3]}</h2>
  </main>
}

export default Battle