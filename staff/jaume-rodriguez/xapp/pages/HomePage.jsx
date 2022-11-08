class HomePage extends React.Component {
    constructor() {
        log("INFO", "HomePage -> render");
        super();
    }

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

    // TASKS MANAGER


    render() {
        return (
            <main className="min-h-screen bg-sky-500">
                {/* HEADER */}
                <Header
                    onHomeLink={this.handleHomeLink}
                    onSettingsAccountLink={this.handleSettingsLink}
                    onLoggedoutLink={this.handleLogoutLink}
                />
                <Tasks />
            </main>
        );
    }
}
