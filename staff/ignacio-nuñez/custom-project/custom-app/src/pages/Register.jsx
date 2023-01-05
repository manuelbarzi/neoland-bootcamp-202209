import registerUser from "../logic/register-user"
import { Link, useNavigate} from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    const onRegisterUser = event => {
        event.preventDefault()

        const {name:{value:name}, email: {value:email}, password:{value:password}} = event.target

        try {
            registerUser(name, email, password)
            .then(() =>{
                alert('user correctly registered')

                navigate('/login')
            })
            .catch(error =>{
                alert(error.message)

                event.target.password.value = ''
            })
        } catch (error) {
            alert(error.message)

            event.target.password.value = ''
        }
    }

    return <div className="flex h-screen justify-center items-center bg-slate-100">
        <form onSubmit={onRegisterUser} className="w-1/4 shadow-lg shadow-slate-400 border-2 bg-teal-300 flex flex-col gap-2 justify-center items-center p-8 rounded-lg">
            <h2 className='text-2xl font-bold'>Register</h2>
            <label htmlFor="name" className="self-start">Name</label>
            <input autoFocus className="outline-none p-1 w-full rounded-lg bg-slate-100" type="text" placeholder="Input your Name" name="name" id="name" />
            <label htmlFor="email" className="self-start">E-mail</label>
            <input className="outline-none p-1 w-full rounded-lg bg-slate-100" type="email" placeholder="Input your E-mail" name="email" id="email" />
            <label htmlFor="password" className="self-start">Password</label>
            <input className="outline-none p-1 w-full rounded-lg bg-slate-100" type="password" placeholder="Input you password" name="password" id="password" />
            <button className="p-1 rounded-lg mt-3.5 w-full bg-slate-100">Register</button>
            <hr className="w-full border-black mt-3.5" />
            <div className="div-register mt-2">
                <p>Already have an account?</p>
                <Link to='/login' className="p-1 block text-center rounded-lg mt-3.5 w-full bg-slate-100">Login</Link>
            </div>
        </form>
    </div>
}       

export default Register