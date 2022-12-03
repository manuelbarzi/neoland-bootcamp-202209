import log from '../utils/coolog'
import ButtonLogReg from "../components/ButtonLogReg"
import { Link } from 'react-router-dom'
import enableSearchGame from '../logic/enableSearchGame'
    

function Launcher() {
    log.info('Home -> render')

    const enableSearchGameHandler = event => {
      log.info('Launcher -> enableSearchGame')

      event.preventDefault()

      const token = sessionStorage.token

      try{
        enableSearchGame(token)
        .then(token => Launcher(token))
        .catch(error => {
            console.log('TODO')
        })
      } catch (error){
        console.log('TODO')
      }

    }


    return <main className="block h-screen w-full bg-blue-800">
        <nav className="grid grid-cols-3 gap-16 place-items-center justify-items-center bg-black">
            <h2 className="text-white">READY?</h2>
            <ButtonLogReg className="w-full mb-2 mt-2" onClick={enableSearchGameHandler}>READY</ButtonLogReg>
            <Link to="/"><h2 className="text-white">EXIT</h2></Link>
        </nav>
        <section className='flex place-content-center place-items-center w-full h-full'>
                <div className=" w-11/12 h-3/4 bg-yellow-100"></div>
        </section>
    </main>
}


export default Launcher