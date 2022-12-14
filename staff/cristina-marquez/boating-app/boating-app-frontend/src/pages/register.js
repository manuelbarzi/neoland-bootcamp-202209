import { useContext, useState } from 'react';
import registerUser from '../logic/registerUser'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from "../UserContext";
import jwt_decode from 'jwt-decode';
import appSessionManager from '../helpers/sessionManager';

function Register() {
    const { setUser } = useContext(UserContext)
    const [formStep, setFormStep] = useState(1);
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [birthDate, setBirthDate] = useState();
    const [idNumber, setidNumber] = useState();
    const [email, setEmail] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [address, setAddress] = useState();
    const [postalCode, setPostalCode] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()


    const nextFormStep = (event) => {
        event.preventDefault();
        setFormStep(formStep + 1)
    }


    const onRegisterFinish = async (event) => {
        event.preventDefault()

        const registrationData = {
            name,
            surname,
            birthDate,
            idNumber,
            email,
            contactNumber,
            address: {
                street: address,
                postalCode,
                city,
                country
            },
            password,
        }

        try {

            const tokenReponse = await registerUser(registrationData)
            const tokenString = tokenReponse.token
            const decodedToken = jwt_decode(tokenString)

            appSessionManager.saveSessionToLocalStorage(tokenString)

            setUser({
                _id: decodedToken.sub,
                email: decodedToken.email,
                name: decodedToken.name,
                token: tokenString
            })

            console.log('INFO', `User ${decodedToken.name} successfully registered and logged in`)

            navigate('/ports')
        } catch (error) {
            alert(error.message)

        }
    }

    return (
        <main className="h-screen w-screen flex flex-row items-center justify-center">
            <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
                <div className="register-form bg-bone flex p-4">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <form onSubmit={onRegisterFinish}>
                            {formStep === 1 && <>
                                <div className="form-group mb-6">
                                    <label htmlFor="firstNameInput" className="form-label inline-block mb-2 text-gray-700">First name</label>
                                    <input
                                        type="name"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="firstNameInput"
                                        name="firstName"
                                        placeholder="Enter name"
                                        onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="surnameInput" className="form-label inline-block mb-2 text-gray-700">Surname</label>
                                    <input
                                        type="surname"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="surnameInput"
                                        name="surname"
                                        placeholder="Enter surname"
                                        onChange={(e) => { setSurname(e.target.value) }} />
                                </div>
                                <div className="form-group mb-6">
                                    <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                                        <input type="date"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Select a date" data-mdb-toggle="datepicker"
                                            onChange={(e) => { setBirthDate(e.target.value) }} />
                                        <label htmlFor="floatingInput" className="text-gray-700">Select your birthdate</label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="idNumberInput" className="form-label inline-block mb-2 text-gray-700">Identification Number</label>
                                    <input
                                        type="passport"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="idNumberInput"
                                        name="idNumber"
                                        placeholder="Enter ID number"
                                        onChange={(e) => { setidNumber(e.target.value) }} />
                                </div>

                                <div className="form-group mb-6">
                                    <label htmlFor="phoneInput" className="form-label inline-block mb-2 text-gray-700">Phone number</label>
                                    <input
                                        type="telephone"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="phoneInput"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        onChange={(e) => { setContactNumber(e.target.value) }} />
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="emailInput" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="emailInput"
                                        name="email"
                                        placeholder="Enter email"
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className="form-group mb-6">
                                    <label htmlFor="passwordInput" className="form-label inline-block mb-2 text-gray-700">Password</label>
                                    <input type="password"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passwordInput"
                                        name="password"
                                        placeholder="Password"
                                        onChange={(e) => { setPassword(e.target.value) }} />
                                </div>

                                <button type="button"
                                    className=" px-3 py-1.5 bg-midgreen text-bone w-full
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg" onClick={nextFormStep}>Next step</button>

                                <div>
                                    <Link to="/login" className='underline'>Already have an account?</Link>
                                </div>
                            </>}

                            {formStep === 2 && <>

                                <div className="form-group mb-6">
                                    <label htmlFor="addressInput" className="form-label inline-block mb-2 text-gray-700">Street</label>
                                    <input
                                        type="address"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="addressInput"
                                        name="address"
                                        placeholder="Enter your address"
                                        onChange={(e) => { setAddress(e.target.value) }} />
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="postalCodeInput" className="form-label inline-block mb-2 text-gray-700">Postal code</label>
                                    <input
                                        type="postcode"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="postalCodeInput"
                                        name="postalCode"
                                        placeholder="Enter your postal code"
                                        onChange={(e) => { setPostalCode(e.target.value) }} />
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="cityInput" className="form-label inline-block mb-2 text-gray-700">City</label>
                                    <input
                                        type="city"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="cityInput"
                                        name="city"
                                        placeholder="Enter your city"
                                        onChange={(e) => { setCity(e.target.value) }} />
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="countryInput" className="form-label inline-block mb-2 text-gray-700">Country</label>
                                    <input
                                        type="city"
                                        className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                        id="countryInput"
                                        name="country"
                                        placeholder="Enter your country"
                                        onChange={(e) => { setCountry(e.target.value) }} />
                                </div>

                                <button type="submit"
                                    className="w-full px-6 py-2.5 bg-midgreen 
                                    text-white font-medium text-xs leading-tight 
                                    uppercase rounded shadow-md hover:bg-blue-700 
                                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                                    focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                                    ease-in-out">
                                    Register
                                </button>

                            </>}


                        </form>
                    </div>

                </div>
            </div>
            <div className="login-background-image w-7/12 h-screen bg-cover bg-center" style={{ backgroundImage: "url(/login/background.jpg)" }}></div>
        </main >

    )
}

export default Register