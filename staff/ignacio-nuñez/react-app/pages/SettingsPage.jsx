function SettingsPage(props) {
    const handleNewName = (event) => {
        event.preventDefault()

        try {
            const result = updateName(event.target.name.value, user.email, user.name)
            user.name = result

            alert('name changed succesfully')
        } catch (error) {
            alert(error.message)
        }
    }

    const handleNewEmail = (event) => {
        event.preventDefault()

        try {
            const result = updateEmail(event.target.email.value, user.email)
            user.email = result

            alert('email changed succesfully')
        } catch (error) {
            alert(error.message)
        }
    }

    const handleNewPassword = (event) => {
        event.preventDefault()

        try {
            const result = updatePassword(event.target.password.value, user.email, user.password)
            
            user.password = result

            alert('password changed succesfully')
        } catch (error) {
            alert(error.message)
        }
    }

    return <main className="min-h-screen bg-rose-600">
        <NavBar onLogOut={props.onLogOut} onSettings={props.onSettings} onHomeLink={props.onHomeLink} />
        <div className="flex h-full justify-center items-center">
            <div className="mt-32 w-1/5 shadow-xl bg-orange-300 flex flex-col gap-2 justify-center items-center p-8 border-solid border-black border-2 rounded-lg">
                <h2 className='text-2xl font-bold'>Settings</h2>
                <form onSubmit={handleNewName}>
                    <label htmlFor="name" className="self-start">Change Name</label>
                    <div className="flex flex-rows">
                        <input className="z-10 p-1 w-full self-start border-solid border-black border-2 rounded-lg bg-orange-200" type="text" defaultValue={user.name} name="name" id="settings-name" />
                        <button className="z-10 p-1 border-solid border-black border-2 rounded-lg bg-orange-200 material-symbols-outlined">
                            change_circle</button>
                    </div>
                </form>
                <form onSubmit={handleNewEmail}>
                    <label htmlFor="email" className="self-start">Change E-mail</label>
                    <div className="flex flex-rows">
                        <input className="z-10 p-1 w-full self-start border-solid border-black border-2 rounded-lg bg-orange-200" type="email" defaultValue={user.email} name="email" id="settings-email" />
                        <button className="z-10 p-1 border-solid border-black border-2 rounded-lg bg-orange-200 material-symbols-outlined">
                            change_circle</button>
                    </div>
                </form>
                <form onSubmit={handleNewPassword}>
                    <label htmlFor="password" className="self-start">Change Password</label>
                    <div className="flex flex-rows">
                        <input className="z-10 p-1 w-full self-start border-solid border-black border-2 rounded-lg bg-orange-200" type="password" placeholder="Input you password" name="password" id="settings-password" />
                        <button className="z-10 p-1 border-solid border-black border-2 rounded-lg bg-orange-200 material-symbols-outlined">
                            change_circle</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
}