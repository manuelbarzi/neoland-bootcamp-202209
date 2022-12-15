import { useParams } from "react-router-dom";
import log from "../utils/coolog";
import { useContext, useEffect, useState } from "react";
import Context from "../components/Context";
import Header from "../components/Header";
import CreateItem from "../components/CreateItem";
import EditItem from "../components/EditItem";
import { errors } from "com";
import retrieveList from "../logic/retrieveList";
import retrieveItems from "../logic/retrieveItems";
const { FormatError, AuthError, LengthError, NotFoundError } = errors;

export default function MyList() {
  log.info("MyList -> render");

  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const { listId } = useParams();
  const { showAlert } = useContext(Context);
  const [listName, setListName] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    try {
      retrieveList(sessionStorage.token, listId)
        .then((list) => {
          const { title } = list;
          setListName(title);

          return retrieveItems(sessionStorage.token, listId);
        })
        .then((items) => setItems(items))
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

  const toggleCreateItemView = () => {
    setCreateOpen(!isCreateOpen);
  };

  const toggleEditItemView = () => {
    setEditOpen(!isEditOpen);
  };

  const handleCreatedItem = () => {
    retrieveItems(listName).then((items) => {
      setItems(items);

      toggleCreateItemView();
    });
  };

  return (
    <>
      {isCreateOpen && (
        <CreateItem
          onClose={toggleCreateItemView}
          listId={listName}
          onItemCreated={handleCreatedItem}
        />
      )}
      {isEditOpen && <EditItem onClose={toggleEditItemView} />}

      {<Header listName={listName} />}
      <main className="mt-[3rem] flex flex-col gap-2 items-center">
        {items &&
          items.map((item) => (
            <article
              key={items}
              className="mt-1 bg-blue-300 h-12 w-3/5 rounded-lg flex items-center justify-between px-3 text-lg"
            >
              {item.title}
            </article>
          ))}
        <p onClick={toggleEditItemView}>Aquí irán los productos en lista </p>
      </main>
      <hr className="fixed bottom-[6.5rem] border border-black w-full"></hr>
      <section className="w-full h-[2.4rem] fixed bottom-[4.1rem] flex justify-around items-center px-2 bg-white">
        <p>Precio total del carrito</p>
        <p>Total</p>
      </section>
      <footer className="z-10 fixed bottom-0 h-[4rem] flex justify-center items-center w-full bg-gray-200">
        <button
          className=" bg-blue-400 h-[3rem] w-2/5 text-white text-xl p-2 flex justify-center items-center rounded-lg"
          onClick={toggleCreateItemView}
        >
          + Añadir
        </button>
      </footer>
    </>
  );
}
