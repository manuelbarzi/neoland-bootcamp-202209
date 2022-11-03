class Settings extends React.Component {
    constructor() {
        log('INFO', 'Settings -> constructor')

        super()
        this.state = {
            view: 'settings'
        }
    }

    componentDidMount() {
        log('INFO', 'Settings -> componentDidMount')

    }
    componentWillUnmount() {
        log('INFO', 'Settings -> componentWillUnMount')
    }

    handleUpdateUserEmail = event => {
        log('INFO', 'Home -> handleUpdateUserEmail')

        event.preventDefault()

        try {
            const newEmail = event.target.email.value

            updateUserEmail(user.email, newEmail)

            user.email = newEmail

            alert('E-mail updated')
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateUserName = event => {
        log('INFO', 'Settings -> handleUpdateUserName')

        event.preventDefault()

        try {
            const newName = event.target.name.value

            updateUserName(user.name, newName)

            user.name = newName

            alert('Name updated')
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateUserPassword = event => {
        log('INFO', 'Settings -> handleUpdateUserPassword')

        event.preventDefault()

        try {
            const newPassword = event.target.password.value

            updateUserPassword(user.password, newPassword)

            alert('Password updated')

            updatePasswordForm.reset()

        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        return <section className='flex flex-col items-center' >
            <h2 className='font-extrabold'>Settings</h2>
            <div className='flex flex-col items-end'>
                <form className='block' onSubmit={this.handleUpdateUserEmail}>
                    <label htmlFor='email' className='font-extrabold'>Email</label>
                    <input name='email' type='email' id='email' placeholder=' input an email' defaultValue={user.email} className='m-3 border-b border-black w-50 rounded-md' />
                    <button className='m-5 text-sm border-transparent rounded-md font-serif bg-blue-500 w-14'>Save</button>
                </form>
                <form className='block' onSubmit={this.handleUpdateUserName}>
                    <label htmlFor='name' className='font-extrabold'>Name</label>
                    <input name='name' type='name' id='name' placeholder=' Name' defaultValue={user.name} className='m-3 border-b border-black w-50 rounded-md' />
                    <button className='m-5 text-sm border-transparent rounded-md font-serif bg-blue-500 w-14'>Save</button>
                </form>
                <form className='block' onSubmit={this.handleUpdateUserPassword}>
                    <label htmlFor='password' className='font-extrabold'>Password</label>
                    <input name='password' type='password' id='password' placeholder=' Input a new password' className='m-3 border-b border-black w-50 rounded-md' />
                    <button className='m-5 text-sm border-transparent rounded-md font-serif bg-blue-500 w-14'>Save</button>
                </form>
            </div>
        </section>
    }

}