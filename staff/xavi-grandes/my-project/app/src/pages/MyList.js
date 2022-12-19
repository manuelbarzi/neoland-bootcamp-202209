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
import updateStatus from "../logic/updateStatus";
import totalAmount from "../logic/totalAmount";
const { FormatError, AuthError, LengthError, NotFoundError } = errors;

export default function MyList() {
  log.info("MyList -> render");

  const [isCreateOpen, setCreateOpen] = useState(false);
  const { listId } = useParams();
  const { showAlert } = useContext(Context);
  const [listName, setListName] = useState();
  const [items, setItems] = useState();
  const [itemToEdit, setItemToEdit] = useState();

  useEffect(() => {
    try {
      retrieveList(sessionStorage.token, listId)
        .then((list) => {
          const { title } = list;
          setListName(title);

          return retrieveItems(sessionStorage.token, listId);
        })
        .then((items) => {
          setItems(items);

          totalAmount(items);
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

  const toggleCreateItemView = () => {
    setCreateOpen(!isCreateOpen);
  };

  const openEditItem = (item) => setItemToEdit(item);

  const closeEditItem = () => setItemToEdit();

  const handleCreatedItem = () => {
    try {
      retrieveItems(sessionStorage.token, listId).then((items) => {
        setItems(items);

        setCreateOpen(!isCreateOpen);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChangeStatus = (itemId, itemStatus) => {
    try {
      updateStatus(itemId, itemStatus);
    } catch (error) {
      alert(error.message);
    }

    retrieveItems(sessionStorage.token, listId).then((items) => {
      setItems(items);
    });
  };

  const handleItemUpdate = () => {
    try {
      retrieveItems(sessionStorage.token, listId).then((items) => {
        setItems(items);

        closeEditItem();
        totalAmount(items);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleItemDeleted = () => {
    try {
      retrieveItems(sessionStorage.token, listId).then((items) => {
        setItems(items);

        closeEditItem();
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header listName={listName} />
      <main className="mt-[3rem] flex flex-col gap-2 items-center">
        {items &&
          items.map((item) => (
            <article
              onClick={() => openEditItem(item)}
              key={listName}
              className="mt-1 bg-blue-300 h-12 w-[90%] rounded-lg flex items-center px-3 text-lg justify-between"
            >
              <div className="flex w-[55%] justify-between ">
                <span>{item.title}</span>
              </div>
                {item.quantity > 0 && <span className="w-[15%] text-center">{item.quantity}</span>}
                {item.amount > 0 && <span className="w-[20%] text-right pr-2">{item.amount}€</span>}
                <input
                  className="h-8 w-8 items-end"
                  type="checkbox"
                  defaultChecked={item.status}
                  onClick={(event) => event.stopPropagation()}
                  onChange={() => handleChangeStatus(item.id, item.status)}
                />
            </article>
          ))}
      </main>
      <hr className="fixed bottom-[6.5rem] border border-black w-full"></hr>
      <section className="w-full h-[2.4rem] fixed bottom-[4.1rem] flex justify-around items-center px-2 bg-white">
        <p>Precio total del carrito</p>
        <p id="total"></p>
      </section>
      <footer className="z-10 fixed bottom-0 h-[4rem] flex justify-center items-center w-full bg-gray-200">
        <button
          className=" bg-blue-400 h-[3rem] w-2/5 text-white text-xl p-2 flex justify-center items-center rounded-lg"
          onClick={toggleCreateItemView}
        >
          + Añadir
        </button>
      </footer>

      {isCreateOpen && (
        <CreateItem
          onClose={toggleCreateItemView}
          listId={listId}
          onItemCreated={handleCreatedItem}
        />
      )}
      {itemToEdit && (
        <EditItem
          listId={listId}
          item={itemToEdit}
          onDeleted={handleItemDeleted}
          onClose={closeEditItem}
          onUpdated={handleItemUpdate}
        />
      )}
    </>
  );
}
