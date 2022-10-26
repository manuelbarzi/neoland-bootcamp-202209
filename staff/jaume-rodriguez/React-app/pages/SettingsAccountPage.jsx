function SettingsAccountPage() {
    return (
        <main className="h-screen">
            <header className="flex z-0 items-center px-2 py-3 bg-gradient-to-br from-cyan-500 to-blue-500">
                <img src="img/trellologo.png" className="w-40 cursor-pointer" />
                <img src="img/headermenupanelbotton.png" className="w-14 cursor-pointer ml-auto invert" />
            </header><section className="flex z-1 w-full justify-center flex-wrap">
                <div className="flex flex-col justify-center content-center z-0 p-8 bg-sky-100 border-sky-700 border-b-2 border-solid w-full h-32">
                    <span className="self-center font-light text-4xl text-black mt-1">My Account</span>
                    <span className="self-center font-light text-lg text-black mt-1">asd@asd.com</span>
                </div>
                <div className="flex content-start flex-col w-92 gap-1 p-12">
                    <span className="mb-4 mt-2">Manage your Trello account</span>
                    <form className="flex w-full justify-center">
                        <label htmlFor="updateName"></label>
                        <input type="text" placeholder="Enter new name" id="updateName" title="Please enter at least 1 character" disabled="" className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2 w-64" value="asdasd" />
                        <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-2 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-pencil"></button>
                        <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-1 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-save"></button>
                    </form>
                    <form className="flex w-full justify-center">
                        <label htmlFor="updateEmail"></label>
                        <input type="text" placeholder="Enter new email" id="updateEmail" title="Please use @ and . on your email" disabled="" className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2 w-64" value="asd@asd.com" />
                        <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-2 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-pencil"></button>
                        <button className="self-start scale-125 p-2 bg-sky-700 rounded text-white mx-1 mt-1 cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 fa fa-save"></button>
                    </form><form className="flex w-full justify-center">
                        <label htmlFor="updatePassword"></label>
                        <input type="password" placeholder="Enter new password" id="updatePassword" title="Please enter at least 8 characters without spaces" disabled="" className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2 w-64" />
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