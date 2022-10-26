function LoginPage() {
    return <div className="flex h-full justify-center items-center bg-rose-700">
        <form className="shadow-xl bg-orange-500 flex flex-col gap-2 justify-center items-center p-8 border-solid border-black border-2 rounded-lg">
            <h2 className='text-2xl font-bold'>Log in</h2>
            <label htmlFor="login-email" className="self-start">E-mail</label>
            <input className="p-1 border-solid border-black border-2 rounded-lg bg-orange-200" type="email" placeholder="Input your E-mail" name="login-email" id="login-email" />
            <label htmlFor="login-password" className="self-start">Password</label>
            <input className="p-1 border-solid border-black border-2 rounded-lg bg-orange-200" type="password" placeholder="Input you password" name="login-password" id="login-password" />
            <button className="p-1 border-solid border-black border-2 rounded-lg mt-3.5 w-full bg-orange-200">Log in</button>
            <hr className= "w-full border-black mt-3.5"/>
            <div className="div-register mt-2">
                <p>Didnt have an account?</p>
                <a href="" className="p-1 border-solid border-black border-2 block text-center rounded-lg rounded-lg mt-3.5 w-full bg-orange-200">Register</a>
            </div>
        </form>
    </div>
}       