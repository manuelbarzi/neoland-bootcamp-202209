function Settings() {
    log.info('Settings -> render')

    const handleUpdateUserEmail = event => {
        log.info('Settings -> handleUpdateUserEmail')

        event.preventDefault()

        const newEmail = event.target.email.value

        try {
            updateUserEmail(user.email, newEmail)

            alert('E-mail updated')
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="flex flex-col items-center">
        <h2>Settings</h2>
        <form className="flex flex-col" onSubmit={handleUpdateUserEmail}>
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" id="email" placeholder="input an email" defaultValue={user.email} />
            <button>Save</button>
        </form>
    </section>
}