class SettingsAccountPage extends React.Component {
    constructor() {
        log("INFO", "SettingsAccount -> render");
        super();

        this.state = {
            toggleMenuComponent: "open",
            toggleButtonFormName: "open",
            toggleButtonFormEmail: "open",
            toggleButtonFormPassword: "open",
            inputNameState: true,
            inputEmailState: true,
            inputPasswordState: true,
            showPasswordText: true
        };
    };

    // HEADER LINKS BRIDGE
    handleHomeLink = () => {
        log("INFO", "Header Brige: handleHomeLink");
        this.props.onHomeLink();
    };

    // TOGGLE MENU LINKS BRIDGE
    handleSettingsLink = () => {
        log("INFO", "Header Brige: handleSettingsLink");
        this.props.onSettingsAccountLink();
    };

    handleLogoutLink = () => {
        log("INFO", "Header Brige: handleLogoutLink");
        user = null;
        this.props.onLoggedoutLink();
    };

    // FORM BUTTONS VISUAL
    handleToggleButtonFormName = () => {
        this.setState({
            toggleButtonFormName:
                this.state.toggleButtonFormName === "open" ? "close" : "open",
        });
    }

    handleToggleButtonFormEmail = () => {
        this.setState({
            toggleButtonFormEmail:
                this.state.toggleButtonFormEmail === "open" ? "close" : "open",
        });
    }

    handleToggleButtonFormPassword = () => {
        this.setState({
            toggleButtonFormPassword:
                this.state.toggleButtonFormPassword === "open" ? "close" : "open",
        });
    }

    // FORM INPUTS VISUAL
    handleInputNameState = () => {
        this.setState({
            inputNameState: !this.state.inputNameState
        });
    }

    handleInputEmailState = () => {
        this.setState({
            inputEmailState: !this.state.inputEmailState
        });
    }

    handleInputPasswordState = () => {
        this.setState({
            inputPasswordState: !this.state.inputPasswordState
        });
    }

    handleShowPasswordText = () => {
        this.setState({
            showPasswordText: !this.state.showPasswordText
        });
    }

    // FORM SUBMITS
    handleUserNameSubmit = (event) => {
        log("INFO", "Submit Name");
        event.preventDefault();

        const form = event.target;

        const nameInput = form.name;

        const newName = nameInput.value

        // SETBACK THE BUTTON VISUAL
        this.setState({
            toggleButtonFormName:
                this.state.toggleButtonFormName === "open" ? "close" : "open",
        });

        try {
            updateUserName(user.name, newName)
            user.name = newName
            alert('The user name has been changed successfully')

        } catch (error) {
            alert(error.message)
        }
    };

    handleUserEmailSubmit = (event) => {
        log("INFO", "Submit Email");
        event.preventDefault();

        const form = event.target;

        const emailInput = form.email;

        const newEmail = emailInput.value

        // SETBACK THE BUTTON VISUAL
        this.setState({
            toggleButtonFormEmail:
                this.state.toggleButtonFormEmail === "open" ? "close" : "open",
        });

        try {
            updateUserEmail(user.email, newEmail)
            user.email = newEmail
            alert('The user email has been changed successfully')

        } catch (error) {
            alert(error.message)
        }
    };

    handleUserPasswordSubmit = (event) => {
        log("INFO", "Submit Password");
        event.preventDefault();

        const form = event.target;

        const passwordInput = form.password;

        const newPassword = passwordInput.value

        // SETBACK THE BUTTON VISUAL
        this.setState({
            toggleButtonFormPassword:
                this.state.toggleButtonFormPassword === "open" ? "close" : "open",
        });

        try {
            updateUserPassword(user.password, newPassword)
            user.password = newPassword
            alert('The user password has been changed successfully')
            passwordInput.value = ''

        } catch (error) {
            alert(error.message)
        }
    };

    render() {
        return (
            <main className="min-h-screen bg-sky-500">
                {/* HEADER */}
                <Header
                    onHomeLink={this.handleHomeLink}
                    onSettingsAccountLink={this.handleSettingsLink}
                    onLoggedoutLink={this.handleLogoutLink}
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
                        <form className="flex w-full justify-center" onSubmit={this.handleUserNameSubmit}>
                            <label htmlFor="updateName"></label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter new name"
                                id="updateName"
                                title="Please enter at least 1 character"
                                disabled={(this.state.inputNameState) ? "disabled" : ""}
                                className="h-10 rounded text-slate-800 text-base pl-2 w-64"
                                defaultValue={user.name}
                            />
                            {this.state.toggleButtonFormName === "open" && (
                                <span
                                    className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined cursor-pointer"
                                    onClick={() => { this.handleInputNameState(); this.handleToggleButtonFormName(); }}>edit</span>
                            )}
                            {this.state.toggleButtonFormName === "close" && (
                                <button
                                    className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined"
                                    onClick={this.handleInputNameState}>save</button>
                            )}
                        </form>
                        <form className="flex w-full justify-center" onSubmit={this.handleUserEmailSubmit}>
                            <label htmlFor="updateEmail"></label>
                            <input
                                name='email'
                                type="text"
                                placeholder="Enter new email"
                                id="updateEmail"
                                title="Please use @ and . on your email"
                                disabled={(this.state.inputEmailState) ? "disabled" : ""}
                                className="h-10 rounded text-slate-800 text-base pl-2 w-64"
                                defaultValue={user.email}
                            />
                            {this.state.toggleButtonFormEmail === "open" && (
                                <span
                                    className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined cursor-pointer"
                                    onClick={() => { this.handleInputEmailState(); this.handleToggleButtonFormEmail(); }}>edit</span>
                            )}
                            {this.state.toggleButtonFormEmail === "close" && (
                                <button
                                    className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined"
                                    onClick={this.handleInputEmailState}>save</button>
                            )}
                        </form>
                        <form className="flex w-full justify-center" onSubmit={this.handleUserPasswordSubmit}>
                            <label htmlFor="updatePassword"></label>
                            <input
                                name='password'
                                type={this.state.showPasswordText ? 'password' : 'text'}
                                placeholder="Enter new password"
                                id="updatePassword"
                                title="Please enter at least 8 characters without spaces"
                                disabled={(this.state.inputPasswordState) ? "disabled" : ""}
                                className="h-10 rounded text-slate-800 text-base pl-2 w-64"
                            />
                            {this.state.toggleButtonFormPassword === "open" && (
                                <span
                                    className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined cursor-pointer"
                                    onClick={() => { this.handleInputPasswordState(); this.handleToggleButtonFormPassword(); }}>edit</span>
                            )}
                            {this.state.toggleButtonFormPassword === "close" && (
                                <button
                                    className="self-start scale-125 p-1 bg-sky-100 rounded text-black mx-2 mt-1 cursor-pointer material-symbols-outlined"
                                    onClick={this.handleInputPasswordState}>save</button>
                            )}
                        </form>
                        <span className="flex">
                            <input
                                type="checkbox"
                                onChange={this.handleShowPasswordText} />
                            <label className="text-xs mx-2 my-3">Show password</label>
                        </span>
                    </div>
                </section>
            </main>
        );
    }
}
