function Register(props) {

    const handleClick = event => {
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target

        const nameInput = form.name
        const emailInput = form.email
        const passwordInpuut = form.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInpuut.value

        try {
  
            registerUser(name, email, password)
          
            alert("User Registered");

            const onRegister = props.onRegister

            onRegister()
          
          } catch (error) {
          
            alert(error.message)
          
            registerPasswordInput.value = ''
          }
    }


    
return <main className="h-screen flex flex-col items-center justify-center bg-[#fffde7]">
    <form className="flex flex-col gap-y-2 rounded-xl shadow-2xl bg-[#cccab5] p-8" onSubmit={handleRegister}>
        <h2 className="flex justify-center text-[#ffffff] text-xl mb-3">Register</h2>
        <label htmlFor="user-register" className="container__item--left">User</label>
        <input name="name" type="text" id="user-register" placeholder="User" pattern="[a-zA-Z]{1,}" required="" title="Use characters from A to Z htmlFor names (min 1 character, and not numerics)"/>
        <label htmlFor="email-register" className="container__item--left">Email</label>
        <input name="email" type="email" id="email-register" placeholder="Email" required=""/>
        <label htmlFor="password-register" className="container__item--left">Password</label>
        <input name="password" type="password" id="password-register" placeholder="Password" pattern="[A-Za-z0-9S]{8,}" required="" title="Use min 8 characters for the password and no spaces"/>
        <button className="">Register</button>
    </form>
    <a href="" onClick={handleClick}>Login</a>
</main>

}