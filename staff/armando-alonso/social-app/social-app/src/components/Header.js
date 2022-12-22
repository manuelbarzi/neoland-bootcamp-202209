import log from "../utils/coolog";
import { AiOutlineLogout } from "react-icons/ai";
import { IoInvertModeOutline } from "react-icons/io5";
import Context from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header({ userName }) {
  log.info("Header -> render");

  const { logout } = useContext(Context);

  const switchMode = () => document.querySelector("html");

  return (
    <header className="fixed w-full h-[2rem] top-0 flex justify-center items-center gap-2">
      <Link to={`/profile/${sessionStorage.userId}`}>{userName}</Link>

      <button onClick={logout}>
        <AiOutlineLogout />
      </button>

      <button onClick={switchMode}>
        <IoInvertModeOutline />
      </button>
    </header>
  );
}
