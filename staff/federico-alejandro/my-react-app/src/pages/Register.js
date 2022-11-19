/* eslint-disable jsx-a11y/anchor-is-valid */
import log from '../utils/coolog'
import registerUser from '../logic/registerUsers'


function Register({onNavigateToLogin, onRegisterUser}) {
    log.info('RegisterPage -> render')

    const handleNavigateToLogin = event => {
        event.preventDefault()

        onNavigateToLogin()

    }

    const handleRegister = event => {
        event.preventDefault()

        const {name: {value: name}, email: {value: email}, password: {value: password}} = event.target
        
        try {
            registerUser(name, email, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })

            alert('user registered')

            onRegisterUser()

        } catch (error) {

            alert(error.message)

            event.target.password.value = '' //mejorar
        }
    }


    return <main className='flex flex-col gap-6 w-60 mt-44 bg-indigo-600 rounded-lg h-80 shadow-2xl shadow-gray-900'>
        <form className='flex flex-col items-center py-1 gap-4 border-5 border-stone-900 h-96' onSubmit={handleRegister}>
            <label htmlFor='name' className='font-bold text-white italic'>Name</label>
            <input type='name' id='name' name='name' placeholder=' Input your name'  className=' bg-slate-300 border-b border-black rounded-md' />

            <lable htmlFor='email' className='font-bold text-white italic justify-start'>Email</lable>
            <input type='email' id='email' name='email' placeholder=' Input your email' className='bg-slate-300 border-b border-black rounded-md' />

            <label htmlFor='password' className='font-bold text-white italic'>Password</label>
            <input type='password' id='password' name='pasword' placeholder=' Input a password' className='bg-slate-300 border-b border-black rounded-md' pattern="[A-Za-z0-9S]{8,}" required="" title="Use min 8 characters for the password and no spaces" />

            <button className='font-bold underline text-white italic'>Register</button>
            <a href='' className='login--link font-bold text-white italic animate-bounce' onClick={handleNavigateToLogin}>Login</a>
        </form>
    </main>
}
export default Register