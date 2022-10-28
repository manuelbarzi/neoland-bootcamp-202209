function SettingsPage(props){

    return <div className="flex h-full justify-center items-center bg-rose-700">
    <form  className="w-1/5 shadow-xl bg-orange-300 flex flex-col gap-2 justify-center items-center p-8 border-solid border-black border-2 rounded-lg">
        <h2 className='text-2xl font-bold'>Settings</h2>
        <label htmlFor="email" className="self-start">Change E-mail</label>
        <div className="flex flex-rows">
        <input className="p-1 w-full self-start border-solid border-black border-2 rounded-lg bg-orange-200" type="email" placeholder="Input your E-mail" name="email" id="settings-email" />
        <button className="p-1 border-solid border-black border-2 rounded-lg bg-orange-200 material-symbols-outlined">
            change_circle</button>
            </div>
        <label htmlFor="password" className="self-start">Change Password</label>
        <div className="flex flex-rows">
        <input className="p-1 w-full self-start border-solid border-black border-2 rounded-lg bg-orange-200" type="password" placeholder="Input you password" name="password" id="settings-password" />
        <button className="p-1 border-solid border-black border-2 rounded-lg bg-orange-200 material-symbols-outlined">
            change_circle</button>
            </div>
    </form>
</div>
}