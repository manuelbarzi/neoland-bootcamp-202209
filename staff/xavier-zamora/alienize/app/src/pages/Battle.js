import log from '../utils/coolog'
import retrieveGameData from '../logic/retrieveGameData'
import retrieveUser from '../logic/retrieveUser'
import changeTurn from '../logic/changeTurn'
import attack1 from '../logic/attack1'
import { useCallback, useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import { Link } from 'react-router-dom'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Battle() {
  log.info('Battle -> render')

  const [user, setUser] = useState()
  const [timer, setTimer] = useState(21)
  const [count, setCount] = useState(0)
  const [game, setGame] = useState()
  const { showAlert } = useContext(Context)

  useEffect(() => {
    log.info('Battle -> useEffect')
    gameMechanics()
  }, [count, timer])

  const gameMechanics = () => {
    if (!user) retrieveUserHandler()
    if (!game) retrieveGameDataHandler()

    if (game?.status !== 'finished') {
      retrieveGameDataHandler()
      if (game?.hasTurn === false) {
        if (game?.namePlayerOne === user?.name) {
          setTimeout(function countingTimer() {
            setTimer(timer - 1)
            if (timer < 1) {
              changeTurnHandler()
              setTimer(21)
            }
          }, 1000)
        } else {
          setTimeout(function countingTimer() {
            retrieveGameDataHandler()
            setTimer(21)
            setCount(count + 1)
          }, 4000)
        }
      }else {
        if (game?.namePlayerTwo === user?.name) {
          
          setTimeout(function countingTimer() {
            setTimer(timer - 1)
            if (timer < 1) {
              changeTurnHandler()
              setTimer(21)
            }
          }, 1000)
        } else {
          setTimeout(function countingTimer() {
            retrieveGameDataHandler()
            setTimer(21)
            setCount(count + 1)
            console.log(count + 1)
          }, 4000)
        }
      }
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

  const attack1Handler = (index) => {
    log.info('Battle -> attack1Handler')

    if (game?.namePlayerOne === user?.name && game?.hasTurn === false) {
      try {
        attack1(sessionStorage.token, index)
          .then(token => attack1(token))
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
      /*changeTurnHandler()*/
      setCount(count + 1)
    }

    if (game?.namePlayerTwo === user?.name && game?.hasTurn === true) {
      try {
        attack1(sessionStorage.token, index)
          .then(token => attack1(token))
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
      /*changeTurnHandler()*/
      setCount(count + 1)
    }
  }

  if(game?.playerOneAlien){
  return<main className="flex grid grid-cols-3 gap-4 justify-items-center p-2 h-screen w-full bg-blue-800 content-center">

      <div className='border-solid border-4 border-black p-8 inline-block bg-blue-500'>
      <div className='text-center pb-4'>
        <h2 className='pb-2'>{game?.namePlayerOne}</h2>
        <h2>{game?.playerOneAlien.name}</h2>
      </div>
      <h2>Health Points: {game?.playerOneAlien.stats.healthPoints}</h2>
      <h2>Especial Defense: {game?.playerOneAlien.stats.especialDefense}</h2>
      <h2>Fisic Defense: {game?.playerOneAlien.stats.fisicDefense}</h2>
      <h2>Fisic Attack: {game?.playerOneAlien.stats.fisicAttack}</h2>
      <h2>Especial Attack: {game?.playerOneAlien.stats.especialAttack}</h2>
      <h2>Psiquical Attack:{game?.playerOneAlien.stats.psiquicalAttack}</h2>
      <h2>Speed: {game?.playerOneAlien.stats.speed}</h2>
      <h2>Healing: {game?.playerOneAlien.stats.healing}</h2>
      <h2>Repeat: {game?.playerOneAlien.stats.repeat}</h2>
    </div>

    <div className='pt-20 text-center'>

      <h2 className='text-4xl'>{timer}</h2>
      <h2 className='pb-12 pt-8'> turn: {game?.turn}</h2>

      {game?.namePlayerOne === user?.name && game?.playerOneAlien.attacks.map((attacks, index) => {
          return (<button className='text-xs border-solid border-1 border-gray-100 bg-yellow-200 p-1 m-1 inline-block text-black' key={index} onClick={() => attack1Handler(index)} >{attacks}</button>)
        })}
      
      {game?.namePlayerTwo === user?.name && game?.playerTwoAlien.attacks.map((attacks, index) => {
        return (<button className='text-xs border-solid border-1 border-gray-100 bg-yellow-200 p-1 m-1 inline-block text-black' key={index} onClick={() => attack1Handler(index)} >{attacks}</button>)
      })}
    </div>

    <div className='border-solid border-4 border-black p-8 inline-block bg-blue-500 text-right'>
      <div className='text-center pb-4'>
        <h2 className='pb-2'>{game?.namePlayerTwo}</h2>
        <h2>{game?.playerTwoAlien.name}</h2>
      </div>
      <h2>Health Points: {game?.playerTwoAlien.stats.healthPoints}</h2>
      <h2>Especial Defense: {game?.playerTwoAlien.stats.especialDefense}</h2>
      <h2>Fisic Defense:{game?.playerTwoAlien.stats.fisicDefense}</h2>
      <h2>Fisic Attack:{game?.playerTwoAlien.stats.fisicAttack}</h2>
      <h2>Especial Attack: {game?.playerTwoAlien.stats.especialAttack}</h2>
      <h2>Psiquical Attack: {game?.playerTwoAlien.stats.psiquicalAttack}</h2>
      <h2>Speed: {game?.playerTwoAlien.stats.speed}</h2>
      <h2>Healing: {game?.playerTwoAlien.stats.healing}</h2>
      <h2>Repeat: {game?.playerTwoAlien.stats.repeat}</h2>
    </div>

  </main>
    }else {
      return <main className="flex justify-center pt-32 content-center animate-ping">
        <h2 className=''>Loading...</h2>
      </main>
    }
  }

export default Battle