import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'
import { useContext} from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import LOGO from '../img/LOGO.png'

import carton from '../img/carton.png'
import desecho from '../img/desecho.png'
import organico from '../img/organico.png'
import plastico from '../img/plastico.png'
import vidrio from '../img/vidrio.png'

import papelycarton from '../img/papelycarton.png'
import botellasplastico from '../img/botellasplastico.png'
import botellasvidrio from '../img/botellasvidrio.png'
import frutaverdura from '../img/frutaverdura.png'
import residuos from '../img/residuos.png'




const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Login() {
    log.info('Login -> render')

    const { login, showAlert } = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password)
                .then(token => login(token))
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

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    const showContent = event => {
        const { id } = event.target

        document.querySelector(`#${id}`).style.opacity ? document.querySelector(`#${id}`).style.opacity = '' :
            document.querySelector(`#${id}`).style.opacity = '0.1'
    }

    return <main className='h-full flex flex-col items-center'>
        <section className='h-full w-full'>
            <div className='flex bg-BgImage justify-end'>
                <img src={LOGO} alt='Logo' />
            </div>
        </section>
        <section className='bg-[#55BDDB] h-full w-full p-8'>
            <h2 className='font-bold'>reciclar</h2>
            <h3>Info sobre pilas, aceite, aerosoles, que deben ir en los puntos verdes</h3>
            <button className='bg-green-400 gap-2  font-bold text-white border-2 p-2 border-green-400 rounded-xl underline'>INFO</button>
        </section>
        <section className='bg-[#55BDDB] h-full w-full p-8'>
            <ul className='flex h-80 justify-around'>
                <div>
                    <img src={carton} alt='carton' id='carton' className='h-80 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={papelycarton} alt='papelycarton' className='h-80 absolute shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={desecho} alt='desecho' id='desecho' className='h-80 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={residuos} alt='residuos' className='h-80 absolute shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={organico} alt='organico' id='organico' className='h-80 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={frutaverdura} alt='frutaverdura' className='h-80 absolute shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={plastico} alt='plastico' id='plastico' className='h-80 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={botellasplastico} alt='botellasplastico' className='h-80 absolute shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={vidrio} alt='vidrio' id='vidrio' className='h-80 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={botellasvidrio} alt='botellasvidrio' className='h-80 absolute shadow-2xl shadow-slate-800' />           
                </div>
            </ul>
        </section>
        <form className='flex flex-col justify-start m-4 gap-2 border-2 border-slate-600 rounded-xl p-6' onSubmit={handleLogin}>
            <label htmlFor='email' className='container__item--left'>E-mail</label>
            <input name='email' type='email' id='email' placeholder=' input your e-mail' className='border-b border-black text-black rounded-xl' />
            <label htmlFor='password' className='container__item--left'>Password</label>
            <input name='password' type='password' id='password' placeholder=' input your password' className='border-b border-black text-black rounded-xl' />
            <button className='bg-green-400 gap-2  font-bold text-white border-2 p-2 border-green-400 rounded-xl underline'>Login</button>
        </form>
        <Link to='/register' className='bg-green-400 gap-2  font-bold text-white border-2 p-2 border-green-400 rounded-xl underline'>Register</Link>
        <section className='bg-slate-200 h-full w-full'>

        </section>
        {/* {cuboVisible && <CuboAzul onShow={handleOpenCuboVisible} onClose={closeCuboVisible} />} */}
    </main>
}

export default Login