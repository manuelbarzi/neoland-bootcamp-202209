function LoginPage() {
    return <main className="h-full w-full flex flex-col items-center justify-center bg-pink-600">
        <div className="bg-white flex flex-col border rounded-lg p-3">
            <form className="flex flex-col items-center justify-center gap-2 m-2 form">
                <label htmlFor="email" className="label">Your email</label>
                <input type="email" name="email" placeholder="enter your email" className="border rounded-md" />
                <label htmlFor="password" className="label">Your password</label>
                <input type="password" placeholder="enter your password" className="border rounded-md" />
                <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg text-sm">Login</button>
            </form>
            <a href="">Register</a>
        </div>
    </main>

}