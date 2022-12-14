function SettingsForm({userInfo}){

    const getLocaleDate = (dateString) => {
        const dateValue = new Date(dateString)
        return dateValue.toLocaleDateString()
    }


    return (
        <form >
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
                    defaultValue={userInfo.name}/>
                    
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
                    defaultValue={userInfo.surname}/>
            </div>
            <div className="form-group mb-6">
                <label htmlFor="birthDateInput" className="form-label inline-block mb-2 text-gray-700">Date of Birth</label>
                <input
                    type="text"
                    className="form-control 
                block w-full px-3 py-1.5 text-base font-normal 
                text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                focus:outline-none"
                    id="birthDateInput"
                    name="birthDate"
                    placeholder="Select your birthdate"
                    defaultValue={ getLocaleDate(userInfo.birthDate)}/>
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
                    defaultValue={userInfo.idNumber}/>
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
                    defaultValue={userInfo.contactNumber}/>
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
                    defaultValue={userInfo.email}/>
            </div>

            <div className="form-group mb-6">
                <label htmlFor="passwordInput" className="form-label inline-block mb-2 text-gray-700">Password</label>
                <input type="password"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300  rounded  transition  ease-in-out  m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="passwordInput"
                    name="password"
                    placeholder="Password"
                    defaultValue={userInfo.password}/>
            </div>

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
                    defaultValue={userInfo.address.street}/>
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
                    defaultValue={userInfo.address.postalCode}/>
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
                    defaultValue={userInfo.address.city}/>
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
                    defaultValue={userInfo.address.country}/>
            </div>

            <button type="submit"
                className="w-full px-6 py-2.5 bg-midgreen 
                text-white font-medium text-xs leading-tight 
                uppercase rounded shadow-md hover:bg-blue-700 
                hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                ease-in-out">
                Save Changes
            </button>
        </form>
    )

}

export default SettingsForm