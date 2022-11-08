function Settings () {

    const handleUpdateUserEmail = event => {
        event.preventDefault()

        const newEmail = event.target.email.value
    }

    return <section className="flex flex-col items-center">
    <div className="m-4 rounded-xl bg-white border border-black ">
          <h2 className="m-2 text-xl font-bold">Settings</h2>
          <form className="mr-2 ml-2 flex flex-col" onSubmit={this.handleUpdateUserEmail}>
              <label htmlFor="email">E-mail</label>
              <input className="pl-1 bg-gray-200 border-b-2 border-gray-100" name="email" type="email" id="email" placeholder="input an email" defaultValue={user.email} />
              <button className="bg-red-400 border border-black rounded-md w-32 m-2 self-center">Save</button>
          </form>
    </div>
      </section>}
}