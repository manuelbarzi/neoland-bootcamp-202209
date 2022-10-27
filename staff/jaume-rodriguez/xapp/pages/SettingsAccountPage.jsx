class SettingsAccountPage extends React.Component {
    constructor() {
        log("INFO", "SettingsAccount -> render");
        super();

        this.state = { toggleMenuComponent: "open" };
    }

    toggleMenu = () =>
        this.setState({
            toggleMenuComponent:
                this.state.toggleMenuComponent === "open" ? "close" : "open",
        });

    logout = () => {
        log("INFO", "Home->logout");
        user = null;
        const onLoggedOut = this.props.onLoggedOut;

        onLoggedOut();
    };

    homePageLink = () => {
        log("INFO", "Settings Account -> render");

        const onHomePageLink = this.props.onHomePageLink;

        onHomePageLink();
    };

    userNameSubmit = (event) => {
        log("INFO", "Submit Name");
        event.preventDefault();

        const form = event.target;

        const nameInput = form.name;

        const newName = nameInput.value

        try {
            updateUserName(user.name, newName)
            user.name = newName
            alert('The user name has been changed successfully')

        } catch (error) {
            alert(error.message)
        }
    };

    userEmailSubmit = (event) => {
        log("INFO", "Submit Email");
        event.preventDefault();

        const form = event.target;

        const emailInput = form.email;

        const newEmail = emailInput.value

        try {
            updateUserEmail(user.email, newEmail)
            user.email = newEmail
            alert('The user email has been changed successfully')

        } catch (error) {
            alert(error.message)
        }
    };

    userPasswordSubmit = (event) => {
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

        } catch (error) {
            alert(error.message)
        }
    };

    render() {
        return (
            <main className="h-screen">
                <header className="flex z-0 items-center px-2 py-3 bg-gradient-to-br from-cyan-500 to-blue-500">
                    <img
                        src="img/trellologo.png"
                        className="w-40 cursor-pointer"
                        onClick={this.homePageLink}
                    />
                    <img
                        src="img/headermenupanelbotton.png"
                        className="w-14 cursor-pointer ml-auto invert"
                        onClick={this.toggleMenu}
                    />
                </header>
                {this.state.toggleMenuComponent === "close" && (
                    <div className="flex justify-end right-0 absolute">
                        <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-cyan-100 border-sky-700 border-b-2 border-l -mt-1">
                            <p className="text-black pr-1">{user.email}</p>
                            <hr className="w-full border-b border-sky-700 mx-auto my-2" />
                            <a href="" className="text-black pr-1 hover:font-semibold">
                                Settings
                            </a>
                            <button
                                className="text-black pr-1 hover:font-semibold"
                                onClick={this.logout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
                <section className="flex z-1 w-full justify-center flex-wrap">
                    <div className="flex flex-col justify-center content-center z-0 p-8 bg-sky-100 border-sky-700 border-b-2 border-solid w-full h-32">
                        <span className="self-center font-light text-4xl text-black mt-1">
                            My Account
                        </span>
                        <span className="self-center font-light text-lg text-black mt-1">
                            {user.email}
                        </span>
                    </div>
                    <div className="flex content-start flex-col w-92 gap-1 p-12">
                        <span className="mb-4 mt-2">Manage your Trello account</span>
                        <form className="flex w-full justify-center" onSubmit={this.userNameSubmit}>
                            <label htmlFor="updateName"></label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter new name"
                                id="updateName"
                                title="Please enter at least 1 character"
                                disabled=""
                                className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2 w-64"
                                defaultValue={user.name}
                            />
                            <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-2 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-pencil"></button>
                            <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-1 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-save"></button>
                        </form>
                        <form className="flex w-full justify-center" onSubmit={this.userEmailSubmit}>
                            <label htmlFor="updateEmail"></label>
                            <input
                                name='email'
                                type="text"
                                placeholder="Enter new email"
                                id="updateEmail"
                                title="Please use @ and . on your email"
                                disabled=""
                                className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2 w-64"
                                defaultValue={user.email}
                            />
                            <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-2 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-pencil"></button>
                            <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-1 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-save"></button>
                        </form>
                        <form className="flex w-full justify-center" onSubmit={this.userPasswordSubmit}>
                            <label htmlFor="updatePassword"></label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Enter new password"
                                id="updatePassword"
                                title="Please enter at least 8 characters without spaces"
                                disabled=""
                                className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2 w-64"
                            />
                            <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-2 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-pencil"></button>
                            <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-1 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-save"></button>
                        </form>
                        <span className="flex">
                            <input type="checkbox" />
                            <label className="text-xs mx-2 my-3">Show password</label>
                        </span>
                    </div>
                </section>
            </main>
        );
    }
}
