import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import registerUser from '../logic/registerUser'
import UserContext from "../UserContext";

function Register() {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleRegister = async event => {

        event.preventDefault()

        const form = event.target

        console.log(form)

        const nameInput = form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            const registeredUser = await registerUser(name, email, password)

            setUser(registeredUser)


            navigate('/')
        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }
    }


    return (
        <main className="h-screen w-screen flex flex-col items-center justify-center bg-pink-600">
            <div className="bg-white flex flex-col border rounded-lg p-3 container-Flex">
                <form className="flex flex-col items-center justify-center gap-2 m-2 form" onSubmit={handleRegister}>
                    <label htmlFor="name" className="label">Your name</label>
                    <input type="text" name="name" placeholder="enter your name" pattern="[A-Za-z]{3,}" required="" className="border rounded-md" />
                    <label htmlFor="email" className="label">Your email</label>
                    <input type="email" name="email" placeholder="enter your email" className="border rounded-md" />
                    <label htmlFor="password" className="label">Your password</label>
                    <input type="password" name="password" placeholder="create a password" required="" className="border rounded-md" />
                    <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg text-sm button">Create account</button>
                </form>
            </div>
        </main>
    )
}

export default Register