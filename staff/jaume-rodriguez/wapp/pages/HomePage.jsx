function HomePage(props) {

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

    return (
        <main className="min-h-screen bg-sky-500">
            {/* HEADER */}
            <Header
                onHomeLink={handleHomeLink}
                onSettingsAccountLink={handleSettingsLink}
                onLoggedoutLink={handleLogoutLink}
            />
            <Tasks />
        </main>
    );
}