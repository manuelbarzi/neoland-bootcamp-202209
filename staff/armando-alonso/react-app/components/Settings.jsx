function Settings(props) {
    log('INFO', 'Settings -> render')

    const handleUpdateUserEmail = event => {
        log('INFO', 'Tasks -> handleUpdateUserEmail')

        event.preventDefault()

        const newEmail = event.target.email.value

        try {

            updateUserEmail(user.email, newEmail);

            alert('E-mail updated')

        } catch (error) {

            alert(error.message)
        }

    }
    
    return <section className="flex flex-col items-center mt-14">
                <h2>settings</h2>
                <form className="flex flex-col" onSubmit={handleUpdateUserEmail}>
                    <label htmlFor="settings-email">Email</label>
                    <input name="email" placeholder="New Email" id="settings-email" type="email" defaultValue={user.email}/>
                    <button>Change</button>
                </form>
            </section>
}