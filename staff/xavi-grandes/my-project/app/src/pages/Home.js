import log from "../utils/coolog";
import { useContext, useEffect, useState } from "react";
import Context from "../components/Context";
import retrieveUser from "../logic/retrieveUser";
// import retrievelist from '../logic/retrieveList'
import Header from "../components/Header";
import CreateListComponent from "../components/CreateListComponent";
import { errors } from "com";
import retrieveLists from "../logic/retrieveLists";
import { BsListStars } from "react-icons/bs";
const { FormatError, AuthError, LengthError, NotFoundError } = errors;

export default function Home() {
  log.info("Home -> render");

  const [user, setUser] = useState();
  const [lists, setLists] = useState()
  const [isCreateOpen, setCreateOpen] = useState(false);

  const { showAlert } = useContext(Context);

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .then(() => {
          retrieveLists(sessionStorage.token, (error, lists) => {
            if (error) {
                alert(error.message)

                return
            }

            setLists(lists)
          });
        })
        .catch((error) => {
          if (
            error instanceof TypeError ||
            error instanceof FormatError ||
            error instanceof LengthError
          )
            showAlert(error.message, "warn");
          else if (error instanceof AuthError || error instanceof NotFoundError)
            showAlert(error.message, "error");
          else showAlert(error.message, "fatal");
        });
    } catch (error) {
      if (
        error instanceof TypeError ||
        error instanceof FormatError ||
        error instanceof LengthError
      )
        showAlert(error.message, "warn");
      else showAlert(error.message, "fatal");
    }
  }, []);

  const toggleCreateListView = () => {
    setCreateOpen(!isCreateOpen);
  };

  const handleCreatedList = () => {
    retrieveLists(sessionStorage.token, (error, lists) => {
        if (error) {
            alert(error.message)

            return
        }

        setLists(lists)

        toggleCreateListView()
    })
  }

  return (
    <>
      {isCreateOpen && <CreateListComponent onListCreated={handleCreatedList} onClose={toggleCreateListView} />}
      {user && <Header userName={user.name} />}
      <main className="mt-[3rem]">
        {lists && lists.map(list => <div>{list.title}</div>)}
      </main>
      <footer className="z-10 absolute bottom-0 h-[4rem] flex justify-center items-center w-full bg-gray-200">
        <button
          className=" bg-blue-400 h-[3rem] w-2/5 text-white text-xl p-2 flex justify-center items-center rounded-lg"
          onClick={toggleCreateListView}
        >
          + Crear lista
        </button>
      </footer>
    </>
  );
}
