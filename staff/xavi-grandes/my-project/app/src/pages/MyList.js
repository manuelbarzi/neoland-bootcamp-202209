import { useParams } from "react-router-dom";
import log from "../utils/coolog";
import { useContext, useEffect, useState } from "react";
import Context from "../components/Context";
import Header from "../components/Header";
import CreateProductComponent from "../components/CreateProductComponent";
import EditProducts from "../components/EditProducts";
import { errors } from "com";
import retrieveList from "../logic/retrieveList";
const { FormatError, AuthError, LengthError, NotFoundError } = errors;

export default function MyList() {
  log.info("MyList -> render");

  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const { targetListName } = useParams();
  const { showAlert } = useContext(Context);
  const [listId, setListId] = useState();

    useEffect(() => {
    try {
      retrieveList(sessionStorage.token, targetListName).then((list) => {
        const { _id } = list;

        setListId(_id);
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

  const toggleCreateProductView = () => {
    setCreateOpen(!isCreateOpen);
  };

  const toggleEditProductView = () => {
    setEditOpen(!isEditOpen);
  };

  return (
    <>
      {isCreateOpen && (
        <CreateProductComponent
          onClose={toggleCreateProductView}
          listId={listId}
          onProductCreated={toggleCreateProductView}
        />
      )}
      {isEditOpen && <EditProducts onClose={toggleEditProductView} />}

      {<Header listName={targetListName}/>}
      <main className="mt-[3rem] flex flex-col gap-2 items-center">
        <p onClick={toggleEditProductView}>Aquí irán los productos en lista </p>
      </main>
      <hr className="fixed bottom-[6.5rem] border border-black w-full"></hr>
      <section className="w-full h-[2.4rem] fixed bottom-[4.1rem] flex justify-around items-center px-2 bg-white">
        <p>Precio total del carrito</p>
        <p>Total</p>
      </section>
      <footer className="z-10 fixed bottom-0 h-[4rem] flex justify-center items-center w-full bg-gray-200">
        <button
          className=" bg-blue-400 h-[3rem] w-2/5 text-white text-xl p-2 flex justify-center items-center rounded-lg"
          onClick={toggleCreateProductView}
        >
          + Añadir
        </button>
      </footer>
    </>
  );
}
