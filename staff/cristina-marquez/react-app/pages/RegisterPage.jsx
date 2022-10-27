function RegisterPage() {
    return <main className="h-full w-full flex flex-col items-center justify-center bg-pink-600">
        <div className="bg-white flex flex-col border rounded-lg p-3 container-Flex">
            <form className="flex flex-col items-center justify-center gap-2 m-2 form">
                <label htmlFor="userName" className="label">Your name</label>
                <input type="text" name="name" placeholder="enter your name" pattern="[A-Za-z]{3,}" required="" className="border rounded-md" />
                <label htmlFor="email" className="label">Your email</label>
                <input type="email" name="email" placeholder="enter your email" className="border rounded-md" />
                <label htmlFor="password" className="label">Your password</label>
                <input type="password" placeholder="create a password" pattern="[a-z]{3}" required="" className="border rounded-md" />
                <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg text-sm button">Create account</button>
            </form>
        </div>
    </main>
}
