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