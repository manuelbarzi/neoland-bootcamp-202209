function SettingsAccountPage(props) {

    const [buttonFormName, setButtonFormName] = useState('open')
    const [buttonFormEmail, setButtonFormEmail] = useState('open')
    const [buttonFormPassword, setButtonFormPassword] = useState('open')
    const [inputNameDisabled, setInputNameDisabled] = useState(true)
    const [inputEmailDisabled, setInputEmailDisabled] = useState(true)
    const [inputPasswordDisabled, setInputPasswordDisabled] = useState(true)
    const [inputPasswordText, setInputPasswordText] = useState(true)

    // HEADER LINKS BRIDGE
    const handleHomeLink = () => {
        log("INFO", "Header Brige: handleHomeLink");
        props.onHomeLink();
    };

    // TOGGLE MENU LINKS BRIDGE
    const handleSettingsLink = () => {
        log("INFO", "Header Brige: handleSettingsLink");
        props.onSettingsAccountLink();
    };

    const handleLogoutLink = () => {
        log("INFO", "Header Brige: handleLogoutLink");
        user = null;
        props.onLoggedoutLink();
    };

    // FORM BUTTONS VISUAL
    const handleButtonFormName = () => {
        log('INFO', 'SettingsAccountPage: handleButtonFormName')
        setButtonFormName(buttonFormName === "open" ? "close" : "open");
    }

    const handleButtonFormEmail = () => {
        log('INFO', 'SettingsAccountPage: handleButtonFormEmail')
        setButtonFormEmail(buttonFormEmail === "open" ? "close" : "open");
    }

    const handleButtonFormPassword = () => {
        log('INFO', 'SettingsAccountPage: handleButtonFormPassword')
        setButtonFormPassword(buttonFormPassword === "open" ? "close" : "open");
    }

    // FORM INPUTS VISUAL
    const handleInputNameDisabled = () => {
        log('INFO', 'SettingsAccountPage: handleInputNameDisabled')
        setInputNameDisabled(!inputNameDisabled);
    }

    const handleInputEmailDisabled = () => {
        log('INFO', 'SettingsAccountPage: handleInputEmailDisabled')
        setInputEmailDisabled(!inputEmailDisabled);
    }

    const handleInputPasswordDisabled = () => {
        log('INFO', 'SettingsAccountPage: handleInputPasswordDisabled')
        setInputPasswordDisabled(!inputPasswordDisabled);
    }

    const handleInputPasswordText = () => {
        log('INFO', 'SettingsAccountPage: handleInputPasswordText')
        setInputPasswordText(!inputPasswordText);
    }

    // FORM SUBMITS
    const handleUserNameSubmit = (event) => {
        log('INFO', 'SettingsAccountPage: handleUserNameSubmit');
        event.preventDefault();

        const form = event.target;
        const nameInput = form.name;
        const newName = nameInput.value

        try {
            updateUserName(user.name, newName)
            user.name = newName
            alert('The user name has been changed successfully')
            // FORM BUTTON VISUAL
            handleButtonFormName()

        } catch (error) {
            alert(error.message)
        }
    };

    const handleUserEmailSubmit = (event) => {
        log("INFO", "Submit Email");
        event.preventDefault();

        const form = event.target;
        const emailInput = form.email;
        const newEmail = emailInput.value

        try {
            updateUserEmail(user.email, newEmail)
            user.email = newEmail
            alert('The user email has been changed successfully')
            // FORM BUTTON VISUAL
            handleButtonFormEmail()

        } catch (error) {
            alert(error.message)
        }
    };

    const handleUserPasswordSubmit = (event) => {
        log("INFO", "Submit Password");
        event.preventDefault();

        const form = event.target;
        const passwordInput = form.password;
        const newPassword = passwordInput.value

        try {
            updateUserPassword(user.password, newPassword)
            user.password = newPassword
            alert('The user password has been changed successfully')
            passwordInput.value = ''
            // FORM BUTTON VISUAL
            handleButtonFormPassword()

        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <main className="min-h-screen bg-sky-500">
            {/* HEADER */}
            <Header
                onHomeLink={handleHomeLink}
                onSettingsAccountLink={handleSettingsLink}
                onLoggedoutLink={handleLogoutLink}
            />
            {/* SETTINGS ACCOUNT PANEL*/}
            <section className="flex z-1 w-full justify-center flex-wrap">
                <div className="flex flex-row justify-center content-center z-0 p-8 bg-sky-500 border-black border-b border-solid w-full h-16">
                    <span className="self-center font-semibold text-4xl text-sky-100">
                        My Account
                    </span>
                </div>
                {/*SETTINGS ACCOUNT*/}
                <div className="flex content-start flex-col w-92 gap-1 p-12 border-solid border-b-4 border-x border-sky-800 bg-inherit">
                    <span className="mb-2">Manage your Trello account</span>
                    <hr className="w-full mx-auto my-2 border-black" />
                    <form className="flex w-full justify-center" onSubmit={handleUserNameSubmit}>
                        <label htmlFor="updateName"></label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter new name"
                            id="updateName"
                            title="Please enter at least 1 character"
                            disabled={(inputNameDisabled) ? "disabled" : ""}
                            className="h-10 rounded text-slate-800 text-base pl-2 w-64"
                            defaultValue={user.name}
                        />
                        {buttonFormName === "open" && (
                            <span
                                className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined cursor-pointer"
                                onClick={() => {
                                    handleInputNameDisabled();
                                    handleButtonFormName();
                                }}>edit</span>
                        )}
                        {buttonFormName === "close" && (
                            <button
                                className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined"
                                onClick={handleInputNameDisabled}>save</button>
                        )}
                    </form>
                    <form className="flex w-full justify-center" onSubmit={handleUserEmailSubmit}>
                        <label htmlFor="updateEmail"></label>
                        <input
                            name='email'
                            type="text"
                            placeholder="Enter new email"
                            id="updateEmail"
                            title="Please use @ and . on your email"
                            disabled={(inputEmailDisabled) ? "disabled" : ""}
                            className="h-10 rounded text-slate-800 text-base pl-2 w-64"
                            defaultValue={user.email}
                        />
                        {buttonFormEmail === "open" && (
                            <span
                                className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined cursor-pointer"
                                onClick={() => {
                                    handleInputEmailDisabled();
                                    handleButtonFormEmail();
                                }}>edit</span>
                        )}
                        {buttonFormEmail === "close" && (
                            <button
                                className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined"
                                onClick={handleInputEmailDisabled}>save</button>
                        )}
                    </form>
                    <form className="flex w-full justify-center" onSubmit={handleUserPasswordSubmit}>
                        <label htmlFor="updatePassword"></label>
                        <input
                            name='password'
                            type={inputPasswordText ? 'password' : 'text'}
                            placeholder="Enter new password"
                            id="updatePassword"
                            title="Please enter at least 8 characters without spaces"
                            disabled={(inputPasswordDisabled) ? "disabled" : ""}
                            className="h-10 rounded text-slate-800 text-base pl-2 w-64"
                        />
                        {buttonFormPassword === "open" && (
                            <span
                                className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined cursor-pointer"
                                onClick={() => {
                                    handleInputPasswordDisabled();
                                    handleButtonFormPassword();
                                }}>edit</span>
                        )}
                        {buttonFormPassword === "close" && (
                            <button
                                className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined"
                                onClick={handleInputPasswordDisabled}>save</button>
                        )}
                    </form>
                    <span className="flex">
                        <input
                            type="checkbox"
                            onChange={handleInputPasswordText} />
                        <label className="text-xs mx-2 my-3">Show password</label>
                    </span>
                </div>
            </section>
        </main>
    );
}
