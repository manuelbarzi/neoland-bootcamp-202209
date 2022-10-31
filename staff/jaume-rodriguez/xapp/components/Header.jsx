class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            toggleMenuComponent: "open",
        };
    }

    // MENU OPEN & CLOSE
    handleToggleMenu = () =>
        this.setState({
            toggleMenuComponent:
                this.state.toggleMenuComponent === "open" ? "close" : "open",
        });

    // HEADER LINKS
    handleHomeLink = () => {
        log("INFO", "Header: handleHomeLink");
        this.props.onHomeLink();
    };

    // TOGGLE MENU LINKS

    handleSettingsLink = () => {
        log("INFO", "Header: handleSettingsLink");
        this.props.onSettingsAccountLink();
    };

    handleLogoutLink = () => {
        log("INFO", "Header: handleLogoutLink");
        this.props.onLoggedoutLink();
    };

    render() {
        return (
            <>
                {/* HEADER */}
                <header className="flex flex-row z-0 items-center px-3 py-2 bg-sky-800">
                    <img
                        src="img/trellologo.png"
                        className="w-40 cursor-pointer"
                        onClick={this.handleHomeLink} />
                    <img
                        src="img/headermenupanelbotton.png"
                        className="w-14 cursor-pointer ml-auto invert"
                        onClick={this.handleToggleMenu}
                    />
                </header>
                {/* TOGGLE MENU */}
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
            </>
        );
    }
}