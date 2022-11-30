import { useState } from 'react'
import authenticateUser from '../logic/authenticateUser'
import logo from '../img/logologintrello.png';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'

function Login(props) {
    const { login } = useContext(Context)
    const [inputPasswordText, setInputPasswordText] = useState(true)

    // FORM INPUTS VALUE
    const handleInputPasswordText = () => {
        setInputPasswordText(!inputPasswordText);
    }

    const handleInputEmailValue = (event) => {
        const newValue = event.target.value
        props.onInputEmailValue(newValue)
    }

    const handleInputPasswordValue = (event) => {
        const newValue = event.target.value
        props.onInputPasswordValue(newValue)
    }

    // FORM SUBMITS
    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const emailInput = form.email
        const passwordInput = form.password
        const email = emailInput.value
        const password = passwordInput.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    return
                }
                login(token)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <main className="h-screen" >
            <div className="h-full flex flex-col flex-wrap justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500">
                <h1 className="text-center text-white text-lg pb-4">
                    Sign in to continue to Home
                </h1>
                <form className="flex flex-col justify-start w-96 gap-1 px-12 py-14 rounded bg-white" onSubmit={handleSubmit}>
                    <img
                        src={logo}
                        alt="logo"
                        className="self-center w-2/5 mb-8"
                    />
                    <label htmlFor="loginEmail"></label>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        id="loginEmail"
                        required=""
                        title="Please use @ and . on your email"
                        defaultValue={props.registerInputEmailValue}
                        onChange={handleInputEmailValue}
                        className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2"
                    />
                    <label htmlFor="loginPassword"></label>
                    <input
                        name='password'
                        type={inputPasswordText ? 'password' : 'text'}
                        placeholder="Password"
                        id="loginPassword"
                        required=""
                        title="Please enter at least 8 characters without spaces"
                        defaultValue={props.registerInputPasswordValue}
                        onChange={handleInputPasswordValue}
                        className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2"
                    />
                    <span className="flex">
                        <input
                            type="checkbox"
                            onChange={handleInputPasswordText} />
                        <label className="text-xs mx-2 my-3">Show password</label>
                    </span>
                    <button className="w-full h-8 self-start rounded border-none text-white font-bold bg-sky-700">
                        Sign in
                    </button>
                </form>
                <Link to="/register" className="mt-2 text-white text-base hover:text-black">
                    Create an account
                </Link>
            </div>
        </main>
    );
}

export default Login