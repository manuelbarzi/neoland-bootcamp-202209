import Header from '../components/Header'
import PublicPosts from '../components/PublicPosts'

function Community(props) {

    // HEADER LINKS BRIDGE
    const handleHomeLink = () => {
        props.onHomeLink();
    };

    // TOGGLE MENU LINKS BRIDGE
    const handleCommunityLink = () => {
        props.onCommunityLink();
    };

    const handleSettingsLink = () => {
        props.onSettingsAccountLink();
    };

    const handleLogoutLink = () => {
        window.userId = null;
        props.onLoggedoutLink();
    };

    return (
        <main className="min-h-screen bg-slate-200">
            <Header
                onHomeLink={handleHomeLink}
                onCommunityLink={handleCommunityLink}
                onSettingsAccountLink={handleSettingsLink}
                onLoggedoutLink={handleLogoutLink}
            />
            <PublicPosts />
        </main>
    );
}

export default Community