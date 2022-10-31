function Settings(props) {
    log('INFO', 'Settings -> render')


    return  <section className="flex flex-col items-center">
    <h2>Settings</h2>
    <form className="flex flex-col" onSubmit={this.handleUpdateUserEmail}>
        <label htmlFor="email">E-mail</label>
        <input name="email" type="email" id="email" placeholder="input an email" defaultValue={user.email} />
        <button>Save</button>
    </form>
</section>
}
