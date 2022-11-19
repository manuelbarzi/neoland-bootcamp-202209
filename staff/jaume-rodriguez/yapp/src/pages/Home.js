import Header from '../components/Header'
import Tasks from '../components/Tasks'

function Home(props) {

    // HEADER LINKS BRIDGE
    const handleHomeLink = () => {
        props.onHomeLink();
    };

    // TOGGLE MENU LINKS BRIDGE
    const handleSettingsLink = () => {
        props.onSettingsAccountLink();
    };

    const handleLogoutLink = () => {
        window.userId = null;
        props.onLoggedoutLink();
    };

    return (
        <main className="min-h-screen bg-sky-500">
            <Header
                onHomeLink={handleHomeLink}
                onSettingsAccountLink={handleSettingsLink}
                onLoggedoutLink={handleLogoutLink}
            />
            <Tasks />
        </main>
    );
}

export default Home