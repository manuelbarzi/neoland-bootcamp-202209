function RegisterPage(props) {
    log('INFO', 'RegisterPage -> render')

    const handleNavigateToLogin = event => {
        event.preventDefault()

        const onNavigateToLogin = props.onNavigateToLogin

        onNavigateToLogin()
    }

    return <main className="">
        <form className="p-5">
            <label htmlFor="register-name" className="mr-2 mr-2 font-bold text-cyan-900 ">Name</label>
            <input type="name" id="register-name" placeholder="input your name" className="border-green-500 mr-2  focus:outline-0" />
            <label htmlFor="register-email" className="mr-2 mr-2 font-bold text-cyan-900 ">E-mail</label>
            <input type="email" id="register-email" placeholder="input your email" className="fborder-green-500 mr-2  focus:outline-0" />
            <label htmlFor="register-password" className="mr-2 mr-2 font-bold text-cyan-900 ">Password</label>
            <input type="password" id="register-password" placeholder="input your password" className="border-green-500 mr-2  focus:outline-0" />
            <button className="bg-cyan-400 hover:bg-cyan-00 py-1 px-4 font-bold text-gray-100	rounded-md ml-3	hover:bg-blue-600">Register</button>
        </form>
        <a href="" className="text-rose-900 font-bold underline	bg-color-red block items-center mt-6 text-center" onClick={handleNavigateToLogin}>Login</a>
    </main>
}