class Header extends TextTrackList.Component {
    constructor() {
        log("INFO", "Header -> render")
        super()

        this.state = {
            toggleMenuComponent: "open",
        }
    }

    // MENU OPEN & CLOSE
    handleToggleMenu = () =>
        this.setState({
            toggleMenuComponent:
                this.state.toggleMenuComponent === "open" ? "close" : "open",
        });

    // MENU LINKS
    handleHomePageLink = (event) => {
        log("INFO", "Settings Account -> render");
        event.preventDefault()

        this.props.onHomePageLinkonHomePageLink();
    };

    handleSettingsLink = (event) => {
        log("INFO", "Settings Account -> render");
        event.preventDefault()

        this.props.onSettingsAccountLink();
    };

    handleLogoutLink = (event) => {
        log("INFO", "Home->logout");
        event.preventDefault()
        user = null;
        this.props.onLoggedOut();
    };

    render() {
        {/* HEADER */ }
        <header className="flex flex-row z-0 items-center px-3 py-2 bg-sky-800">
            <img
                src="img/trellologo.png"
                className="w-40 cursor-pointer"
                onClick={this.handleHomePageLink} />
            <img
                src="img/headermenupanelbotton.png"
                className="w-14 cursor-pointer ml-auto invert"
                onClick={this.handleToggleMenu}
            />
        </header>
        {/* TOGGLE MENU */ }
        {
            this.state.toggleMenuComponent === "close" && (
                <div className="flex justify-end right-0 absolute">
                    <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-sky-100 border-sky-700 border-b-2 border-l -mt-1">
                        <p className="text-black pr-1">{user.email}</p>
                        <hr className="w-full border-sky-700 mx-auto my-2" />
                        <button
                            className="text-black pr-1 hover:font-semibold"
                            onClick={this.handleSettingsLink}
                        >
                            Settings
                        </button>
                        <button
                            className="text-black pr-1 hover:font-semibold"
                            onClick={this.handleLogoutLink}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )
        }
    }
}