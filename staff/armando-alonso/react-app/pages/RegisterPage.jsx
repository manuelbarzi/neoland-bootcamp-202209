function RegisterPage(props) {

    const handleClick = event => {
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }
    
return <main className="h-screen flex flex-col items-center justify-center bg-[#fffde7]">
    <form className="flex flex-col gap-y-2 rounded-xl shadow-2xl bg-[#cccab5] p-8">
        <h2 className="flex justify-center text-[#ffffff] text-xl mb-3">Register</h2>
        <label htmlFor="user-register" className="container__item--left">User</label>
        <input type="text" id="user-register" placeholder="User" pattern="[a-zA-Z]{1,}" required="" title="Use characters from A to Z htmlFor names (min 1 character, and not numerics)"/>
        <label htmlFor="email-register" className="container__item--left">Email</label>
        <input type="email" id="email-register" placeholder="Email" required=""/>
        <label htmlFor="password-register" className="container__item--left">Password</label>
        <input type="password" id="password-register" placeholder="Password" pattern="[A-Za-z0-9S]{8,}" required="" title="Use min 8 characters for the password and no spaces"/>
        <button className="" onClick={handleClick}>Register</button>
    </form>
    <a href="">Login</a>
</main>

}