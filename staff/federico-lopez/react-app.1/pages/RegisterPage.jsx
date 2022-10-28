function RegisterPage() {
  return (
    <main className="container">
      <form className="container">
        <label htmlFor="register-name" className="container__item--left">
          Name
        </label>
        <input
          type="name"
          id="register-name"
          placeholder="input your name"
          required=""
        />
        <label htmlFor="register-email" className="container__item--left">
          E-mail
        </label>
        <input
          type="email"
          id="register-email"
          placeholder="input your e-mail"
          required=""
        />
        <label htmlFor="register-password" className="container__item--left">
          Password
        </label>
        <input
          type="password"
          id="register-password"
          placeholder="input your password"
          pattern="[A-Za-z0-9S]{8,}"
          required=""
          title="Use min 8 characters for the password and no spaces"
        />
        <button className="container__item--right">Register</button>
      </form>
      <a href="">Login</a>
    </main>
  );
}
