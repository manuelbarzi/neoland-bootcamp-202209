import { useState } from 'react'
import registerUser from '../logic/registerUser'
import ButtonRegister from '../img/button-register.png';
import ButtonRegisterHover from '../img/button-register-hover.png';
import logo from '../img/logo-wa.png';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function Register(props) {
    const { login, showAlert } = useContext(Context)
    const [hoverButton, setHoverButton] = useState(false)

    // FORM INPUTS VALUE
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

        const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target

        try {
            registerUser(name, email, password)
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
            <div className="relative flex flex-grow font-alata h-full flex flex-col  justify-center items-center bg-[url('/src/img/bg-register.jpg')] bg-no-repeat bg-center">
                <img
                    src={logo}
                    alt="logo"
                    className='mb-3'
                />
                <form className="flex flex-col justify-start w-96 gap-1 px-12 pb-12 rounded bg-inherit flex-wrap" onSubmit={handleSubmit}>
                    <div className="mb-12"></div>
                    <div className="mb-5"></div>
                    <input
                        name='name'
                        type="text"
                        placeholder="Username"
                        id="registerName"
                        required=""
                        title="Please enter at least 1 character"
                        className="pl-11 pr-4 mb-2.5 h-10 bg-inherit text-white text-sm rounded-xl autofill:bg-black mr-1 pt-1"
                        defaultValue={props.loginInputNameValue}
                    />
                    <label htmlFor="registerEmail"></label>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        id="registerEmail"
                        title="Please use @ and . on your email"
                        className="pl-11 pr-4 mb-3.5 h-10 bg-inherit text-white text-sm rounded-xl mr-1 pt-1"
                        defaultValue={props.loginInputEmailValue}
                        onChange={handleInputEmailValue}
                    />
                    <input
                        name='password'
                        type='password'
                        placeholder="Password"
                        id="registerPassword"
                        title="Please enter at least 8 characters without spaces"
                        className="pl-11 pr-4 mb-3.5 h-10 bg-inherit text-white text-sm rounded-xl mr-1 pt-1"
                        defaultValue={props.loginInputPasswordValue}
                        onChange={handleInputPasswordValue}

                    />
                    <button
                        className='mt-1.5 -ml-1'
                        onMouseEnter={() => setHoverButton(false)}
                        onMouseLeave={() => setHoverButton(true)}>
                        <img
                            src={hoverButton ? ButtonRegister : ButtonRegisterHover}
                            alt="register" />
                    </button>
                </form>
                <div className='flex flex-row items-center -mt-7'>
                    <p className="text-white text-sm text-center">Already have an Account? </p>
                    <Link to="/login" className="text-[#5175bd] text-lg pb-0.5 hover:text-[#2187d3]">
                        &nbsp;Log in
                    </Link>
                </div>
            </div>
        </main >
    );
}

export default Register