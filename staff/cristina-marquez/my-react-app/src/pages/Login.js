import { useContext } from 'react'
import authenticateUser from "../logic/authenticateUser"
import UserContext from '../UserContext';
import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import axios from 'axios';

function Login() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target

        const emailInput = form.email
        const passwordInput = form.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            const tokenReponse = await authenticateUser(email, password)
            const tokenString = tokenReponse.token
            const decodedToken = jwt_decode(tokenString)


            setUser({
                _id: decodedToken.sub,
                email: decodedToken.email,
                name: decodedToken.name,
                token: tokenString
            })

            console.log('INFO', `User ${decodedToken.name} successfully logged in`)

            //FIXME: use state manager to set axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${tokenString}`;

            // Navigate to home
            navigate('/')

        } catch (error) {
            alert(error.message)
            passwordInput.value = ''
        }
    }

    return (
        <main className="h-screen w-screen flex flex-col items-center justify-center bg-teal-700">
            <div className="bg-white flex flex-col border rounded-lg p-3">
                <form className="flex flex-col items-center justify-center gap-2 m-2 form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="label">Your email</label>
                    <input type="email" name="email" placeholder="enter your email" className="border rounded-md" />
                    <label htmlFor="password" className="label">Your password</label>
                    <input type="password" name="password" placeholder="enter your password" className="border rounded-md" />
                    <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg text-sm">Login</button>
                </form>
                <Link to="/register" className="underline">Register</Link>
            </div>
        </main>
    )
}

export default Login