function LoginPage() {
    return <main className="flex flex-col items-center gap-2">
        <form className="flex flex-col gap-2">
            <label htmlFor="login-email" className="container__item--left">E-mail</label>
            <input type="email" id="login-email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="login-password" className="container__item--left">Password</label>
            <input type="password" id="login-password" placeholder="input your password" className="border-b border-black" />
            <button className="p-2 border rounded-xl hover:animate-spin">Login</button>
        </form>
        <a href="" className="underline">Register</a>
    </main>
}