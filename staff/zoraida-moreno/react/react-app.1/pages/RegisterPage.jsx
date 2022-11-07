function RegisterPage() {
    return <p>TODO implement register page</p>
}
<main className="flex flex-col items.center gap-2">
    <form className="flex flex-col gap2">
        <label htmlFor="register-name" className="container__item--left">
            Name
        </label>
        <input
            type="name"
            id="register-name"
            placeholder="Input your name"
            required=""
            className="border-b border-black"
        />
        <label className="container__item--left" htmlFor="register-email">
            E-mail
        </label>
        <input
            type="email"
            id="register-email"
            placeholder="Input your e-mail"
            required=""
            className="border-b border-black"
        />
        <label htmlFor="register-password" className="container__item--left">
            Password
        </label>
        <input
            type="password"
            id="register-password"
            placeholder="Input your password"
            pattern="[A-Za-z0-9S]{8,}"
            required=""
            title="Use min 8 characters for the password and no spaces"
            className="border-b border-black"
        />
        <button className="p-2 border rounded-xl hover:animate-spin">Register</button>
    </form>
    <a href="" className="underline">Login</a>
</main>