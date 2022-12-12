import log from '../utils/coolog'
import LOGO from '../img/LOGO.png'
import { useState } from 'react'
//import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'


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
import reciclado from '../img/reciclado.png'


function Login() {
    log.info('Login -> render')

    const [loginForm, setLoginForm] = useState(false)
    const [registerForm, setRegisterForm] = useState(false)

    const login = () => loginForm === false ? setLoginForm(true) : setLoginForm(false)
    const closeLoginForm = () => setLoginForm(false)

    const register = () => registerForm === false ? setRegisterForm(true) : setRegisterForm(false)
    const closeRegisterForm = () => setRegisterForm(false)

    const showContent = event => {
        const { id } = event.target

        document.querySelector(`#${id}`).style.opacity ? document.querySelector(`#${id}`).style.opacity = '' :
            document.querySelector(`#${id}`).style.opacity = '0.1'
    }

    return <main className='h-full flex flex-col'>
        <section className='h-full w-full'>
            <div className='flex bg-BgImage bg-cover justify-end p-20'>
                <img src={LOGO} alt='Logo' className='pr-14' />
            </div>
        </section>

        <section className='bg-[#55BDDB]  w-full p-4'>
            <div className='flex h-80 justify-around content-center items-center'>
                <div className='flex flex-col justify-center items-center pt-8'>
                    <h2 className='font-bold text-white text-3xl'>RECICLA:¿Cómo y dónde?</h2>
                    <p className='text-white text-xl'>Si tienes pilas y baterías que tirar, aerosoles, aceite usado</p>
                    <p className='text-white text-xl'>de cocina o auto, neumáticos, artículos electrónicos,</p>
                    <p className='text-white text-xl'>llévalos a un punto limpio. ¿Sabes dónde quede el más próximo?</p>
                    <button className='bg-green-400 h-8 w-20 m-8 text-white border-2  border-green-400 rounded-xl '>Info</button>
                </div>
                <img src={reciclado} alt='reciclado' className='flex p-8 self-end' />
            </div>
        </section>

        <section className='bg-[#55BDDB]  h-full w-full  p-8'>
            <span className='flex h-80 justify-around'>
                <div>
                    <img src={carton} alt='carton' id='carton' className=' h-60 mt-6 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={papelycarton} alt='papelycarton' className=' h-60 mt-6 shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={desecho} alt='desecho' id='desecho' className='h-60 mt-6 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={residuos} alt='residuos' className='h-60  shadow-2xl mt-6 shadow-slate-800' />
                </div>
                <div>
                    <img src={organico} alt='organico' id='organico' className='h-60 mt-6 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={frutaverdura} alt='frutaverdura' className='h-60 mt-6 shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={plastico} alt='plastico' id='plastico' className='h-60 mt-6 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={botellasplastico} alt='botellasplastico' className='h-60 mt-6 shadow-2xl shadow-slate-800' />
                </div>
                <div>
                    <img src={vidrio} alt='vidrio' id='vidrio' className='h-60 mt-6 absolute shadow-2xl shadow-slate-800 z-10' onClick={showContent} />
                    <img src={botellasvidrio} alt='botellasvidrio' className='h-60 mt-6 shadow-2xl shadow-slate-800' />
                </div>
            </span>
        </section>
        <section className='bg-slate-600 w-full p-14'>
            <div className='flex justify-around content-center items-center'>
                <div className='flex flex-col text-white text-xl'>
                    <h2 className='font-bold text-white text-3xl'>Te ayudamos a REUTILIZAR</h2>
                    <p>Ingresa a nuestra comunidad y publica</p>
                    <p>aquellos artículos que quieras regalar o vender.</p>
                    <p>¡Regístrate y comienza hoy!.</p>
                </div>
                <div className='flex flex-col items-center border-white border-2 rounded-xl p-5'>
                    <button onClick={login} className=' bg-green-400 h-8 w-20 m-4 text-white border-2  border-green-400 rounded-xl '>Login</button>
                    <hr className='border-white w-20' />
                    <button onClick={register} className='bg-green-400 h-8 w-20 m-4 text-white border-2 border-green-400 rounded-xl '>Register</button>
                </div>
            </div>
        </section>
        <section>
            <p>Apps para reciclar</p>
            <p>Podcast, reproduccion desde spotify</p>
            {/* <a href='/open.spotify.com/show/1c6WmJLtoiees9kxJcpTQ8?si=bfd233837d684f65' target='blank'>spotify</a>
            <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script> */}
            {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/1c6WmJLtoiees9kxJcpTQ8?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        
        </section>
        {loginForm && <LoginForm onClose={closeLoginForm} />}
        {registerForm && <RegisterForm onClose={closeRegisterForm} />}

    </main>
}

export default Login