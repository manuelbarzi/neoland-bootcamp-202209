import { useContext, useState } from "react";
import authenticateUser from "../logic/authenticateUser";
import UserContext from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import appSessionManager from "../helpers/sessionManager";
import Toast from "../components/ui/toast";

function Login() {
  const { setUser } = useContext(UserContext);
  const [isToastActive, setIsToastActive] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const navigate = useNavigate();

  const startLogin = async (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    const authenticationData = { email, password };

    try {
      const tokenReponse = await authenticateUser(authenticationData);
      const tokenString = tokenReponse.token;
      const decodedToken = jwt_decode(tokenString);

      appSessionManager.saveSessionToLocalStorage(tokenString);

      setUser({
        _id: decodedToken.sub,
        email: decodedToken.email,
        name: decodedToken.name,
        token: tokenString,
      });

      console.log("INFO", `User ${decodedToken.name} successfully logged in`);

      // Navigate to home
      navigate("/ports");
    } catch (error) {
      setToastMessage(error.message);
      setIsToastActive(true);
    }
  };

  const closeToast = () => {
    setIsToastActive(false);
  };

  return (
    <main className="h-screen w-screen flex flex-row items-center justify-center">
      {isToastActive && <Toast message={toastMessage} onClose={closeToast} />}
      <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="block p-6 rounded-lg shadow-lg bg-bone max-w-sm">
          <form onSubmit={startLogin}>
            <div className="form-group mb-6">
              <label
                htmlFor="emailInput"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                id="emailInput"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="passwordInput"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="passwordInput"
                name="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full
                                    px-6
                                    py-2.5
                                    bg-midgreen
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out"
            >
              Sign in
            </button>
            <span className="mr-1">Need an account?</span>
            <Link to="/register" className="underline">
              Register
            </Link>
          </form>
        </div>
      </div>
      <div
        className="login-background-image w-7/12 h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/login/background.jpg)" }}
      ></div>
    </main>
  );
}

export default Login;
