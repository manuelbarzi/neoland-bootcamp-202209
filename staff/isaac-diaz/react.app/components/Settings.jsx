function Settings() {
    log('INFO', 'Settings -> render')

    const handleUpdateUserEmail = event => {
        log('INFO', 'Home -> handleUpdateUserEmail')

        event.preventDefault()

        const newEmail = event.target.email.value

        try {
            updateUserEmail(user.email, newEmail)

            alert('E-mail updated')
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="flex flex-col justify-center items-center bg-pink-600 rounded-3xl">
        <h2 className="rounded-lg bg-red-500">Settings</h2>
        <form className="flex flex-col" onSubmit={handleUpdateUserEmail}>
            <label className="bg-orange-400" htmlFor="email">E-mail</label>
            <input className="bg-blue-200" name="email" type="email" id="email" placeholder="input an email" defaultValue={user.email} />
            <button className="rounded-xl bg-green-400">Save</button>
        </form>
    </section>
}

