function MenuDropdown() {
    return (
        <div className="flex justify-end right-0 absolute">
            <div className="flex flex-col items-end content-end z-10 w-56 p-4 rounded-sm gap-2 bg-cyan-100 border-sky-700 border-b-2 border-l -mt-1">
                <p className="text-black pr-1">asdasd</p>
                <hr className="w-full border-b border-sky-700 mx-auto my-2" />
                <a href="" className="text-black pr-1 hover:font-semibold">
                    Settings
                </a>
                <a href="" className="text-black pr-1 hover:font-semibold">
                    Log out
                </a>
            </div>
        </div>
    );
}