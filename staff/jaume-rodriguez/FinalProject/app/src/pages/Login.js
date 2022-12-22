import { useState } from 'react'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'
import ButtonLogin from '../img/button-login.png';
import ButtonLoginHover from '../img/button-login-hover.png';
import logo from '../img/logo-wa.png';
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Login(props) {
    const { login, showAlert } = useContext(Context)
    const [inputPasswordText, setInputPasswordText] = useState(true)
    const [hoverButton, setHoverButton] = useState(false)

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
        }
    }

    return (
        <main className="min-h-screen flex flex-col bg-[#191919]" >
            <div className="relative flex flex-grow font-alata h-full flex-col  justify-center items-center bg-[url('/src/img/bg-login.jpg')] bg-no-repeat bg-center">
                <img
                    className='pt-[3.25rem] mb-5'
                    src={logo}
                    alt="logo" />

                <form className="flex flex-col justify-start w-96 gap-1 px-12 pb-12 rounded bg-inherit flex-wrap -mt-[0.5rem]" onSubmit={handleSubmit}>
                    <div className="mb-16"></div>
                    <div className="mb-[0.25rem]"></div>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        id="loginEmail"
                        required=""
                        title="Please use @ and . on your email"
                        defaultValue={props.registerInputEmailValue}
                        onChange={handleInputEmailValue}
                        className="pl-11 pr-4 mb-2.5 h-10 bg-inherit text-white text-sm rounded-xl autofill:bg-black mr-1 pt-1"
                    />
                    <div></div>
                    <input
                        name='password'
                        type={inputPasswordText ? 'password' : 'text'}
                        placeholder="Password"
                        id="loginPassword"
                        required=""
                        title="Please enter at least 8 characters without spaces"
                        defaultValue={props.registerInputPasswordValue}
                        onChange={handleInputPasswordValue}
                        className="pl-11 pr-4 mb-5 h-10 bg-inherit text-white text-sm rounded-xl mr-1 pt-1"
                    />
                    <label className="flex">
                        <input
                            type="checkbox"
                            onChange={handleInputPasswordText}
                            className="ml-1.5 w-4 h-4 accent-[#252130] appearance-none bg-[#252130] checked:bg-[#2187d3] checked:border checked:border-[#2187d3] checked:rounded focus:outline-none mt-1"
                        />
                    </label>
                    <button className='mt-9 -ml-1 &{hover:activeHover}'
                        onMouseEnter={() => setHoverButton(false)}
                        onMouseLeave={() => setHoverButton(true)}>
                        <img
                            src={hoverButton ? ButtonLogin : ButtonLoginHover}
                            alt="login" />
                    </button>
                    <div className='flex flex-row  mt-4 items-center mb-1'>
                        <Link to="/register" className="text-[#5175bd] text-lg hover:text-[#2187d3]">
                            Sign up
                        </Link>
                        <p className='text-white text-sm text-center pt-0.5 ml-auto pr-1'>Forgot password?</p>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login